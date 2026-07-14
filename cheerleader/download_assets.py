import os
import urllib.request

assets = [
    "dahye.png",
    "mizuki.png",
    "qunqun.png",
    "an.png",
    "cimei.png",
    "se7en.png",
    "faye.png",
    "like.png",
    "chihiro.png"
]

base_url = "https://gogogo137-cmyk.github.io/cheerleader/assets/"
dest_dir = "assets"

os.makedirs(dest_dir, exist_ok=True)

print("Starting asset download...")
for asset in assets:
    url = base_url + asset
    dest_path = os.path.join(dest_dir, asset)
    print(f"Downloading {url} to {dest_path}...")
    try:
        urllib.request.urlretrieve(url, dest_path)
        print(f"Successfully downloaded {asset}")
    except Exception as e:
        print(f"Failed to download {asset}: {e}")

print("Asset download process completed.")
