import os
import json
from fastapi import FastAPI, BackgroundTasks, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from psycopg2.extras import RealDictCursor

# Import PostgreSQL modules
from api.db import get_db_connection, release_connection, init_db, store_cache, get_cache
from api.download_weather import download_all_in_memory
from api.parser import parse_and_store_obs_and_rain, parse_forecast_7day

# Path configurations for local development
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND_DIR = os.path.join(BASE_DIR, "cwa-weather-live")

app = FastAPI(
    title="Taiwan CWA Weather Cloud-Synced API",
    description="Serverless API for CWA observations backed by PostgreSQL",
    version="2.0.0"
)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def startup_event():
    """Create database tables on startup if they do not exist."""
    try:
        init_db()
    except Exception as e:
        print(f"[Startup Warning] Failed to verify database setup: {e}")

# API Endpoints

@app.get("/api/stations")
def get_stations():
    """Retrieve all unique stations with their metadata."""
    conn = None
    try:
        conn = get_db_connection()
        cursor = conn.cursor(cursor_factory=RealDictCursor)
        cursor.execute("""
            SELECT DISTINCT station_id, station_name, latitude, longitude, altitude, county_name, town_name
            FROM weather
            WHERE latitude IS NOT NULL AND longitude IS NOT NULL
        """)
        stations = [dict(row) for row in cursor.fetchall()]
        return {"success": True, "count": len(stations), "data": stations}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database query failed: {str(e)}")
    finally:
        if conn:
            release_connection(conn)

@app.get("/api/current")
def get_current_weather():
    """Retrieve the latest observation for each station."""
    conn = None
    try:
        conn = get_db_connection()
        cursor = conn.cursor(cursor_factory=RealDictCursor)
        cursor.execute("""
            SELECT w1.* 
            FROM weather w1
            JOIN (
                SELECT station_id, MAX(time) as max_time 
                FROM weather 
                GROUP BY station_id
            ) w2 ON w1.station_id = w2.station_id AND w1.time = w2.max_time
        """)
        observations = [dict(row) for row in cursor.fetchall()]
        return {"success": True, "count": len(observations), "data": observations}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database query failed: {str(e)}")
    finally:
        if conn:
            release_connection(conn)

@app.get("/api/history/{station_id}")
def get_station_history(station_id: str):
    """Retrieve historical observations for a specific station sorted by time."""
    conn = None
    try:
        conn = get_db_connection()
        cursor = conn.cursor(cursor_factory=RealDictCursor)
        cursor.execute("""
            SELECT time, temperature, humidity, pressure, wind_speed, wind_direction, rainfall, rain_1h, rain_3h, rain_24h, rain_daily
            FROM weather
            WHERE station_id = %s
            ORDER BY time ASC
        """, (station_id,))
        history = [dict(row) for row in cursor.fetchall()]
        if not history:
            raise HTTPException(status_code=404, detail=f"No data found for station {station_id}")
        return {"success": True, "station_id": station_id, "count": len(history), "data": history}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database query failed: {str(e)}")
    finally:
        if conn:
            release_connection(conn)

@app.get("/api/predict/{station_id}")
def predict_weather(station_id: str):
    """Provide a naive trend-based AI prediction (moving average of last 3 hours)."""
    conn = None
    try:
        conn = get_db_connection()
        cursor = conn.cursor(cursor_factory=RealDictCursor)
        cursor.execute("""
            SELECT temperature, humidity, wind_speed, rainfall
            FROM weather
            WHERE station_id = %s
            ORDER BY time DESC
            LIMIT 3
        """, (station_id,))
        rows = [dict(row) for row in cursor.fetchall()]
        if not rows:
            raise HTTPException(status_code=404, detail=f"No data for station {station_id} to base prediction on.")
        
        temps = [r["temperature"] for r in rows if r["temperature"] is not None]
        hums = [r["humidity"] for r in rows if r["humidity"] is not None]
        winds = [r["wind_speed"] for r in rows if r["wind_speed"] is not None]
        rains = [r["rainfall"] for r in rows if r["rainfall"] is not None]
        
        predicted_temp = round(sum(temps) / len(temps), 1) if temps else 25.0
        predicted_hum = round(sum(hums) / len(hums)) if hums else 70
        predicted_wind = round(sum(winds) / len(winds), 1) if winds else 2.0
        predicted_rain = round(sum(rains) / len(rains), 1) if rains else 0.0
        
        return {
            "success": True,
            "station_id": station_id,
            "prediction": {
                "temperature": predicted_temp,
                "humidity": predicted_hum,
                "wind_speed": predicted_wind,
                "rainfall": predicted_rain,
                "model_used": "Naive Trend-Based Moving Average (3h)"
            }
        }
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database query failed: {str(e)}")
    finally:
        if conn:
            release_connection(conn)

@app.get("/api/forecast/{county_name}")
def get_county_forecast(county_name: str):
    """Serve 7-day weather forecast for a specific county from PostgreSQL cache."""
    forecasts = get_cache("forecast")
    if not forecasts:
        raise HTTPException(status_code=404, detail="Parsed forecast data not found. Please trigger updates first.")
    try:
        county_name_clean = county_name.replace("臺", "台").strip()
        matched_key = None
        for key in forecasts.keys():
            if county_name_clean in key or key in county_name_clean:
                matched_key = key
                break
                
        if not matched_key:
            raise HTTPException(status_code=404, detail=f"No forecast found for county {county_name}")
            
        return {"success": True, "county": matched_key, "forecast": forecasts[matched_key]}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Query failed: {str(e)}")

@app.get("/api/typhoon")
def get_typhoon_info():
    """Retrieve scraped CWA typhoon news and path image from cache."""
    typhoon_data = get_cache("typhoon")
    if not typhoon_data:
        return {"success": True, "has_typhoon": False, "title": "目前太平洋地區無颱風活動", "image_url": None}
    return {"success": True, **typhoon_data}

def run_update_pipeline():
    """Download, parse and upsert CWA datasets directly to PostgreSQL in background."""
    print("[Background Update] Commencing real-time fetch from CWA API...")
    data = download_all_in_memory()
    if data:
        print("[Background Update] Parse Commencing: Merging observations...")
        obs_parsed = parse_and_store_obs_and_rain(data["obs"], data["rain"])
        forecast_parsed = parse_forecast_7day(data["forecast"])
        if data["typhoon"]:
            store_cache("typhoon", data["typhoon"])
        print(f"[Background Update] Complete. Observations upserted: {obs_parsed}, Forecast cached: {forecast_parsed}")
    else:
        print("[Background Update Error] Dataset fetch returned None.")

@app.post("/api/update")
def trigger_update(background_tasks: BackgroundTasks):
    """Trigger background task to download and parse all weather datasets."""
    background_tasks.add_task(run_update_pipeline)
    return {"success": True, "message": "CWA live update task started in background."}

# Mount frontend directory for local uvicorn execution
if os.path.exists(FRONTEND_DIR):
    app.mount("/cwa-weather-live", StaticFiles(directory=FRONTEND_DIR), name="cwa-weather-live")

@app.get("/")
def get_dashboard():
    """Serve local landing page for FastAPI tests."""
    html_path = os.path.join(FRONTEND_DIR, "index.html")
    if not os.path.exists(html_path):
        return {"message": "FastAPI Serverless endpoints are ready. Run inside Vercel to access the portfolio."}
    return FileResponse(html_path)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("api.index:app", host="127.0.0.1", port=8000, reload=True)
