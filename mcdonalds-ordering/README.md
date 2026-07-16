# 🍔 金黃選餐隨機機 (麥當勞版)

**麥當勞自己選擇困難的時候可以用：** [👉 點此進入 Streamlit 線上選餐隨機機](https://hw3-choice-mc-7vb9yezdvsjh5jkq4eubnr.streamlit.app/)

---

這是一個專為解決麥當勞選擇困難症所設計的隨機選餐系統，結合了 **HTML / CSS / JavaScript** 開發，並整合至 **Streamlit** 提供線上部署與展示。

## 🌟 核心特色

- **⚖️ 價格權重模式**：價格越貴的餐點，被抽中的機率越低！幫您在選擇困難時省錢吃飽。
- **🎲 等機率模式**：所有餐點均分機率，完全交給命運決定。
- **➕ 自訂新增餐點**：可以自行輸入餐點名稱與價格，即時更新中籤率。
- **👑 炫彩抽中提示**：抽中時會彈出精美的中籤卡片，包含機率與 CP 值趣味評語。
- **🔄 重設預設**：一鍵重設回麥當勞經典主餐清單。

## 🚀 本機運行

如果您想要在本機運行此專案，有以下兩種方式：

### 1. 靜態網頁運行
直接使用瀏覽器打開 `index.html`，或者在專案根目錄下使用 Python 啟動網頁伺服器：
```bash
python -m http.server 8000
```
然後在瀏覽器中瀏覽：`http://localhost:8000/index.html`

### 2. Streamlit 運行
確保已安裝 Streamlit，並在專案根目錄下執行：
```bash
pip install streamlit
streamlit run streamlit_app.py
```
然後在瀏覽器中瀏覽：`http://localhost:8501`

---
*HW3 麥當勞選餐隨機機作業展示專案*
