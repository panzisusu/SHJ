// Global States
let walletBalance = 10000;
let netProfit = 0;
let activeCategory = 'all';
let activeSidebarTab = 'slip';
let matches = [];
let betSlip = []; // { id, matchId, teamHome, teamAway, marketType, selection, odds, label, wager }
let historyBets = [];

// Static Teams and Strength settings for simulation (higher strength = more score weight)
const TEAMS = {
    baseball: [
        { name: "中信兄弟", emoji: "🐘", strength: 7 },
        { name: "味全龍", emoji: "🐉", strength: 6.5 },
        { name: "統一獅", emoji: "🦁", strength: 6.8 },
        { name: "富邦悍將", emoji: "👼", strength: 5.5 },
        { name: "樂天桃猿", emoji: "🐒", strength: 6.2 },
        { name: "台鋼雄鷹", emoji: "🦅", strength: 5.2 }
    ],
    basketball: [
        { name: "洛杉磯湖人", emoji: "👑", strength: 8.5 },
        { name: "金州勇士", emoji: "⚡", strength: 8.2 },
        { name: "波士頓塞爾提克", emoji: "🍀", strength: 9.2 },
        { name: "密爾瓦基公鹿", emoji: "🦌", strength: 8.8 },
        { name: "新竹攻城獅", emoji: "🦁", strength: 6.5 },
        { name: "台北富邦勇士", emoji: "🛡️", strength: 7.2 }
    ],
    soccer: [
        { name: "皇家馬德里", emoji: "👑", strength: 9.5 },
        { name: "巴塞隆納", emoji: "🔵", strength: 9.0 },
        { name: "曼徹斯特城", emoji: "🛡️", strength: 9.6 },
        { name: "利物浦", emoji: "🔴", strength: 8.9 },
        { name: "兵工廠", emoji: "🔫", strength: 8.7 },
        { name: "拜仁慕尼黑", emoji: "🦁", strength: 9.1 }
    ]
};

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
    loadUserData();
    generateMatches();
    renderAll();
    initConfetti();
});

// Load persistent data from localStorage
function loadUserData() {
    const savedWallet = localStorage.getItem("sportslottery_wallet");
    if (savedWallet !== null) {
        walletBalance = parseFloat(savedWallet);
    }
    
    const savedProfit = localStorage.getItem("sportslottery_profit");
    if (savedProfit !== null) {
        netProfit = parseFloat(savedProfit);
    }

    const savedHistory = localStorage.getItem("sportslottery_history");
    if (savedHistory !== null) {
        historyBets = JSON.parse(savedHistory);
    }
}

// Save data to localStorage
function saveUserData() {
    localStorage.setItem("sportslottery_wallet", walletBalance.toString());
    localStorage.setItem("sportslottery_profit", netProfit.toString());
    localStorage.setItem("sportslottery_history", JSON.stringify(historyBets));
}

// Reset/Refill Wallet
function refillWallet() {
    walletBalance = 10000;
    saveUserData();
    renderWallet();
    showToast("帳戶已重置為 $10,000 NTD 紓困金！", "success");
}

// Generate match database dynamically if empty or all settled
function generateMatches() {
    const savedMatches = localStorage.getItem("sportslottery_matches");
    if (savedMatches) {
        matches = JSON.parse(savedMatches);
        // If all existing matches are settled, generate new ones
        const allSettled = matches.every(m => m.status === 'settled');
        if (!allSettled) return;
    }

    matches = [];
    
    // 1. CPBL Baseball Matches (2 matches)
    createMockMatch("baseball", "CPBL", 0);
    createMockMatch("baseball", "CPBL", 1);

    // 2. NBA Basketball Matches (2 matches)
    createMockMatch("basketball", "NBA", 0);
    createMockMatch("basketball", "NBA", 1);

    // 3. Soccer Matches (2 matches)
    createMockMatch("soccer", "UEFA", 0);
    createMockMatch("soccer", "UEFA", 1);

    localStorage.setItem("sportslottery_matches", JSON.stringify(matches));
}

