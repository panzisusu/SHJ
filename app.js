const { createApp } = Vue;

createApp({
    data() {
        return {
            scrolled: false,
            menuActive: false,
            selectedLanguage: 'en',
            // Project data structure - Separating data from presentation
            projects: [
                {
                    id: 'Shan-Hai-Jing',
                    name: 'Classic of Mountains & Seas (Shan Hai Jing)',
                    nameZh: '山海經 · 奇獸異誌',
                    description: 'A premium, interactive web database exploring the mystical beasts, regions, and legendary lore of the ancient classic Shan Hai Jing, featuring an astrological Luo Pan compass filter.',
                    descriptionZh: '高質感先秦古籍互動網頁。以古典宣紙水墨設計呈現書卷之美，整合天體八卦羅盤方位篩選、靈性數值詳細剖析，以及精美奇獸異誌卷軸傳說。',
                    icon: 'fa-dragon',
                    link: './Shan-Hai-Jing/index.html',
                    color: '#d4af37',
                    bgStyle: {
                        background: 'linear-gradient(rgba(253, 252, 247, 0.25), rgba(253, 252, 247, 0.8)), url("./Shan-Hai-Jing/assets/webp/ink_wash_bg.webp") center/cover no-repeat'
                    }
                },
                {
                    id: 'ensemble-model',
                    name: 'Ensemble Model Learning',
                    nameZh: 'Ensemble Model 集成學習模型',
                    description: 'A comprehensive study guide on machine learning ensemble methods, summarizing Bagging, Boosting, Voting, and Stacking with visual flowcharts.',
                    descriptionZh: '整合學習模型完整學習導覽與實作。收錄自助聚合 (Bagging)、提升法 (Boosting)、加權投票與堆疊法 (Stacking) 核心架獲解析與課堂精華。',
                    icon: 'fa-diagram-project',
                    customIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" width="180" height="90"><defs><marker id="arrow-gold" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="3" markerHeight="3" orient="auto-start-reverse"><path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#8c6b12" /></marker><marker id="arrow-red" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="3" markerHeight="3" orient="auto-start-reverse"><path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#9e2a2b" /></marker></defs><style>.icon-line { stroke: #8c6b12; stroke-width: 5.6px; fill: none; stroke-linecap: round; } .icon-line-dashed { stroke: #9e2a2b; stroke-width: 5.6px; fill: none; stroke-dasharray: 8,8; stroke-linecap: round; } .icon-node { fill: #8c6b12; stroke: #fcfbf9; stroke-width: 3px; } .icon-node-out { fill: #9e2a2b; stroke: #fcfbf9; stroke-width: 3px; } .icon-ring { stroke: #8c6b12; stroke-width: 2px; fill: none; opacity: 0.45; } .icon-ring-out { stroke: #9e2a2b; stroke-width: 2px; fill: none; opacity: 0.45; }</style><path class="icon-line" d="M 28 50 L 53 50 L 74 20 L 91 20" marker-end="url(#arrow-gold)" /><path class="icon-line" d="M 53 50 L 91 50" marker-end="url(#arrow-gold)" /><path class="icon-line" d="M 28 50 L 53 50 L 74 80 L 91 80" marker-end="url(#arrow-gold)" /><path class="icon-line-dashed" d="M 109 20 L 126 20 L 147 50" /><path class="icon-line-dashed" d="M 109 50 L 147 50" /><path class="icon-line-dashed" d="M 109 80 L 126 80 L 147 50" /><path class="icon-line-dashed" d="M 147 50 L 163 50" marker-end="url(#arrow-red)" /><circle cx="20" cy="50" r="8" class="icon-node" /><circle cx="20" cy="50" r="14" class="icon-ring" /><circle cx="100" cy="20" r="6.5" class="icon-node" /><circle cx="100" cy="50" r="6.5" class="icon-node" /><circle cx="100" cy="80" r="6.5" class="icon-node" /><circle cx="180" cy="50" r="8" class="icon-node-out" /><circle cx="180" cy="50" r="14" class="icon-ring-out" /></svg>',
                    link: './Ensemble-Model/index.html',
                    color: '#8c6b12',
                    bgStyle: {
                        background: 'url(\'data:image/svg+xml;utf8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20100%20100%22%20width=%22100%22%20height=%22100%22%3E%20%20%20%3Cstyle%3E%20%20%20%20%20.line%20{%20stroke:%20%23d8d3c5;%20stroke-width:%201.1px;%20fill:%20none;%20stroke-dasharray:%202,2;%20}%20%20%20%20%20.solid-line%20{%20stroke:%20%23d8d3c5;%20stroke-width:%201.1px;%20fill:%20none;%20}%20%20%20%20%20.node%20{%20fill:%20%23d8d3c5;%20}%20%20%20%20%20.ring%20{%20stroke:%20%23d8d3c5;%20stroke-width:%200.8px;%20fill:%20none;%20opacity:%200.5;%20}%20%20%20%3C/style%3E%20%20%20%3Ccircle%20cx=%2210%22%20cy=%2210%22%20r=%220.5%22%20class=%22node%22%20/%3E%20%20%20%3Ccircle%20cx=%2250%22%20cy=%2210%22%20r=%220.5%22%20class=%22node%22%20/%3E%20%20%20%3Ccircle%20cx=%2290%22%20cy=%2210%22%20r=%220.5%22%20class=%22node%22%20/%3E%20%20%20%3Ccircle%20cx=%2210%22%20cy=%2250%22%20r=%220.5%22%20class=%22node%22%20/%3E%20%20%20%3Ccircle%20cx=%2290%22%20cy=%2250%22%20r=%220.5%22%20class=%22node%22%20/%3E%20%20%20%3Ccircle%20cx=%2210%22%20cy=%2290%22%20r=%220.5%22%20class=%22node%22%20/%3E%20%20%20%3Ccircle%20cx=%2250%22%20cy=%2290%22%20r=%220.5%22%20class=%22node%22%20/%3E%20%20%20%3Ccircle%20cx=%2290%22%20cy=%2290%22%20r=%220.5%22%20class=%22node%22%20/%3E%20%20%20%20%20%20%3Cpath%20class=%22solid-line%22%20d=%22M%2015%2050%20L%2030%2050%20L%2045%2025%20L%2055%2025%22%20/%3E%20%20%20%3Cpath%20class=%22solid-line%22%20d=%22M%2030%2050%20L%2055%2050%22%20/%3E%20%20%20%3Cpath%20class=%22solid-line%22%20d=%22M%2015%2050%20L%2030%2050%20L%2045%2075%20L%2055%2075%22%20/%3E%20%20%20%20%20%20%3Cpath%20class=%22line%22%20d=%22M%2055%2025%20L%2070%2025%20L%2080%2050%20M%2055%2050%20L%2080%2050%20M%2055%2075%20L%2070%2075%20L%2080%2050%20L%2085%2050%22%20/%3E%20%20%20%20%20%20%3Ccircle%20cx=%2215%22%20cy=%2250%22%20r=%222.5%22%20class=%22node%22%20/%3E%20%20%20%3Ccircle%20cx=%2215%22%20cy=%2250%22%20r=%225%22%20class=%22ring%22%20/%3E%20%20%20%20%20%20%3Ccircle%20cx=%2255%22%20cy=%2225%22%20r=%222%22%20class=%22node%22%20/%3E%20%20%20%3Ccircle%20cx=%2255%22%20cy=%2250%22%20r=%222%22%20class=%22node%22%20/%3E%20%20%20%3Ccircle%20cx=%2255%22%20cy=%2275%22%20r=%222%22%20class=%22node%22%20/%3E%20%20%20%20%20%20%3Ccircle%20cx=%2285%22%20cy=%2250%22%20r=%223%22%20class=%22node%22%20/%3E%20%20%20%3Ccircle%20cx=%2285%22%20cy=%2250%22%20r=%226%22%20class=%22ring%22%20/%3E%20%3C/svg%3E\') left top/80px 80px repeat, linear-gradient(135deg, #fdfcf7 0%, #f5f0e3 100%)'
                    }
                },
                {
                    id: 'cwa-weather-dashboard',
                    name: 'Taiwan CWA Weather AI Visualization',
                    nameZh: '台灣氣象觀測 AI 視覺化互動儀表板',
                    description: 'A full-stack weather system using CWA API, SQLite history tracking, FastAPI backend, and Leaflet + Plotly dynamic charts.',
                    descriptionZh: '高質感全端天氣儀表板。整合氣象署觀測 API、SQLite 歷史紀錄，並以 FastAPI 後端結合 Leaflet 地圖及 Plotly 互動式圖表動態呈現。',
                    icon: 'fa-cloud-sun-rain',
                    link: 'https://cwa-weather-nu.vercel.app/',
                    color: '#2563eb'
                },
                {
                    id: 'clustering-algorithm-gemini',
                    name: 'Clustering Algorithm Showcase (Gemini)',
                    nameZh: 'Clustering 分群演算法專案 Gemini版本',
                    description: 'An interactive 2D visual playground demonstrating K-Means, K-Medoids, DBSCAN, GMM, and Kernel K-Means clustering algorithms dynamically with math tutorials and benchmarking.',
                    descriptionZh: '高質感互動式分群演算法沙盒。支援 K-Means、K-Medoids、DBSCAN、GMM（含動態協方差橢圓）與核函數 K-Means（代表 Spectral Clustering）之二維步進與自動收斂視覺化，並附帶數學公式推導與文獻評級。',
                    icon: 'fa-chart-scatter',
                    customIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" width="180" height="90"><style>.point-a { fill: #9e2a2b; opacity: 0.85; } .point-b { fill: #8c6b12; opacity: 0.85; } .center-a { fill: none; stroke: #9e2a2b; stroke-width: 2.5px; } .center-b { fill: none; stroke: #8c6b12; stroke-width: 2.5px; } .ellipse { fill: none; stroke: #9e2a2b; stroke-width: 1.5px; stroke-dasharray: 4,4; opacity: 0.6; }</style><circle cx="60" cy="40" r="4.5" class="point-a" /><circle cx="75" cy="30" r="4.5" class="point-a" /><circle cx="50" cy="25" r="4.5" class="point-a" /><circle cx="80" cy="50" r="4.5" class="point-a" /><circle cx="65" cy="35" r="7.5" class="center-a" /><line x1="65" y1="27.5" x2="65" y2="42.5" stroke="#9e2a2b" stroke-width="2" /><line x1="57.5" y1="35" x2="72.5" y2="35" stroke="#9e2a2b" stroke-width="2" /><ellipse cx="65" cy="35" rx="30" ry="18" class="ellipse" /><circle cx="130" cy="65" r="4.5" class="point-b" /><circle cx="145" cy="75" r="4.5" class="point-b" /><circle cx="120" cy="80" r="4.5" class="point-b" /><circle cx="150" cy="60" r="4.5" class="point-b" /><circle cx="136" cy="70" r="7.5" class="center-b" /><line x1="136" y1="62.5" x2="136" y2="77.5" stroke="#8c6b12" stroke-width="2" /><line x1="128.5" y1="70" x2="143.5" y2="70" stroke="#8c6b12" stroke-width="2" /></svg>',
                    link: './clustering-algorithm-gemini/index.html',
                    color: '#9e2a2b',
                    bgStyle: {
                        background: 'url(\'data:image/svg+xml;utf8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20100%20100%22%20width=%22100%22%20height=%22100%22%3E%3Cstyle%3E.dot%20{%20fill:%20%23d8d3c5;%20opacity:%200.7;%20}%3C/style%3E%3Ccircle%20cx=%2220%22%20cy=%2230%22%20r=%221%22%20class=%22dot%22%20/%3E%3Ccircle%20cx=%2225%22%20cy=%2225%22%20r=%221.5%22%20class=%22dot%22%20/%3E%3Ccircle%20cx=%2218%22%20cy=%2222%22%20r=%221.2%22%20class=%22dot%22%20/%3E%3Ccircle%20cx=%2275%22%20cy=%2270%22%20r=%221.5%22%20class=%22dot%22%20/%3E%3Ccircle%20cx=%2280%22%20cy=%2265%22%20r=%221.2%22%20class=%22dot%22%20/%3E%3Ccircle%20cx=%2270%22%20cy=%2275%22%20r=%221%22%20class=%22dot%22%20/%3E%3C/svg%3E\') left top/80px 80px repeat, linear-gradient(135deg, #fdfcf7 0%, #f5f0e3 100%)'
                    }
                },
                {
                    id: 'clustering-algorithm-copilot',
                    name: 'Clustering Algorithm Showcase (Copilot)',
                    nameZh: 'Clustering 分群演算法專案 Copilot版本',
                    description: 'A study of clustering algorithms with practical comparisons and learning notes.',
                    descriptionZh: '收錄分群演算法學習分析，整理 K-Means、K-Medoids、DBSCAN、GMM 與 Spectral Clustering 的適用情境與重點。',
                    icon: 'fa-layer-group',
                    link: './clustering-algorithm-copilot/index.html',
                    color: '#c084fc',
                    bgStyle: {
                        background: 'linear-gradient(135deg, #fff8d7 0%, #fff2b2 100%)'
                    }
                },
                {
                    id: 'fortune-telling',
                    name: 'Cosmic Divination Oracle',
                    nameZh: '星境啟示錄占卜坊',
                    description: 'A premium mystical oracle application offering Tarot draws, daily horoscopes, and traditional throw-jiao divination.',
                    descriptionZh: '高質感神秘學占卜系統。整合大阿爾克那塔羅牌三牌啟示、每日星象運勢度量衡，以及經典求籤與擲筊互動問卜。',
                    icon: 'fa-wand-magic-sparkles',
                    link: './fortune-telling/index.html',
                    color: '#a855f7',
                    bgStyle: {
                        background: 'linear-gradient(rgba(15, 23, 42, 0.45), rgba(15, 23, 42, 0.85)), url("./fortune-telling/assets/webp/divination_bg.webp") center/cover no-repeat'
                    }
                },
                {
                    id: 'jigsaw-puzzle',
                    name: 'Cheerleader Jigsaw Puzzle',
                    nameZh: '啦啦隊女孩精美拼圖挑戰',
                    description: 'Interactive responsive jigsaw puzzle game using dynamic CSS variables, PointerEvents drag-and-drop, and custom canvas confetti victory animations.',
                    descriptionZh: '高質感互動拼圖遊戲。採用響應式 CSS 變數切割與 PointerEvents 拖曳定位，拼圖成功後可觸發粒子紙花慶祝特效，並支援相片上傳。',
                    icon: 'fa-puzzle-piece',
                    link: './jigsaw-puzzle/index.html',
                    color: '#00f0ff'
                },
                {
                    id: 'joke-generator',
                    name: 'Random Joke Generator',
                    nameZh: '歡樂隨機笑話產生器',
                    description: 'Break the ice! An interactive web app to generate witty puns, jokes, and computer science memes.',
                    descriptionZh: '打破尷尬！一鍵產生精選程式開發梗、冷笑話與冷知識的互動式小工具。',
                    icon: 'fa-face-laugh-squint',
                    link: './joke-generator/index.html',
                    color: '#ff6b6b'
                },
                {
                    id: 'nonsense-selector',
                    name: 'Nonsense Random Selector',
                    nameZh: '隨選幹話金句全集機',
                    description: 'A cyber-neon selector generating classic Taiwanese nonsense sayings, with mock metrics and philosophical analyses.',
                    descriptionZh: '霓虹電競風格的台灣經典幹話金句產生器，附帶趣味指標與一本正經的偽科學賞析。',
                    icon: 'fa-face-laugh-wink',
                    link: './nonsense/index.html',
                    color: '#bc13fe'
                },
                {
                    id: 'mcdonalds',
                    name: 'McDonald\'s Decision Tool',
                    nameZh: '麥當勞金黃選餐隨機機',
                    description: 'A smart randomizer solving McDonald\'s decision paralysis using weight-based algorithms.',
                    descriptionZh: '利用價格反比權重演算法，解決麥當勞選擇困難症的智慧選餐系統。',
                    icon: 'fa-burger',
                    link: './mcdonalds-ordering/index.html',
                    color: '#ffc72c'
                },
                {
                    id: 'cosmos',
                    name: 'Cosmos Generator',
                    nameZh: '宇宙星空生成器',
                    description: 'Interactive celestial simulation engine generating cosmic bodies and starry patterns.',
                    descriptionZh: '互動式天體物理星空模擬引擎，產生獨特星雲與恆星軌跡。',
                    icon: 'fa-user-astronaut',
                    link: './cosmos-generator/index.html',
                    color: '#8b5cf6'
                },
                {
                    id: 'cheerleader-selector',
                    name: 'Cheerleader加權隨機應援機',
                    nameZh: '啦啦隊員加權隨選應援機',
                    description: 'A professional sporty selector that dynamically filters cheerleaders from CPBL, TPBL, and TVL, and calculates square root popularity weights.',
                    descriptionZh: '高質感職業啦啦隊篩選器，支援職棒、職籃、職排與多國籍篩選，並以人氣開根號加權演算法隨機隨選應援。',
                    icon: 'fa-ranking-star',
                    link: './cheerleader/index.html',
                    color: '#ff007f'
                },
                {
                    id: 'svm-visualizer',
                    name: 'SVM 3D Interactive Visualizer',
                    nameZh: 'SVM 支持向量機 3D 視覺化互動器',
                    description: 'An interactive 3D WebGL tool illustrating linear inseparability, kernel lifting, hyperplane separation, and decision boundary projections.',
                    descriptionZh: '高質感 3D 互動式網頁應用。透過三維空間投影與動態超平面切割，直觀理解 SVM、RBF Kernel 與 Margin 最大化機制。',
                    icon: 'fa-circle-nodes',
                    link: './svm-visualizer/index.html',
                    color: '#10b981'
                },
                {
                    id: 'hw09-netwarm-movie',
                    name: 'HW09 netwarm-movie',
                    nameZh: 'HW09 netwarm-movie 電影爬蟲與資料庫',
                    description: 'A scraped classic movie database containing 100 curated classic films from Scrape Center, featuring full-stack search, filtering, AI chat integrations, and database analytics.',
                    descriptionZh: '精美電影爬蟲與資料庫系統（資料源自 ssr1.scrape.center 經典百部電影）。支援全端智慧搜尋、類型過濾、Gemini AI 對話導覽，以及完整的 Python 爬蟲與 SQLite 後端架構。',
                    icon: 'fa-film',
                    link: './HW09 netwarm-movie/index.html',
                    github: 'https://github.com/panzisusu/HW09-netwarm-movie',
                    color: '#14b8a6'
                },
                {
                    id: 'hw7-2330',
                    name: 'TSMC Stock regression (2330)',
                    nameZh: '台積電 (2330) 股票回歸分析',
                    description: 'Predictive analytics on TSMC stock movement using regression modeling.',
                    descriptionZh: '基於迴歸模型與機器學習，進行台積電股票走勢預測與量化分析。',
                    icon: 'fa-microchip',
                    link: './HW7-2330/index.html',
                    color: '#06b6d4'
                },
                {
                    id: 'hw7-boston',
                    name: 'Boston Housing Analysis',
                    nameZh: '波士頓房價迴歸預測',
                    description: 'Data science analysis on the classic Boston housing dataset with linear models.',
                    descriptionZh: '使用經典波士頓房地產數據集，進行房價特徵分析與線性預測模型。',
                    icon: 'fa-house-chimney',
                    link: './HW7%20boston/index.html',
                    color: '#3b82f6'
                },
                {
                    id: 'hw7-california',
                    name: 'California Housing Model',
                    nameZh: '加州房價多重迴歸模型',
                    description: 'Multi-variable regression models mapping property values across California districts.',
                    descriptionZh: '多變數地理迴歸分析，針對加利福尼亞州不同地區的房屋價值預測模型。',
                    icon: 'fa-map-location-dot',
                    link: './HW7-califonia/index.html',
                    github: 'https://github.com/panzisusu/HW7-califonia',
                    color: '#10b981'
                },
                {
                    id: 'hw6',
                    name: 'CRISP-DM Project Analysis Report of Top 50 Startups',
                    nameZh: '五十大新創企業的CRISP-DM 專案分析報告',
                    description: 'CRISP-DM methodology application on analyzing 50 startup business ventures.',
                    descriptionZh: '應用 CRISP-DM 方法論分析五十大新創企業的商業指標與數據探勘報告。',
                    icon: 'fa-chart-pie',
                    link: './stratup50/report.html',
                    github: 'https://github.com/panzisusu/stratup50',
                    demo: 'https://stratup50-35hjkzmfzrwhwpcf22ruhg.streamlit.app/',
                    color: '#f59e0b'
                },
                {
                    id: 'hw10-weather',
                    name: 'CWA Weather Real-time Observation Platform',
                    nameZh: '台灣 CWA 即時氣象與降雨觀測平台',
                    description: 'A real-time weather and rainfall dashboard for Taiwan using Central Weather Administration APIs.',
                    descriptionZh: '利用中央氣象署 API 開發的台灣即時氣象與降雨觀測儀表板，支援測站地圖與歷史趨勢預測。',
                    icon: 'fa-cloud-showers-water',
                    link: 'https://cwa-weather-nu.vercel.app',
                    github: 'https://github.com/panzisusu/cwa-weather',
                    color: '#0ea5e9'
                },
                {
                    id: 'hw5',
                    name: 'Top 10 ML Algorithms',
                    nameZh: '機器學習十大必學演算法',
                    description: 'Algorithmic homework showcasing dataset processing and metrics compilation.',
                    descriptionZh: '精細資料集處理、核心指標計算與演算法效能評估作業。',
                    icon: 'fa-terminal',
                    link: './HW5/index.html',
                    color: '#ec4899'
                },
                {
                    id: 'naive-bayesian',
                    name: 'Naive Bayesian Classifier',
                    nameZh: 'Naive-Bayesian單純貝葉欣分類法',
                    description: 'Interactive simulator illustrating Bayes Theorem, conditional feature independence, Laplace smoothing, and a real-time spam email filter.',
                    descriptionZh: '高質感互動式貝氏分類器。支援自定義訓練表格、事前與條件機率分解，並包含一個採用拉普拉斯平滑的即時垃圾郵件過濾器。',
                    icon: 'fa-brain',
                    link: './Naive-Bayesian/index.html',
                    color: '#6366f1'
                }
            ]
        };
    },
    methods: {
        handleScroll() {
            // Add background color to header on scroll
            this.scrolled = window.scrollY > 50;
        },
        toggleMenu() {
            // Toggle hamburger menu on mobile
            this.menuActive = !this.menuActive;
        },
        changeLanguage() {
            // Switch pages based on dropdown selection
            if (this.selectedLanguage === 'en') {
                window.location.href = 'index.html';
            } else if (this.selectedLanguage === 'zh') {
                window.location.href = 'index-zh.html';
            }
        },
        initAnimations() {
            // Register GSAP ScrollTrigger plugin
            gsap.registerPlugin(ScrollTrigger);

            // Hero content animations
            gsap.to('.hero-content h1', { 
                opacity: 1, 
                y: 0, 
                duration: 1, 
                delay: 0.3, 
                ease: "power3.out" 
            });
            gsap.to('.hero-content h2', { 
                opacity: 1, 
                y: 0, 
                duration: 1, 
                delay: 0.6, 
                ease: "power3.out" 
            });
            gsap.to('.hero-actions', { 
                opacity: 1, 
                y: 0, 
                duration: 1, 
                delay: 0.9, 
                ease: "power3.out" 
            });

            // Parallax scroll effect on Hero section
            gsap.to('.hero', {
                backgroundPosition: '50% 85%',
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });

            // Staggered entry animation for gallery items as they scroll into view
            gsap.utils.toArray('.gallery-item').forEach((item, index) => {
                gsap.to(item, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: item,
                        start: 'top bottom-=80',
                        toggleActions: 'play none none reverse'
                    },
                    delay: (index % 3) * 0.1, // Stagger delay by columns
                    ease: "power3.out"
                });
            });
        }
    },
    mounted() {
        // Detect current language from url path
        if (window.location.pathname.includes('index-zh.html')) {
            this.selectedLanguage = 'zh';
        } else {
            this.selectedLanguage = 'en';
        }
        
        window.addEventListener('scroll', this.handleScroll);
        
        // Wait for Vue DOM updates to initialize GSAP
        this.$nextTick(() => {
            this.initAnimations();
        });
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}).mount('#app');
