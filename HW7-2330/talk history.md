# 💬 Antigravity IDE 與使用者對話紀錄 (TSMC 2330 Talk History)

本檔案記錄了在台積電股價預測（TSMC 2330 Stock Price Forecasting）專案開發過程中，使用者與 AI 助理的完整對話歷史。

---

## 📅 對話時間：2026-06-15

### 🙋 使用者：
我要弄一個新的東西，幫我把這些都關起來吧

### 🤖 AI 助理 (Antigravity)：
- 協助使用者關閉或收納前一個「加州房價預測（California Housing）」專案的相關檔案。
- 準備切換至下一個開發主題。

---

### 🙋 使用者：
我要弄一個新的計劃在HW7-2330

### 🤖 AI 助理 (Antigravity)：
- 引導使用者建立新專案目錄 `HW7-2330`。
- 設計了針對台積電（2330.TW）股票分析的初始規劃。

---

### 🙋 使用者：
i want to predict 2330.tw price using auto regression and ARIMA model, compare them 用crisp-DM的手法

### 🤖 AI 助理 (Antigravity)：
- **實作計畫擬定**：規劃了以 CRISP-DM 流程為骨幹的時間序列與機器學習混合預測方案。
- **資料下載 (`download_data.py`)**：使用 `yfinance` 獲取台積電自 2021 年起共 1,215 筆歷史日交易數據並存為 `TSMC_2330.csv`。
- **模型開發與評估 (`solve_stock.py`)**：
  - 訓練了三個機器學習迴歸模型：線性迴歸（OLS）、脊迴歸（Ridge）、隨機森林（Random Forest）。
  - 訓練了兩個時序模型：ARIMA(1,1,0) 靜態預測 vs 滾動預測（Rolling Forecast）。
  - 發現決策樹模型（隨機森林）由於不具備**外推能力**，在股價創歷史新高的測試集中完全失效，預測出平直的底線（$R^2 = -6.9447$）。
  - 發現 ARIMA 靜態預測會迅速衰減至均值（$R^2 = -3.7822$），而 ARIMA 滾動預測（$R^2 = 0.5466$）則能有效跟隨價格走勢。
  - 將最佳預測模型（線性外推模型）匯出至 `best_stock_model.joblib`。
- **生成儀表板與報告**：
  - 撰寫 `streamlit_app.py` 網頁應用，支援使用者拉動今日收盤價以動態推估明日股價。
  - 撰寫符合 CRISP-DM 規範的 `README.md` 專案報告，並加上直觀有趣的幼稚園與招財貓 🐱 罐罐版本。

---

### 🙋 使用者：
9種特徵選擇演算法的逐步評估對比圖： 為什麼這個圖這麼醜啊? 上面都很空白

### 🤖 AI 助理 (Antigravity)：
- **問題診斷**：由於測試集的 rolling $R^2$ 指標極高且非常接近（介於 0.99318 到 0.99352 之間），Matplotlib 預設將 y 軸範圍設定為 `[0, 1]`，導致所有點被擠壓在圖表最頂端，下方留下大片空白。
- **圖表修正 (`generate_sfs_plot.py`)**：將 $R^2$ 子圖的 y 軸範圍調整為 `[min - delta, max + delta]`。窄幅自適應縮放後，徹底消除了頂部留白，清晰呈現了不同滯後階數（Lag Order）之間的細微差異，凸顯了 BIC 準則下的黃金甜點區（Sweet Spot $p=15$）。

---

### 🙋 使用者：
可以先幫我畫這個圖出來嗎? *(附上包含機器學習與時序預測結果的走勢圖)*

### 🤖 AI 助理 (Antigravity)：
- 執行了模型擬定與繪圖邏輯，生成並儲存了暗黑風格（Dark Mode）的 [model_comparison.png](./model_comparison.png)。
- 向使用者報告了五種模型的預測指標（OLS、Ridge、Random Forest、ARIMA static/rolling）。

---

### 🙋 使用者：
在這個新生的圖型上，新增一個預設的喇叭圖，喇叭圖是這樣 *(附上帶有 Megaphone Pattern 的 S&P 500 技術走勢圖)*

### 🤖 AI 助理 (Antigravity)：
- **新增圖表形態**：在 [solve_stock.py](./solve_stock.py) 繪圖代碼中，新增了預設的擴大喇叭形（Megaphone Pattern，藍色發散線，自 `2026-04-24` 至 `2026-06-15`）與上升收斂楔形（Wedge Pattern，橘色收斂線，自 `2026-05-18` 收斂至 `2026-06-03` 高點）。
- 重新擬合與運行，生成帶有發散與收斂趨勢輔助線的全新 [model_comparison.png](./model_comparison.png) 走勢圖。
- 更新報告 [README.md](./README.md)，在模型評估小節中詳細解釋了喇叭形與楔形所代表的市場波動意義。

---

### 🙋 使用者：
可以幫忙把聊天紀錄寫成2330 talk history嗎?

### 🤖 AI 助理 (Antigravity)：
- 整理並生成此 [talk history.md](./talk%20history.md) 對話歷史檔案。
- 在 `README.md` 最下方新增第 11 個分類「對話紀錄」，提供此對話歷史紀錄的快速連結。