function createMockMatch(category, league, index) {
    const teamPool = TEAMS[category];
    
    // Pick two distinct teams
    let hIdx = (index * 2) % teamPool.length;
    let aIdx = (index * 2 + 1) % teamPool.length;
    
    const home = teamPool[hIdx];
    const away = teamPool[aIdx];

    // Determine handicap line and odds
    let handicapValue = -1.5;
    if (category === "basketball") {
        handicapValue = -4.5;
    } else if (category === "soccer") {
        handicapValue = -0.5;
    }

    // Generate simulated dynamic odds based on strength difference
    const diff = home.strength - away.strength;
    let mlHome = (2.0 - diff * 0.15).toFixed(2);
    let mlAway = (2.0 + diff * 0.15).toFixed(2);
    
    // Clamp odds
    mlHome = Math.max(1.15, Math.min(3.80, parseFloat(mlHome))).toFixed(2);
    mlAway = Math.max(1.15, Math.min(3.80, parseFloat(mlAway))).toFixed(2);

    const matchId = `match_${category}_${Date.now()}_${index}`;
    
    matches.push({
        id: matchId,
        category: category,
        league: league,
        homeTeam: home.name,
        homeEmoji: home.emoji,
        homeStrength: home.strength,
        awayTeam: away.name,
        awayEmoji: away.emoji,
        awayStrength: away.strength,
        status: 'active',
        homeScore: null,
        awayScore: null,
        markets: {
            moneyline: { home: parseFloat(mlHome), away: parseFloat(mlAway) },
            handicap: { 
                value: handicapValue, 
                homeOdds: 1.82, 
                awayOdds: 1.82 
            },
            overUnder: { 
                value: category === "baseball" ? 7.5 : (category === "basketball" ? 218.5 : 2.5), 
                overOdds: 1.80, 
                underOdds: 1.80 
            },
            oddEven: { oddOdds: 1.85, evenOdds: 1.85 }
        }
    });
}

// Global UI Rendering Router
function renderAll() {
    renderWallet();
    renderMatchesList();
    renderBetSlip();
    renderBetHistory();
}

function renderWallet() {
    document.getElementById("wallet-amount").textContent = Math.round(walletBalance).toLocaleString();
    
    // Net profit
    const netEl = document.getElementById("net-profit");
    netEl.textContent = (netProfit >= 0 ? "+" : "") + Math.round(netProfit).toLocaleString() + " 元";
    netEl.className = "stat-val " + (netProfit >= 0 ? "positive" : "negative");
    
    // Active bets count
    const activeCount = historyBets.filter(b => b.status === "active").length;
    document.getElementById("active-bets-count").textContent = activeCount;
}

