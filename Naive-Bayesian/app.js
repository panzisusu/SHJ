// Naive-Bayesian單純貝葉欣分類法 App Core Logic

// ==========================================
// 1. Tabular Classifier State & Data (Play Golf)
// ==========================================

const DEFAULT_DATASET = [
    { id: 1, outlook: "Sunny", temp: "Hot", humidity: "High", windy: "False", play: "No" },
    { id: 2, outlook: "Sunny", temp: "Hot", humidity: "High", windy: "True", play: "No" },
    { id: 3, outlook: "Overcast", temp: "Hot", humidity: "High", windy: "False", play: "Yes" },
    { id: 4, outlook: "Rainy", temp: "Mild", humidity: "High", windy: "False", play: "Yes" },
    { id: 5, outlook: "Rainy", temp: "Cool", humidity: "Normal", windy: "False", play: "Yes" },
    { id: 6, outlook: "Rainy", temp: "Cool", humidity: "Normal", windy: "True", play: "No" },
    { id: 7, outlook: "Overcast", temp: "Cool", humidity: "Normal", windy: "True", play: "Yes" },
    { id: 8, outlook: "Sunny", temp: "Mild", humidity: "High", windy: "False", play: "No" },
    { id: 9, outlook: "Sunny", temp: "Cool", humidity: "Normal", windy: "False", play: "Yes" },
    { id: 10, outlook: "Rainy", temp: "Mild", humidity: "Normal", windy: "False", play: "Yes" },
    { id: 11, outlook: "Sunny", temp: "Mild", humidity: "Normal", windy: "True", play: "Yes" },
    { id: 12, outlook: "Overcast", temp: "Mild", humidity: "High", windy: "True", play: "Yes" },
    { id: 13, outlook: "Overcast", temp: "Hot", humidity: "Normal", windy: "False", play: "Yes" },
    { id: 14, outlook: "Rainy", temp: "Mild", humidity: "High", windy: "True", play: "No" }
];

let dataset = JSON.parse(JSON.stringify(DEFAULT_DATASET));

// Valid values for columns (for validation & UI dropdown options)
const COLUMN_OPTIONS = {
    outlook: ["Sunny", "Overcast", "Rainy"],
    temp: ["Hot", "Mild", "Cool"],
    humidity: ["High", "Normal"],
    windy: ["True", "False"],
    play: ["Yes", "No"]
};

// ==========================================
// 2. Text Classifier State & Data (Spam Filter)
// ==========================================

const DEFAULT_WORD_DB = [
    { word: "free", spam: 15, ham: 1 },
    { word: "money", spam: 12, ham: 2 },
    { word: "win", spam: 10, ham: 0 },
    { word: "click", spam: 8, ham: 1 },
    { word: "prize", spam: 6, ham: 0 },
    { word: "urgent", spam: 5, ham: 1 },
    { word: "meeting", spam: 0, ham: 14 },
    { word: "report", spam: 1, ham: 10 },
    { word: "project", spam: 1, ham: 12 },
    { word: "hello", spam: 3, ham: 15 },
    { word: "lunch", spam: 0, ham: 8 },
    { word: "friend", spam: 2, ham: 10 }
];

let wordDb = JSON.parse(JSON.stringify(DEFAULT_WORD_DB));

// Prior probabilities for emails
const EMAIL_PRIOR = { spam: 0.4, ham: 0.6 }; // Assume 40% spam and 60% ham overall

// ==========================================
// 3. Tab Navigation
// ==========================================

function switchTab(tabId) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const clickedBtn = Array.from(document.querySelectorAll('.tab-btn')).find(btn => 
        btn.innerHTML.includes(tabId === 'tabular' ? '表格' : tabId === 'text' ? '垃圾郵件' : '演算法')
    );
    if (clickedBtn) clickedBtn.classList.add('active');

    // Update tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${tabId}-tab`).classList.add('active');
}

// ==========================================
// 4. Tabular Classifier Logic
// ==========================================

