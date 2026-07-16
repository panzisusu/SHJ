// Dataset of the 10 Machine Learning Algorithms
const algorithms = [
    {
        rank: 1,
        nameZh: "線性迴歸",
        nameEn: "Linear Regression",
        type: "supervised",
        typeZh: "監督式學習",
        use: "regression",
        useZh: "數值預測",
        desc: "線性迴歸是機器學習中最基礎且歷史最悠久的統計模型。其目標是尋找一條最佳的直線（在多維空間中稱為超平面），用來描述自變數 X 與應變數 Y 之間的線性關係。數學核心在於最小化所有實際觀測點與預測直線之間的距離平方和，此方法稱為最小平方法 (Ordinary Least Squares, OLS)。模型透過梯度下降法 (Gradient Descent) 或正規方程 (Normal Equation) 來疊代更新權重，直到找到最能代表資料趨勢的直線。",
        math: "Y = \\beta_0 + \\beta_1 X_1 + \\beta_2 X_2 + \\dots + \\beta_n X_n + \\epsilon \\\\\\\\ \\min_{\\beta} \\sum_{i=1}^{m} (y_i - \\hat{y}_i)^2",
        apps: ["房價與氣溫預測", "營收與銷售量估算", "金融資產走勢分析", "統計學基準模型"],
        features: [
            "尋找最佳擬合直線以最小化預測誤差",
            "利用最小平方法 (OLS) 計算最佳參數",
            "模型運算非常快速，適合高即時性要求場景",
            "具有非常優良的可解釋性，每個係數都有其物理意義"
        ]
    },
    {
        rank: 2,
        nameZh: "邏輯迴歸",
        nameEn: "Logistic Regression",
        type: "supervised",
        typeZh: "監督式學習",
        use: "classification",
        useZh: "二元分類",
        desc: "雖然名稱帶有「迴歸」二字，但邏輯迴歸實質上是一個廣義線性分類模型。它之所以存在，是因為傳統線性迴歸的輸出範圍是正負無窮大，無法直接表示「機率」。邏輯迴歸在線性組合的基礎上，套用了一個非線性的 Sigmoid 函數（又稱邏輯函數），將任何實數輸入壓縮到 (0, 1) 的區間內。模型在訓練時使用對數損失函數 (Log Loss / Cross-Entropy Loss) 來優化參數。",
        math: "S(z) = \\frac{1}{1 + e^{-z}} \\quad \\text{其中 } z = \\beta^T X \\\\\\\\ \\text{Loss} = -\\frac{1}{m}\\sum [y_i\\log(\\hat{y}_i) + (1-y_i)\\log(1-\\hat{y}_i)]",
        apps: ["疾病診斷（是否患病）", "客戶流失預測 (Churn)", "廣告點擊率 (CTR) 估算", "貸款違約風險分類"],
        features: [
            "利用 Sigmoid 函數將輸出限制在 0 與 1 之間",
            "模型輸出代表分類的機率值，可調閾值進行決策",
            "運算效率極高，在大規模稀疏特徵（如點擊流）表現卓越",
            "是工業界二元分類的最愛基準模型之一"
        ]
    },
    {
        rank: 3,
        nameZh: "決策樹",
        nameEn: "Decision Tree",
        type: "supervised",
        typeZh: "監督式學習",
        use: "classification",
        useZh: "分類與迴歸",
        desc: "決策樹模擬了人類在做決策時的樹狀思考流程。它從根節點 (Root Node) 開始，根據資料特徵的某個切分點，將資料分流至不同的子分支，直到抵達葉節點 (Leaf Node) 並得到最終的預測結果。如何選擇最佳的切分特徵是決策樹的核心。常見的演算法（如 ID3, C4.5, CART）會利用資訊增益 (Information Gain)、資訊增益比 (Gain Ratio) 或吉尼係數 (Gini Impurity) 來評估，目標是讓每次切割後，子節點內部的資料純度越高越好。",
        math: "\\text{Gini}(D) = 1 - \\sum_{i=1}^{C} p_i^2 \\\\\\\\ \\text{Entropy}(D) = -\\sum_{i=1}^{C} p_i \\log_2 p_i",
        apps: ["信用評分與授信審核", "客戶流失原因剖析", "醫學臨床決策樹診斷", "故障根本原因分析"],
        features: [
            "極具直觀可解釋性，可以直接畫成樹狀流程圖",
            "不要求資料做特徵標準化，能完美處理類別型與數值型混合特徵",
            "極易產生過擬合 (Overfitting)，通常需要進行剪枝 (Pruning)",
            "對資料的微小擾動較為敏感，可能導致整棵樹結構劇烈改變"
        ]
    },
    {
        rank: 4,
        nameZh: "隨機森林",
        nameEn: "Random Forest",
        type: "supervised",
        typeZh: "監督式學習",
        use: "classification",
        useZh: "分類與迴歸",
        desc: "隨機森林是為了解決單一決策樹容易過擬合的問題而誕生的集成學習 (Ensemble Learning) 演算法。它的核心哲學是「三個臭皮匠，勝過一個諸葛亮」。隨機森林透過自助抽樣法 (Bootstrapping) 從原始資料集中有放回地隨機抽取多個子樣本集，並在訓練每棵樹時，也隨機選取部分特徵（特徵隨機性）。在這種雙重隨機性下，建立起數百棵獨立的決策樹。在預測時：分類任務進行多數決投票，迴歸任務取平均值。",
        math: "\\hat{y} = \\text{Mode}\\{T_1(x), T_2(x), \\dots, T_B(x)\\} \\quad (\\text{分類投票}) \\\\\\\\ \\hat{y} = \\frac{1}{B} \\sum_{b=1}^{B} T_b(x) \\quad (\\text{迴歸平均})",
        apps: ["電子金融欺詐行為偵測", "電子商務用戶推薦系統", "基因體數據分類", "高維非線性資料預測"],
        features: [
            "利用 Bagging 與雙重隨機性，顯著降低模型方差，抗過擬合",
            "自帶特徵重要性 (Feature Importance) 評估指標",
            "運算非常穩定，對噪聲與缺失值有很好的魯棒性",
            "相較於單一決策樹，隨機森林失去了一部分的直觀可解釋性"
        ]
    },
    {
        rank: 5,
        nameZh: "支持向量機",
        nameEn: "Support Vector Machine (SVM)",
        type: "supervised",
        typeZh: "監督式學習",
        use: "classification",
        useZh: "清晰邊界分類",
        desc: "支持向量機的基本思想是在特徵空間中尋找一個最佳超平面 (Optimal Hyperplane)，將不同類別的資料點完美分開。所謂的「最佳」，是指該超平面距離兩側最近的資料點（這些關鍵點被稱為支持向量 Support Vectors）的距離達到最大化，這個距離稱為邊界 (Margin)。面對低維線性不可分的資料時，SVM 引入了核函數 (Kernel Trick) 機制（如 RBF 核、多項式核），將資料投影到高維空間中，使其變得線性可分。",
        math: "\\min_{w, b} \\frac{1}{2} ||w||^2 \\quad \\text{s.t. } y_i(w^T x_i + b) \\ge 1 \\\\\\\\ K(x_i, x_j) = \\exp(-\\gamma ||x_i - x_j||^2) \\quad (\\text{RBF 核函數})",
        apps: ["高維圖像與手寫字辨識", "生醫學癌症亞型分類", "文字分類與情感分析", "複雜邊界控制問題"],
        features: [
            "尋找最大邊界的超平面，具備優異的泛化能力",
            "僅由支持向量決定邊界，不受非支持向量數據點的干擾",
            "使用核函數 (Kernel Trick) 輕鬆處理複雜非線性分類",
            "不適合超大規模的數據集，因為時間與空間複雜度較高"
        ]
    },
    {
        rank: 6,
        nameZh: "K 最近鄰",
        nameEn: "K-Nearest Neighbors (KNN)",
        type: "supervised",
        typeZh: "監督式學習",
        use: "classification",
        useZh: "簡單分類與迴歸",
        desc: "KNN 是一種基於實例的「惰性學習 (Lazy Learning)」演算法，它在訓練階段基本上不進行任何數學模型的擬合，只是單純地把訓練資料儲存起來。它的核心概念為「物以類聚，人以群分」。當輸入一個未知標籤的新資料點時，KNN 會計算該點與訓練集中所有點的幾何距離（如歐氏距離）。接著找出距離最近的 K 個鄰居：執行分類時採取多數決，執行迴歸時直接取這 K 個鄰居的數值平均值。",
        math: "d(p, q) = \\sqrt{\\sum_{i=1}^{n} (p_i - q_i)^2} \\quad (\\text{歐式距離}) \\\\\\\\ d(p, q) = \\sum_{i=1}^{n} |p_i - q_i| \\quad (\\text{曼哈頓距離})",
        apps: ["小型推薦系統（以相似度推薦）", "簡易模式辨識與手寫識別", "數據異常點與噪聲檢測", "插補缺失值的預處理"],
        features: [
            "非常簡單易懂，無需耗時的模型訓練過程",
            "對特徵縮放（量綱）非常敏感，必須預先進行標準化",
            "在預測階段需要掃描全量數據計算距離，運算複雜度高",
            "K 值的選擇極為關鍵，K 太小易過擬合，K 太大易欠擬合"
        ]
    },
    {
        rank: 7,
        nameZh: "單純貝氏",
        nameEn: "Naive Bayes",
        type: "supervised",
        typeZh: "監督式學習",
        use: "classification",
        useZh: "文本分類",
        desc: "單純貝氏是基於機率論中貝氏定理 (Bayes' Theorem) 的經典分類器。它被冠以「單純（Naive）」之名，是因為它做了一個強烈的簡化假設：假設所有輸入特徵在給定輸出類別的條件下，彼此之間是完全獨立、互不影響的。儘管在現實生活中這個假設幾乎不可能成立，但單純貝氏在實際應用中（尤其是高維度的文本資料，如垃圾郵件過濾）卻展現出驚人的高效率與不俗的準確度。",
        math: "P(C|X) = \\frac{P(X|C) \\cdot P(C)}{P(X)} \\\\\\\\ P(X|C) = \\prod_{i=1}^{n} P(X_i|C) \\quad (\\text{特徵獨立性假設})",
        apps: ["垃圾郵件自動過濾", "文字與社群媒體情感分析", "新聞文章主題自動分類", "即時多分類快速篩選器"],
        features: [
            "計算極其迅速，在大規模文本分類中非常實用",
            "假設特徵完全獨立，可直接計算機率相乘",
            "受資料維度災難影響小，對少量資料依然表現穩定",
            "若訓練集未包含某個特徵值，機率會變為 0，需要拉普拉斯平滑"
        ]
    },
    {
        rank: 8,
        nameZh: "K 平均分群",
        nameEn: "K-Means Clustering",
        type: "unsupervised",
        typeZh: "無監督式學習",
        use: "clustering",
        useZh: "相似資料分組",
        desc: "與需要標籤的監督式學習不同，K-Means 處理的是沒有標籤的原始資料。它的任務是自動將相似的資料歸為一類，將資料點劃分為 K 個不同的群集 (Clusters)。其運作流程採取不斷反覆的 EM 疊代演算法：隨機初始化 K 個中心點；計算每個點到中心的距離並指派給最近的群集；重新計算每個群集內所有點的平均值作為新中心；重複指派與更新直到中心收斂。",
        math: "J = \\sum_{j=1}^{K} \\sum_{i \\in S_j} ||x_i - \\mu_j||^2 \\quad (\\text{最小化群集內平方誤差和})",
        apps: ["商業客戶特徵細分 (Market Segmentation)", "圖像色彩量化壓縮與像素切割", "異常網路連線偵測", "數據預處理與特徵提取"],
        features: [
            "最經典的非監督式學習分群模型，快速且簡單",
            "需要預先人為指定群數 K（常搭配手肘法 Elbow Method）",
            "對初始的中心點位置非常敏感，容易陷入局部最優解",
            "不適合處理非球形分佈的資料，且對異常值敏感"
        ]
    },
    {
        rank: 9,
        nameZh: "主成分分析",
        nameEn: "Principal Component Analysis (PCA)",
        type: "unsupervised",
        typeZh: "無監督式學習",
        use: "reduction",
        useZh: "資料特徵降維",
        desc: "在面對擁有成百上千個特徵的「維度災難」時，PCA 是最常被採用的線性降維利器。它的目的不是單純地刪除特徵，而是透過數學正交變換，將原本高度相關的高維特徵重新組合，投影到一組全新且彼此正交（互不相關）的低維特徵軸上，這些新軸被稱為主成分 (Principal Components, PC)。第一主成分承載了最多的資料變異資訊，第二主成分次之，依此類推。透過捨棄資訊量低的主成分來降低運算負荷並防過擬合。",
        math: "\\Sigma = \\frac{1}{m} X^T X \\\\\\\\ \\Sigma v = \\lambda v \\quad (\\text{計算共變異數矩陣特徵向量 } v \\text{ 與特徵值 } \\lambda)",
        apps: ["高維圖像特徵降維 (如 Eigenfaces)", "高維多元數據的 2D/3D 視覺化呈現", "消除特徵間的多元共線性", "模型特徵壓縮以加速運算"],
        features: [
            "旨在投影後的新正交軸上，儘可能保留原始資料的變異數 (Variance)",
            "轉換後的主成分彼此正交，徹底消除特徵間的多重共線性",
            "降維後的主成分常失去原本特徵的直觀物理意義",
            "有助於解決維度災難，防止模型過擬合"
        ]
    },
    {
        rank: 10,
        nameZh: "神經網路與深度學習",
        nameEn: "Neural Networks / Deep Learning",
        type: "both",
        typeZh: "監督 / 無監督",
        use: "both",
        useZh: "多用途複雜識別",
        desc: "人工神經網路 (ANN) 是受到人類大腦生物神經元網絡啟發而設計的複雜架構。它由輸入層、多個隱藏層以及輸出層組成。資料從輸入層進入，經過加權求和與非線性激活函數（如 ReLU）向後傳遞產生預測（前向傳播）。深度學習的強大之處在於透過反向傳播演算法 (Backpropagation) 結合梯度下降，從輸出端的錯誤誤差開始，由後往前計算每個權重對誤差的貢獻度，並自動調整優化參數，具備「自動特徵提取」的能力。",
        math: "a^{[l]} = \\sigma(W^{[l]} a^{[l-1]} + b^{[l]}) \\\\\\\\ W \\leftarrow W - \\alpha \\frac{\\partial L}{\\partial W} \\quad (\\text{反向傳播梯度下降更新})",
        apps: ["電腦視覺與影像辨識 (CNN)", "生成式 AI 與大型語言模型 (Transformer / ChatGPT)", "語音助手與自然語言處理 (NLP)", "自駕車感知與智慧控制系統"],
        features: [
            "具備極強的自動特徵提取能力，擺脫人工特徵工程的限制",
            "多層深層神經網路可擬合極其複雜的高維非線性函數",
            "訓練耗費巨大的計算資源 (GPU/TPU) 與龐大數據庫支援",
            "被視為黑盒子模型 (Black Box)，可解釋性相較於決策樹等極低"
        ]
    }
];

