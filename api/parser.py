import os
import json
import pandas as pd
from api.db import insert_weather_rows, store_cache

def clean_val(val, val_type=float):
    """Safely convert value to float/int and filter CWA missing codes (-99, etc.)."""
    if val is None:
        return None
    val_str = str(val).strip()
    if val_str in ("-99", "-99.0", "-9900", "-9999", "-9900.0", "-9999.0", "-99.00", "None", "", " "):
        return None
    try:
        return val_type(val_str)
    except (ValueError, TypeError):
        return None

def parse_and_store_obs_and_rain(obs_data, rain_data):
    """Parse raw observation and rainfall JSON files, merge and store to PostgreSQL."""
    if not obs_data:
        print("[Parser Error] No observation data provided.")
        return False

    cwaopendata = obs_data.get("cwaopendata", {})
    dataset = cwaopendata.get("dataset", {})
    obs_station_list = dataset.get("Station", [])
    
    station_map = {} # station_id -> row_dict
    print(f"[Parser] Parsing {len(obs_station_list)} weather stations...")
    
    for station in obs_station_list:
        station_id = station.get("StationId")
        station_name = station.get("StationName")
        
        obs_time_dict = station.get("ObsTime", {})
        time = obs_time_dict.get("DateTime")
        if not time or not station_id:
            continue
            
        geo_info = station.get("GeoInfo", {})
        county_name = geo_info.get("CountyName")
        town_name = geo_info.get("TownName")
        altitude = clean_val(geo_info.get("StationAltitude"))
        
        coords = geo_info.get("Coordinates", [])
        latitude, longitude = None, None
        for c in coords:
            if c.get("CoordinateName") == "WGS84":
                latitude = clean_val(c.get("StationLatitude"))
                longitude = clean_val(c.get("StationLongitude"))
                break
                
        elem = station.get("WeatherElement", {})
        temperature = clean_val(elem.get("AirTemperature"))
        humidity = clean_val(elem.get("RelativeHumidity"), val_type=int)
        pressure = clean_val(elem.get("AirPressure"))
        wind_speed = clean_val(elem.get("WindSpeed"))
        wind_direction = clean_val(elem.get("WindDirection"))
        
        # O-A0001-001 rainfall
        now_info = elem.get("Now", {})
        rainfall = clean_val(now_info.get("Precipitation"))
        
        row = {
            "station_id": station_id,
            "station_name": station_name,
            "time": time,
            "temperature": temperature,
            "humidity": humidity,
            "pressure": pressure,
            "wind_speed": wind_speed,
            "wind_direction": wind_direction,
            "rainfall": rainfall,
            "rain_1h": None,
            "rain_3h": None,
            "rain_24h": None,
            "rain_daily": rainfall, # Default daily rain from obs
            "latitude": latitude,
            "longitude": longitude,
            "county_name": county_name,
            "town_name": town_name,
            "altitude": altitude
        }
        station_map[station_id] = row

    # Merge O-A0002-001 rainfall stations
    if rain_data:
        try:
            cwaopendata_rain = rain_data.get("cwaopendata", {})
            dataset_rain = cwaopendata_rain.get("dataset", {})
            rain_station_list = dataset_rain.get("Station", [])
            print(f"[Parser] Merging {len(rain_station_list)} rainfall stations...")
            
            for station in rain_station_list:
                station_id = station.get("StationId")
                station_name = station.get("StationName")
                
                obs_time_dict = station.get("ObsTime", {})
                time = obs_time_dict.get("DateTime")
                if not time or not station_id:
                    continue
                    
                geo_info = station.get("GeoInfo", {})
                county_name = geo_info.get("CountyName")
                town_name = geo_info.get("TownName")
                altitude = clean_val(geo_info.get("StationAltitude"))
                
                coords = geo_info.get("Coordinates", [])
                latitude, longitude = None, None
                for c in coords:
                    if c.get("CoordinateName") == "WGS84":
                        latitude = clean_val(c.get("StationLatitude"))
                        longitude = clean_val(c.get("StationLongitude"))
                        break
                        
                elem = station.get("WeatherElement", {})
                now_info = elem.get("Now", {})
                
                # Precipitation indicators
                rain_1h = clean_val(elem.get("Precipitation1Hr"))
                rain_3h = clean_val(elem.get("Precipitation3Hr"))
                rain_24h = clean_val(elem.get("Precipitation24Hr"))
                rain_daily = clean_val(now_info.get("Precipitation"))
                
                if station_id in station_map:
                    # Update rainfall fields for existing station
                    station_map[station_id]["rain_1h"] = rain_1h
                    station_map[station_id]["rain_3h"] = rain_3h
                    station_map[station_id]["rain_24h"] = rain_24h
                    if rain_daily is not None:
                        station_map[station_id]["rain_daily"] = rain_daily
                        station_map[station_id]["rainfall"] = rain_daily
                else:
                    # Create a new rainfall station entry (no temperature/humidity/pressure/wind)
                    station_map[station_id] = {
                        "station_id": station_id,
                        "station_name": station_name,
                        "time": time,
                        "temperature": None,
                        "humidity": None,
                        "pressure": None,
                        "wind_speed": None,
                        "wind_direction": None,
                        "rainfall": rain_daily,
                        "rain_1h": rain_1h,
                        "rain_3h": rain_3h,
                        "rain_24h": rain_24h,
                        "rain_daily": rain_daily,
                        "latitude": latitude,
                        "longitude": longitude,
                        "county_name": county_name,
                        "town_name": town_name,
                        "altitude": altitude
                    }
        except Exception as e:
            print(f"[Parser Warning] Error while merging rainfall data: {e}")
    else:
        print("[Parser Warning] No rainfall data provided, skipping merge.")

    parsed_rows = list(station_map.values())
    if not parsed_rows:
        print("[Parser Warning] No station records parsed.")
        return False

    new_df = pd.DataFrame(parsed_rows)

    # Database execution preparation: Align schema order exactly with psycopg2 queries
    columns_order = [
        "station_id", "station_name", "time", "temperature", "humidity", "pressure",
        "wind_speed", "wind_direction", "rainfall", "rain_1h", "rain_3h", "rain_24h", "rain_daily",
        "latitude", "longitude", "county_name", "town_name", "altitude"
    ]
    
    for col in columns_order:
        if col not in new_df.columns:
            new_df[col] = None
            
    # Rearrange and replace NaN with None for raw SQL compatibility
    new_df = new_df[columns_order]
    new_df = new_df.where(pd.notnull(new_df), None)
    
    rows = [tuple(r) for r in new_df.values.tolist()]
    
    # Store to PostgreSQL
    print("[Parser] Writing records to PostgreSQL database...")
    success = insert_weather_rows(rows)
    return success