function renderDataset() {
    const tbody = document.getElementById("dataset-body");
    tbody.innerHTML = "";
    
    dataset.forEach((row, index) => {
        const tr = document.createElement("tr");
        
        tr.innerHTML = `
            <td>#${row.id}</td>
            <td contenteditable="true" onblur="updateCell(${index}, 'outlook', this)">${row.outlook}</td>
            <td contenteditable="true" onblur="updateCell(${index}, 'temp', this)">${row.temp}</td>
            <td contenteditable="true" onblur="updateCell(${index}, 'humidity', this)">${row.humidity}</td>
            <td contenteditable="true" onblur="updateCell(${index}, 'windy', this)">${row.windy}</td>
            <td contenteditable="true" class="fw-bold" onblur="updateCell(${index}, 'play', this)">${row.play}</td>
            <td>
                <button class="btn-icon-delete" onclick="deleteRow(${index})" title="刪除此筆">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    document.getElementById("data-count").innerText = `${dataset.length} 筆數據`;
    runPrediction();
}

function updateCell(rowIndex, field, cellElement) {
    let value = cellElement.innerText.trim();
    
    // Capitalize first letter to normalize
    if (value.length > 0) {
        value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        // Special case for boolean string
        if (value === "True" || value === "False") {
            // Keep case
        }
    }
    
    // Validate values against allowed options
    const options = COLUMN_OPTIONS[field];
    if (options && !options.includes(value)) {
        // Reset to original value if invalid
        alert(`無效的值！「${field}」只接受：${options.join(', ')}`);
        cellElement.innerText = dataset[rowIndex][field];
        return;
    }

    dataset[rowIndex][field] = value;
    cellElement.innerText = value; // Render normalized text
    runPrediction();
}

function addRow() {
    const nextId = dataset.length > 0 ? Math.max(...dataset.map(r => r.id)) + 1 : 1;
    const newRow = {
        id: nextId,
        outlook: "Sunny",
        temp: "Mild",
        humidity: "Normal",
        windy: "False",
        play: "Yes"
    };
    dataset.push(newRow);
    renderDataset();
    // Scroll to bottom of table
    const tableContainer = document.querySelector(".table-container");
    tableContainer.scrollTop = tableContainer.scrollHeight;
}

function deleteRow(index) {
    dataset.splice(index, 1);
    renderDataset();
}

function resetDataset() {
    dataset = JSON.parse(JSON.stringify(DEFAULT_DATASET));
    renderDataset();
}

// Tabular Naive Bayes Math Engine
function runPrediction() {
    const outlook = document.getElementById("sel-outlook").value;
    const temp = document.getElementById("sel-temp").value;
    const humidity = document.getElementById("sel-humidity").value;
    const windy = document.getElementById("sel-windy").value;

    const total = dataset.length;
    if (total === 0) {
        document.getElementById("prediction-result").innerHTML = "<p class='text-muted'>無訓練數據，請先新增數據。</p>";
        document.getElementById("math-breakdown").innerHTML = "<p class='text-muted'>計算分解暫不可用。</p>";
        return;
    }

    // 1. Calculate Priors
    const yesCount = dataset.filter(r => r.play === "Yes").length;
    const noCount = dataset.filter(r => r.play === "No").length;
    
    const pYes = yesCount / total;
    const pNo = noCount / total;

    // 2. Calculate Conditionals (with simple smoothing to avoid zero probabilities if count is 0)
    // We'll calculate both raw counts and display Laplace-smoothed probabilities.
    // P(Feature | Class) = (count + 1) / (ClassTotal + NumberOfUniqueFeatures)
    
    // Outlook probability counts
    const outYesCount = dataset.filter(r => r.outlook === outlook && r.play === "Yes").length;
    const outNoCount = dataset.filter(r => r.outlook === outlook && r.play === "No").length;
    // Temp probability counts
    const tempYesCount = dataset.filter(r => r.temp === temp && r.play === "Yes").length;
    const tempNoCount = dataset.filter(r => r.temp === temp && r.play === "No").length;
    // Humidity probability counts
    const humYesCount = dataset.filter(r => r.humidity === humidity && r.play === "Yes").length;
    const humNoCount = dataset.filter(r => r.humidity === humidity && r.play === "No").length;
    // Windy probability counts
    const windYesCount = dataset.filter(r => r.windy === windy && r.play === "Yes").length;
    const windNoCount = dataset.filter(r => r.windy === windy && r.play === "No").length;

    // Laplace Smooth values (+1 in numerator, +K in denominator)
    const pOutYes = (outYesCount + 1) / (yesCount + 3); // 3 options for outlook
    const pOutNo = (outNoCount + 1) / (noCount + 3);
    
    const pTempYes = (tempYesCount + 1) / (yesCount + 3); // 3 options for temp
    const pTempNo = (tempNoCount + 1) / (noCount + 3);

    const pHumYes = (humYesCount + 1) / (yesCount + 2); // 2 options for humidity
    const pHumNo = (humNoCount + 1) / (noCount + 2);

    const pWindYes = (windYesCount + 1) / (yesCount + 2); // 2 options for windy
    const pWindNo = (windNoCount + 1) / (noCount + 2);

    // 3. Combined Likelihood (unnormalized posterior product)
    const likelihoodYes = pYes * pOutYes * pTempYes * pHumYes * pWindYes;
    const likelihoodNo = pNo * pOutNo * pTempNo * pHumNo * pWindNo;

    // 4. Normalize
    const sumLikelihood = likelihoodYes + likelihoodNo;
    const finalYesProb = sumLikelihood > 0 ? (likelihoodYes / sumLikelihood) : 0.5;
    const finalNoProb = sumLikelihood > 0 ? (likelihoodNo / sumLikelihood) : 0.5;

    const prediction = finalYesProb >= finalNoProb ? "Yes" : "No";

    // --- Render Prediction Outcome ---
    const resultContainer = document.getElementById("prediction-result");
    const resultColor = prediction === "Yes" ? "var(--color-green)" : "var(--color-magenta)";
    const resultText = prediction === "Yes" ? "🏏 預測：出門玩球 (PLAY)" : "🏠 預測：待在家中 (STAY)";
    
    resultContainer.innerHTML = `
        <div class="result-val" style="color: ${resultColor}">${resultText}</div>
        <div class="result-desc">出門玩機率: ${(finalYesProb * 100).toFixed(1)}% | 留守機率: ${(finalNoProb * 100).toFixed(1)}%</div>
        <div class="prob-bar-container">
            <div class="prob-bar-label">
                <span>出門玩球 (Yes)</span>
                <span>留在家中 (No)</span>
            </div>
            <div class="prob-track">
                <div class="prob-fill" style="width: ${(finalYesProb * 100).toFixed(1)}%; background: ${resultColor}"></div>
            </div>
        </div>
    `;

    // --- Render Step-by-Step Math Breakdown ---
    const mathContainer = document.getElementById("math-breakdown");
    mathContainer.innerHTML = `
        <div class="step-card">
            <div class="step-title">步驟 1：計算事前機率 (Prior Probabilities)</div>
            <div class="step-body">
                在全體 ${total} 筆資料中：<br>
                <div class="math-formula">P(Yes) = ${yesCount} / ${total} = ${pYes.toFixed(3)}</div><br>
                <div class="math-formula">P(No) = ${noCount} / ${total} = ${pNo.toFixed(3)}</div>
            </div>
        </div>
        
        <div class="step-card">
            <div class="step-title">步驟 2：計算條件機率 (Likelihoods) — 採用拉普拉斯平滑 (+1)</div>
            <div class="step-body">
                給定 <strong>Play = Yes</strong> (${yesCount} 筆) 時，輸入特徵的機率：<br>
                P(${outlook} | Yes) = (${outYesCount} + 1) / (${yesCount} + 3) = <strong>${pOutYes.toFixed(3)}</strong><br>
                P(${temp} | Yes) = (${tempYesCount} + 1) / (${yesCount} + 3) = <strong>${pTempYes.toFixed(3)}</strong><br>
                P(${humidity} | Yes) = (${humYesCount} + 1) / (${yesCount} + 2) = <strong>${pHumYes.toFixed(3)}</strong><br>
                P(${windy === 'True' ? '有風' : '無風'} | Yes) = (${windYesCount} + 1) / (${yesCount} + 2) = <strong>${pWindYes.toFixed(3)}</strong><br>
                <br>
                給定 <strong>Play = No</strong> (${noCount} 筆) 時，輸入特徵的機率：<br>
                P(${outlook} | No) = (${outNoCount} + 1) / (${noCount} + 3) = <strong>${pOutNo.toFixed(3)}</strong><br>
                P(${temp} | No) = (${tempNoCount} + 1) / (${noCount} + 3) = <strong>${pTempNo.toFixed(3)}</strong><br>
                P(${humidity} | No) = (${humNoCount} + 1) / (${noCount} + 2) = <strong>${pHumNo.toFixed(3)}</strong><br>
                P(${windy === 'True' ? '有風' : '無風'} | No) = (${windNoCount} + 1) / (${noCount} + 2) = <strong>${pWindNo.toFixed(3)}</strong>
            </div>
        </div>

        <div class="step-card secondary">
            <div class="step-title">步驟 3：求事前機率與條件機率乘積 (Combined Probabilities)</div>
            <div class="step-body">
                <div class="math-formula">
                    P(Yes) &times; ∏ P(Feat | Yes) = ${pYes.toFixed(3)} &times; ${pOutYes.toFixed(3)} &times; ${pTempYes.toFixed(3)} &times; ${pHumYes.toFixed(3)} &times; ${pWindYes.toFixed(3)} = <strong>${likelihoodYes.toExponential(4)}</strong>
                </div><br>
                <div class="math-formula">
                    P(No) &times; ∏ P(Feat | No) = ${pNo.toFixed(3)} &times; ${pOutNo.toFixed(3)} &times; ${pTempNo.toFixed(3)} &times; ${pHumNo.toFixed(3)} &times; ${pWindNo.toFixed(3)} = <strong>${likelihoodNo.toExponential(4)}</strong>
                </div>
            </div>
        </div>

        <div class="step-card">
            <div class="step-title">步驟 4：歸一化標準化機率 (Posterior Normalization)</div>
            <div class="step-body">
                分母為兩者相加：${likelihoodYes.toExponential(4)} + ${likelihoodNo.toExponential(4)} = ${sumLikelihood.toExponential(4)}<br>
                事後機率 P(Yes | 特徵) = ${likelihoodYes.toExponential(4)} / ${sumLikelihood.toExponential(4)} = <strong>${(finalYesProb * 100).toFixed(1)}%</strong><br>
                事後機率 P(No | 特徵) = ${likelihoodNo.toExponential(4)} / ${sumLikelihood.toExponential(4)} = <strong>${(finalNoProb * 100).toFixed(1)}%</strong>
            </div>
        </div>
    `;
}

// ==========================================
// 5. Text Classifier Logic (Spam Filter)
// ==========================================

function renderWordDb() {
    const tbody = document.getElementById("word-db-body");
    tbody.innerHTML = "";

    // Count totals in database
    const totalSpamWords = wordDb.reduce((sum, w) => sum + w.spam, 0);
    const totalHamWords = wordDb.reduce((sum, w) => sum + w.ham, 0);
    const vocabularySize = wordDb.length;

    wordDb.forEach((row, index) => {
        // P(word | Spam) = (count + 1) / (totalSpamWords + vocabularySize)
        const pWordSpam = (row.spam + 1) / (totalSpamWords + vocabularySize);
        // P(word | Ham) = (count + 1) / (totalHamWords + vocabularySize)
        const pWordHam = (row.ham + 1) / (totalHamWords + vocabularySize);

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td class="fw-bold">${row.word}</td>
            <td contenteditable="true" onblur="updateWordCount(${index}, 'spam', this)">${row.spam}</td>
            <td contenteditable="true" onblur="updateWordCount(${index}, 'ham', this)">${row.ham}</td>
            <td>${pWordSpam.toFixed(4)}</td>
            <td>${pWordHam.toFixed(4)}</td>
        `;
        tbody.appendChild(tr);
    });

    runTextClassification();
}

