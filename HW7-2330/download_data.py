import os
import sys
import subprocess
import pandas as pd

# Auto-install yfinance if missing
try:
    import yfinance as yf
except ImportError:
    print("yfinance not found. Installing yfinance automatically...")
    try:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "yfinance"])
        import yfinance as yf
        print("yfinance installed successfully!")
    except Exception as e:
        print(f"Error installing yfinance: {e}")
        print("Please install yfinance manually: pip install yfinance")
        sys.exit(1)

def download_tsmc_data():
    ticker = "2330.TW"
    dest_path = os.path.join(os.path.dirname(__file__), "TSMC_2330.csv")
    
    if os.path.exists(dest_path):
        print(f"Dataset already exists at {dest_path}. Skipping download.")
        return
        
    print(f"Downloading historical stock data for {ticker} from Yahoo Finance...")
    try:
        # Download 5 years of historical daily data
        data = yf.download(ticker, period="5y")
        if data.empty:
            raise ValueError("Downloaded data is empty. Ticker might be incorrect or Yahoo Finance is offline.")
            
        # Standardize columns (Flatten multi-index if returned by newer yfinance versions)
        if isinstance(data.columns, pd.MultiIndex):
            data.columns = data.columns.get_level_values(0)
            
        data = data.reset_index()
        # Save to CSV
        data.to_csv(dest_path, index=False)
        print(f"Successfully saved to {dest_path}")
        print(f"Dataset shape: {data.shape}")
    except Exception as e:
        print(f"Error downloading stock data: {e}")
        # Secondary fallback: check if we need to import pandas inside the download function
        # (yf.download returns a pandas DataFrame, so pandas must be installed)

if __name__ == "__main__":
    download_tsmc_data()
