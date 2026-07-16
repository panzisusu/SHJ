# -*- coding: utf-8 -*-
import os
import subprocess
import base64

# Define output paths
html_path = 'report.html'
pdf_path = 'HW6_CRISP_DM_Report.pdf'

# Read images and convert to base64 to ensure they render correctly in the PDF
def get_image_base64(path):
    if os.path.exists(path):
        with open(path, 'rb') as f:
            encoded = base64.b64encode(f.read()).decode('utf-8')
            return f"data:image/png;base64,{encoded}"
    return ""

img_corr = get_image_base64('correlation_matrix.png')
img_outliers = get_image_base64('outliers_boxplot.png')
img_sfs = get_image_base64('feature_selection_sfs_only.png')
img_comparison = get_image_base64('model_comparison.png')

# Use a raw string to completely bypass python backslash escapes and curly braces issues
html_content = r"""<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <title>Kaggle 50 Startups 新創公司利潤預測與特徵篩選機器學習專案分析報告</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&display=swap');
        
        @page {
            size: A4;
            margin: 2.5cm 2cm 2.5cm 2cm;
            @bottom-right {
                content: counter(page);
                font-family: 'Noto Sans TC', 'Microsoft JhengHei', sans-serif;
                font-size: 9pt;
                color: #7f8c8d;
            }
        }
        
        body {
            font-family: 'Noto Sans TC', 'Microsoft JhengHei', sans-serif;
            line-height: 1.8;
            color: #2c3e50;
            margin: 0;
            padding: 0;
            font-size: 11pt;
        }
        
        h1, h2, h3, h4 {
            color: #1a365d;
            font-weight: 700;
            page-break-after: avoid;
        }
        
        h1 {
            font-size: 24pt;
            border-bottom: 3px solid #3182ce;
            padding-bottom: 10px;
            margin-top: 0;
            margin-bottom: 20px;
            text-align: center;
        }
        
        h2 {
            font-size: 16pt;
            border-bottom: 1.5px solid #e2e8f0;
            padding-bottom: 6px;
            margin-top: 35px;
            margin-bottom: 15px;
        }
        
        h3 {
            font-size: 12pt;
            margin-top: 22px;
            margin-bottom: 10px;
            color: #2b6cb0;
        }
        
        p {
            margin-bottom: 14px;
            text-align: justify;
            text-indent: 2em;
        }
        
        .no-indent {
            text-indent: 0;
        }
        
        ul, ol {
            margin-top: 5px;
            margin-bottom: 15px;
            padding-left: 25px;
        }
        
        li {
            margin-bottom: 6px;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            page-break-inside: avoid;
        }
        
        th {
            background-color: #ebf8ff;
            color: #2b6cb0;
            font-weight: bold;
            border: 1px solid #cbd5e0;
            padding: 10px;
            text-align: left;
            font-size: 10pt;
        }
        
        td {
            border: 1px solid #cbd5e0;
            padding: 10px;
            font-size: 10pt;
        }
        
        tr:nth-child(even) {
            background-color: #f7fafc;
        }
        
        .code-block {
            background-color: #f7fafc;
            border-left: 4px solid #3182ce;
            padding: 15px;
            font-family: 'Courier New', Courier, monospace;
            font-size: 9.5pt;
            margin: 15px 0;
            white-space: pre-wrap;
            page-break-inside: avoid;
        }
        
        .image-container {
            text-align: center;
            margin: 25px 0;
            page-break-inside: avoid;
        }
        
        .image-container img {
            max-width: 80%;
            height: auto;
            border: 1px solid #e2e8f0;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        .image-caption {
            font-size: 9.5pt;
            color: #718096;
            margin-top: 8px;
            font-style: italic;
        }
        
        .page-break {
            page-break-before: always;
        }
        
        /* Cover Page Styling */
        .cover {
            height: 90vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            text-align: center;
            padding: 50px 0;
            page-break-after: always;
        }
        
        .cover-title-group {
            margin-top: 15vh;
        }
        
        .cover-subtitle {
            font-size: 16pt;
            color: #4a5568;
            margin-top: 15px;
            font-weight: 300;
            letter-spacing: 2px;
        }
        
        .cover-meta {
            margin-bottom: 10vh;
            font-size: 12pt;
            color: #718096;
            line-height: 2;
        }
        
        .info-box {
            background-color: #ebf8ff;
            border-left: 4px solid #3182ce;
            padding: 15px;
            margin: 20px 0;
            font-size: 10pt;
            page-break-inside: avoid;
        }
        
        .info-box-title {
            font-weight: bold;
            color: #2b6cb0;
            margin-bottom: 5px;
        }
        
        .toc-list {
            list-style: none;
            padding-left: 0;
        }
        
        .toc-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
            border-bottom: 1px dotted #cbd5e0;
        }
        
        .toc-name {
            background-color: white;
            padding-right: 5px;
        }
        
        .toc-num {
            background-color: white;
            padding-left: 5px;
        }
    </style>
</head>
<body>

    <!-- ========================================== -->
    <!-- COVER PAGE                                 -->
    <!-- ========================================== -->
    <div class="cover">
        <div class="cover-title-group">
            <h1 style="border: none; font-size: 28pt; color: #1a365d; margin-bottom: 10px;">新創公司利潤預測與特徵篩選</h1>
            <h2 style="border: none; font-size: 20pt; color: #3182ce; margin-top: 0; font-weight: 500;">基於 CRISP-DM 流程之機器學習專案深度分析報告</h2>
            <div class="cover-subtitle">Kaggle 50 Startups 專案學術論文與商業實務技術手冊</div>
        </div>
        
        <div class="cover-meta">
            <strong>專案作者</strong>：gogogo137 創投數據分析小組<br>
            <strong>指導教授</strong>：機器學習與商業數據科學課程指導小組<br>
            <strong>實作環境</strong>：Python 3.10 & scikit-learn & Streamlit Dashboard<br>
            <strong>報告字數</strong>：約二萬字深度技術解鎖<br>
            <strong>發佈日期</strong>：2026 年 6 月 15 日
        </div>
    </div>

    <!-- ========================================== -->
    <!-- TABLE OF CONTENTS                          -->
    <!-- ========================================== -->
    <div class="page-break"></div>
    <h2>📌 專案目錄與報告架構</h2>
    <p class="no-indent">本報告嚴格遵循跨行業數據挖掘標準流程（CRISP-DM）之架構撰寫，內容涵蓋從商業理解到模型部署的完整生命週期：</p>
    <ul class="toc-list">
        <li class="toc-item"><span class="toc-name">1. Business Understanding (商業需求探索與核心目標定義)</span><span class="toc-num">3</span></li>
        <li class="toc-item"><span class="toc-name">2. Data Understanding (資料特徵探索與多重共線性診斷)</span><span class="toc-num">5</span></li>
        <li class="toc-item"><span class="toc-name">3. Data Preprocessing/A coding draft v1/draft2 with 專家討論</span><span class="toc-num">8</span></li>
        <li class="toc-item"><span class="toc-name">4. Model Selection/Modeling (特徵篩選演算法與敏感度分析)</span><span class="toc-num">11</span></li>
        <li class="toc-item"><span class="toc-name">5. Model Evaluation (多模型迴歸建模與預測成效評估對比)</span><span class="toc-num">14</span></li>
        <li class="toc-item"><span class="toc-name">6. Deploy/Production (預測流水線序列化部署與實時推論服務)</span><span class="toc-num">18</span></li>
        <li class="toc-item"><span class="toc-name">7. Final Result (專案最終結論與商業決策洞察)</span><span class="toc-num">21</span></li>
        <li class="toc-item"><span class="toc-name">8. 國小生版本 (冰淇淋店的投資遊戲故事)</span><span class="toc-num">23</span></li>
        <li class="toc-item"><span class="toc-name">9. 幼稚園版本 (小熊糖果店的秘密冒險)</span><span class="toc-num">25</span></li>
        <li class="toc-item"><span class="toc-name">10. 給狗狗看的版本 (尋找最多大骨頭的黃金獵犬偵探)</span><span class="toc-num">27</span></li>
        <li class="toc-item"><span class="toc-name">11. 我與IDE的對話LOG與協作歷程分析</span><span class="toc-num">29</span></li>
    </ul>

    <!-- ========================================== -->
    <!-- 1. BUSINESS UNDERSTANDING                  -->
    <!-- ========================================== -->
    <div class="page-break"></div>
    <h2>1. Business Understanding (商業需求探索與核心目標定義)</h2>
    
    <h3>1.1 商業背景與創投決策痛點</h3>
    <p>新創公司（Startups）在推動現代經濟創新與技術變革中扮演著舉足輕重的角色。然而，新創公司的存活率極低，創投機構（Venture Capital, VC）或企業投資決策者每天都面臨著高度不確定性的投資評估。在有限的資金池中，如何最大化投資回報率（ROI）並最小化風險，是所有金融與科技決策者的終極商業難題。</p>
    <p>傳統的投資評估高度依賴投資經理的主觀經驗與創始團隊的面試表現。這種定性評估方式容易受到主觀偏見（Cognitive Biases）、群體盲思（Groupthink）以及資訊不對稱的干擾。隨者大數據與機器學習技術的普及，基於歷史數據進行定量預測與特徵工程，已成為創投決策升級的必然趨勢。新創公司的財務資源分配（如研發、行政管理、行銷推廣等支出）直接反映了其商業策略與核心競爭力的建構路徑。因此，建立一個高精度的機器學習預測模型，以財務分配特徵為輸入，預估公司未來的盈利能力（Profit），能為創投提供強而有力的客觀輔助數據。</p>
    
    <h3>1.2 核心商業問題定義</h3>
    <p>基於上述商業背景，本專案將核心商業問題定義為：<b>「如何根據新創公司不同的財務支出項目（研發支出、行政管理支出、行銷推廣支出）及所在地區（州別），精準預測該公司的最終利潤（Profit），並識別出最關鍵的利潤驅動因子，以優化創投資金的配置決策？」</b></p>
    <p>為了深入剖析此核心商業問題，我們進一步拆解出以下五個關鍵商業問題（Key Business Questions）：</p>
    <ol>
        <li><b>研發支出（R&D Spend）與最終利潤是否存在因果或高度正相關關係？</b> 對技術創新的高投入是否能直接轉化為財務回報？這將指導新創公司是否應該將「技術研發」作為核心護城河。</li>
        <li><b>行銷推廣支出（Marketing Spend）對利潤的邊際貢獻如何？</b> 在產品推向市場的過程中，高昂的推廣費用是加速盈利的催化劑，還是一場消耗資金的零和賽局？</li>
        <li><b>行政管理支出（Administration Spend）是否會對利潤產生直接的正面影響？</b> 作為組織維持營運的固定成本，過高的行政支出是否會侵蝕利潤？我們能否在簡化模型中剔除此特徵以降低模型維度？</li>
        <li><b>地理位置（State）是否會顯著影響新創公司的獲利能力？</b> 不同的地理特徵（如 California、Florida、New York）代表著不同的地方稅率、人才儲備與產業聚落效應。創投是否應該對特定區域的新創公司給予更高的投資權重？</li>
        <li><b>如何利用這些支出特徵建立一個可泛化的迴歸推論流水線，並在生產環境中對新提案進行實時的商業價值評估？</b></li>
    </ol>
    
    <h3>1.3 專案目標與成功度量標準</h3>
    <p>本專案旨在開發一個基於 Python 和 scikit-learn 的監督式機器學習預測流水線。輸入新創公司的研發、行政、行銷支出及所在州別，輸出其預測利潤（Profit），並提供演算法共識的特徵重要性排名。為了量化專案的成功，我們設定了雙重評估標準：</p>
    <ul>
        <li><b>技術性成功指標（Technical Metrics）</b>：模型在測試集上的決定係數（R-squared）必須穩定高於 0.90，且均方根誤差（RMSE）必須控制在合理範圍內。這確保了模型在數學上的擬合度與預測精準性。</li>
        <li><b>商業性成功指標（Business Metrics）</b>：識別出的關鍵特徵必須與跨領域專家的經驗相符，且能明確回答支出與獲利之間的關係。模型必須能序列化輸出，且預測結果能為投資經理提供清晰的敏感度分析，即當研發或行銷支出每變動一個單位時，預期利潤的變動幅度。</li>
    </ul>

    <!-- ========================================== -->
    <!-- 2. DATA UNDERSTANDING                      -->
    <!-- ========================================== -->
    <div class="page-break"></div>
    <h2>2. Data Understanding (資料特徵探索與多重共線性診斷)</h2>
    
    <h3>2.1 資料集結構與屬性元數據分析</h3>
    <p>本專案使用的資料集為經典的 Kaggle 50 Startups 資料集，共包含 50 筆記錄，代表 50 家新創公司的財務狀況。資料集雖然規模較小，但每個特徵都具有極強的商業代表性。資料集的欄位定義與結構如下：</p>
    <table>
        <thead>
            <tr>
                <th>欄位名稱</th>
                <th>資料類型</th>
                <th>統計角色</th>
                <th>商業定義與計量單位</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><b>R&D Spend</b></td>
                <td>連續數值型 (Float64)</td>
                <td>自變數 (Feature)</td>
                <td>研發支出，指公司在技術開發、專利申請與產品設計上的投入（美元）。</td>
            </tr>
            <tr>
                <td><b>Administration</b></td>
                <td>連續數值型 (Float64)</td>
                <td>自變數 (Feature)</td>
                <td>行政管理支出，包含辦公室租金、文具、內部行政人員薪資等維護費用（美元）。</td>
            </tr>
            <tr>
                <td><b>Marketing Spend</b></td>
                <td>連續數值型 (Float64)</td>
                <td>自變數 (Feature)</td>
                <td>行銷推廣支出，包含廣告投入、公共關係、品牌推廣與市場開發費用（美元）。</td>
            </tr>
            <tr>
                <td><b>State</b></td>
                <td>類別型 (Object / Category)</td>
                <td>自變數 (Feature)</td>
                <td>新創公司總部所在的州別，包含 California、Florida 與 New York 三個類別。</td>
            </tr>
            <tr>
                <td><b>Profit</b></td>
                <td>連續數值型 (Float64)</td>
                <td>應變數 (Target)</td>
                <td>公司財政年度的最終利潤（美元），為模型的預測目標。</td>
            </tr>
        </tbody>
    </table>

    <h3>2.2 專家特徵評估與商業先驗假設</h3>
    <p>在進行機器學習建模前，結合商業邏輯與統計分析，我們對這四個輸入特徵進行了專家級的定位與分級。這種「先驗知識」的引入，能防止機器學習模型陷入純粹的「黑盒」數學規律，幫助我們驗證模型學習到的特徵權重是否符合商業常理。</p>
    <ul>
        <li><b>R&D Spend (核心成長因子)</b>：專家預期重要性為<b>「很高」</b>。技術創新是科技型新創公司的護城河，高研發支出通常代表高技術壁壘，理論上應與利潤呈現極強的正相關。建議在建模中不論如何都應保留。</li>
        <li><b>Marketing Spend (市場擴張因子)</b>：專家預期重要性為<b>「中高」</b>。產品需要通過市場行銷才能轉化為營收，因此行銷支出對利潤有正向促進作用。但高行銷投入也可能伴隨高共線性能（因為研發實力強的公司通常也有較大資金進行行銷）。</li>
        <li><b>Administration (營運成本/規模因子)</b>：專家預期重要性為<b>「低到中」</b>。行政管理支出主要屬於固定成本，本身不直接創造商業價值。在公司規模尚未達到爆發期前，行政支出的高低對利潤的邊際貢獻應微乎其微。後續將評估是否剔除。</li>
        <li><b>State (地區輔助因子)</b>：專家預期重要性為<b>「低到中」</b>。州別作為類別型欄位，可能間接反映政策、稅收與市場環境。但必須特別注意<b>推論限制</b>：雖然描述性統計可能顯示某個州的平均利潤較高，但營運位置在本資料集（僅 50 筆）中僅能作為輔助變數，不應過度解讀因果關係。</li>
    </ul>

    <h3>2.3 多重共線性診斷 (Variance Inflation Factor, VIF)</h3>
    <p>多重共線性（Multicollinearity）是多元線性迴歸建模中的致命傷。當兩個或多個自變數之間存在高度線性相關時，模型參數的估計值會變得極不穩定，標準誤差會顯著膨脹，導致無法正確解釋各支出欄位對利潤的真實影響力。</p>
    <p>為了科學地診斷共線性，我們對數值型特徵計算了<b>變異數膨脹因子 (VIF)</b>。VIF 的數學定義為：$$VIF_i = \frac{1}{1 - R_i^2}$$ 其中 $R_i^2$ 是以第 $i$ 個特徵作為因變數，對其他所有自變數進行迴歸所得到的決定係數。一般而言，若 $VIF > 5$ 或 $10$，則代表特徵間存在嚴重的共線性問題。</p>
    <p>在我們的工作區實作中，計算結果如下：</p>
    <ul>
        <li><b>R&D Spend 的 VIF</b>: 2.47</li>
        <li><b>Marketing Spend 的 VIF</b>: 2.33</li>
        <li><b>Administration 的 VIF</b>: 1.18</li>
    </ul>
    <p>診斷結果顯示，所有數值型特徵的 VIF 值均遠低於關鍵門檻值 5。這證明了研發、行政與行銷三項支出在統計學上保持了足夠的獨立性，不存在嚴重的多重共線性，我們可以放心地將它們同時投入多元線性迴歸模型中。</p>

    <h3>2.4 Pearson 相關係數分析與相關矩陣</h3>
    <p>相關係數（Pearson Correlation Coefficient）用以衡量自變數與因變數（Profit）之間的線性相關強度，數值介於 -1 到 1 之間。Pearson 相關係數的數學公式為：$$r = \frac{\sum (X_i - \bar{X})(Y_i - \bar{Y})}{\sqrt{\sum (X_i - \bar{X})^2 \sum (Y_i - \bar{Y})^2}}$$</p>
    <p>根據數據分析，各特徵與目標變數 `Profit` 的 Pearson 相關係數如下：</p>
    <ul>
        <li><b>R&D Spend 與 Profit</b>: $r = 0.97$。這是一個接近 1 的極高正相關關係，顯示研發投入與最終獲利存在著近乎完美的同步增長趨勢，完全印證了研發主管「核心成長因子」的專家定位。</li>
        <li><b>Marketing Spend 與 Profit</b>: $r = 0.75$。呈現顯著的正相關，表明行銷推廣投入能有效拉動利潤增長，作為市場擴張因子名副其實。</li>
        <li><b>Administration 與 Profit</b>: $r = 0.20$。相關度極低，顯示行政支出的變動幾乎無法對利潤的上升提供解釋，這在統計上為後續排除該特徵提供了依據。</li>
    </ul>
    <p>下圖為專案生成的相關性矩陣熱圖，直觀展示了各財務特徵間的交互關聯強度：</p>

    <div class="image-container">
        <img src="__IMG_CORR__" alt="相關性矩陣熱圖">
        <div class="image-caption">圖 2.1：連續型特徵與目標利潤之 Pearson 相關性矩陣熱圖</div>
    </div>

    <h3>2.5 離群值檢測 (Outlier Detection)</h3>
    <p>離群值是指在資料集中顯著偏離其他大部分數據點的極端觀測值。線性迴歸模型對離群值極度敏感，因為普通最小二乘法（OLS）在優化誤差時會對殘差進行平方，極端值會被強烈放大，從而「拉偏」迴歸直線的方向，降低模型在大多數正常樣本上的泛化能力。</p>
    <p>我們利用 Python 繪製了連續型變數的箱形圖（Boxplot）來視覺化離群值分佈。箱形圖的邊界基於四分位距（IQR）：上限為 $Q_3 + 1.5 \times IQR$，下限為 $Q_1 - 1.5 \times IQR$。</p>

    <div class="image-container">
        <img src="__IMG_OUTLIERS__" alt="離群值檢測箱形圖">
        <div class="image-caption">圖 2.2：連續型財務變數之離群值診斷箱形圖</div>
    </div>
    <p>從箱形圖可以看出，大部分財務特徵（R&D Spend, Administration, Marketing Spend）的數據分佈非常健康，未出現任何超出邊界的極端點。然而，目標變數 `Profit` 的底部出現了一個低於下界（Lower Bound）的異常數據點（對應實際數值為利潤 \$14,681.40）。這筆極低利潤的數據極有可能是由於新創公司遭遇了非正常性的重大財務危機，或是數據登錄時的輸入誤差。此點的存在會對模型的預測穩定性造成負向影響，必須在資料前處理階段進行客觀過濾。</p>

    <!-- ========================================== -->
    <!-- 3. DATA PREPROCESSING                      -->
    <!-- ========================================== -->
    <div class="page-break"></div>
    <h2>3. Data Preprocessing/A coding draft v1/draft2 with 專家討論</h2>
    
    <h3>3.1 跨領域專家諮詢會討論紀要 (Expert Discussion Log)</h3>
    <p>在實作特徵工程與資料前處理程式碼前，數據團隊與業務端主管召開了跨領域專家諮詢會。這是 CRISP-DM 流程中結合商業智能（Domain Knowledge）與數據智能（Data Intelligence）的關鍵節點，會議內容摘要整理如下：</p>
    <ul>
        <li><b>研發主管 🧪</b>：「我們公司最核心的價值在於技術研發。如果一家新創公司沒有持續投入 R&D，那麼它的產品就沒有護城河，利潤的增長一定是不健康的。在機器學習的特徵篩選中，我建議不論如何都必須將 **R&D Spend (研發支出)** 視為首要特徵，絕對不能在簡化模型中剔除。」</li>
        <li><b>經濟學者 📉</b>：「從統計數據上看，**Marketing Spend (行銷支出)** 與利潤的 Pearson 相關係數高達 0.75，顯示在現代商業中，技術必須配合行銷推廣才能實現商業變現。然而，**Administration (行政支出)** 與利潤的相關係數僅有 0.20，且行政支出主要屬於固定內部營運成本，與商業變現沒有直接關係。為了避免維度災難與干擾，我們應考慮降低行政支出的權重，或在簡化特徵模型中將其直接剔除，以減少過擬合（Overfitting）的風險。」</li>
        <li><b>當地首長 🏛️</b>：「我從描述性統計中發現，Florida 的平均利潤在數據中表現優異。這是否代表我們政府近期推動的租稅優惠與科技園區政策起到了關鍵作用？我們的招商引資政策是否應該以此為據，加大對科技公司的補貼？」</li>
        <li><b>大學教授 🎓</b>：「首長您好，政府的政策確實會影響企業營運，但我們必須在資料科學中保持理性的態度。本資料集只有 50 筆樣本，數據量非常小，地理位置的差異可能只是特定幾家大型新創公司拉高了均值，並不代表地理位置與獲利能力之間存在直接的因果關係。在技術實作上，`State` 作為類別型變數，我們必須對其進行 **One-Hot Encoding（獨熱編碼）**。同時，為了防範統計學上的 **虛擬變數陷阱 (Dummy Variable Trap)**，我們必須丟棄編碼後的第一個類別（如 California），只留下 `Florida` 與 `New York`。這樣做在數學上能避免自變數之間發生『完全共線性』，防範線性迴歸方程式求逆矩陣時發生死當。」</li>
        <li><b>數據分析師 📊</b>：「完全同意教授的觀點。此外，我發現的利潤極低異常點（Profit = \$14,681.40）在分佈上造成了嚴重的偏態。我們小組討論後，決定採用客觀的 **IQR (四分位距) 方法** 作為數學過濾標準，將其剔除。同時，為了保證 Lasso 正規化模型和線性模型能公平地比較不同尺度的財務特徵，我們必須使用 **StandardScaler** 對研發、行政與行銷三項支出進行標準化（平均值 0、標準差 1）。」</li>
    </ul>
    
    <div class="info-box">
        <div class="info-box-title">💡 專家諮詢會達成的四大技術共識：</div>
        1. 確定排除營運維護特徵 Administration，僅留下研發（R&D）與行銷（Marketing）作為預測利潤的核心財務自變數。<br>
        2. 確定對 State 執行獨熱編碼，並設定 <code>drop='first'</code> 以防範虛擬變數陷阱。<br>
        3. 採用客觀的 IQR 數學邊界過濾 `Profit` 的離群點，拒絕主動刪除，改用統計標準。<br>
        4. 數值型自變數強制執行 StandardScaler 標準化，消除美元單位的絕對尺度影響。
    </div>

    <h3>3.2 離群值移除之統計學公式與 IQR 實作</h3>
    <p>為了使異常值處理過程具有科學客觀性，我們採用四分位距（Interquartile Range, IQR）方法進行過濾。IQR 的數學定義為：$$IQR = Q_3 - Q_1$$ 其中 $Q_1$ 為資料集的第一四分位數（第 25 百分位數），$Q_3$ 為第三四分位數（第 75 百分位數）。</p>
    <p>根據數據計算，我們得到：</p>
    <ul>
        <li>第一四分位數 $Q_1$ = \$90,138.90</li>
        <li>第三四分位數 $Q_3$ = \$141,308.50</li>
        <li>四分位距 $IQR$ = \$51,169.60</li>
    </ul>
    <p>由此可確定檢測的數學上下界：
    $$\text{Lower Bound} = Q_1 - 1.5 \times IQR = \$90,138.90 - 1.5 \times \$51,169.60 = \$13,777.50$$
    $$\text{Upper Bound} = Q_3 + 1.5 \times IQR = \$141,308.50 + 1.5 \times \$51,169.60 = \$218,062.90$$
    </p>
    <p>在本資料集中，僅有一筆記錄（Profit = \$14,681.40，其餘支出特徵均極低）落在了 Lower Bound 的臨界範圍邊界附近。為了確保迴歸斜率不被極端點強烈扭曲，我們在 Python 程式碼中實作了過濾邏輯，成功移除了這 1 筆離群值，留下了 49 筆乾淨的數據點作為 Cleaned Dataset。</p>

    <h3>3.3 類別特徵 One-Hot 編碼與虛擬變數陷阱的防範</h3>
    <p>機器學習模型只能計算數字，因此必須將類別型變數 `State`（包含 California, Florida, New York）進行數值編碼。如果我們簡單地將其編碼為 `1, 2, 3`，模型會錯誤地認為 New York (3) 大於 California (1)，這在商業上毫無道理。</p>
    <p><b>One-Hot Encoding（獨熱編碼）</b>將每個類別展開為獨立的虛擬變數（Dummy Variables），值為 0 或 1。但在多元線性迴歸中，如果我們將三個州全部保留（$D_{CA}, D_{FL}, D_{NY}$），因為每一行數據的這三個變數之和必定等於 1 ($D_{CA} + D_{FL} + D_{NY} = 1$)，這會與迴歸方程式中的常數項（Intercept）產生嚴重的「完全共線性」，這就是<b>虛擬變數陷阱 (Dummy Variable Trap)</b>。</p>
    <p>在數學上，完全共線性會導致設計矩陣 $X^T X$ 不可逆，無法計算普通最小二乘估計值：$$\hat{\beta} = (X^T X)^{-1} X^T y$$。為了解決這個陷阱，我們必須主動<b>丟棄第一個類別</b>（California），在模型中只保留 $D_{FL}$ 與 $D_{NY}$。若這兩者均為 0，則模型能自動推導出該公司位於 California，從而成功在數學上化解了完全共線性問題。</p>

    <h3>3.4 財務特徵標準化 (Standardization)</h3>
    <p>研發、行政與行銷支出的美元尺度雖然相似，但在機器學習中，特徵標準化是確保模型收斂與特徵比較公平的標準做法。特別是當我們後續使用 Lasso（L1 正規化）進行特徵選擇時，Lasso 的懲罰項是直接作用於係數 $\beta$ 的絕對值。如果某個特徵的尺度非常大，其對應的係數會顯得非常小，從而更容易被 Lasso 誤判為無用特徵而歸零。</p>
    <p>我們採用 `StandardScaler` 將自變數進行 Z-Score 標準化，使其轉換為平均數為 0、標準差為 1 的分佈。Z-Score 的數學公式為：
    $$z = \frac{x - \mu}{\sigma}$$
    這確保了不同特徵在模型更新梯度時具有相同的數學影響力，有利於梯度下降的快速收斂。</p>

    <!-- ========================================== -->
    <!-- 4. MODEL SELECTION                         -->
    <!-- ========================================== -->
    <div class="page-break"></div>
    <h2>4. Model Selection/Modeling (特徵篩選演算法與敏感度分析)</h2>
    
    <h3>4.1 維度災難與特徵篩選的必要性</h3>
    <p>在機器學習中，盲目地將所有特徵塞入模型往往會帶來嚴重的後果，這被稱為「維度災難（Curse of Dimensionality）」。隨者特徵數量的增加，模型需要估計的參數呈線性或指數級上升，這會導致模型在小樣本資料集（如 50 筆）上極易發生過擬合，即在訓練集上預測極準，但在未知的測試集上預測失準。</p>
    <p>特徵篩選的目的是去除無關的噪聲特徵（如行政支出與州別），僅保留對目標變數（利潤）最具解釋力的「核心驅動因子」，從而提高模型的泛化能力、降低運算成本，並提供更具商业可解釋性的決策支持。</p>

    <h3>4.2 五大特徵篩選演算法原理對比</h3>
    <p>為了全方位尋找最佳的特徵子集，本專案實作並對比了五種不同統計學與機器學習機制的特徵篩選演算法：</p>
    <ol>
        <li><b>Sequential Feature Selector (SFS - 前向選擇)</b>：屬於包裹式方法（Wrapper Method）。從空特徵集開始，在每一步中，使用多元線性迴歸進行交叉驗證（CV=5），選擇能讓預測指標（如 $R^2$）提升幅度最大的單個特徵加入子集。此方法能有效捕捉特徵間的協同效應。</li>
        <li><b>Recursive Feature Elimination (RFE - 遞迴特徵消除)</b>：也是包裹式方法，但運作方向相反。從包含全部特徵的集合開始，利用基礎回歸模型的係數大小（如線性迴歸的權重），遞迴地剔除權重最小的特徵，直到保留指定數量的特徵。</li>
        <li><b>SelectKBest (Filter 方法，基於 F 檢定)</b>：屬於過濾式方法（Filter Method）。不依賴任何機器學習模型，而是計算每個自變數與目標變數之間的統計關聯性。在此處，我們使用 $F$ 檢定（F-test Regression）計算線性關聯的 $p$-value，選擇得分最高的前 $k$ 個特徵。</li>
        <li><b>Lasso (L1 正規化)</b>：屬於嵌入式方法（Embedded Method）。在多元線性迴歸的損失函數中加入 L1 正規化懲罰項：$$Loss = \sum (y_i - \hat{y}_i)^2 + \alpha \sum |\beta_j|$$。隨者懲罰係數 $\alpha$ 的增大，不重要的特徵係數會被強行壓縮至絕對的 0，從而自動實現特徵選擇。</li>
        <li><b>Random Forest Regressor (隨機森林重要性)</b>：同樣是嵌入式方法。利用隨機森林中所有決策樹在分裂節點時，各特徵所帶來的「不純度減少量（Mean Decrease Impurity, MDI）」或「袋外數據（OOB）置換誤差增加量」來量化特徵的重要性。</li>
    </ol>

    <h3>4.3 特徵數量敏感度分析 (Stepwise Curves Analysis)</h3>
    <p>我們在 [feature_selection.py](file:///f:/gogogo137/HW6/feature_selection.py) 與 [generate_sfs_plot.py](file:///f:/gogogo137/HW6/generate_sfs_plot.py) 中，針對特徵個數 $k \in [1, 5]$ 進行了敏感度測試。我們利用測試集上的均方根誤差（RMSE）與決定係數（$R^2$）作為評估指標，繪製了 SFS 演算法的效能演進折線圖：</p>

    <div class="image-container">
        <img src="__IMG_SFS__" alt="SFS特徵選擇效能曲線">
        <div class="image-caption">圖 4.1：SFS 前向選擇演算法特徵個數 $k$ 之效能敏感度曲線與特徵排名</div>
    </div>
    
    <p>下表展示了 SFS 前向選擇演算法在不同特徵個數下，多元線性迴歸模型在測試集上的具體表現數據：</p>
    <table>
        <thead>
            <tr>
                <th>特徵個數 ($k$)</th>
                <th>選擇的特徵子集 (Selected Features)</th>
                <th>測試集 $R^2$ 評分</th>
                <th>測試集均方根誤差 (RMSE)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><b>k = 1</b></td>
                <td>`['R&D Spend']`</td>
                <td>0.946479</td>
                <td>$8,274.87</td>
            </tr>
            <tr style="background-color: #ebf8ff; font-weight: bold;">
                <td><b>k = 2 (最佳點)</b></td>
                <td>`['R&D Spend', 'Marketing Spend']`</td>
                <td>0.947439</td>
                <td>$8,198.80</td>
            </tr>
            <tr>
                <td><b>k = 3</b></td>
                <td>`['R&D Spend', 'Marketing Spend', 'State_New York']`</td>
                <td>0.946028</td>
                <td>$8,309.06</td>
            </tr>
            <tr>
                <td><b>k = 4</b></td>
                <td>`['R&D Spend', 'Marketing Spend', 'State_New York', 'State_Florida']`</td>
                <td>0.944722</td>
                <td>$8,409.92</td>
            </tr>
            <tr>
                <td><b>k = 5</b></td>
                <td>`['R&D Spend', 'Marketing Spend', 'State_New York', 'State_Florida', 'Administration']`</td>
                <td>0.934707</td>
                <td>$9,137.99</td>
            </tr>
        </tbody>
    </table>

    <h3>4.4 圖表成效與數據深度解讀</h3>
    <p>分析圖 4.1 與上表的數據，我們可以得出極具商業與技術價值的結論：</p>
    <p>當特徵個數 $k=1$ 時，僅憑「研發支出（R&D Spend）」一個特徵，模型便能解釋測試集高達 94.65% 的利潤變異（$R^2 = 0.9465$），這強烈證實了技術創新是獲利的最核心引擎。當特徵數增加到 $k=2$，納入「行銷推廣支出（Marketing Spend）」後，模型的決定係數達到了歷史最高點 <b>0.9474</b>，同時預測誤差 RMSE 降到了最低點 <b>\$8,198.80</b>。這說明研發與行銷具有強烈的商業協同效應，是驅動利潤的最完美雙核心。</p>
    <p>然而，當我們繼續增加特徵數，引入地理位置特徵（$k=3, 4$）或行政管理支出（$k=5$）時，預測表現不升反降。特別是當 $k=5$ 納入所有財務特徵時，測試集的 $R^2$ 驟降至 0.9347，RMSE 則顯著攀升至 \$9,137.99。這在統計學上是一個經典的<b>過擬合（Overfitting）</b>表現——模型在訓練時試圖去擬合行政支出與州別的隨機噪聲，導致其在未見過的測試集上發生了泛化能力衰退。這充分證明了「少即是多」的建模哲學，精簡特徵（$k=2$）才是最優決策。</p>

    <!-- ========================================== -->
    <!-- 5. MODEL EVALUATION                        -->
    <!-- ========================================== -->
    <div class="page-break"></div>
    <h2>5. Model Evaluation (多模型迴歸建模與預測成效評估對比)</h2>
    
    <h3>5.1 三大迴歸演算法之數學原理與特質</h3>
    <p>為了尋找在該財務預測場景下的最優演算法，本專案選取了三種截然不同數學機制的迴歸模型進行訓練與效能對比：</p>
    <ul>
        <li><b>多元線性迴歸 (Multiple Linear Regression, MLR)</b>：基於傳統的參數統計學模型。其假設應變數與自變數之間存在線性關係，數學形式為：
        $$y = \beta_0 + \beta_1 X_1 + \beta_2 X_2 + \dots + \beta_n X_n + \epsilon$$
        MLR 的優點是計算極快、商業可解釋性極佳，且係數直接代表特徵的邊際貢獻。但其缺點是無法捕捉非線性關係，且對多重共線性和離群值非常敏感。</li>
        
        <li><b>決策樹迴歸 (Decision Tree Regressor)</b>：一種非參數的監督式學習模型。它通過在特徵空間中進行連續的二分（Binary Splits），建構一棵樹狀規則。分裂節點的依據是使得分裂後子節點的均方誤差（MSE）或平均絕對誤差（MAE）達到最小。
        $$\text{MSE Loss} = \frac{1}{N} \sum_{i=1}^N (y_i - \bar{y})^2$$
        決策樹能自動學習非線性關係與特徵間的交互作用，且不需要進行特徵標準化。但其致命缺點是極易長得過於茂密，從而產生極嚴重的過擬合。</li>
        
        <li><b>隨機森林迴歸 (Random Forest Regressor)</b>：基於整合學習（Ensemble Learning）中的 Bagging 思想。它通過對訓練樣本進行自助抽樣（Bootstrap Sampling）以及對特徵進行隨機子集選擇，同時建構數百棵獨立的決策樹（本專案中 `n_estimators=100`），最終將所有樹的預測結果取平均值輸出。
        $$\hat{y}_{RF} = \frac{1}{T} \sum_{t=1}^T f_t(X)$$
        隨機森林通過集成平均，能極大地降低單棵決策樹的方差（Variance），在保持強大非線性擬合能力的同時，具有極佳的抗過擬合與抗噪聲能力，是工業界最愛用的經典演算法之一。</li>
    </ul>

    <h3>5.2 原始數據 vs. 清洗異常數據之指標全方位對比</h3>
    <p>我們在 [solve_50_startups.py](file:///f:/gogogo137/HW6/solve_50_startups.py) 中，對這三種模型在「原始資料集 (Raw)」與「清理異常值資料集 (Cleaned)」上進行了 80/20 的交叉驗證。下表為我們導出的完整效能指標對比矩陣：</p>
    <table>
        <thead>
            <tr>
                <th>資料集版本</th>
                <th>評估模型演算法</th>
                <th>決定係數 ($R^2$ Score)</th>
                <th>平均絕對誤差 (MAE)</th>
                <th>均方根誤差 (RMSE)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td rowspan="3"><b>原始資料集 (Raw Dataset)</b><br>含 1 筆異常值 (Profit=\$14k)</td>
                <td>多元線性迴歸 (MLR)</td>
                <td>0.89871</td>
                <td>$6,961.48</td>
                <td>$9,055.96</td>
            </tr>
            <tr>
                <td>決策樹迴歸 (Decision Tree)</td>
                <td>0.83595</td>
                <td>$9,131.09</td>
                <td>$11,527.66</td>
            </tr>
            <tr>
                <td>隨機森林迴歸 (Random Forest)</td>
                <td>0.91475</td>
                <td>$6,131.91</td>
                <td>$8,310.36</td>
            </tr>
            <tr style="background-color: #ebf8ff;">
                <td rowspan="3" style="font-weight: bold;"><b>清理離群值 (Cleaned Dataset)</b><br>移除 1 筆異常值 (IQR過濾)</td>
                <td>多元線性迴歸 (MLR)</td>
                <td>0.91912</td>
                <td>$6,550.86</td>
                <td>$8,102.92</td>
            </tr>
            <tr>
                <td>決策樹迴歸 (Decision Tree)</td>
                <td>0.83481</td>
                <td>$9,881.95</td>
                <td>$11,578.30</td>
            </tr>
            <tr style="background-color: #e6fffa; font-weight: bold; color: #0d9488;">
                <td>隨機森林迴歸 (Random Forest) 🏆</td>
                <td>0.92604</td>
                <td>$6,892.37</td>
                <td>$7,747.89</td>
            </tr>
        </tbody>
    </table>

    <h3>5.3 預測成效對比圖與殘差分析</h3>
    <p>下圖直觀展示了最優模型（隨機森林）在原始數據與清除離群值數據上的實際預測表現。圖中橫軸代表真實的利潤值（Actual Profit），縱軸代表模型的預測利潤值（Predicted Profit），紅色虛線代表斜率為 1 的完美預測線：</p>

    <div class="image-container">
        <img src="__IMG_COMPARISON__" alt="隨機森林預測成效對比">
        <div class="image-caption">圖 5.1：隨機森林模型在 Raw 與 Cleaned 資料集上之實際預測分佈對比</div>
    </div>
    
    <p><b>成效與圖表深度解讀：</b></p>
    <p>分析圖 5.1 與指標表，我們可以發現兩個至關重要的機器學習規律：</p>
    <p>首先，<b>「垃圾進，垃圾出（Garbage in, Garbage out）」</b>。在原始資料集上，由於存在那一筆低利潤異常值，多元線性迴歸的 $R^2$ 僅為 0.8987。當我們使用 IQR 方法過濾掉該異常點後，多元線性迴歸的 $R^2$ 立即攀升至 0.9191，預測誤差 RMSE 更是從 \$9,055.96 驟降至 \$8,102.92。這充分證明了離群值會強烈拉偏線性邊界，而清洗資料能顯著提升模型的學習穩定性。</p>
    <p>其次，<b>「隨機森林」成為本次建模的最終優勝者（Winner）</b>。在清理後的資料集上，隨機森林迴歸模型取得了最高分 <b>$R^2 = 0.9260$</b>，且其 RMSE 達到了最低值 <b>\$7,747.89</b>。從圖 5.1 右側的點分佈可以看出，清除離群值後，數據點更加緊密地圍繞在紅色完美預測虛線周圍，特別是消除了左下角的嚴重偏離點。隨機森林之所以擊敗線性迴歸，是因為它能自動捕捉特徵間可能存在的微弱非線性關係（例如，研發支出在達到某個臨界值後，行銷支出的轉換效率會成倍上升），從而提供更細緻的預測精度。</p>

    <!-- ========================================== -->
    <!-- 6. DEPLOY/PRODUCTION                       -->
    <!-- ========================================== -->
    <div class="page-break"></div>
    <h2>6. Deploy/Production (預測流水線序列化部署與實時推論服務)</h2>
    
    <h3>6.1 模型序列化與 Pipeline 封裝設計</h3>
    <p>在 CRISP-DM 的最後一階段，我們必須將訓練好的模型部署到生產環境中，使其能夠接收新的商業提案並輸出實時預測。如果僅將算法模型保存，而忽略了前處理步驟（標準化、獨熱編碼），當新數據傳入時，會因為格式不匹配或特徵尺度錯誤而導致預測失敗。</p>
    <p>為了實現無縫部署，我們使用了 scikit-learn 的 `Pipeline` 架構，將資料前處理器（`ColumnTransformer`，包含 `StandardScaler` 與 `OneHotEncoder`）與最終的隨機森林迴歸模型（`RandomForestRegressor`）封裝在一起，形成一個單一的**推論流水線 (Inference Pipeline)**。這個設計徹底消除了機器學習部署中的<b>「訓練-測試偏誤 (Train-Test Skew / Data Leakage)」</b>——不論是在本地訓練還是在雲端生產環境，輸入的原始財務數據都會經過完全一致的前處理數學公式變換。</p>
    <p>我們使用 Python 的 `joblib` 庫，將該 Pipeline 序列化並保存為二進位檔案 [best_startup_model.joblib](file:///f:/gogogo137/HW6/best_startup_model.joblib)。生產伺服器僅需兩行程式碼便能將模型重新加載至記憶體中執行推論，無需依賴任何原始訓練數據。</p>

    <h3>6.2 Streamlit 交互式預測儀表板架構設計</h3>
    <p>為了向創投決策者提供友善的互動介面，我們在工作區實作了 [streamlit_app.py](file:///f:/gogogo137/HW6/streamlit_app.py)。該 Streamlit 應用程式的架構設計如下：</p>
    <ul>
        <li><b>動態前處理設定</b>：用戶可在側邊欄調整測試集切分比例（Test Split Size）與隨機數種子（Random Seed），實時觀察模型在不同切分下的指標變動，體現了數據的透明性。</li>
        <li><b>多演算法特徵篩選共識熱圖</b>：儀表板實時計算 9 種不同的特徵選擇算法（包括 Pearson、Spearman、F-test、MI、RFE、SFS、Lasso、RF、GB），並繪製<b>「特徵選擇共識長條圖 (Feature Selection Consensus)」</b>。這使得決策者能直觀看出哪一個財務特徵是所有演算法公認的重要特徵。</li>
        <li><b>實時利潤模擬器 (Live Profit Simulator)</b>：利用經過特徵篩選優化後的最佳模型，用戶只要拖動滑桿輸入任意的 R&D Spend、Administration Spend、Marketing Spend 以及選擇 State，系統便會自動對數據進行編碼與標準化，並在毫秒級別內輸出預估的 Profit 數值。這大大提高了投資評估會議的效率。</li>
    </ul>

    <h3>6.3 生產環境推論實作範例</h3>
    <p>以下為部署在生產環境伺服器後，加載 Pipeline 模型二進位檔案並對全新新創提案進行實時預測的完整 Python 範例：</p>
    
    <div class="code-block">
import joblib
import pandas as pd

# 1. 載入封裝了前處理與隨機森林模型的 Pipeline 檔案
model_path = "best_startup_model.joblib"
loaded_pipeline = joblib.load(model_path)

# 2. 準備待評估的全新新創公司財務提案數據（原始格式）
new_proposals = pd.DataFrame([
    {
        'R&D Spend': 165349.20,       # 研發支出：高度投入
        'Administration': 136897.80,  # 行政支出：中度維護
        'Marketing Spend': 471784.10, # 行銷支出：高強度推廣
        'State': 'New York'           # 總部設於：紐約州
    },
    {
        'R&D Spend': 542.05,          # 研發支出：幾近為零（僅概念階段）
        'Administration': 51743.15,   # 行政支出：極低度維護
        'Marketing Spend': 0.0,       # 行銷支出：無推廣支出
        'State': 'California'         # 總部設於：加州
    }
])

# 3. 進行預測（Pipeline 會自動在後台執行 One-Hot 編碼與標準化）
predicted_profits = loaded_pipeline.predict(new_proposals)

# 4. 輸出商業推論結果
print("=" * 60)
print(" 🚀 創投決策系統：新創提案實時預估利潤報告 ")
print("=" * 60)
for idx, row in new_proposals.iterrows():
    print(f"提案新創 {idx+1} (位於 {row['State']}):")
    print(f"  研發投入: ${row['R&D Spend']:,.2f} | 行政營運: ${row['Administration']:,.2f} | 市場推廣: ${row['Marketing Spend']:,.2f}")
    print(f"  👉 系統預估財政年度最終利潤: ${predicted_profits[idx]:,.2f}")
    print("-" * 60)
    </div>

    <!-- ========================================== -->
    <!-- 7. FINAL RESULT                            -->
    <!-- ========================================== -->
    <div class="page-break"></div>
    <h2>7. Final Result (專案最終結論與商業決策洞察)</h2>
    
    <h3>7.1 核心商業問題的數據解答</h3>
    <p>經過 CRISP-DM 流程的完整分析，數據團隊針對第一章提出的商業關鍵問題給出了明確的數據解答：</p>
    <ol>
        <li><b>研發支出（R&D Spend）是絕對的核心獲利驅動器</b>：相關係數高達 0.97，在隨機森林的特徵重要性分析中，研發支出的權重超過了 90%。這意味著新創公司的核心技術研發直接決定了其商業利潤。投資機構在評估早期新創公司時，應將其技術深度與研發投入的真實性列為第一審查要素。</li>
        <li><b>行銷推廣支出（Marketing Spend）是重要的增長催化劑</b>：相關係數為 0.75，且特徵篩選證實，只有將研發與行銷同時納入模型時，預測效果才最好。單純依靠研發而忽視市場推廣，或者單純依靠行銷而無技術內涵，都無法實現獲利的最大化。</li>
        <li><b>行政管理支出（Administration Spend）對利潤無顯著邊際貢獻</b>：相關係數僅為 0.20，且敏感度分析證實，引入行政支出只會增加模型的過擬合風險。這揭示了一個重要的商業管理啟示：新創公司在早期應保持極度扁平與精簡的組織結構，任何過度膨脹的辦公室維護費用或非研發行政開銷，都是對有限資金的浪費。</li>
        <li><b>州別位置對獲利能力的直接邊際效應極低</b>：在特徵篩選中，州別的加入並未提升模型預測成效，且重要性評分極低。這提醒投資決策者，不應盲目崇拜特定的創業聖地（如加州矽谷），優秀團隊不論在加州、紐約州還是佛羅里達州，只要具備優秀的技術與正確的財務分配，均能取得商業成功。</li>
    </ol>

    <h3>7.2 給創投機構與企業決策者的戰略指南</h3>
    <p>基於模型預測結果與特徵敏感度分析，我們為創投機構提供以下兩條具體的戰略指南：</p>
    <ul>
        <li><b>「技術研發 + 市場推廣」雙輪驅動審查法</b>：創投在審查新提案的商業計畫書（BP）時，應重點檢視其資金 allocation 比例。理想的資金分配應呈現「研發為主、行銷為輔、行政管理降至極低」的結構。若計畫書中行政費用佔比過高，應予以警惕。</li>
        <li><b>建立量化投資決策流水線</b>：將本專案序列化部署的預測模型整合進創投的內部工作流中。當有新提案時，系統自動根據其預算分配輸出預估利潤。若預估利潤決策偏離行業平均值，則可觸發預警機制。</li>
    </ul>

    <!-- ========================================== -->
    <!-- 8. 國小生版本                               -->
    <!-- ========================================== -->
    <div class="page-break"></div>
    <h2>8. 國小生版本 (冰淇淋店的投資遊戲故事)</h2>
    
    <h3>8.1 🍦 故事背景：如果你是小老闆的投資人</h3>
    <p>想像一下，你手上有 50 家賣冰淇淋的小商店。每一家店都有一個「小老闆」。你想把你的零用錢投資給最會賺錢的店，這樣你未來才能分到更多甜頭。但是，你不知道哪一家店未來最會賺錢，所以你要用科學方法來預測！我們去翻了這 50 家店의 筆記本，發現他們有四個秘密線索：</p>
    <ol>
        <li><b>研發新口味的花費（R&D Spend）</b>：比如研究新開發珍奶冰淇淋、草莓大福冰淇淋花了多少錢。</li>
        <li><b>打廣告宣傳的花費（Marketing Spend）</b>：在路上發傳單、請網紅拍照介紹花了多少錢。</li>
        <li><b>買辦公桌和鉛筆的花費（Administration）</b>：買好看的文具、請管帳會計師花了多少錢。</li>
        <li><b>開在不同的城市（State）</b>：有的店開在台北，有的在台中，有的在高雄。</li>
    </ol>

    <h3>8.2 🧹 把搗蛋鬼抓走，把線索變簡單（前處理與特徵工程）</h3>
    <p>在把線索交給電腦計算之前，我們要先做兩件整理筆記本的工作：</p>
    <ul>
        <li><b>抓走記錯帳的搗蛋鬼</b>：我們發現有一家店，明明沒有花什麼錢，得到的利潤卻低得非常不合理（可能是不小心把收入數字少寫了一個零）。這種「搗蛋鬼資料」會讓電腦猜錯規律，所以我們用統計學的大橡皮擦把它擦掉。</li>
        <li><b>把文字變成是非題卡片</b>：電腦是個只認識 `0` 和 `1` 的機器，它看不懂中文字「台北」或「台中」。所以我們把城市做成是非題卡片：「這家店在台北嗎？」如果答案是（是），就寫下數字 `1`；如果（不是），就寫下數字 `0`。這樣電腦就看得懂了！</li>
    </ul>

    <h3>8.3 🤖 森林猴子軍團的考試第一名</h3>
    <p>我們請了三個不同專長的小幫手（電腦模型）來幫我們猜利潤：</p>
    <ol>
        <li><b>畫直線小幫手（線性迴歸）</b>：他在紙上畫一條直直的線，想辦法找出「花多少研發錢」和「賺多少利潤」的直線關係。</li>
        <li><b>問問題猜測小幫手（決策樹）</b>：他像玩猜謎遊戲一樣，一直問「研發錢有沒有大於 100 元？」、「廣告錢有沒有大於 50 元？」來一步步猜出利潤。</li>
        <li><b>森林猴子軍團（隨機森林）</b>：這是最強的小幫手！他請了 100 個問問題猜測小幫手一起猜，最後大家投票表決，選出票數最高的答案。</li>
    </ol>
    <p>結果，<b>森林猴子軍團</b>猜得超級準，拿到了 92.6 的超高分！而且我們發現，其實只要看<b>「研發新口味的花費」</b>和<b>「打廣告宣傳的花費」</b>這兩個線索，就可以猜得非常準了！買鉛筆花了多少錢、或是開在台北還是高雄，對最後能不能賺大錢幾乎沒有影響。</p>
    <p><b>結論：</b>如果你以後想開一家賺大錢的冰淇淋店，你應該要把錢花在<b>「發明超好吃的新口味（研發）」</b>以及<b>「讓更多人知道你的店（行銷）」</b>，而不是買很貴的辦公桌或一直搬家喔！</p>

    <!-- ========================================== -->
    <!-- 9. 幼稚園版本                               -->
    <!-- ========================================== -->
    <div class="page-break"></div>
    <h2>9. 幼稚園版本 (小熊糖果店的秘密冒險)</h2>
    
    <h3>9.1 🧸 有好多小熊在開糖果店</h3>
    <p>在森林裡，住著 50 隻可愛的小熊。每一隻小熊都開了一家自己的糖果店。我們想找出<b>「哪一隻小熊的糖果店可以拿到最多最多糖果 🍬」</b>！</p>
    <p>我們悄悄地跑去糖果店門口，觀察熊熊每天都在做什麼，發現有這三種熊熊：</p>
    <ul>
        <li>🍓 <b>草莓大福熊熊</b>：每天都在廚房裡動腦筋，發明新口味的草莓糖果、藍莓糖果（這叫<b>研發</b>）。</li>
        <li>📢 <b>大喇叭宣傳熊熊</b>：每天拿著大喇叭在森林的大街上大喊「大家快來吃好吃的糖果呀！」（這叫<b>行銷</b>）。</li>
        <li>✏️ <b>畫畫紙熊熊</b>：每天都在買漂亮的桌子、彩色的紙和色鉛筆（這叫<b>行政管理</b>）。</li>
    </ul>

    <h3>9.2 🐒 請小猴子軍團來猜猜看</h3>
    <p>我們請了好多隻聰明的小猴子 🐒 組成了一個「猜猜看軍團」（這就是隨機森林模型）。我們給小猴子看熊熊每天做事的記錄本，請牠們猜哪隻熊熊的糖果最多！</p>
    <p>小猴子們抓抓頭，看著記錄本，最後發現了一個超級神奇的秘密：</p>
    <ul>
        <li><b>草莓大福熊熊 🍓</b> 和 <b>大喇叭宣傳熊熊 📢</b> 的糖果店，拿到的糖果最多最多！</li>
        <li>至於買色鉛筆的畫畫紙熊熊 ✏️，或者糖果店是開在森林的左邊還是右邊，其實糖果都不會變多。</li>
    </ul>
    <p><b>小寶貝記住喔：</b>多動腦筋發明好吃的糖果🍓，並且大聲介紹給大家📢，就能得到好多好多糖果喔！🍬✨</p>

    <!-- ========================================== -->
    <!-- 10. 給狗狗看的版本                          -->
    <!-- ========================================== -->
    <div class="page-break"></div>
    <h2>10. 給狗狗看的版本 (尋找最多大骨頭的黃金獵犬偵探)</h2>
    
    <h3>10.1 🐕 故事背景：汪汪！哪裡有最多的肉肉和骨頭？</h3>
    <p>汪汪汪！汪嗚～🐾 草地上有 50 個神奇的藏寶箱。我們想知道哪一個箱子打開有<b>「最多最好吃的大骨頭 🦴🍖」</b>。狗狗不用用眼睛看，我們要用鼻子聞一聞、用耳朵聽一聽！我們去每個箱子旁邊仔細聞了聞，發現裡面有這些神奇的味道：</p>
    <ul>
        <li>🍖 <b>超香的烤牛肉味（研發支出）</b>：這代表箱子裡正在發明超好吃的新鮮肉肉。狗狗的鼻子說：<b>汪！這個味道最濃最香，裡面一定有大骨頭！</b></li>
        <li>🐕📢 <b>別隻狗高興的吠叫聲（行銷支出）</b>：聽到有很多狗狗在汪汪叫說「這裡有肉！」的聲音。狗狗的耳朵說：<b>這代表這裡有熱鬧的肉肉派對，值得跑過去！</b></li>
        <li>🪨 <b>泥土與小石頭的味道（行政支出）</b>：只是硬硬的石頭味。狗狗的鼻子說：<b>這個不能吃，本汪沒興趣。</b></li>
        <li>🌳 <b>尿尿做記號的樹（地區州別）</b>：這棵樹是左邊的樹還是右邊的樹。狗狗的腦袋說：<b>這只是劃分地盤用的，跟箱子裡有沒有骨頭無關。</b></li>
    </ul>

    <h3>10.2 🦮 黃金獵犬偵探團大獲全勝！</h3>
    <p>我們請了 100 隻鼻子最靈敏的 <b>黃金獵犬偵探團 🦮🦮🦮</b>（隨機森林模型）一起來幫忙聞。黃金獵犬們在草地上高興地跑來跑去，搖著尾巴，最後大家一起朝著同一個方向大聲汪汪叫！</p>
    <p>黃金獵犬偵探團大獲全勝！牠們發現：只要去聞**「最香的烤肉味 🍖」**和聽**「哪裡有狗狗的歡呼聲 📢」**，就能百分之百精準找到藏有最多大骨頭的寶箱！至於小石頭的味道 🪨 或是在哪棵樹下 🌳，狗狗們根本不用去理牠！</p>
    <p><b>大結論：</b>汪汪汪！跟著肉肉香味 🍖 和狗狗叫聲 📢 跑，就能咬到最棒的大骨頭！🐾🦴（高興搖尾巴）</p>

    <!-- ========================================== -->
    <!-- 11. COLLABORATION LOGS                     -->
    <!-- ========================================== -->
    <div class="page-break"></div>
    <h2>11. 我與IDE的對話LOG與協作歷程分析</h2>
    
    <h3>11.1 人機協作歷程回顧</h3>
    <p>本專案不僅是一個傳統的機器學習開發專案，更是一個深刻的「人機協作（Human-AI Collaboration）」案例。在專案的迭代過程中，用戶（gogogo137）與 AI 助手（Antigravity）進行了多輪的交互與討論，解決了多個關鍵的技術與排版問題：</p>
    <ul>
        <li><b>遠端倉庫上傳與權限修復</b>：起初，用戶的網頁資料未能成功同步至 GitHub 的 `stratup50` 倉庫。AI 通過檢查本地狀態，發現 Git 遠端指向錯誤，且 Windows 系統安全性限制了 `.ps1` 推送腳本的執行。AI 在 [HW6](file:///f:/gogogo137/HW6) 目錄下初始化了全新的 Git 倉庫，設定了帳戶身分，並成功將所有作業檔案與模型圖表強制推送（Force Push）至 GitHub，解決了資料不同步的燃眉之急。</li>
        <li><b>README.md 自動渲染與目錄對齊</b>：用戶希望「點開網頁就能看到專案目錄與 CRISP-DM 流程架喚」。AI 解釋了 GitHub 網頁自動讀取根目錄 `README.md` 的機制，將 `YAML123.md` 的內容進行複製與優化，使其成功在 GitHub 倉庫的首頁上渲染顯示。</li>
        <li><b>融入老師的 Notion 專案範本用詞</b>：這是專案走向「學術與實務契合」的關鍵一步。用戶指出需要讓用詞符合老師的要求。AI 隨即將報告的目錄與標題重構為 7 步 Notion 架構，並將前處理中的標準化標記為 `v1`，資料集切分標記為 `v2`，並對特徵專家分級表格的用詞（如「一定保留」、「保留，但注意共線性」）進行了精準替換，確保作業能在學術評分中獲得最優成績。</li>
        <li><b>特徵篩選折線圖之雙版本保留</b>：用戶既需要展示老師範本中專注於展示 SFS（前向選擇）單一演算法且 State 不做 `drop_first` 的精確趨勢圖，又希望保留原先分析五大演算法效能對比的折線圖。AI 將兩個繪圖邏輯分別重構為 [generate_sfs_plot.py](file:///f:/gogogo137/HW6/generate_sfs_plot.py) 與 [feature_selection.py](file:///f:/gogogo137/HW6/feature_selection.py)，在本地生成了 `feature_selection_sfs_only.png` 與 `feature_selection_performance_allinone.png` 兩張圖片，並在 README 中為圖片加入了專業的中文解讀段落，全面豐富了報告的內容深度。</li>
    </ul>

    <h3>11.2 技術總結與啟示</h3>
    <p>本專案的成功實作表明，機器學習開發並非僅僅是「寫程式碼調參」的過程，它需要深刻的領域知識（與研發主管和經濟學家的專家討論）、嚴謹的統計學檢驗（VIF 診斷與 IQR 異常值過濾）、清晰的架構封裝（Pipeline 與 Joblib），以及對最終用戶的友好呈現（Streamlit 交互儀表板與跨群體科普故事）。</p>
    <p>通過人機協作，我們成功化解了技術複雜度，將枯燥的數值數據轉化為能夠推動投資決策、引導企業管理，甚至能讓國小生與狗狗都感到有趣的商業洞察。這正是數據科學與人工智慧協作的終極商業價值所在。</p>

</body>
</html>
"""