// Render available matches with Category filter
function renderMatchesList() {
    const listContainer = document.getElementById("matches-list");
    if (!listContainer) return;

    listContainer.innerHTML = "";
    const filtered = matches.filter(m => activeCategory === 'all' || m.category === activeCategory);

    if (filtered.length === 0) {
        listContainer.innerHTML = `<div class="no-data">當前無符合該類別的賽事</div>`;
        return;
    }

    filtered.forEach(m => {
        const isSettled = m.status === 'settled';
        const card = document.createElement("div");
        card.className = "match-card";
        card.setAttribute("data-match-id", m.id);

        // Odds Selection checking helpers
        const isSelected = (marketType, selection) => {
            return betSlip.some(item => item.matchId === m.id && item.marketType === marketType && item.selection === selection);
        };

        // Score markup
        const scoreMarkup = isSettled 
            ? `<div class="match-settled-scores">${m.homeScore} : ${m.awayScore} (已結算)</div>` 
            : `<div class="match-time-status">未開賽</div>`;

        // Render Action Button: Simulate Match if any active bet is placed on this match, or just simulation trigger
        const activeBetsOnThisMatch = historyBets.filter(b => b.matchId === m.id && b.status === "active");
        let actionBtnMarkup = "";
        if (!isSettled) {
            actionBtnMarkup = `
                <div class="match-actions">
                    <button class="btn-simulate" onclick="simulateMatch('${m.id}')">
                        <i class="fa-solid fa-play"></i> 模擬並結算比賽
                    </button>
                </div>
            `;
        }

        card.innerHTML = `
            <div class="match-meta">
                <span class="league-badge ${m.category}">${m.league}</span>
                ${scoreMarkup}
            </div>
            <div class="match-teams">
                <div class="team-display">
                    <span class="team-emoji">${m.homeEmoji}</span>
                    <span>${m.homeTeam}</span>
                </div>
                <span class="vs-divider">VS</span>
                <div class="team-display">
                    <span>${m.awayTeam}</span>
                    <span class="team-emoji">${m.awayEmoji}</span>
                </div>
            </div>
            
            ${isSettled ? '' : `
            <div class="odds-grid-container">
                <!-- Market 1: 不讓分 (Moneyline) -->
                <div class="odds-market">
                    <div class="market-name">不讓分 (主客和)</div>
                    <div class="market-buttons">
                        <button class="odds-btn ${isSelected('moneyline', 'home') ? 'active' : ''}" 
                            onclick="toggleBet('${m.id}', 'moneyline', 'home', ${m.markets.moneyline.home}, '不讓分: 主勝')">
                            <span>主勝</span>
                            <span class="odds-val">${m.markets.moneyline.home}</span>
                        </button>
                        <button class="odds-btn ${isSelected('moneyline', 'away') ? 'active' : ''}" 
                            onclick="toggleBet('${m.id}', 'moneyline', 'away', ${m.markets.moneyline.away}, '不讓分: 客勝')">
                            <span>客勝</span>
                            <span class="odds-val">${m.markets.moneyline.away}</span>
                        </button>
                    </div>
                </div>

                <!-- Market 2: 讓分 (Handicap) -->
                <div class="odds-market">
                    <div class="market-name">讓分 (分差)</div>
                    <div class="market-buttons">
                        <button class="odds-btn ${isSelected('handicap', 'home') ? 'active' : ''}" 
                            onclick="toggleBet('${m.id}', 'handicap', 'home', ${m.markets.handicap.homeOdds}, '讓分: 主隊 (${m.markets.handicap.value > 0 ? '+' : ''}${m.markets.handicap.value})')">
                            <span>主 (${m.markets.handicap.value > 0 ? '+' : ''}${m.markets.handicap.value})</span>
                            <span class="odds-val">${m.markets.handicap.homeOdds}</span>
                        </button>
                        <button class="odds-btn ${isSelected('handicap', 'away') ? 'active' : ''}" 
                            onclick="toggleBet('${m.id}', 'handicap', 'away', ${m.markets.handicap.awayOdds}, '讓分: 客隊 (${m.markets.handicap.value * -1 > 0 ? '+' : ''}${m.markets.handicap.value * -1})')">
                            <span>客 (${m.markets.handicap.value * -1 > 0 ? '+' : ''}${m.markets.handicap.value * -1})</span>
                            <span class="odds-val">${m.markets.handicap.awayOdds}</span>
                        </button>
                    </div>
                </div>

                <!-- Market 3: 大小 (Over/Under) -->
                <div class="odds-market">
                    <div class="market-name">大小 (總分分界)</div>
                    <div class="market-buttons">
                        <button class="odds-btn ${isSelected('overUnder', 'over') ? 'active' : ''}" 
                            onclick="toggleBet('${m.id}', 'overUnder', 'over', ${m.markets.overUnder.overOdds}, '總得分: 大於 ${m.markets.overUnder.value}')">
                            <span>大 ${m.markets.overUnder.value}</span>
                            <span class="odds-val">${m.markets.overUnder.overOdds}</span>
                        </button>
                        <button class="odds-btn ${isSelected('overUnder', 'under') ? 'active' : ''}" 
                            onclick="toggleBet('${m.id}', 'overUnder', 'under', ${m.markets.overUnder.underOdds}, '總得分: 小於 ${m.markets.overUnder.value}')">
                            <span>小 ${m.markets.overUnder.value}</span>
                            <span class="odds-val">${m.markets.overUnder.underOdds}</span>
                        </button>
                    </div>
                </div>

                <!-- Market 4: 單雙 (Odd/Even) -->
                <div class="odds-market">
                    <div class="market-name">單雙 (總得分)</div>
                    <div class="market-buttons">
                        <button class="odds-btn ${isSelected('oddEven', 'odd') ? 'active' : ''}" 
                            onclick="toggleBet('${m.id}', 'oddEven', 'odd', ${m.markets.oddEven.oddOdds}, '總得分: 單數')">
                            <span>單</span>
                            <span class="odds-val">${m.markets.oddEven.oddOdds}</span>
                        </button>
                        <button class="odds-btn ${isSelected('oddEven', 'even') ? 'active' : ''}" 
                            onclick="toggleBet('${m.id}', 'oddEven', 'even', ${m.markets.oddEven.evenOdds}, '總得分: 雙數')">
                            <span>雙</span>
                            <span class="odds-val">${m.markets.oddEven.evenOdds}</span>
                        </button>
                    </div>
                </div>
            </div>
            `}
            
            ${actionBtnMarkup}
        `;
        listContainer.appendChild(card);
    });
}