// App State Management
const appState = {
    currentTab: 'dashboard',
    filterType: 'all',
    filterUse: 'all',
    searchQuery: '',
    viewMode: 'grid', // 'grid' | 'table'
    selectedAlgoId: 1
};

// DOM Cache
const dom = {
    // Nav
    navItems: document.querySelectorAll('.nav-item'),
    tabPanels: document.querySelectorAll('.tab-panel'),
    
    // Search & Filters
    searchInput: document.getElementById('search-input'),
    typeFilters: document.getElementById('type-filters'),
    useFilters: document.getElementById('use-filters'),
    
    // View stats & mode
    visibleCount: document.getElementById('visible-count'),
    viewGridBtn: document.getElementById('view-grid-btn'),
    viewTableBtn: document.getElementById('view-table-btn'),
    algorithmsContainer: document.getElementById('algorithms-container'),
    
    // Detail Drawer
    detailDrawer: document.getElementById('detail-drawer'),
    closeDrawerBtn: document.getElementById('close-drawer-btn'),
    drawerRank: document.getElementById('drawer-rank'),
    drawerNameZh: document.getElementById('drawer-name-zh'),
    drawerNameEn: document.getElementById('drawer-name-en'),
    drawerBadgeType: document.getElementById('drawer-badge-type'),
    drawerBadgeUse: document.getElementById('drawer-badge-use'),
    drawerDesc: document.getElementById('drawer-desc'),
    drawerMath: document.getElementById('drawer-math'),
    drawerApps: document.getElementById('drawer-apps'),
    drawerFeatures: document.getElementById('drawer-features'),
    
    // Main Content
    mainContent: document.querySelector('.main-content'),
    
    // Roadmap Badges
    stageAlgoBadges: document.querySelectorAll('.stage-algo-badge')
};

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    initTabSwitching();
    initFilters();
    initViewModes();
    initDrawer();
    initRoadmap();
    renderAlgorithms();
    initSandbox(); // Initialize interactive sandbox
    initAIChatbot(); // Initialize AI assistant chatbot
});

