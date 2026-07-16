import streamlit as st
import streamlit.components.v1 as components
import os

# 設定 Streamlit 頁面資訊
st.set_page_config(
    page_title="🍔 麥當勞選餐隨機機 | Streamlit 展示",
    page_icon="🍔",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# 頁面標題
st.title("🍔 麥當勞選餐隨機機 (Streamlit 版)")
st.write("這是將 HTML/CSS/JS 的麥當勞選餐隨機機整合至 Streamlit 的展示頁面。")

# 獲取本機檔案路徑
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
html_path = os.path.join(BASE_DIR, "app.html")
css_path = os.path.join(BASE_DIR, "styles.css")
js_path = os.path.join(BASE_DIR, "app.js")

# 檢查本機檔案是否存在，存在就動態將 CSS 與 JS 注入 HTML 中以利本機運行
if os.path.exists(html_path) and os.path.exists(css_path) and os.path.exists(js_path):
    try:
        with open(html_path, "r", encoding="utf-8") as f:
            html_content = f.read()
        with open(css_path, "r", encoding="utf-8") as f:
            css_content = f.read()
        with open(js_path, "r", encoding="utf-8") as f:
            js_content = f.read()

        # 將外部 CSS 替換為內聯樣式表
        inline_css = f"<style>\n{css_content}\n</style>"
        html_content = html_content.replace('<link rel="stylesheet" href="styles.css">', inline_css)

        # 將外部 JS 替換為內聯腳本
        inline_js = f"<script>\n{js_content}\n</script>"
        html_content = html_content.replace('<script src="app.js"></script>', inline_js)

        # 渲染網頁組件
        components.html(html_content, height=880, scrolling=True)
        
    except Exception as e:
        st.error(f"載入本機檔案時發生錯誤：{e}")
        st.info("改為載入 GitHub Pages 線上版本...")
        components.iframe("https://gogogo137-cmyk.github.io/HW3-choice-Mc/", height=880, scrolling=True)
else:
    # 如果找不到本機檔案，則直接嵌入已部署的 GitHub Pages
    st.info("未偵測到本機檔案，正在嵌入 GitHub Pages 線上版本...")
    components.iframe("https://gogogo137-cmyk.github.io/HW3-choice-Mc/", height=880, scrolling=True)