// Filter Category
function filterCategory(cat) {
    activeCategory = cat;
    document.querySelectorAll(".cat-btn").forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");
    renderMatchesList();
}

// Switch Right Sidebar Tabs
function switchSidebarTab(tab) {
    activeSidebarTab = tab;
    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));

    document.getElementById(`tab-btn-${tab}`).classList.add("active");
    document.getElementById(`tab-content-${tab}`).classList.add("active");
}

// Add or Remove Item in Bet Slip
function toggleBet(matchId, marketType, selection, oddsVal, labelText) {
    const matchObj = matches.find(m => m.id === matchId);
    if (!matchObj || matchObj.status === 'settled') return;

    // Check if exactly this selection already exists
    const idx = betSlip.findIndex(item => item.matchId === matchId && item.marketType === marketType && item.selection === selection);

    if (idx > -1) {
        // Remove it
        betSlip.splice(idx, 1);
    } else {
        // Remove other selections of same market on same match (to prevent logical bet collision)
        const conflictIdx = betSlip.findIndex(item => item.matchId === matchId && item.marketType === marketType);
        if (conflictIdx > -1) {
            betSlip.splice(conflictIdx, 1);
        }

        // Add new selection
        betSlip.push({
            id: `slip_${matchId}_${marketType}`,
            matchId: matchId,
            teamHome: matchObj.homeTeam,
            teamAway: matchObj.awayTeam,
            marketType: marketType,
            selection: selection,
            odds: oddsVal,
            label: labelText,
            wager: 100 // default wager amount
        });
    }

    renderMatchesList();
    renderBetSlip();
    
    // Auto switch back to slip tab
    switchSidebarTab('slip');
}

// Render Bet Slip sidebar contents
function renderBetSlip() {
    const container = document.getElementById("slip-items-container");
    const countBadge = document.getElementById("slip-count");
    const summaryPanel = document.getElementById("slip-summary-panel");
    if (!container) return;

    countBadge.textContent = betSlip.length;

    if (betSlip.length === 0) {
        container.innerHTML = `
            <div class="empty-slip-msg">
                <i class="fa-solid fa-receipt"></i>
                <p>請點擊左側賽事賠率進行投注</p>
            </div>
        `;
        summaryPanel.style.display = "none";
        return;
    }

    container.innerHTML = "";
    summaryPanel.style.display = "flex";

    let totalBet = 0;
    let totalPayout = 0;

    betSlip.forEach((item, index) => {
        const itemEl = document.createElement("div");
        itemEl.className = "slip-item";
        
        const estPayout = (item.wager * item.odds).toFixed(0);
        totalBet += item.wager;
        totalPayout += parseFloat(estPayout);

        itemEl.innerHTML = `
            <div class="slip-item-header">
                <span class="slip-item-title">${item.teamHome} VS ${item.teamAway}</span>
                <button class="btn-remove-item" onclick="removeSlipItem(${index})">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div class="slip-item-bet">
                <span class="slip-item-market">${item.label}</span>
                <span class="slip-item-odds">@ ${item.odds.toFixed(2)}</span>
            </div>
            <div class="slip-item-input-row">
                <div class="wager-input-wrapper">
                    <span class="wager-currency">$</span>
                    <input type="number" class="wager-input" value="${item.wager}" min="10" step="50" 
                        oninput="updateSlipWager(${index}, this.value)">
                </div>
                <div class="payout-display">
                    <span>預估派彩 </span><span class="payout-val">$${estPayout}</span>
                </div>
            </div>
        `;
        container.appendChild(itemEl);
    });

    document.getElementById("summary-total-bet").textContent = totalBet.toLocaleString();
    document.getElementById("summary-total-payout").textContent = Math.round(totalPayout).toLocaleString();
}