// Tab Switching
function initTabSwitching() {
    dom.navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const tab = item.getAttribute('data-tab');
            
            // Update active nav class
            dom.navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            
            // Update active panel
            dom.tabPanels.forEach(panel => {
                panel.classList.remove('active');
                if (panel.id === `tab-${tab}`) {
                    panel.classList.add('active');
                }
            });
            
            appState.currentTab = tab;
            
            // Close drawer when switching tabs to avoid visual clutter
            closeDrawer();
        });
    });
}

// Render Algorithms based on State
function renderAlgorithms() {
    const filteredAlgos = algorithms.filter(algo => {
        // Search Filter
        const query = appState.searchQuery.toLowerCase();
        const matchesSearch = 
            algo.nameZh.toLowerCase().includes(query) ||
            algo.nameEn.toLowerCase().includes(query) ||
            algo.desc.toLowerCase().includes(query) ||
            algo.apps.some(app => app.toLowerCase().includes(query));
            
        // Type Filter
        const matchesType = appState.filterType === 'all' || algo.type === appState.filterType;
        
        // Use Filter
        let matchesUse = false;
        if (appState.filterUse === 'all') {
            matchesUse = true;
        } else if (appState.filterUse === 'regression' && (algo.use === 'regression' || algo.use === 'both')) {
            matchesUse = true;
        } else if (appState.filterUse === 'classification' && (algo.use === 'classification' || algo.use === 'both')) {
            matchesUse = true;
        } else if (appState.filterUse === 'clustering' && (algo.use === 'clustering' || algo.use === 'both')) {
            matchesUse = true;
        } else if (appState.filterUse === 'reduction' && (algo.use === 'reduction' || algo.use === 'both')) {
            matchesUse = true;
        }
        
        return matchesSearch && matchesType && matchesUse;
    });

    // Update count
    dom.visibleCount.textContent = filteredAlgos.length;

    // Clear Container
    dom.algorithmsContainer.innerHTML = '';

    if (filteredAlgos.length === 0) {
        dom.algorithmsContainer.innerHTML = `
            <div class="no-results">
                <i class="fa-solid fa-face-frown"></i>
                <p>找不到符合條件的演算法，請試試其他關鍵字或篩選條件。</p>
            </div>
        `;
        return;
    }

    if (appState.viewMode === 'grid') {
        dom.algorithmsContainer.className = 'grid-mode';
        filteredAlgos.forEach(algo => {
            const card = document.createElement('div');
            card.className = `algo-card type-${algo.type}`;
            card.innerHTML = `
                <div class="card-top">
                    <span class="rank-num">#${algo.rank}</span>
                    <span class="badge badge-${algo.type}">${algo.typeZh}</span>
                </div>
                <div class="card-body">
                    <h3>${algo.nameZh}</h3>
                    <span class="name-en">${algo.nameEn}</span>
                    <p class="use-text"><i class="fa-solid fa-bullseye"></i> ${algo.useZh}</p>
                </div>
                <div class="card-footer">
                    <span class="mechanism-preview">${algo.desc}</span>
                    <button class="more-btn">詳細解析 <i class="fa-solid fa-arrow-right-long"></i></button>
                </div>
            `;
            card.addEventListener('click', () => openDetailDrawer(algo.rank));
            dom.algorithmsContainer.appendChild(card);
        });
    } else {
        dom.algorithmsContainer.className = 'table-mode';
        filteredAlgos.forEach(algo => {
            const row = document.createElement('div');
            row.className = `table-row`;
            row.innerHTML = `
                <div class="tr-rank">#${algo.rank}</div>
                <div class="tr-name">
                    <span class="tr-name-zh">${algo.nameZh}</span>
                    <span class="tr-name-en">${algo.nameEn}</span>
                </div>
                <div><span class="badge badge-${algo.type}">${algo.typeZh}</span></div>
                <div class="tr-use"><i class="fa-solid fa-bullseye" style="color:var(--accent-cyan); font-size:0.8rem; margin-right:5px;"></i> ${algo.useZh}</div>
                <div class="tr-mechanism">${algo.desc}</div>
                <div><button class="more-btn" style="padding:0;">解析 <i class="fa-solid fa-chevron-right" style="font-size:0.75rem;"></i></button></div>
            `;
            row.addEventListener('click', () => openDetailDrawer(algo.rank));
            dom.algorithmsContainer.appendChild(row);
        });
    }
}

// Filters & Search logic
function initFilters() {
    // Search Input
    dom.searchInput.addEventListener('input', (e) => {
        appState.searchQuery = e.target.value;
        renderAlgorithms();
    });

    // Type Filter Buttons
    dom.typeFilters.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;
        
        dom.typeFilters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        appState.filterType = btn.getAttribute('data-filter');
        renderAlgorithms();
    });

    // Use Filter Buttons
    dom.useFilters.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;
        
        dom.useFilters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        appState.filterUse = btn.getAttribute('data-filter');
        renderAlgorithms();
    });
}

// View Modes Switching
function initViewModes() {
    dom.viewGridBtn.addEventListener('click', () => {
        dom.viewGridBtn.classList.add('active');
        dom.viewTableBtn.classList.remove('active');
        appState.viewMode = 'grid';
        renderAlgorithms();
    });

    dom.viewTableBtn.addEventListener('click', () => {
        dom.viewTableBtn.classList.add('active');
        dom.viewGridBtn.classList.remove('active');
        appState.viewMode = 'table';
        renderAlgorithms();
    });
}

// Detail Drawer logic
function initDrawer() {
    dom.closeDrawerBtn.addEventListener('click', closeDrawer);
    
    // Close drawer when pressing Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeDrawer();
        }
    });
}

function openDetailDrawer(rank) {
    const algo = algorithms.find(a => a.rank === rank);
    if (!algo) return;

    appState.selectedAlgoId = rank;

    // Update Drawer text contents
    dom.drawerRank.textContent = `Rank ${algo.rank}`;
    dom.drawerNameZh.textContent = algo.nameZh;
    dom.drawerNameEn.textContent = algo.nameEn;
    dom.drawerBadgeType.textContent = algo.typeZh;
    dom.drawerBadgeType.className = `badge badge-${algo.type}`;
    dom.drawerBadgeUse.textContent = algo.useZh;
    
    dom.drawerDesc.textContent = algo.desc;
    
    // Update Math formula (replace \\ with actual html breaks for view)
    dom.drawerMath.innerHTML = algo.math.replace(/\\\\\\\\/g, '<br><br>').replace(/\\\\/g, '\\');
    
    // Update Apps
    dom.drawerApps.innerHTML = '';
    algo.apps.forEach(app => {
        const li = document.createElement('li');
        li.textContent = app;
        dom.drawerApps.appendChild(li);
    });

    // Update Features
    dom.drawerFeatures.innerHTML = '';
    algo.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        dom.drawerFeatures.appendChild(li);
    });

    // Slide in
    dom.detailDrawer.classList.add('open');
    dom.mainContent.classList.add('drawer-open');
}

function closeDrawer() {
    dom.detailDrawer.classList.remove('open');
    dom.mainContent.classList.remove('drawer-open');
}

// Roadmap Actions
function initRoadmap() {
    dom.stageAlgoBadges.forEach(badge => {
        badge.addEventListener('click', (e) => {
            const algoId = parseInt(badge.getAttribute('data-algo-id'));
            if (algoId) {
                openDetailDrawer(algoId);
            }
        });
    });
}

// ----------------------------------------------------
// INTERACTIVE MACHINE LEARNING SANDBOX CODEBASE
// ----------------------------------------------------