def parse_forecast_7day(forecast_json):
    """Parse raw forecast JSON and cache results inside PostgreSQL."""
    if not forecast_json:
        print("[Parser Warning] No forecast data provided.")
        return False

    print("[Parser] Parsing 7-day forecast data (F-D0047-091)...")
    try:
        cwaopendata = forecast_json.get("cwaopendata", {})
        dataset = cwaopendata.get("Dataset") or cwaopendata.get("dataset", {})
        
        locations_obj = dataset.get("Locations") or dataset.get("locations", {})
        location_list = locations_obj.get("Location") or locations_obj.get("location", [])
        
        if not location_list:
            location_list = dataset.get("Location") or dataset.get("location", [])
            
        parsed_forecast = {}
        
        for location in location_list:
            county_name = location.get("LocationName") or location.get("locationName")
            if not county_name:
                continue
            
            county_name_std = county_name.replace("臺", "台")
            elements = location.get("WeatherElement") or location.get("weatherElement", [])
            
            wx_list = []
            min_t_list = []
            max_t_list = []
            pop_list = []
            
            for elem in elements:
                elem_name = elem.get("ElementName") or elem.get("elementName")
                time_list = elem.get("Time") or elem.get("time", [])
                
                if elem_name in ("天氣現象", "Wx"):
                    for t in time_list:
                        start_time = t.get("StartTime") or t.get("startTime", "")
                        end_time = t.get("EndTime") or t.get("endTime", "")
                        val_dict = t.get("ElementValue") or t.get("parameter") or {}
                        wx_desc = val_dict.get("Weather") or val_dict.get("parameterName", "")
                        wx_code = val_dict.get("WeatherCode") or val_dict.get("parameterValue", "")
                        wx_list.append({"start": start_time, "end": end_time, "desc": wx_desc, "code": wx_code})
                elif elem_name in ("最低溫度", "MinT"):
                    for t in time_list:
                        start_time = t.get("StartTime") or t.get("startTime", "")
                        end_time = t.get("EndTime") or t.get("endTime", "")
                        val_dict = t.get("ElementValue") or t.get("parameter") or {}
                        val_str = val_dict.get("MinTemperature") or val_dict.get("parameterName")
                        val = clean_val(val_str, val_type=int)
                        min_t_list.append({"start": start_time, "end": end_time, "val": val})
                elif elem_name in ("最高溫度", "MaxT"):
                    for t in time_list:
                        start_time = t.get("StartTime") or t.get("startTime", "")
                        end_time = t.get("EndTime") or t.get("endTime", "")
                        val_dict = t.get("ElementValue") or t.get("parameter") or {}
                        val_str = val_dict.get("MaxTemperature") or val_dict.get("parameterName")
                        val = clean_val(val_str, val_type=int)
                        max_t_list.append({"start": start_time, "end": end_time, "val": val})
                elif elem_name in ("12小時降雨機率", "PoP12h"):
                    for t in time_list:
                        start_time = t.get("StartTime") or t.get("startTime", "")
                        end_time = t.get("EndTime") or t.get("endTime", "")
                        val_dict = t.get("ElementValue") or t.get("parameter") or {}
                        val_str = val_dict.get("ProbabilityOfPrecipitation") or val_dict.get("parameterName")
                        val = clean_val(val_str, val_type=int)
                        pop_list.append({"start": start_time, "end": end_time, "val": val})
            merged_intervals = []
            for i, wx_item in enumerate(wx_list):
                start = wx_item["start"]
                end = wx_item["end"]
                
                min_t = next((item["val"] for item in min_t_list if item["start"] == start), None)
                max_t = next((item["val"] for item in max_t_list if item["start"] == start), None)
                pop = next((item["val"] for item in pop_list if item["start"] == start), 0)
                
                short_start = start.replace("T", " ").split("+")[0][:16]
                weather_type = map_weather_code_to_type(wx_item["code"])
 
                interval = {
                    "time": short_start,
                    "wx_desc": wx_item["desc"],
                    "weather_type": weather_type,
                    "min_t": min_t,
                    "max_t": max_t,
                    "pop": pop
                }
                merged_intervals.append(interval)
                 
            parsed_forecast[county_name_std] = merged_intervals

        # Cache forecast dictionary to PostgreSQL database
        store_cache("forecast", parsed_forecast)
        print("[Parser] Forecast records successfully cached to PostgreSQL.")
        return True
    except Exception as e:
        print(f"[Parser Error] Failed to parse and cache 7-day forecasts: {e}")
        return False

def map_weather_code_to_type(code_str):
    """Map CWA weather code to a simple weather type string for font-awesome icons."""
    code = clean_val(code_str, val_type=int)
    if code is None:
        return "cloudy"
        
    if code == 1:
        return "sunny"
    elif code in (2, 3):
        return "sunny-cloudy"
    elif code in (4, 5, 6, 7):
        return "cloudy"
    elif code >= 8 and code <= 22:
        return "rainy"
    elif code in (23, 24, 30):
        return "thunderstorm"
    else:
        return "cloudy"