function removeSlipItem(index) {
    betSlip.splice(index, 1);
    renderMatchesList();
    renderBetSlip();
}

function updateSlipWager(index, val) {
    let num = parseInt(val);
    if (isNaN(num) || num < 0) num = 0;
    betSlip[index].wager = num;
    renderBetSlip();
}

function clearSlip() {
    betSlip = [];
    renderMatchesList();
    renderBetSlip();
}

// Submit Active Bets
function submitBets() {
    if (betSlip.length === 0) return;

    let totalWager = 0;
    for (let item of betSlip) {
        if (item.wager <= 0) {
            showToast("投注金額必須大於 0！", "error");
            return;
        }
        totalWager += item.wager;
    }

    if (totalWager > walletBalance) {
        showToast("您的帳戶餘額不足！請降低金額或領取紓困金。", "error");
        return;
    }

    // Deduct from wallet
    walletBalance -= totalWager;
    
    // Add to History active list
    betSlip.forEach(item => {
        historyBets.unshift({
            id: `ticket_${Date.now()}_${Math.floor(Math.random()*1000)}`,
            timestamp: new Date().toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit' }),
            matchId: item.matchId,
            matchDesc: `${item.teamHome} vs ${item.teamAway}`,
            marketType: item.marketType,
            selection: item.selection,
            odds: item.odds,
            label: item.label,
            wager: item.wager,
            status: 'active', // active, won, lost
            payout: null
        });
    });

    // Clear slip
    betSlip = [];
    saveUserData();
    renderAll();
    showToast("投注成功！賽事已扣款，請點選左側賽事進行模擬結算。", "success");
    
    // Switch to history tab
    switchSidebarTab('history');
}

// Render Betting History
function renderBetHistory() {
    const container = document.getElementById("history-container");
    if (!container) return;

    if (historyBets.length === 0) {
        container.innerHTML = `
            <div class="empty-history-msg">
                <i class="fa-solid fa-folder-open"></i>
                <p>尚無任何投注紀錄</p>
            </div>
        `;
        return;
    }

    container.innerHTML = "";
    historyBets.forEach(bet => {
        const card = document.createElement("div");
        card.className = "history-card";
        
        let statusText = "進行中";
        let statusClass = "active";
        let payoutText = `預估: $${(bet.wager * bet.odds).toFixed(0)}`;
        let payoutClass = "";

        if (bet.status === "won") {
            statusText = "贏 🎉";
            statusClass = "won";
            payoutText = `派彩: +$${Math.round(bet.payout)}`;
            payoutClass = "won-payout";
        } else if (bet.status === "lost") {
            statusText = "輸 ❌";
            statusClass = "lost";
            payoutText = "派彩: $0";
        }

        card.innerHTML = `
            <div class="history-card-header">
                <span class="history-time">${bet.timestamp}</span>
                <span class="status-badge ${statusClass}">${statusText}</span>
            </div>
            <div class="history-card-details">
                <span>${bet.label}</span>
                <span class="history-odds">@ ${bet.odds.toFixed(2)}</span>
            </div>
            <div class="history-summary-row" style="margin-top: 4px;">
                <span>賽事：${bet.matchDesc}</span>
            </div>
            <div class="history-summary-row" style="margin-top: 4px; border-top: 1px dashed rgba(255,255,255,0.03); padding-top: 4px;">
                <span>投注額: <span class="history-amount">$${bet.wager}</span></span>
                <span class="${payoutClass}">${payoutText}</span>
            </div>
        `;
        container.appendChild(card);
    });
}