// Cache Sandbox DOM Elements
dom.sandboxCanvas = document.getElementById('sandbox-canvas');
dom.sandboxAlgoSelect = document.getElementById('sandbox-algo-select');
dom.drawModeToggle = document.getElementById('draw-mode-toggle');
dom.sandboxRandomBtn = document.getElementById('sandbox-random-btn');
dom.sandboxClearBtn = document.getElementById('sandbox-clear-btn');
dom.paramKnnK = document.getElementById('param-knn-k');
dom.valKnnK = document.getElementById('val-knn-k');
dom.paramKmeansK = document.getElementById('param-kmeans-k');
dom.valKmeansK = document.getElementById('val-kmeans-k');
dom.kmeansStepBtn = document.getElementById('kmeans-step-btn');
dom.kmeansRunBtn = document.getElementById('kmeans-run-btn');
dom.paramSvmC = document.getElementById('param-svm-c');
dom.valSvmC = document.getElementById('val-svm-c');

// Metrics DOM
dom.metricVal1 = document.getElementById('metric-val-1');
dom.metricVal2 = document.getElementById('metric-val-2');
dom.metricVal3 = document.getElementById('metric-val-3');
dom.metricLabel1 = document.getElementById('metric-label-1');
dom.metricLabel2 = document.getElementById('metric-label-2');
dom.metricLabel3 = document.getElementById('metric-label-3');
dom.metricExtraCard = document.getElementById('metric-extra-card');
dom.sandboxFormulaText = document.getElementById('sandbox-formula-text');

// Sandbox state extension
appState.sandbox = {
    points: [], // Array of {x, y, label} (canvas coordinates 0-500, 0-400)
    drawMode: 'classA', // 'classA' | 'classB' | 'regression'
    algo: 'linear', // 'linear' | 'knn' | 'kmeans' | 'svm'
    knnK: 3,
    kmeansK: 3,
    svmC: 10,
    kmeansCentroids: [], // Array of {x, y}
    kmeansAssignments: [], // Array of cluster indices mapping to points
    kmeansState: 'none', // 'none' | 'assigned' | 'updated'
    mousePos: null // {x, y} relative to canvas
};

let sandboxCtx = null;

function initSandbox() {
    if (!dom.sandboxCanvas) return;
    
    sandboxCtx = dom.sandboxCanvas.getContext('2d');
    
    // Bind Canvas events
    dom.sandboxCanvas.addEventListener('mousedown', handleCanvasClick);
    dom.sandboxCanvas.addEventListener('mousemove', handleCanvasMouseMove);
    dom.sandboxCanvas.addEventListener('mouseleave', handleCanvasMouseLeave);
    
    // Bind Control elements
    dom.sandboxAlgoSelect.addEventListener('change', handleAlgoChange);
    dom.drawModeToggle.addEventListener('click', handleDrawModeChange);
    
    dom.sandboxRandomBtn.addEventListener('click', generateRandomPoints);
    dom.sandboxClearBtn.addEventListener('click', clearSandbox);
    
    // Sliders
    dom.paramKnnK.addEventListener('input', (e) => {
        appState.sandbox.knnK = parseInt(e.target.value);
        dom.valKnnK.textContent = appState.sandbox.knnK;
        runSandboxModels();
    });
    
    dom.paramKmeansK.addEventListener('input', (e) => {
        appState.sandbox.kmeansK = parseInt(e.target.value);
        dom.valKmeansK.textContent = appState.sandbox.kmeansK;
        resetKMeansCentroids();
        runSandboxModels();
    });
    
    dom.paramSvmC.addEventListener('input', (e) => {
        appState.sandbox.svmC = parseInt(e.target.value);
        dom.valSvmC.textContent = appState.sandbox.svmC;
        runSandboxModels();
    });
    
    // K-Means steps
    dom.kmeansStepBtn.addEventListener('click', stepKMeans);
    dom.kmeansRunBtn.addEventListener('click', runKMeansFully);
    
    // Initial run
    generateRandomPoints();
}

function handleCanvasClick(e) {
    const rect = dom.sandboxCanvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Auto-override mode based on selected algorithm type
    let finalLabel = appState.sandbox.drawMode;
    if (appState.sandbox.algo === 'linear') {
        finalLabel = 'regression';
    } else if (finalLabel === 'regression') {
        finalLabel = 'classA'; // Classification defaults
    }
    
    appState.sandbox.points.push({ x, y, label: finalLabel });
    
    // Reset K-Means assignments because dataset changed
    if (appState.sandbox.algo === 'kmeans') {
        resetKMeansCentroids();
    }
    
    runSandboxModels();
}

function handleCanvasMouseMove(e) {
    if (appState.sandbox.algo !== 'knn') return;
    
    const rect = dom.sandboxCanvas.getBoundingClientRect();
    appState.sandbox.mousePos = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
    
    drawSandbox();
}

function handleCanvasMouseLeave() {
    appState.sandbox.mousePos = null;
    drawSandbox();
}

function handleAlgoChange(e) {
    appState.sandbox.algo = e.target.value;
    
    // Hide all param panels, show current one
    document.querySelectorAll('.algo-params').forEach(panel => {
        panel.style.display = 'none';
    });
    document.getElementById(`params-${appState.sandbox.algo}`).style.display = 'block';
    
    // Auto-adjust draw buttons active states based on algo
    const drawToggle = dom.drawModeToggle;
    drawToggle.querySelectorAll('.draw-btn').forEach(btn => {
        btn.classList.remove('active');
        if (appState.sandbox.algo === 'linear' && btn.getAttribute('data-mode') === 'regression') {
            btn.classList.add('active');
            appState.sandbox.drawMode = 'regression';
        } else if (appState.sandbox.algo !== 'linear' && btn.getAttribute('data-mode') === 'classA') {
            btn.classList.add('active');
            appState.sandbox.drawMode = 'classA';
        }
    });

    if (appState.sandbox.algo === 'kmeans') {
        resetKMeansCentroids();
    }

    runSandboxModels();
}

