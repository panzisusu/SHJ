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
import joblib

from statsmodels.tsa.arima.model import ARIMA
from sklearn.linear_model import LinearRegression, Ridge
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import r2_score, mean_absolute_error, mean_squared_error

def run_time_series_modeling():
    # 1. Load data
    data_path = os.path.join(os.path.dirname(__file__), "TSMC_2330.csv")
    if not os.path.exists(data_path):
        raise FileNotFoundError(f"Dataset not found at {data_path}. Please run download_data.py first.")
        
    df = pd.read_csv(data_path)
    df['Date'] = pd.to_datetime(df['Date'])
    df = df.sort_values(by='Date').reset_index(drop=True)
    
    print(f"Original dataset shape: {df.shape}")
    
    # 2. Split by Date (Test set starts from 2026-04-15)
    train_df = df[df['Date'] < '2026-04-15'].copy()
    test_df = df[df['Date'] >= '2026-04-15'].copy()
    
    print(f"Training set: {len(train_df)} rows, Test set: {len(test_df)} rows")
    
    # 3. Features for Machine Learning Models (X = Close of day t, y = Close of day t+1)
    X_train = train_df['Close'].values[:-1].reshape(-1, 1)
    y_train = train_df['Close'].values[1:]
    
    X_test = test_df['Close'].values.reshape(-1, 1)
    test_dates = test_df['Date'].values
    y_test_actual = test_df['Close'].values
    
    # 4. Train ML Models
    lr = LinearRegression().fit(X_train, y_train)
    ridge = Ridge(alpha=1.0).fit(X_train, y_train)
    rf = RandomForestRegressor(n_estimators=100, max_depth=5, random_state=42).fit(X_train, y_train)
    
    # Predict test values
    pred_lr = lr.predict(X_test)
    pred_ridge = ridge.predict(X_test)
    pred_rf = rf.predict(X_test)
    
    # 5. Fit ARIMA(1, 1, 0) static
    model_static = ARIMA(train_df['Close'].values, order=(1, 1, 0))
    fit_static = model_static.fit()
    pred_static = fit_static.forecast(steps=len(test_df))
    
    # 6. Fit ARIMA(1, 1, 0) rolling
    print("Running rolling ARIMA(1, 1, 0) forecast...")
    pred_rolling = []
    history = list(train_df['Close'].values)
    for t in range(len(test_df)):
        model_r = ARIMA(history, order=(1, 1, 0))
        fit_r = model_r.fit()
        pred = fit_r.forecast(steps=1)[0]
        pred_rolling.append(pred)
        history.append(y_test_actual[t])
        if t % 10 == 0:
            print(f"Rolling ARIMA progress: {t}/{len(test_df)}")
            
    pred_rolling = np.array(pred_rolling)
    
    # 7. Compare model metrics
    # Note: Shift actual target values to align with predictions of the next day Close
    # Since y_test_actual is Close at t, and pred predicts Close at t+1:
    # We compare y_test_actual[1:] with pred[:-1] for ML models
    y_target = y_test_actual[1:]
    
    def print_metrics(name, y_pred):
        r2 = r2_score(y_target, y_pred[:-1])
        mae = mean_absolute_error(y_target, y_pred[:-1])
        rmse = np.sqrt(mean_squared_error(y_target, y_pred[:-1]))
        print(f"{name} -> Test R2: {r2:.4f}, MAE: {mae:.2f}, RMSE: {rmse:.2f}")
        return r2, mae, rmse
        
    print("\n--- Model Evaluation (One-Step Ahead) ---")
    print_metrics("Linear Regression", pred_lr)
    print_metrics("Ridge Regression", pred_ridge)
    print_metrics("Random Forest", pred_rf)
    print_metrics("ARIMA(1, 1, 0) rolling", pred_rolling)
    
    # Save results to comparison CSV
    results_df = pd.DataFrame([
        {"Model": "Linear Regression", "Test R2": r2_score(y_target, pred_lr[:-1]), "Test MAE": mean_absolute_error(y_target, pred_lr[:-1]), "Test RMSE": np.sqrt(mean_squared_error(y_target, pred_lr[:-1]))},
        {"Model": "Ridge Regression", "Test R2": r2_score(y_target, pred_ridge[:-1]), "Test MAE": mean_absolute_error(y_target, pred_ridge[:-1]), "Test RMSE": np.sqrt(mean_squared_error(y_target, pred_ridge[:-1]))},
        {"Model": "Random Forest", "Test R2": r2_score(y_target, pred_rf[:-1]), "Test MAE": mean_absolute_error(y_target, pred_rf[:-1]), "Test RMSE": np.sqrt(mean_squared_error(y_target, pred_rf[:-1]))},
        {"Model": "ARIMA(1, 1, 0) rolling", "Test R2": r2_score(y_target, pred_rolling[:-1]), "Test MAE": mean_absolute_error(y_target, pred_rolling[:-1]), "Test RMSE": np.sqrt(mean_squared_error(y_target, pred_rolling[:-1]))}
    ])
    results_df.to_csv(os.path.join(os.path.dirname(__file__), "model_comparison_results.csv"), index=False)
    
    # 8. Plot exactly like the user's requested chart (Dark Mode)
    plt.style.use('dark_background')
    fig, ax = plt.subplots(figsize=(14, 7), facecolor='#0f172a')
    ax.set_facecolor('#0f172a')
    
    # Plot lines with corresponding colors
    ax.plot(test_dates, y_test_actual, color='white', label='Actual', lw=2)
    ax.plot(test_dates, pred_lr, color='#3B82F6', label='Linear Regression', lw=1.5, alpha=0.9)
    ax.plot(test_dates, pred_ridge, color='#FEB47B', label='Ridge Regression', lw=1.5, alpha=0.9)
    ax.plot(test_dates, pred_rf, color='#10B981', label='Random Forest', lw=1.5, alpha=0.9)
    ax.plot(test_dates, pred_static, color='#9467BD', label='ARIMA(1, 1, 0) static', lw=1.5, alpha=0.9)
    ax.plot(test_dates, pred_rolling, color='#D4AF37', label='ARIMA(1, 1, 0) rolling', lw=1.5, alpha=0.9)
    
    # 7.5 Add Default Megaphone Pattern (預設喇叭圖與小楔形)
    # Blue Broadening Lines (擴大藍線)
    date_blue_start = pd.to_datetime('2026-04-24')
    date_blue_end = pd.to_datetime('2026-06-15')
    ax.plot([date_blue_start, date_blue_end], [2180, 2440], color='#38BDF8', lw=3.5, alpha=0.85, label='Megaphone Upper (Blue)')
    ax.plot([date_blue_start, date_blue_end], [2180, 1850], color='#38BDF8', lw=3.5, alpha=0.85, label='Megaphone Lower (Blue)')

    # Orange Converging Lines (收斂橘線)
    date_orange_start1 = pd.to_datetime('2026-05-18')
    date_orange_start2 = pd.to_datetime('2026-05-19')
    date_orange_end = pd.to_datetime('2026-06-03')
    ax.plot([date_orange_start1, date_orange_end], [2250, 2440], color='#F97316', lw=3.5, alpha=0.85, label='Wedge Upper (Orange)')
    ax.plot([date_orange_start2, date_orange_end], [2200, 2440], color='#F97316', lw=3.5, alpha=0.85, label='Wedge Lower (Orange)')
    
    # Customize axes and labels
    ax.set_title("2330.TW — Model Comparison with Megaphone Pattern", fontsize=14, fontweight='bold', pad=15)
    ax.set_xlabel("Date", fontsize=11, labelpad=10)
    ax.grid(True, linestyle=':', alpha=0.3, color='gray')
    ax.legend(loc='upper left', ncol=2, frameon=True, facecolor='#1e293b', edgecolor='none')
    
    # Format limits
    ax.set_xlim(test_dates.min(), test_dates.max())
    
    # Tight layout
    plt.tight_layout()
    plt.savefig(os.path.join(os.path.dirname(__file__), "model_comparison.png"), dpi=300, facecolor=fig.get_facecolor(), edgecolor='none')
    plt.close()
    print("Successfully generated and saved comparison plot to model_comparison.png")
    
    # Save the best model
    # Winner is Linear Regression / Ridge
    winner_pipeline = {
        "model": lr,
        "type": "ml",
        "features": ["Close"]
    }
    joblib.dump(winner_pipeline, os.path.join(os.path.dirname(__file__), "best_stock_model.joblib"))

if __name__ == "__main__":
    run_time_series_modeling()
