import os
import json
import psycopg2
from psycopg2.pool import SimpleConnectionPool

# Load environment variable for database connection
DB_URL = os.environ.get("DATABASE_URL")
pool = None

def init_pool():
    global pool
    if pool is None and DB_URL:
        try:
            # PostgreSQL connection pool configuration
            pool = SimpleConnectionPool(1, 10, DB_URL)
            print("[Database] Connection pool initialized successfully.")
        except Exception as e:
            print(f"[Database Pool Error] Failed to initialize connection pool: {e}")

def get_db_connection():
    """Acquire connection from the pool, or fallback to a direct connection."""
    init_pool()
    if pool:
        try:
            return pool.getconn()
        except Exception:
            pass
    if DB_URL:
        return psycopg2.connect(DB_URL)
    raise Exception("DATABASE_URL environment variable is not defined.")

def release_connection(conn):
    """Release a connection back to the pool, or close it if pool is not used."""
    if pool and conn:
        try:
            pool.putconn(conn)
        except Exception:
            try:
                conn.close()
            except Exception:
                pass
    elif conn:
        try:
            conn.close()
        except Exception:
            pass

def init_db():
    """Initialize database tables for PostgreSQL if they do not exist."""
    conn = get_db_connection()
    cursor = conn.cursor()
    try:
        # 1. Main weather table
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS weather (
                id SERIAL PRIMARY KEY,
                station_id TEXT,
                station_name TEXT,
                time TEXT,
                temperature REAL,
                humidity INTEGER,
                pressure REAL,
                wind_speed REAL,
                wind_direction REAL,
                rainfall REAL,
                rain_1h REAL,
                rain_3h REAL,
                rain_24h REAL,
                rain_daily REAL,
                latitude REAL,
                longitude REAL,
                county_name TEXT,
                town_name TEXT,
                altitude REAL,
                UNIQUE(station_id, time)
            );
        """)
        
        # 2. Key-value table for caching (forecasts, typhoon alerts)
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS weather_cache (
                key TEXT PRIMARY KEY,
                value TEXT
            );
        """)
        
        conn.commit()
        print("[Database] Schema check and table initialization completed.")
    except Exception as e:
        conn.rollback()
        print(f"[Database Error] Failed to initialize tables: {e}")
    finally:
        release_connection(conn)

def store_cache(key, data):
    """Serialize data dictionary and cache it inside weather_cache table."""
    conn = get_db_connection()
    cursor = conn.cursor()
    try:
        val_str = json.dumps(data, ensure_ascii=False)
        cursor.execute("""
            INSERT INTO weather_cache (key, value)
            VALUES (%s, %s)
            ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;
        """, (key, val_str))
        conn.commit()
    except Exception as e:
        conn.rollback()
        print(f"[Database Cache Error] Failed to write cache for '{key}': {e}")
    finally:
        release_connection(conn)

def get_cache(key):
    """Retrieve and parse json data cached in weather_cache table."""
    conn = get_db_connection()
    cursor = conn.cursor()
    try:
        cursor.execute("SELECT value FROM weather_cache WHERE key = %s;", (key,))
        row = cursor.fetchone()
        if row:
            return json.loads(row[0])
        return None
    except Exception as e:
        print(f"[Database Cache Error] Failed to read cache for '{key}': {e}")
        return None
    finally:
        release_connection(conn)

def insert_weather_rows(rows):
    """Bulk insert observation records with ON CONFLICT resolution to update values."""
    if not rows:
        return True
    conn = get_db_connection()
    cursor = conn.cursor()
    query = """
        INSERT INTO weather (
            station_id, station_name, time, temperature, humidity, pressure,
            wind_speed, wind_direction, rainfall, rain_1h, rain_3h, rain_24h, rain_daily,
            latitude, longitude, county_name, town_name, altitude
        ) VALUES (
            %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s
        )
        ON CONFLICT (station_id, time) DO UPDATE SET
            station_name = EXCLUDED.station_name,
            temperature = COALESCE(EXCLUDED.temperature, weather.temperature),
            humidity = COALESCE(EXCLUDED.humidity, weather.humidity),
            pressure = COALESCE(EXCLUDED.pressure, weather.pressure),
            wind_speed = COALESCE(EXCLUDED.wind_speed, weather.wind_speed),
            wind_direction = COALESCE(EXCLUDED.wind_direction, weather.wind_direction),
            rainfall = COALESCE(EXCLUDED.rainfall, weather.rainfall),
            rain_1h = COALESCE(EXCLUDED.rain_1h, weather.rain_1h),
            rain_3h = COALESCE(EXCLUDED.rain_3h, weather.rain_3h),
            rain_24h = COALESCE(EXCLUDED.rain_24h, weather.rain_24h),
            rain_daily = COALESCE(EXCLUDED.rain_daily, weather.rain_daily),
            latitude = COALESCE(EXCLUDED.latitude, weather.latitude),
            longitude = COALESCE(EXCLUDED.longitude, weather.longitude),
            county_name = COALESCE(EXCLUDED.county_name, weather.county_name),
            town_name = COALESCE(EXCLUDED.town_name, weather.town_name),
            altitude = COALESCE(EXCLUDED.altitude, weather.altitude);
    """
    try:
        cursor.executemany(query, rows)
        conn.commit()
        print(f"[Database] Upserted {len(rows)} weather records successfully.")
        return True
    except Exception as e:
        conn.rollback()
        print(f"[Database Error] Bulk upsert failed: {e}")
        return False
    finally:
        release_connection(conn)