function handleDrawModeChange(e) {
    const btn = e.target.closest('.draw-btn');
    if (!btn) return;
    
    // Prevent switching to regression mode if classification algo is active
    const mode = btn.getAttribute('data-mode');
    if (appState.sandbox.algo === 'linear' && mode !== 'regression') return;
    if (appState.sandbox.algo !== 'linear' && mode === 'regression') return;
    
    dom.drawModeToggle.querySelectorAll('.draw-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    appState.sandbox.drawMode = mode;
}

function clearSandbox() {
    appState.sandbox.points = [];
    appState.sandbox.kmeansCentroids = [];
    appState.sandbox.kmeansAssignments = [];
    appState.sandbox.kmeansState = 'none';
    appState.sandbox.mousePos = null;
    runSandboxModels();
}

function generateRandomPoints() {
    clearSandbox();
    
    const W = 500;
    const H = 400;
    
    if (appState.sandbox.algo === 'linear') {
        // Linear data with noise: Y = m*X + c
        const m = (Math.random() - 0.5) * 0.8; // slope
        const c = H * (0.3 + Math.random() * 0.4);
        for (let i = 0; i < 15; i++) {
            const x = 50 + Math.random() * (W - 100);
            const noise = (Math.random() - 0.5) * 60;
            const y = m * (x - W/2) + c + noise;
            appState.sandbox.points.push({ x, y, label: 'regression' });
        }
    } else if (appState.sandbox.algo === 'kmeans') {
        // 3 Blobs
        const centers = [
            { x: 130, y: 130 },
            { x: 370, y: 150 },
            { x: 250, y: 300 }
        ];
        centers.forEach(ctr => {
            for (let i = 0; i < 8; i++) {
                const rx = ctr.x + (Math.random() - 0.5) * 80;
                const ry = ctr.y + (Math.random() - 0.5) * 80;
                appState.sandbox.points.push({ x: rx, y: ry, label: 'classA' }); // labels ignored in kmeans
            }
        });
        resetKMeansCentroids();
    } else {
        // Classification classes: Red (left/top) vs Blue (right/bottom)
        for (let i = 0; i < 10; i++) {
            appState.sandbox.points.push({
                x: 80 + Math.random() * 180,
                y: 60 + Math.random() * 160,
                label: 'classA'
            });
            appState.sandbox.points.push({
                x: 240 + Math.random() * 180,
                y: 180 + Math.random() * 160,
                label: 'classB'
            });
        }
    }
    
    runSandboxModels();
}

function resetKMeansCentroids() {
    appState.sandbox.kmeansCentroids = [];
    appState.sandbox.kmeansAssignments = Array(appState.sandbox.points.length).fill(-1);
    appState.sandbox.kmeansState = 'none';
}

// Main execution gateway
let linearResults = { m: 0, c: 0, r2: 0, mse: 0 };
let svmResults = { w: [0, 0], b: 0, supportVectors: [] };

function runSandboxModels() {
    const pts = appState.sandbox.points;
    const algo = appState.sandbox.algo;
    
    // Update count metric
    dom.metricVal1.textContent = pts.length;
    
    if (algo === 'linear') {
        fitLinearRegression();
    } else if (algo === 'svm') {
        fitSVM();
    } else if (algo === 'kmeans') {
        fitKMeansStateUpdate();
    } else {
        // KNN is fitted dynamically on render
        dom.metricLabel2.textContent = "評估指標";
        dom.metricVal2.textContent = "即時預測";
        dom.metricLabel3.textContent = "鄰居數";
        dom.metricVal3.textContent = appState.sandbox.knnK;
        dom.metricExtraCard.style.display = 'flex';
        dom.sandboxFormulaText.innerHTML = `KNN 決策平面分類模式<br>K = ${appState.sandbox.knnK}`;
    }
    
    drawSandbox();
}

// ----------------------------------------------------
// MATH & ALGORITHMS IMPLEMENTATIONS
// ----------------------------------------------------

// 1. Linear Regression
function fitLinearRegression() {
    const pts = appState.sandbox.points.filter(p => p.label === 'regression');
    dom.metricLabel2.textContent = "均方誤差 (MSE)";
    dom.metricLabel3.textContent = "判定係數 (R²)";
    dom.metricExtraCard.style.display = 'flex';
    
    if (pts.length <= 1) {
        linearResults = { m: 0, c: 200, r2: 0, mse: 0 };
        dom.metricVal2.textContent = "-";
        dom.metricVal3.textContent = "-";
        dom.sandboxFormulaText.textContent = "請在畫布上點擊新增至少兩個點";
        return;
    }
    
    let sumX = 0, sumY = 0;
    pts.forEach(p => { sumX += p.x; sumY += p.y; });
    const meanX = sumX / pts.length;
    const meanY = sumY / pts.length;
    
    let num = 0, den = 0;
    pts.forEach(p => {
        num += (p.x - meanX) * (p.y - meanY);
        den += (p.x - meanX) ** 2;
    });
    
    const m = den === 0 ? 0 : num / den;
    const c = meanY - m * meanX;
    
    // Calculate MSE and R2
    let sse = 0, sst = 0;
    pts.forEach(p => {
        const pred = m * p.x + c;
        sse += (p.y - pred) ** 2;
        sst += (p.y - meanY) ** 2;
    });
    
    const mse = sse / pts.length;
    const r2 = sst === 0 ? 1 : 1 - (sse / sst);
    
    linearResults = { m, c, r2, mse };
    
    dom.metricVal2.textContent = Math.round(mse);
    dom.metricVal3.textContent = r2.toFixed(3);
    
    // Formula text
    // Convert canvas Y to standard math coordinate style visually
    const slopeMath = (-m).toFixed(2);
    const interceptMath = (400 - c).toFixed(0);
    dom.sandboxFormulaText.innerHTML = `Y = ${slopeMath}X + ${interceptMath}<br>(Y軸已轉化為數學笛卡爾座標格式)`;
}

// 2. K-Nearest Neighbors prediction function
function queryKNN(qx, qy, k) {
    const pts = appState.sandbox.points.filter(p => p.label !== 'regression');
    if (pts.length === 0) return { label: null, neighbors: [] };
    
    const distances = pts.map(p => {
        const d = Math.sqrt((p.x - qx) ** 2 + (p.y - qy) ** 2);
        return { point: p, dist: d };
    });
    
    distances.sort((a, b) => a.dist - b.dist);
    const nearest = distances.slice(0, Math.min(k, distances.length));
    
    let votes = { classA: 0, classB: 0 };
    nearest.forEach(n => {
        votes[n.point.label]++;
    });
    
    return {
        label: votes.classA >= votes.classB ? 'classA' : 'classB',
        neighbors: nearest.map(n => n.point)
    };
}

// 3. K-Means
function stepKMeans() {
    const pts = appState.sandbox.points;
    if (pts.length === 0) return;
    
    const K = appState.sandbox.kmeansK;
    let centroids = appState.sandbox.kmeansCentroids;
    let state = appState.sandbox.kmeansState;
    
    // Initial Centroids
    if (centroids.length === 0 || state === 'none') {
        centroids = [];
        const usedIndices = new Set();
        for (let i = 0; i < K; i++) {
            let rIdx = Math.floor(Math.random() * pts.length);
            while (usedIndices.has(rIdx) && usedIndices.size < pts.length) {
                rIdx = Math.floor(Math.random() * pts.length);
            }
            usedIndices.add(rIdx);
            const pt = pts[rIdx];
            centroids.push({ x: pt.x + (Math.random() - 0.5) * 5, y: pt.y + (Math.random() - 0.5) * 5 });
        }
        appState.sandbox.kmeansCentroids = centroids;
        appState.sandbox.kmeansAssignments = Array(pts.length).fill(-1);
        appState.sandbox.kmeansState = 'assign';
        runSandboxModels();
        return;
    }
    
    if (state === 'assign') {
        // Step 1: Assignment
        const assignments = [];
        pts.forEach((p, pIdx) => {
            let minDist = Infinity;
            let bestIdx = 0;
            centroids.forEach((c, cIdx) => {
                const d = (p.x - c.x) ** 2 + (p.y - c.y) ** 2;
                if (d < minDist) {
                    minDist = d;
                    bestIdx = cIdx;
                }
            });
            assignments.push(bestIdx);
        });
        appState.sandbox.kmeansAssignments = assignments;
        appState.sandbox.kmeansState = 'update';
    } else {
        // Step 2: Update centroids
        const assignments = appState.sandbox.kmeansAssignments;
        const newCentroids = [];
        for (let cIdx = 0; cIdx < K; cIdx++) {
            let sumX = 0, sumY = 0, count = 0;
            pts.forEach((p, pIdx) => {
                if (assignments[pIdx] === cIdx) {
                    sumX += p.x;
                    sumY += p.y;
                    count++;
                }
            });
            if (count > 0) {
                newCentroids.push({ x: sumX / count, y: sumY / count });
            } else {
                newCentroids.push(centroids[cIdx]); // Keep old if empty
            }
        }
        appState.sandbox.kmeansCentroids = newCentroids;
        appState.sandbox.kmeansState = 'assign';
    }
    
    runSandboxModels();
}

function runKMeansFully() {
    const pts = appState.sandbox.points;
    if (pts.length === 0) return;
    
    resetKMeansCentroids();
    stepKMeans(); // Init centroids
    
    let maxIter = 100;
    let centroidsChanged = true;
    let prevCentroidsStr = "";
    
    while (maxIter > 0 && centroidsChanged) {
        // Assign
        const assignments = [];
        pts.forEach(p => {
            let minDist = Infinity;
            let bestIdx = 0;
            appState.sandbox.kmeansCentroids.forEach((c, cIdx) => {
                const d = (p.x - c.x) ** 2 + (p.y - c.y) ** 2;
                if (d < minDist) {
                    minDist = d;
                    bestIdx = cIdx;
                }
            });
            assignments.push(bestIdx);
        });
        appState.sandbox.kmeansAssignments = assignments;
        
        // Update
        const newCentroids = [];
        const K = appState.sandbox.kmeansK;
        for (let cIdx = 0; cIdx < K; cIdx++) {
            let sumX = 0, sumY = 0, count = 0;
            pts.forEach((p, pIdx) => {
                if (assignments[pIdx] === cIdx) {
                    sumX += p.x;
                    sumY += p.y;
                    count++;
                }
            });
            if (count > 0) {
                newCentroids.push({ x: sumX / count, y: sumY / count });
            } else {
                newCentroids.push(appState.sandbox.kmeansCentroids[cIdx]);
            }
        }
        
        const currentCentroidsStr = JSON.stringify(newCentroids);
        centroidsChanged = currentCentroidsStr !== prevCentroidsStr;
        prevCentroidsStr = currentCentroidsStr;
        appState.sandbox.kmeansCentroids = newCentroids;
        
        maxIter--;
    }
    
    appState.sandbox.kmeansState = 'assign';
    runSandboxModels();
}

function fitKMeansStateUpdate() {
    dom.metricLabel2.textContent = "聚類狀態";
    dom.metricLabel3.textContent = "群集個數 (K)";
    dom.metricExtraCard.style.display = 'flex';
    
    const K = appState.sandbox.kmeansK;
    dom.metricVal3.textContent = K;
    
    const state = appState.sandbox.kmeansState;
    if (state === 'none') {
        dom.metricVal2.textContent = "未啟動";
        dom.sandboxFormulaText.textContent = "點擊「下一步疊代」以隨機配置群集中心。";
    } else if (state === 'assign') {
        dom.metricVal2.textContent = "等待歸類";
        dom.sandboxFormulaText.textContent = "目前展示為更新後的中心點，點擊下一步將資料點重新劃歸最近的中心。";
    } else {
        dom.metricVal2.textContent = "已歸類";
        dom.sandboxFormulaText.textContent = "已完成點的劃歸，下一步將重新計算群集內的幾何中心。";
    }
}

// 4. Support Vector Machine solver
function fitSVM() {
    const pts = appState.sandbox.points.filter(p => p.label !== 'regression');
    dom.metricLabel2.textContent = "超參數";
    dom.metricLabel3.textContent = "支持向量個數";
    dom.metricExtraCard.style.display = 'flex';
    
    if (pts.length === 0) {
        svmResults = { w: [0, 0], b: 0, supportVectors: [] };
        dom.metricVal2.textContent = `C = ${appState.sandbox.svmC}`;
        dom.metricVal3.textContent = "0";
        dom.sandboxFormulaText.textContent = "請在畫布上繪製紅/藍雙類別數據點。";
        return;
    }
    
    // Pegasos Subgradient Descent on Linear SVM
    let w = [0, 0];
    let b = 0;
    const epochs = 350;
    const lr = 0.05;
    const lambda = 0.01;
    const C = appState.sandbox.svmC;
    
    // Normalize coordinates for mathematical robustness
    const svmData = pts.map(p => {
        return {
            x: (p.x - 250) / 250, // Normalized -1 to 1
            y: (200 - p.y) / 200, // Normalized 1 to -1
            target: p.label === 'classA' ? 1 : -1,
            ref: p
        };
    });
    
    for (let epoch = 0; epoch < epochs; epoch++) {
        svmData.forEach(p => {
            const margin = p.target * (w[0] * p.x + w[1] * p.y + b);
            if (margin < 1) {
                w[0] = w[0] - lr * (lambda * w[0] - C * p.target * p.x);
                w[1] = w[1] - lr * (lambda * w[1] - C * p.target * p.y);
                b = b + lr * C * p.target;
            } else {
                w[0] = w[0] - lr * lambda * w[0];
                w[1] = w[1] - lr * lambda * w[1];
            }
        });
    }
    
    // Support Vectors verification
    const supportVectors = [];
    svmData.forEach(p => {
        const margin = p.target * (w[0] * p.x + w[1] * p.y + b);
        if (margin <= 1.05) {
            supportVectors.push(p.ref);
        }
    });
    
    svmResults = { w, b, supportVectors };
    
    dom.metricVal2.textContent = `C = ${C}`;
    dom.metricVal3.textContent = supportVectors.length;
    
    // Draw mathematical status
    const slopeMath = w[1] !== 0 ? (-w[0] / w[1]).toFixed(2) : "∞";
    dom.sandboxFormulaText.innerHTML = `分類平面斜率: ${slopeMath}<br>SVM正則化求解已收斂`;
}

// ----------------------------------------------------
// CANVAS RENDERING
// ----------------------------------------------------
function drawSandbox() {
    if (!sandboxCtx) return;
    const canvas = dom.sandboxCanvas;
    const ctx = sandboxCtx;
    const W = canvas.width;
    const H = canvas.height;
    const algo = appState.sandbox.algo;
    const pts = appState.sandbox.points;
    
    ctx.clearRect(0, 0, W, H);
    
    // Draw decision boundary map first (in background)
    if (pts.length > 0) {
        if (algo === 'knn') {
            drawKNNDecisionBoundary(ctx, W, H);
        } else if (algo === 'svm') {
            drawSVMDecisionBoundary(ctx, W, H);
        }
    }
    
    // Draw coordinate axes helper for Linear Regression
    if (algo === 'linear') {
        ctx.strokeStyle = 'rgba(255,255,255,0.06)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, H/2); ctx.lineTo(W, H/2);
        ctx.moveTo(W/2, 0); ctx.lineTo(W/2, H);
        ctx.stroke();
    }
    
    // Draw K-Means clusters background colors
    if (algo === 'kmeans' && appState.sandbox.kmeansCentroids.length > 0) {
        drawKMeansCentroidZones(ctx, W, H);
    }
    
    // Draw Model Outputs (Regression lines or SVM boundaries)
    if (algo === 'linear' && pts.length > 1) {
        drawLinearRegressionLine(ctx, W, H);
    } else if (algo === 'svm' && pts.length > 0) {
        drawSVMBoundaryLines(ctx, W, H);
    }
    
    // Draw connections for KNN Query hover state
    if (algo === 'knn' && appState.sandbox.mousePos && pts.length > 0) {
        drawKNNConnections(ctx);
    }
    
    // Draw Data Points
    pts.forEach((p, idx) => {
        let color = '#10b981'; // green for regression
        if (algo === 'kmeans') {
            // Color according to cluster index
            const cIdx = appState.sandbox.kmeansAssignments[idx];
            color = getClusterColor(cIdx);
        } else {
            if (p.label === 'classA') color = '#ef4444'; // red
            if (p.label === 'classB') color = '#3b82f6'; // blue
        }
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        
        // Highlight if Support Vector
        if (algo === 'svm' && svmResults.supportVectors.includes(p)) {
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 9, 0, Math.PI * 2);
            ctx.stroke();
        }
    });
    
    // Draw K-Means Centroids (Amber/Purple etc.)
    if (algo === 'kmeans' && appState.sandbox.kmeansCentroids.length > 0) {
        appState.sandbox.kmeansCentroids.forEach((c, cIdx) => {
            ctx.strokeStyle = getClusterColor(cIdx);
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(c.x - 8, c.y - 8); ctx.lineTo(c.x + 8, c.y + 8);
            ctx.moveTo(c.x + 8, c.y - 8); ctx.lineTo(c.x - 8, c.y + 8);
            ctx.stroke();
            
            // Outer glow circle
            ctx.strokeStyle = 'rgba(255,255,255,0.2)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(c.x, c.y, 14, 0, Math.PI * 2);
            ctx.stroke();
        });
    }
}

