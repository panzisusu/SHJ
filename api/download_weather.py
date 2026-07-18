import os
import json
import requests
import urllib3

# Disable SSL verification warnings for government API compatibility
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

def load_api_key():
    """Load CWA API key from environment variable."""
    return os.environ.get("CWA_API_KEY")

def fetch_cwa_api(dataset_id, api_key):
    """Fetch JSON data from CWA Open Data API in memory."""
    url = f"https://opendata.cwa.gov.tw/fileapi/v1/opendataapi/{dataset_id}"
    params = {
        "Authorization": api_key,
        "downloadType": "WEB",
        "format": "JSON"
    }
    
    print(f"[API] Fetching dataset {dataset_id} from CWA...")
    try:
        r = requests.get(url, params=params, timeout=20, verify=False)
        if r.status_code == 200:
            return r.json()
        else:
            print(f"[API Error] {dataset_id} failed with HTTP status code: {r.status_code}")
            return None
    except Exception as e:
        print(f"[API Error] Exception occurred while fetching {dataset_id}: {e}")
        return None

def scrape_typhoon_news():
    """Scrape typhoon news from CWA website and return data in-memory."""
    url = "https://www.cwa.gov.tw/V8/C/P/Typhoon/TY_NEWS.html"
    print("[Scraper] Scriping typhoon news from CWA...")
    try:
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        }
        r = requests.get(url, headers=headers, timeout=15, verify=False)
        if r.status_code == 200:
            from bs4 import BeautifulSoup
            soup = BeautifulSoup(r.text, 'html.parser')
            
            # Find path image
            img_tags = soup.find_all("img")
            img_url = None
            for img in img_tags:
                src = img.get("src", "")
                if "typhoon" in src.lower() or "forecast" in src.lower() or "warning" in src.lower():
                    if src.startswith("http"):
                        img_url = src
                    else:
                        img_url = "https://www.cwa.gov.tw" + src
                    break
            
            # Parse news titles
            news_title = "目前太平洋地區無颱風活動"
            news_link = url
            real_news_found = False
            
            table = soup.find("table")
            if table:
                rows = table.find_all("tr")
                for row in rows:
                    cols = row.find_all(["td", "th"])
                    if len(cols) >= 2:
                        text = cols[0].get_text(strip=True)
                        if "颱風" in text or "警報" in text:
                            link_tag = row.find("a")
                            if link_tag:
                                href = link_tag.get("href", "")
                                if any(x in href.lower() for x in ["pdf", "encyclopedia", "obsmap", "gis", "know"]):
                                    continue
                                news_link = href if href.startswith("http") else "https://www.cwa.gov.tw" + href
                            news_title = text
                            real_news_found = True
                            break
            
            if not real_news_found:
                for a in soup.find_all("a"):
                    text = a.get_text(strip=True)
                    href = a.get("href", "")
                    if "颱風" in text and len(text) > 4 and len(text) < 100:
                        if any(x in href.lower() for x in ["pdf", "encyclopedia", "obsmap", "gis", "know"]):
                            continue
                        news_title = text
                        news_link = href if href.startswith("http") else "https://www.cwa.gov.tw" + href
                        real_news_found = True
                        break
            
            typhoon_data = {
                "has_typhoon": real_news_found and "目前太平洋地區無颱風活動" not in news_title,
                "title": news_title,
                "link": news_link,
                "image_url": img_url if img_url else "https://www.cwa.gov.tw/Data/typhoon/TY_NEWS.png"
            }
            return typhoon_data
        else:
            print(f"[Scraper Error] Fetching typhoon page failed with HTTP: {r.status_code}")
            return None
    except Exception as e:
        print(f"[Scraper Error] Exception during typhoon scrape: {e}")
        return None

def download_all_in_memory():
    """Fetch all observations, rainfall, forecasts and typhoon info directly into memory."""
    api_key = load_api_key()
    if not api_key:
        print("[Error] CWA_API_KEY environment variable is not defined.")
        return None
        
    obs_json = fetch_cwa_api("O-A0001-001", api_key)
    rain_json = fetch_cwa_api("O-A0002-001", api_key)
    forecast_json = fetch_cwa_api("F-D0047-091", api_key)
    typhoon_data = scrape_typhoon_news()
    
    if obs_json and rain_json and forecast_json:
        return {
            "obs": obs_json,
            "rain": rain_json,
            "forecast": forecast_json,
            "typhoon": typhoon_data
        }
    return None
