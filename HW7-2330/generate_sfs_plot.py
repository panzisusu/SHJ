import os
import sys
import subprocess
import warnings
warnings.filterwarnings("ignore")

# Auto-install statsmodels if missing
try:
    import statsmodels
except ImportError:
    print("statsmodels not found. Installing statsmodels automatically...")
    try:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "statsmodels"])
        import statsmodels
        print("statsmodels installed successfully!")
    except Exception as e:
        print(f"Error installing statsmodels: {e}")
        sys.exit(1)

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

from statsmodels.tsa.ar_model import AutoReg
from sklearn.metrics import r2_score

def generate_stepwise_plots():
    # 1. Load data
    csv_path = os.path.join(os.path.dirname(__file__), "TSMC_2330.csv")
    if not os.path.exists(csv_path):
        raise FileNotFoundError(f"Dataset not found at {csv_path}. Please run download_data.py first.")
        
    df = pd.read_csv(csv_path)
    df['Date'] = pd.to_datetime(df['Date'])
    df = df.sort_values(by='Date').reset_index(drop=True)
    
    series = df['Close'].astype(float)
    
    # Chronological Split
    train_size = int(len(series) * 0.8)
    train_data = series.iloc[:train_size]
    test_data = series.iloc[train_size:]
    
    # 2. Evaluate lag orders p = 1 to 15
    lags_range = np.arange(1, 16)
    aic_vals = []
    bic_vals = []
    r2_vals = []
    
    print("Evaluating lag orders for AR model...")
    for p in lags_range:
        # Fit on train data to get AIC/BIC
        model_train = AutoReg(train_data, lags=p)
        fit_train = model_train.fit()
        aic_vals.append(fit_train.aic)
        bic_vals.append(fit_train.bic)
        
        # Fast rolling one-step-ahead forecast on test data to get R2
        ar_predictions = []
        history_ar = list(train_data)
        
        for t in range(len(test_data)):
            model_ar = AutoReg(history_ar, lags=p)
            model_ar_fit = model_ar.fit()
            pred = model_ar_fit.predict(start=len(history_ar), end=len(history_ar))[0]
            ar_predictions.append(pred)
            history_ar.append(test_data.iloc[t])
            
        r2 = r2_score(test_data, ar_predictions)
        r2_vals.append(r2)
        print(f"Lag p={p} complete: AIC={fit_train.aic:.4f}, Test R2={r2:.6f}")
        
    # Find Sweet Spot: lag order that minimizes BIC (BIC penalizes parameters heavier than AIC)
    sweet_spot = lags_range[np.argmin(bic_vals)]
    print(f"Optimal Lag Order (Sweet Spot) determined by BIC: p={sweet_spot}")
    
    # 3. Plot AIC/BIC and R2
    fig, (ax_ic, ax_r2) = plt.subplots(1, 2, figsize=(16, 7), facecolor='white')
    
    # Plot AIC and BIC (Left Plot)
    ax_ic.plot(lags_range, aic_vals, label="AIC (Akaike Info Criterion)", color='#3B82F6', marker='o', linewidth=2)
    ax_ic.plot(lags_range, bic_vals, label="BIC (Bayesian Info Criterion)", color='#EF4444', marker='s', linewidth=2)
    ax_ic.axvline(sweet_spot, color='#B91C1C', linestyle=':', linewidth=2)
    ax_ic.text(sweet_spot + 0.2, min(bic_vals) + (max(bic_vals) - min(bic_vals)) * 0.1, f"Sweet Spot (p={sweet_spot})", color='#B91C1C', fontweight='bold')
    ax_ic.set_title("Information Criteria (AIC/BIC) by AR Lag Order", fontsize=13, fontweight='bold')
    ax_ic.set_xlabel("AR Model Lag Order (p)", fontsize=11)
    ax_ic.set_ylabel("Value (Lower is Better)", fontsize=11)
    ax_ic.set_xticks(lags_range)
    ax_ic.grid(True, linestyle=':', alpha=0.5)
    ax_ic.legend()
    
    # Plot R2 (Right Plot)
    ax_r2.plot(lags_range, r2_vals, label="Test R-squared", color='#D4AF37', marker='D', linewidth=2.5, markersize=8)
    ax_r2.axvline(sweet_spot, color='#B91C1C', linestyle=':', linewidth=2)
    ax_r2.text(sweet_spot + 0.2, min(r2_vals) + (max(r2_vals) - min(r2_vals)) * 0.1, f"Sweet Spot (p={sweet_spot})", color='#B91C1C', fontweight='bold')
    ax_r2.set_title("Test R-squared Score by AR Lag Order", fontsize=13, fontweight='bold')
    ax_r2.set_xlabel("AR Model Lag Order (p)", fontsize=11)
    ax_r2.set_ylabel("Test R-squared (R2)", fontsize=11)
    ax_r2.set_xticks(lags_range)
    
    # ZOOM IN Y-axis to prevent squishing and blank space!
    r2_min = min(r2_vals) - (max(r2_vals) - min(r2_vals)) * 0.1
    r2_max = max(r2_vals) + (max(r2_vals) - min(r2_vals)) * 0.1
    ax_r2.set_ylim(r2_min, r2_max)
    
    ax_r2.grid(True, linestyle=':', alpha=0.5)
    ax_r2.legend()
    
    plt.suptitle("CRISP-DM Step 4: Stepwise Evaluation of AR Model Lag Orders (TSMC 2330)", fontsize=15, fontweight='bold', y=0.98)
    plt.tight_layout()
    
    # Save Image
    image_path = os.path.join(os.path.dirname(__file__), "feature_selection_stepwise.png")
    plt.savefig(image_path, dpi=300, bbox_inches='tight')
    plt.close()
    print(f"Saved lag stepwise selection plot to {image_path}")
    
    # Save table
    ranking_df = pd.DataFrame({
        "Lag_Order": lags_range,
        "AIC": aic_vals,
        "BIC": bic_vals,
        "Test_R2": r2_vals
    })
    ranking_df.to_csv(os.path.join(os.path.dirname(__file__), "feature_rankings_table.csv"), index=False)
    print("\n--- Lag Performance Rankings Table ---")
    print(ranking_df.to_string(index=False))

if __name__ == "__main__":
    generate_stepwise_plots()