// Help function: colors for clusters/centroids
function getClusterColor(idx) {
    const colors = ['#f59e0b', '#06b6d4', '#10b981', '#ec4899', '#a855f7', '#3b82f6'];
    if (idx < 0 || idx >= colors.length) return '#a0a5c0'; // Gray
    return colors[idx];
}

// 1. Draw Linear Regression line
function drawLinearRegressionLine(ctx, W, H) {
    const { m, c } = linearResults;
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 3;
    
    ctx.beginPath();
    ctx.moveTo(0, c);
    ctx.lineTo(W, m * W + c);
    ctx.stroke();
    
    // Highlight trend line glow
    ctx.strokeStyle = 'rgba(16, 185, 129, 0.15)';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(0, c);
    ctx.lineTo(W, m * W + c);
    ctx.stroke();
}

// 2. KNN query decision boundary background
function drawKNNDecisionBoundary(ctx, W, H) {
    const stepX = 10;
    const stepY = 8;
    const k = appState.sandbox.knnK;
    
    for (let x = 0; x < W; x += stepX) {
        for (let y = 0; y < H; y += stepY) {
            const pred = queryKNN(x + stepX/2, y + stepY/2, k);
            if (pred.label === 'classA') {
                ctx.fillStyle = 'rgba(239, 68, 68, 0.04)'; // Soft Red
            } else if (pred.label === 'classB') {
                ctx.fillStyle = 'rgba(59, 130, 246, 0.04)'; // Soft Blue
            } else {
                continue;
            }
            ctx.fillRect(x, y, stepX, stepY);
        }
    }
}

