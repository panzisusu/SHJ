import os
import streamlit as st
import pandas as pd
import numpy as np
import joblib
import matplotlib.pyplot as plt

# Set page config
st.set_page_config(
    page_title="TSMC (2330) Model Comparison Predictor",
    page_icon="📊",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom CSS for premium dark/vibrant styling
st.markdown("""
<style>
    .main-title {
        font-family: 'Outfit', 'Inter', sans-serif;
        font-size: 2.8rem;
        font-weight: 800;
        color: #1E293B;
        margin-bottom: 0.5rem;
    }
    .sub-title {
        font-family: 'Inter', sans-serif;
        font-size: 1.1rem;
        color: #64748B;
        margin-bottom: 2rem;
    }
    .metric-card {
        background: linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%);
        padding: 1.8rem;
        border-radius: 16px;
        box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.2);
        color: white;
        text-align: center;
        margin-bottom: 1.5rem;
    }
    .metric-value {
        font-size: 3.2rem;
        font-weight: 800;
        margin: 0.5rem 0;
        letter-spacing: -1px;
    }
    .metric-label {
        font-size: 0.95rem;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        opacity: 0.9;
        font-weight: 600;
    }
    .info-card {
        background-color: #F8FAFC;
        border-left: 5px solid #3B82F6;
        padding: 1.2rem;
        border-radius: 8px;
        margin-bottom: 1.5rem;
    }
    .section-header {
        font-size: 1.4rem;
        font-weight: 700;
        color: #1E293B;
        margin-top: 1rem;
        margin-bottom: 1rem;
        border-bottom: 2px solid #E2E8F0;
        padding-bottom: 0.4rem;
    }
</style>
""", unsafe_allow_html=True)

# Load data
@st.cache_data
def load_data():
    csv_path = os.path.join(os.path.dirname(__file__), "TSMC_2330.csv")
    if os.path.exists(csv_path):
        df = pd.read_csv(csv_path)
        df['Date'] = pd.to_datetime(df['Date'])
        return df.sort_values(by='Date').reset_index(drop=True)
    return None

# Load model
@st.cache_resource
def load_model():
    model_path = os.path.join(os.path.dirname(__file__), "best_stock_model.joblib")
    if os.path.exists(model_path):
        return joblib.load(model_path)
    return None

df = load_data()
model_struct = load_model()

# Header Area
st.markdown('<div class="main-title">📈 TSMC (2330) Model Comparison & Predictor</div>', unsafe_allow_html=True)
st.markdown('<div class="sub-title">Evaluate OLS, Ridge, Random Forest, and ARIMA models under the CRISP-DM standard workflow for TSMC stock prices.</div>', unsafe_allow_html=True)

if df is None or model_struct is None:
    st.error("Error: Could not load the dataset or the trained model. Please ensure solve_stock.py has run successfully.")
    st.stop()

model = model_struct["model"]

# Get the latest price as default
latest_row = df.iloc[-1]
latest_date = latest_row['Date'].strftime('%Y-%m-%d')
latest_price = latest_row['Close']

st.sidebar.markdown("### 🎛️ Prediction Control")
st.sidebar.info(f"Latest market day: **{latest_date}**")

close_val = st.sidebar.slider("Current Close Price (今日收盤價)", float(df['Close'].min()), float(df['Close'].max()) + 50, float(latest_price), step=0.5)

# Predict next Close
predicted_val = model.predict(np.array([[close_val]]))[0]

# UI Layout
col_results, col_plots = st.columns([1, 1.3])

with col_results:
    st.markdown('<div class="section-header">🔮 Prediction Result</div>', unsafe_allow_html=True)
    
    st.markdown(f"""
    <div class="metric-card">
        <div class="metric-label">Estimated Next Close Price</div>
        <div class="metric-value">NT$ {predicted_val:,.2f}</div>
        <div class="metric-label">Input Price: NT$ {close_val:,.2f}</div>
    </div>
    """, unsafe_allow_html=True)
    
    change = predicted_val - close_val
    pct_change = (change / close_val) * 100
    if change > 0:
        st.success(f"▲ Trend: **Bullish (看漲)** (+NT$ {change:.2f} / +{pct_change:.2f}%)")
    else:
        st.error(f"▼ Trend: **Bearish (看跌)** (NT$ {change:.2f} / {pct_change:.2f}%)")
        
    st.markdown("""
    <div class="info-card">
        <h4>💡 About the Model</h4>
        <ul>
            <li><strong>Algorithm:</strong> Linear Regression (OLS) Pipeline.</li>
            <li><strong>Feature:</strong> Today's Close Price (Lag 1).</li>
            <li><strong>Evaluation:</strong> Tested against Ridge Regression, Random Forest, ARIMA(1,1,0) static, and ARIMA(1,1,0) rolling.</li>
        </ul>
    </div>
    """, unsafe_allow_html=True)

with col_plots:
    st.markdown('<div class="section-header">📊 Model Comparison Chart</div>', unsafe_allow_html=True)
    
    tab_comparison, tab_dist = st.tabs([
        "📈 2330.TW — Model Comparison",
        "🎯 Price Distribution"
    ])
    
    with tab_comparison:
        # Load and show the generated comparison image
        img_path = os.path.join(os.path.dirname(__file__), "model_comparison.png")
        if os.path.exists(img_path):
            st.image(img_path, caption="Comparison of Machine Learning and Time-Series models on the Test Set (2026-04-15 to 2026-06-15)")
        else:
            st.warning("Comparison image model_comparison.png not found. Please run solve_stock.py.")
            
    with tab_dist:
        fig, ax = plt.subplots(figsize=(7, 4.5), facecolor='white')
        sns = __import__('seaborn') # import seaborn dynamically
        sns.histplot(df['Close'], kde=True, color='#3B82F6', ax=ax)
        ax.axvline(predicted_val, color='#EF4444', linestyle='-', linewidth=3, 
                   label=f'Predicted Close: {predicted_val:.1f}')
        ax.set_title("TSMC (2330) 5-Year Close Price Distribution", fontsize=11, fontweight='bold')
        ax.set_xlabel("Close Price (NTD)")
        ax.legend()
        st.pyplot(fig)