function updateWordCount(rowIndex, field, cellElement) {
    const val = parseInt(cellElement.innerText.trim());
    if (isNaN(val) || val < 0) {
        alert("次數必須是正整數！");
        cellElement.innerText = wordDb[rowIndex][field];
        return;
    }
    wordDb[rowIndex][field] = val;
    renderWordDb();
}

function runTextClassification() {
    const textInput = document.getElementById("email-input").value;
    const resultContainer = document.getElementById("text-result");
    const mathContainer = document.getElementById("text-math-breakdown");

    if (textInput.trim() === "") {
        resultContainer.innerHTML = "<p class='text-muted'>請在輸入框中鍵入任何英文內容開始過濾。</p>";
        mathContainer.innerHTML = "<p class='text-muted'>請輸入文字以查看乘積計算過程。</p>";
        return;
    }

    // Tokenization: lowercase, remove punctuation, split by spaces
    const cleanText = textInput.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, " ");
    const words = cleanText.split(/\s+/).filter(w => w.length > 0);

    if (words.length === 0) {
        resultContainer.innerHTML = "<p class='text-muted'>請鍵入有意義的英文字詞。</p>";
        mathContainer.innerHTML = "<p class='text-muted'>請輸入文字以查看乘積計算過程。</p>";
        return;
    }

    // Compute stats
    const totalSpamWords = wordDb.reduce((sum, w) => sum + w.spam, 0);
    const totalHamWords = wordDb.reduce((sum, w) => sum + w.ham, 0);
    const vocabularySize = wordDb.length;

    // We will use Log Probabilities to prevent floating-point underflow on long text:
    // log P(Class | words) = log P(Class) + sum( log P(word_i | Class) )
    let logSpam = Math.log(EMAIL_PRIOR.spam);
    let logHam = Math.log(EMAIL_PRIOR.ham);

    const calculationSteps = [];

    words.forEach(word => {
        // Find word in database
        const dbWord = wordDb.find(w => w.word === word);
        const spamCount = dbWord ? dbWord.spam : 0;
        const hamCount = dbWord ? dbWord.ham : 0;

        // P(word | Spam) = (spamCount + 1) / (totalSpamWords + vocabularySize)
        const pWordSpam = (spamCount + 1) / (totalSpamWords + vocabularySize);
        // P(word | Ham) = (hamCount + 1) / (totalHamWords + vocabularySize)
        const pWordHam = (hamCount + 1) / (totalHamWords + vocabularySize);

        logSpam += Math.log(pWordSpam);
        logHam += Math.log(pWordHam);

        calculationSteps.push({
            word: word,
            inDb: !!dbWord,
            spamCount: spamCount,
            hamCount: hamCount,
            pWordSpam: pWordSpam,
            pWordHam: pWordHam
        });
    });

    // To prevent underflow when converting log probabilities back to regular probabilities,
    // we subtract the max log value: L(Class) = exp(logP(Class) - max(logP_spam, logP_ham))
    const maxLog = Math.max(logSpam, logHam);
    const likelihoodSpam = Math.exp(logSpam - maxLog);
    const likelihoodHam = Math.exp(logHam - maxLog);

    const normalizedSpam = likelihoodSpam / (likelihoodSpam + likelihoodHam);
    const normalizedHam = likelihoodHam / (likelihoodSpam + likelihoodHam);

    const isSpam = normalizedSpam > normalizedHam;
    const finalPrediction = isSpam ? "Spam" : "Ham";

    // --- Render Text Prediction Showcase ---
    const resultColor = isSpam ? "var(--color-magenta)" : "var(--color-green)";
    const resultIcon = isSpam ? "🚨 垃圾郵件 (SPAM)" : "📩 正常信件 (HAM)";
    
    resultContainer.innerHTML = `
        <div class="result-val" style="color: ${resultColor}">${resultIcon}</div>
        <div class="result-desc">判斷為垃圾信機率: ${(normalizedSpam * 100).toFixed(1)}% | 正常信機率: ${(normalizedHam * 100).toFixed(1)}%</div>
        <div class="prob-bar-container">
            <div class="prob-bar-label">
                <span>正常郵件 (Ham)</span>
                <span>垃圾郵件 (Spam)</span>
            </div>
            <div class="prob-track">
                <div class="prob-fill" style="width: ${(normalizedSpam * 100).toFixed(1)}%; background: ${resultColor}"></div>
            </div>
        </div>
    `;

    // --- Render Text Math Breakdown ---
    let stepsHtml = `
        <div class="step-card">
            <div class="step-title">步驟 1：分詞與資料庫匹配 (Tokenization & Math Matching)</div>
            <div class="step-body">
                輸入句子中共切分出 <strong>${words.length}</strong> 個有效單字：<br>
                <div class="word-pill-list">
    `;

    calculationSteps.forEach(step => {
        const classTag = step.inDb ? (step.pWordSpam > step.pWordHam ? "match-spam" : "match-ham") : "";
        stepsHtml += `<span class="word-pill ${classTag}">${step.word}</span>`;
    });

    stepsHtml += `
                </div>
                <p style="margin-top: 10px; font-size: 0.8rem; color: var(--text-muted);">
                    * 註：有背景顏色的字代表存在於關鍵字庫中，灰色字則為庫外字 (Out of Vocabulary)，套用拉普拉斯平滑基本值。
                </p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-title">步驟 2：累乘條件機率 (Log Probability Accumulation)</div>
            <div class="step-body">
                總詞庫庫容 V = ${vocabularySize}，垃圾信單字數 = ${totalSpamWords}，正常信單字數 = ${totalHamWords}。<br>
                事前機率：P(Spam) = ${EMAIL_PRIOR.spam}，P(Ham) = ${EMAIL_PRIOR.ham}。<br><br>
                <strong>相乘過程：</strong><br>
                <table style="width:100%; font-size: 0.8rem; margin-top:8px;">
                    <thead>
                        <tr>
                            <th>單字 (w)</th>
                            <th>P(w | Spam)</th>
                            <th>P(w | Ham)</th>
                        </tr>
                    </thead>
                    <tbody>
    `;

    calculationSteps.forEach(step => {
        stepsHtml += `
            <tr>
                <td><strong>${step.word}</strong></td>
                <td>(${step.spamCount} + 1) / (${totalSpamWords} + ${vocabularySize}) = <strong>${step.pWordSpam.toFixed(4)}</strong></td>
                <td>(${step.hamCount} + 1) / (${totalHamWords} + ${vocabularySize}) = <strong>${step.pWordHam.toFixed(4)}</strong></td>
            </tr>
        `;
    });

    stepsHtml += `
                    </tbody>
                </table>
            </div>
        </div>

        <div class="step-card secondary">
            <div class="step-title">步驟 3：事後概率計算結果 (Final log-likelihood)</div>
            <div class="step-body">
                使用對數概率避免小數溢出：<br>
                <div class="math-formula">log P(Spam | Message) = log(${EMAIL_PRIOR.spam}) + ∑ log(P(w | Spam)) = <strong>${logSpam.toFixed(4)}</strong></div><br>
                <div class="math-formula">log P(Ham | Message) = log(${EMAIL_PRIOR.ham}) + ∑ log(P(w | Ham)) = <strong>${logHam.toFixed(4)}</strong></div>
                <br>
                轉換為相對機率：<br>
                Likelihood(Spam) = e^(${logSpam.toFixed(2)} - ${maxLog.toFixed(2)}) = <strong>${likelihoodSpam.toFixed(4)}</strong><br>
                Likelihood(Ham) = e^(${logHam.toFixed(2)} - ${maxLog.toFixed(2)}) = <strong>${likelihoodHam.toFixed(4)}</strong>
            </div>
        </div>
    `;

    mathContainer.innerHTML = stepsHtml;
}

// ==========================================
// 6. Initialization
// ==========================================

window.onload = function() {
    renderDataset();
    renderWordDb();
};