// 3. Draw lines connecting query point to its K neighbors in KNN hover state
function drawKNNConnections(ctx) {
    const q = appState.sandbox.mousePos;
    const k = appState.sandbox.knnK;
    const pred = queryKNN(q.x, q.y, k);
    
    if (!pred.label) return;
    
    // Draw query point crosshair
    ctx.fillStyle = pred.label === 'classA' ? '#ef4444' : '#3b82f6';
    ctx.beginPath();
    ctx.arc(q.x, q.y, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Connect lines to neighbors
    pred.neighbors.forEach(pt => {
        ctx.strokeStyle = 'rgba(255,255,255,0.25)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(q.x, q.y);
        ctx.lineTo(pt.x, pt.y);
        ctx.stroke();
        ctx.setLineDash([]);
    });
}

// 4. K-Means Voronoi diagram like zones
function drawKMeansCentroidZones(ctx, W, H) {
    const centroids = appState.sandbox.kmeansCentroids;
    const stepX = 15;
    const stepY = 12;
    
    for (let x = 0; x < W; x += stepX) {
        for (let y = 0; y < H; y += stepY) {
            let minDist = Infinity;
            let bestIdx = 0;
            centroids.forEach((c, cIdx) => {
                const d = (x + stepX/2 - c.x) ** 2 + (y + stepY/2 - c.y) ** 2;
                if (d < minDist) {
                    minDist = d;
                    bestIdx = cIdx;
                }
            });
            ctx.fillStyle = getClusterColor(bestIdx) + "07"; // Hex color + transparency (approx 4%)
            ctx.fillRect(x, y, stepX, stepY);
        }
    }
}

// 5. Draw SVM decision boundary background
function drawSVMDecisionBoundary(ctx, W, H) {
    const { w, b } = svmResults;
    if (w[0] === 0 && w[1] === 0) return;
    
    const stepX = 10;
    const stepY = 8;
    
    for (let x = 0; x < W; x += stepX) {
        for (let y = 0; y < H; y += stepY) {
            const nx = (x + stepX/2 - 250) / 250;
            const ny = (200 - (y + stepY/2)) / 200;
            const score = w[0] * nx + w[1] * ny + b;
            
            if (score > 0) {
                ctx.fillStyle = 'rgba(239, 68, 68, 0.04)'; // classA
            } else {
                ctx.fillStyle = 'rgba(59, 130, 246, 0.04)'; // classB
            }
            ctx.fillRect(x, y, stepX, stepY);
        }
    }
}

// 6. Draw decision boundary line and margins for SVM
function drawSVMBoundaryLines(ctx, W, H) {
    const { w, b } = svmResults;
    if (w[0] === 0 && w[1] === 0) return;
    
    function getYForX(x, offsetScore = 0) {
        if (w[1] === 0) return 0;
        const nx = (x - 250) / 250;
        const ny = (-w[0] * nx - b + offsetScore) / w[1];
        return 200 - ny * 200;
    }
    
    // Draw Separating Hyperplane (Decision Boundary)
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, getYForX(0, 0));
    ctx.lineTo(W, getYForX(W, 0));
    ctx.stroke();
    
    // Draw Margin lines (w^T x + b = 1 and -1)
    ctx.beginPath();
    ctx.moveTo(0, getYForX(0, 1));
    ctx.lineTo(W, getYForX(W, 1));
    ctx.stroke();
    
    // Margin -1 (class B boundary)
    ctx.beginPath();
    ctx.moveTo(0, getYForX(0, -1));
    ctx.lineTo(W, getYForX(W, -1));
    ctx.stroke();
    
    ctx.setLineDash([]);
}

// ----------------------------------------------------
// AI ASSISTANT CHATBOT INTEGRATION
// ----------------------------------------------------

function initAIChatbot() {
    // Cache Chatbot DOM
    dom.chatWidget = document.getElementById('ai-chat-widget');
    dom.chatTriggerBtn = document.getElementById('chat-trigger-btn');
    dom.chatWindowPanel = document.getElementById('chat-window-panel');
    dom.chatStatusText = document.getElementById('chat-status-text');
    dom.openApiSettingsBtn = document.getElementById('open-api-settings-btn');
    dom.closeChatBtn = document.getElementById('close-chat-btn');
    dom.chatMessagesContainer = document.getElementById('chat-messages-container');
    dom.chatSuggestionsList = document.getElementById('chat-suggestions-list');
    dom.typingIndicator = document.getElementById('typing-indicator');
    dom.chatInput = document.getElementById('chat-input');
    dom.chatSendBtn = document.getElementById('chat-send-btn');
    dom.apiSettingsPanel = document.getElementById('api-settings-panel');
    dom.closeApiSettingsBtn = document.getElementById('close-api-settings-btn');
    dom.geminiApiKeyInput = document.getElementById('gemini-api-key-input');
    dom.saveApiKeyBtn = document.getElementById('save-api-key-btn');
    dom.keyStatusLabel = document.getElementById('key-status-label');
    dom.deleteApiKeyBtn = document.getElementById('delete-api-key-btn');

    if (!dom.chatTriggerBtn) return;

    // Load API Key from localStorage
    appState.sandbox.geminiApiKey = localStorage.getItem('gemini_api_key') || '';
    appState.sandbox.chatHistory = [];
    appState.sandbox.chatOpen = false;
    appState.sandbox.settingsOpen = false;

    // Initialize API key status UI
    updateApiKeyUI();

    // Event Listeners for Open/Close
    dom.chatTriggerBtn.addEventListener('click', toggleChatWindow);
    dom.closeChatBtn.addEventListener('click', closeChatWindow);
    dom.openApiSettingsBtn.addEventListener('click', openSettingsPanel);
    dom.closeApiSettingsBtn.addEventListener('click', closeSettingsPanel);

    // Save and Delete API key events
    dom.saveApiKeyBtn.addEventListener('click', saveApiKey);
    dom.deleteApiKeyBtn.addEventListener('click', deleteApiKey);

    // Send Message events
    dom.chatSendBtn.addEventListener('click', handleUserSendMessage);
    dom.chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            handleUserSendMessage();
        }
    });

    // Quick suggestion click handlers
    dom.chatSuggestionsList.addEventListener('click', (e) => {
        const btn = e.target.closest('.suggest-btn');
        if (!btn) return;
        const question = btn.getAttribute('data-question');
        dom.chatInput.value = question;
        handleUserSendMessage();
    });
}

function toggleChatWindow() {
    appState.sandbox.chatOpen = !appState.sandbox.chatOpen;
    if (appState.sandbox.chatOpen) {
        dom.chatWindowPanel.style.display = 'flex';
        // Auto scroll to bottom
        setTimeout(() => {
            dom.chatMessagesContainer.scrollTop = dom.chatMessagesContainer.scrollHeight;
        }, 100);
        // Hide pulse ring when opened
        const ring = dom.chatTriggerBtn.querySelector('.pulse-ring');
        if (ring) ring.style.display = 'none';
    } else {
        closeChatWindow();
    }
}

function closeChatWindow() {
    dom.chatWindowPanel.style.display = 'none';
    dom.apiSettingsPanel.style.display = 'none';
    appState.sandbox.chatOpen = false;
    appState.sandbox.settingsOpen = false;
}

function openSettingsPanel() {
    dom.apiSettingsPanel.style.display = 'flex';
    dom.chatWindowPanel.style.display = 'none';
    appState.sandbox.settingsOpen = true;
}

function closeSettingsPanel() {
    dom.apiSettingsPanel.style.display = 'none';
    dom.chatWindowPanel.style.display = 'flex';
    appState.sandbox.settingsOpen = false;
}

function saveApiKey() {
    const key = dom.geminiApiKeyInput.value.trim();
    if (!key) return;

    localStorage.setItem('gemini_api_key', key);
    appState.sandbox.geminiApiKey = key;
    dom.geminiApiKeyInput.value = '';
    
    updateApiKeyUI();
    closeSettingsPanel();

    appendBotMessage("金鑰儲存成功！我現在已經切換為 **Gemini AI 智能對話模式** 🤖。您可以跟我聊任何機器學習或沙盒程式碼問題囉！");
}

function deleteApiKey() {
    localStorage.removeItem('gemini_api_key');
    appState.sandbox.geminiApiKey = '';
    
    updateApiKeyUI();
    closeSettingsPanel();
    
    appendBotMessage("API 金鑰已清除。我已回到 **本地知識庫模式**。");
}