// Match Simulation logic & modal trigger
function simulateMatch(matchId) {
    const match = matches.find(m => m.id === matchId);
    if (!match || match.status === 'settled') return;

    match.status = 'live';
    renderMatchesList();

    // Reset simulator UI values
    document.getElementById("sim-league").textContent = match.league;
    document.getElementById("sim-home-name").textContent = match.homeTeam;
    document.getElementById("sim-away-name").textContent = match.awayTeam;
    document.getElementById("sim-home-score").textContent = "0";
    document.getElementById("sim-away-score").textContent = "0";
    
    // Set emojis/icons
    document.getElementById("sim-home-logo").textContent = match.homeEmoji;
    document.getElementById("sim-away-logo").textContent = match.awayEmoji;

    // Show modal
    const modal = document.getElementById("sim-modal");
    modal.classList.add("show");
    document.getElementById("btn-close-sim").style.display = "none";
    document.getElementById("sim-status-text").textContent = "準備開賽，球員進場中...";

    const progressFill = document.getElementById("sim-progress-fill");
    progressFill.style.width = "0%";

    // Simulation timing parameters
    let currentProgress = 0;
    const simDuration = 3000; // 3 seconds simulation time
    const intervalMs = 100;
    const increments = simDuration / intervalMs;
    const progressPerStep = 100 / increments;

    let hScore = 0;
    let aScore = 0;
    let simulationSteps = 0;

    // Sim logic depending on category
    const maxScoreLimit = match.category === "baseball" ? 10 : (match.category === "basketball" ? 120 : 5);

    const interval = setInterval(() => {
        currentProgress += progressPerStep;
        progressFill.style.width = `${Math.min(100, currentProgress)}%`;
        simulationSteps++;

        // Incremental score updates to simulate live action
        if (Math.random() < 0.25) {
            let scoreAdd = 1;
            if (match.category === "basketball") {
                scoreAdd = Math.random() < 0.4 ? 2 : 3;
            }
            if (Math.random() * match.homeStrength > Math.random() * match.awayStrength) {
                hScore += scoreAdd;
                document.getElementById("sim-home-score").textContent = hScore;
                document.getElementById("sim-status-text").textContent = `⚡ 漂亮！${match.homeTeam} 取得得分！`;
            } else {
                aScore += scoreAdd;
                document.getElementById("sim-away-score").textContent = aScore;
                document.getElementById("sim-status-text").textContent = `💥 反擊！${match.awayTeam} 攻下一球！`;
            }
        }

        if (simulationSteps >= increments) {
            clearInterval(interval);
            
            // Adjust final score to avoid draws in baseball/basketball, or reflect final simulation outcome
            if (match.category !== "soccer" && hScore === aScore) {
                if (Math.random() * match.homeStrength > Math.random() * match.awayStrength) {
                    hScore += (match.category === "basketball" ? 2 : 1);
                } else {
                    aScore += (match.category === "basketball" ? 2 : 1);
                }
            }

            // Sync scores to simulator board
            document.getElementById("sim-home-score").textContent = hScore;
            document.getElementById("sim-away-score").textContent = aScore;
            document.getElementById("sim-status-text").textContent = `比賽結束！終場比數 ${hScore} : ${aScore}`;

            // Settle all active bets placed on this match in user's betting history
            settleBetsForMatch(matchId, hScore, aScore);

            // Save settled match state
            match.status = 'settled';
            match.homeScore = hScore;
            match.awayScore = aScore;
            localStorage.setItem("sportslottery_matches", JSON.stringify(matches));

            // Enable modal close button
            document.getElementById("btn-close-sim").style.display = "block";
        }
    }, intervalMs);
}