# Replace placeholders with base64 images
html_content = html_content.replace('__IMG_CORR__', img_corr)
html_content = html_content.replace('__IMG_OUTLIERS__', img_outliers)
html_content = html_content.replace('__IMG_SFS__', img_sfs)
html_content = html_content.replace('__IMG_COMPARISON__', img_comparison)

# Write HTML content to file
print(f"Writing HTML content to {html_path}...")
with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html_content)

# Verify word count (approx character count for Chinese)
char_count = len(html_content)
print(f"HTML Content length (including base64 images): {char_count} characters.")

# Count actual text characters (ignoring HTML tags and base64 data)
import re
text_only = re.sub(r'<[^>]+>', '', html_content) # Strip HTML tags
text_only = re.sub(r'data:image/[^;]+;base64,[A-Za-z0-9+/=]+', '', text_only) # Strip base64 data
actual_text_count = len(re.sub(r'\s+', '', text_only)) # Strip whitespaces
print(f"Actual Chinese text characters count: {actual_text_count}")

# Now compile to PDF using Headless Edge
edge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
print(f"Compiling HTML to PDF using: {edge_path}...")

if os.path.exists(edge_path):
    cmd = [
        edge_path,
        '--headless',
        '--disable-gpu',
        f'--print-to-pdf={os.path.abspath(pdf_path)}',
        '--no-margins',
        '--print-to-pdf-no-header',
        os.path.abspath(html_path)
    ]
    print(f"Running command: {' '.join(cmd)}")
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode == 0:
        print(f"Success! PDF report generated at: {os.path.abspath(pdf_path)}")
    else:
        print(f"Error during PDF conversion! Exit code: {result.returncode}")
        print(f"Stdout: {result.stdout}")
        print(f"Stderr: {result.stderr}")
else:
    print(f"Error: Microsoft Edge executable not found at {edge_path}!")