function updateApiKeyUI() {
    const key = appState.sandbox.geminiApiKey;
    if (key) {
        dom.keyStatusLabel.textContent = "金鑰已設定 (已啟用)";
        dom.keyStatusLabel.className = "status-active";
        dom.deleteApiKeyBtn.style.display = 'inline-block';
        dom.chatStatusText.textContent = "Gemini AI 智能模式";
        dom.chatStatusText.className = "status-indicator online ai-active";
    } else {
        dom.keyStatusLabel.textContent = "尚未設定金鑰";
        dom.keyStatusLabel.className = "status-inactive";
        dom.deleteApiKeyBtn.style.display = 'none';
        dom.chatStatusText.textContent = "本地知識庫模式";
        dom.chatStatusText.className = "status-indicator online";
    }
}

function handleUserSendMessage() {
    const query = dom.chatInput.value.trim();
    if (!query) return;

    // Append user message bubble
    appendUserMessage(query);
    dom.chatInput.value = '';

    // Scroll to bottom
    dom.chatMessagesContainer.scrollTop = dom.chatMessagesContainer.scrollHeight;

    // Hide suggestions list to keep chat tidy
    dom.chatSuggestionsList.style.display = 'none';

    // Show Typing Indicator
    dom.typingIndicator.style.display = 'flex';

    if (appState.sandbox.geminiApiKey) {
        // Query Google Gemini API
        queryGeminiAPI(query);
    } else {
        // Query Local rule-based dictionary
        queryLocalDatabase(query);
    }
}

function appendUserMessage(text) {
    const msg = document.createElement('div');
    msg.className = "message msg-user";
    msg.innerHTML = `<div class="message-bubble">${escapeHTML(text)}</div>`;
    dom.chatMessagesContainer.appendChild(msg);
}

function appendBotMessage(text) {
    const msg = document.createElement('div');
    msg.className = "message msg-ai";
    msg.innerHTML = `<div class="message-bubble">${parseMarkdownLocal(text)}</div>`;
    dom.chatMessagesContainer.appendChild(msg);
    dom.chatMessagesContainer.scrollTop = dom.chatMessagesContainer.scrollHeight;
}

// Very simple client-side markdown formatter for helper text
function parseMarkdownLocal(text) {
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`(.*?)`/g, '<code>$1</code>')
        .replace(/\n/g, '<br>');
}

function escapeHTML(text) {
    const p = document.createElement('p');
    p.textContent = text;
    return p.innerHTML;
}

// Local knowledge dictionary
const localQA = {
    "線性迴歸": "**線性迴歸 (Linear Regression)** 是用於預測連續型數值的基礎算法。其目標是尋找一條最佳擬合直線 $Y = mX + c$，最小化預測殘差平方和 (OLS)。可以用於預測房價或營收。",
    "邏輯迴歸": "**邏輯迴歸 (Logistic Regression)** 常用於二元分類（如是否患病）。它在線性公式外，套用了一個非線性的 Sigmoid 函數，將任何實數壓縮在 0 與 1 之間，代表分類機率。",
    "決策樹": "**決策樹 (Decision Tree)** 模擬人類決策流程，根據資訊增益或吉尼係數，將特徵層層切割。具備優良的可解釋性，但極易產生過擬合。",
    "隨機森林": "**隨機森林 (Random Forest)** 是一種集成學習算法。它建立多棵獨立決策樹，在預測時以投票或平均值輸出結果，能顯著降低單棵樹容易過擬合的問題。",
    "支持向量機": "**支持向量機 (SVM)** 在特徵空間中尋找最佳超平面，使分類間的邊界 (Margin) 最大化。可藉由核函數處理複雜的高維非線性分類。",
    "最近鄰": "**K-最近鄰 (KNN)** 是一種直觀的分類/迴歸算法。新資料點的類別取決於空間中距離最近的 K 個鄰居的投票。對特徵標準化極為敏感。",
    "貝氏": "**單純貝氏 (Naive Bayes)** 是基於貝氏定理與特徵完全獨立假設的分類模型，運算極快，特別適合處理高維文本分類（如垃圾郵件過濾）。",
    "分群": "**K-Means 分群** 是非監督式學習算法。它藉由不斷 EM 疊代「分配中心 -> 更新平均位置」，將資料分成 K 個相似的群集。需要預設 K 值。",
    "主成分": "**主成分分析 (PCA)** 是經典的特徵線性降維工具。透過正交投影變換將高維資料映射到低維軸上，保留最大變異數並消除特徵共線性。",
    "深度學習": "**神經網路與深度學習 (Neural Networks)** 受到大腦生物神經元啟發。包含輸入、隱藏與輸出層，並利用前向傳播與反向傳播梯度下降來自動提取複雜特徵。",
    "路徑": "**初學者學習路徑黃金路徑**：\n第一階段：建立基石（線性迴歸、邏輯迴歸、KNN）\n第二階段：跨入樹狀模型與機率（決策樹、隨機森林、單純貝氏）\n第三階段：進階幾何與分群降維（SVM、K-Means、PCA）\n第四階段：探索神經網路與深度學習。",
    "沙盒": "**互動沙盒操作說明**：\n1. 在畫布點擊即可繪製點（左上角切換紅/藍類別，或綠色迴歸點）。\n2. 右側選擇演算法並拉動滑桿調整超參數（如 K 值、C 值）。\n3. 畫布會即時更新分割邊界或線條。K-Means 可使用「下一步」觀看動態收斂過程。"
};

function queryLocalDatabase(query) {
    setTimeout(() => {
        dom.typingIndicator.style.display = 'none';
        
        let response = "";
        let matched = false;
        
        // Match keywords
        for (let key in localQA) {
            if (query.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(query.toLowerCase())) {
                response = localQA[key];
                matched = true;
                break;
            }
        }

        if (!matched) {
            response = "目前處於【本地知識庫模式】。您可以點選快捷按鈕詢問演算法，或者在設定中填入您的 **Gemini API Key** 啟用完整的 AI 對話功能喔！\n\n您可以使用免費的 API Key，這可以回答您所有的機器學習與代碼問題。";
        }
        
        appendBotMessage(response);
    }, 600);
}

function queryGeminiAPI(query) {
    const apiKey = appState.sandbox.geminiApiKey;
    
    // Add new user question to history
    appState.sandbox.chatHistory.push({
        role: "user",
        parts: [{ text: query }]
    });

    // Limit history length to last 12 messages to avoid token blowup
    if (appState.sandbox.chatHistory.length > 12) {
        appState.sandbox.chatHistory = appState.sandbox.chatHistory.slice(-12);
    }

    const systemPrompt = "系統提示：你是一位熱心且專業的機器學習助教。你的任務是回答用戶關於本網頁所整理的十種演算法（線性迴歸、邏輯迴歸、決策樹、隨機森林、SVM、KNN、單純貝氏、K-Means、PCA、深度學習）或關於二維互動沙盒的使用問題。請使用繁體中文回覆，且回答要簡潔有力、易於理解，適合初學者學習。";
    
    // Prepare contents payload
    const contents = [
        {
            role: "user",
            parts: [{ text: systemPrompt }]
        },
        {
            role: "model",
            parts: [{ text: "理解，我會以繁體中文且簡明扼要地解答演算法與沙盒的操作問題！" }]
        },
        ...appState.sandbox.chatHistory
    ];

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ contents })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`API returned status ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        dom.typingIndicator.style.display = 'none';
        
        let reply = "";
        try {
            reply = data.candidates[0].content.parts[0].text;
        } catch (e) {
            reply = "抱歉，解析 AI 回覆時出錯，請再試一次。";
        }
        
        // Append response to history
        appState.sandbox.chatHistory.push({
            role: "model",
            parts: [{ text: reply }]
        });
        
        appendBotMessage(reply);
    })
    .catch(error => {
        dom.typingIndicator.style.display = 'none';
        console.error("Gemini API Error:", error);
        
        // Remove failed query from history
        appState.sandbox.chatHistory.pop();
        
        appendBotMessage(`⚠️ **對接 Gemini 失敗**：\n\n1. 請確認您的 API Key 是否正確且未過期。\n2. 請確認網路連線正常。\n\n目前的錯誤訊息為：${error.message}`);
    });
}