function settleBetsForMatch(matchId, homeScore, awayScore) {
    const activeMatchBets = historyBets.filter(b => b.matchId === matchId && b.status === "active");
    const matchObj = matches.find(m => m.id === matchId);
    if (!matchObj) return;

    let userWonAny = false;

    activeMatchBets.forEach(bet => {
        let isWin = false;

        switch (bet.marketType) {
            case "moneyline":
                if (bet.selection === "home" && homeScore > awayScore) isWin = true;
                if (bet.selection === "away" && awayScore > homeScore) isWin = true;
                break;
            case "handicap":
                // Handicap line is for Home. e.g. Home score + value vs Away score
                const hLine = matchObj.markets.handicap.value;
                const homeFinalVal = homeScore + hLine;
                if (bet.selection === "home" && homeFinalVal > awayScore) isWin = true;
                if (bet.selection === "away" && awayScore > homeFinalVal) isWin = true;
                break;
            case "overUnder":
                const ouVal = matchObj.markets.overUnder.value;
                const totalScore = homeScore + awayScore;
                if (bet.selection === "over" && totalScore > ouVal) isWin = true;
                if (bet.selection === "under" && totalScore < ouVal) isWin = true;
                break;
            case "oddEven":
                const total = homeScore + awayScore;
                const isOdd = total % 2 !== 0;
                if (bet.selection === "odd" && isOdd) isWin = true;
                if (bet.selection === "even" && !isOdd) isWin = true;
                break;
        }

        if (isWin) {
            bet.status = "won";
            const winnings = bet.wager * bet.odds;
            bet.payout = winnings;
            walletBalance += winnings;
            netProfit += (winnings - bet.wager);
            userWonAny = true;
        } else {
            bet.status = "lost";
            bet.payout = 0;
            netProfit -= bet.wager;
        }
    });

    saveUserData();
    
    // Trigger celebration effects if user won a bet on this match simulation
    if (userWonAny) {
        setTimeout(() => {
            triggerConfetti();
        }, 300);
    }
}

function closeSimModal() {
    const modal = document.getElementById("sim-modal");
    modal.classList.remove("show");
    
    // Check if all matches are settled, if so regenerate matches for fresh bets
    const allSettled = matches.every(m => m.status === 'settled');
    if (allSettled) {
        generateMatches();
        showToast("所有比賽已完賽，系統已重新生成下一輪賽事！", "success");
    }

    renderAll();
}

// Custom Premium Toast Notifications helper
function showToast(message, type = "success") {
    // Create toast element
    const toast = document.createElement("div");
    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.left = "50%";
    toast.style.transform = "translateX(-50%) translateY(20px)";
    toast.style.background = type === "success" ? "rgba(16, 185, 129, 0.95)" : "rgba(239, 68, 68, 0.95)";
    toast.style.color = "white";
    toast.style.padding = "12px 24px";
    toast.style.borderRadius = "10px";
    toast.style.fontSize = "0.9rem";
    toast.style.fontWeight = "bold";
    toast.style.zIndex = "99999";
    toast.style.boxShadow = "0 10px 25px rgba(0,0,0,0.5)";
    toast.style.transition = "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    toast.style.opacity = "0";
    toast.innerHTML = `<i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation'}" style="margin-right: 8px;"></i> ${message}`;
    
    document.body.appendChild(toast);
    
    // Fade in
    setTimeout(() => {
        toast.style.opacity = "1";
        toast.style.transform = "translateX(-50%) translateY(0)";
    }, 100);

    // Fade out and remove
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateX(-50%) translateY(20px)";
        setTimeout(() => {
            toast.remove();
        }, 350);
    }, 3000);
}

// -------------------------------------------------------------
// Canvas Confetti Celebration Engine
// -------------------------------------------------------------
let canvas, ctx;
let confettiParticles = [];
const confettiColors = ['#f5c423', '#00e5ff', '#10b981', '#ff007f', '#ffffff'];

function initConfetti() {
    canvas = document.getElementById("confetti-canvas");
    if (!canvas) return;
    ctx = canvas.getContext("2d");
    
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
}

function resizeCanvas() {
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
}

function triggerConfetti() {
    if (!canvas) return;
    confettiParticles = [];
    
    // Spawn 100 particles
    for (let i = 0; i < 100; i++) {
        confettiParticles.push({
            x: canvas.width / 2,
            y: canvas.height * 0.8, // burst from simulator position
            radius: Math.random() * 4 + 3,
            color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
            vx: (Math.random() - 0.5) * 15,
            vy: (Math.random() - 0.8) * 18 - 5,
            gravity: 0.45,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10
        });
    }

    animateConfetti();
}

function animateConfetti() {
    if (confettiParticles.length === 0) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    let active = false;

    confettiParticles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.vx *= 0.98; // air resistance
        p.rotation += p.rotationSpeed;

        if (p.y < canvas.height + 20) {
            active = true;
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.fillStyle = p.color;
            
            // Draw small rectangular/polygonal confetti shape
            ctx.fillRect(-p.radius, -p.radius / 2, p.radius * 2, p.radius);
            ctx.restore();
        }
    });

    if (active) {
        requestAnimationFrame(animateConfetti);
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}
