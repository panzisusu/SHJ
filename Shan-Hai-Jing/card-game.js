/**
 * 山海經 · 奇獸對決 (卡牌遊戲闖關模式)
 * Core Game Logic
 */

// 1. 確定有水墨插圖的經典異獸 ID 清單 (保證卡牌不會載入預設黑色剪影)
const SAFE_CARD_POOL_IDS = [
    "nine-tailed-fox", "zhu-long", "taotie", "jingwei", "qilin", "xing-tian", "hundun", "tiangou",
    "bi-fang", "ling_ling", "fenghuang", "luwu", "kui", "yinglong", "bashe", "kaiming", "yingzhao",
    "taowu", "qiongqi", "dangkang", "fuzhu", "feiyi", "mingshe", "huashe", "xuanguian", "lushu",
    "xingxing", "lei", "boyi", "guanguan", "chiru", "lili", "lingyu", "quru", "hujiao", "fei",
    "yongyong-fish", "xiegou", "shusi", "ranyi-fish", "bo", "huan", "qitu", "zhuhuai", "liangqu",
    "juru", "aoye", "jueru", "jufu", "shuhu", "songsi", "lei-bird", "huan-beast", "tianma",
    "chenghuang", "jiufeng", "zheng", "jiao", "luanniao", "yong", "gudiao", "wuzhiqi", "boyu",
    "heyu", "wenyao-fish", "helu-fish", "manman-bird", "suanyu", "yayu", "sanzuwu", "bingyi",
    "yushiqie", "pingyi", "nvchou", "jiliang", "luoyu", "shangao", "juji", "changyou", "huahuai",
    "zhi", "qianyang", "shuyu", "luyu", "yuma", "tianquan", "lin", "huan-sheep", "youyou",
    "qiuyu", "zhuyan", "danghu", "ershu", "dijiang-origin", "feishu", "linghu", "tulou", "qinyuan",
    "ti-yu", "sanshou-nation", "yuchan", "qinglong", "rose", "white-tiger", "zhuque", "xuanwu", "wangliang",
    "yuchan-spirit", "sanshu-bird", "qilin-lin", "qilin-lin-female", "jiu-bird", "chiyan-beast",
    "shenshen-beast", "xun-beast", "youren-beast", "tianzhi-bird", "shanjun-beast", "mangcao-beast",
    "yingchu-beast", "huodou-beast", "yuzhi-fish", "chongqu-beast", "ran-min-giant", "tiandi-god",
    "chiyou-spirit", "zhaoyang-god", "sanshu-crow",
    // 剛剛新生成的
    "jiliang-white", "luoyu-spirit", "shangao-cursing", "juji-hedgehog", "changyou-water", "huahuai-shaggy",
    "zhi-tiger", "qianyang-white", "shuyu-anxiety", "luyu-ox", "yuma-gold", "tianquan-cat", "lin-barren",
    "huan-ram", "youyou-deer", "qiuyu-locust", "zhuyan-war"
];

// 2. 四大魔王戰役關卡設定 (四大凶獸、四大神獸、四大災獸、四大瑞獸)
const CAMPAIGNS_CONFIG = {
    "fiends": {
        name: "四大凶獸戰役",
        levels: {
            1: {
                id: "hundun",
                name: "混沌 (第一關)",
                avatar: "assets/webp/hundun.webp",
                maxHp: 150,
                hp: 150,
                skillName: "混沌初開",
                skillDesc: "每回合對決前，隨機降低玩家場上一張卡牌 20% 攻擊力。",
                deck: ["taotie", "bashe", "ling_ling", "feiyi", "mingshe", "huashe", "zhuhuai", "liangqu"]
            },
            2: {
                id: "qiongqi",
                name: "窮奇 (第二關)",
                avatar: "assets/webp/qiongqi.webp",
                maxHp: 200,
                hp: 200,
                skillName: "懲善揚惡",
                skillDesc: "對決時，敵方卡牌生命值越高，窮奇對其造成的傷害額外增加 25%。",
                deck: ["taowu", "gudiao", "suanyu", "yayu", "fei", "xiegou", "aoye", "chiyan-beast"]
            },
            3: {
                id: "taowu",
                name: "檮杌 (第三關)",
                avatar: "assets/webp/taowu.webp",
                maxHp: 250,
                hp: 250,
                skillName: "頑固難馴",
                skillDesc: "受傷時，有 30% 機率將所受傷害 of 30% 反彈給攻擊者。",
                deck: ["qiongqi", "wuzhiqi", "boyu", "heyu", "tulou", "qinyuan", "wangliang", "huodou-beast"]
            },
            4: {
                id: "taotie",
                name: "饕餮 (第四關 - 終極魔王)",
                avatar: "assets/webp/taotie.webp",
                maxHp: 350,
                hp: 350,
                skillName: "貪食無厭",
                skillDesc: "每當饕餮的隨從擊殺玩家卡牌，魔王本體回復該卡牌最大生命值 50% 的血量。",
                deck: ["hundun", "qiongqi", "taowu", "chiyou-spirit", "bashe", "zhuyan", "chiyan-beast", "huodou-beast"]
            }
        }
    },
    "sacreds": {
        name: "四大神獸戰役",
        levels: {
            1: {
                id: "xuanwu",
                name: "玄武 (第一關)",
                avatar: "assets/webp/xuanwu.webp",
                maxHp: 180,
                hp: 180,
                skillName: "玄冥盾甲",
                skillDesc: "玄武防禦極高。玄武本體受到的所有非神聖傷害降低 30%。",
                deck: ["xuanguian", "lushu", "boyi", "lei", "huan-beast", "rose"]
            },
            2: {
                id: "zhuque",
                name: "朱雀 (第二關)",
                avatar: "assets/webp/zhuque.webp",
                maxHp: 220,
                hp: 220,
                skillName: "南明離火",
                skillDesc: "朱雀隨從登場時，對玩家所有場上卡牌造成 15 點烈焰傷害。",
                deck: ["fenghuang", "bi_fang", "luanniao", "gudiao", "jiufeng", "sanzuwu"]
            },
            3: {
                id: "white-tiger",
                name: "白虎 (第三關)",
                avatar: "assets/webp/white-tiger.webp",
                maxHp: 260,
                hp: 260,
                skillName: "西天殺伐",
                skillDesc: "白虎手下卡牌攻擊時，若目標生命低於 50% 則直接屬性斬殺（傷害加倍）。",
                deck: ["zheng", "jiao", "qiongqi", "feishu", "qilin-lin", "chiyan-beast"]
            },
            4: {
                id: "qinglong",
                name: "青龍 (第四關 - 終極神獸)",
                avatar: "assets/webp/qinglong.webp",
                maxHp: 360,
                hp: 360,
                skillName: "九天雷動",
                skillDesc: "每回合開始時，召喚天雷隨機對玩家場上兩張卡牌造成 25 點雷擊傷害。",
                deck: ["yinglong", "zhu_long", "kui", "feiyi", "mingshe", "sanshu-bird"]
            }
        }
    },
    "disasters": {
        name: "四大災獸戰役",
        levels: {
            1: {
                id: "huahuai",
                name: "猾褢 (第一關)",
                avatar: "assets/webp/huahuai.webp",
                maxHp: 160,
                hp: 160,
                skillName: "兵燹之役",
                skillDesc: "猾褢現世。使玩家所有卡牌的召喚靈力消耗 (Cost) 額外增加 1 點。",
                deck: ["lili", "luyu", "yuma", "shuyu", "qianyang"]
            },
            2: {
                id: "manman-bird",
                name: "蠻蠻 (第二關)",
                avatar: "assets/webp/manman-bird.webp",
                maxHp: 200,
                hp: 200,
                skillName: "比翼洪水",
                skillDesc: "每回合結束時，蠻蠻淹沒全場，扣除雙方場上非水生/飛行卡牌 10 點生命值。",
                deck: ["helu-fish", "wenyao-fish", "ti-yu", "yongyong-fish", "ranyi-fish"]
            },
            3: {
                id: "feiyi",
                name: "肥遺 (第三關)",
                avatar: "assets/webp/feiyi.webp",
                maxHp: 250,
                hp: 250,
                skillName: "赤地千里",
                skillDesc: "肥遺蒸乾水分。玩家所有場上卡牌的每回合回復與治療/再生效果失效。",
                deck: ["fei", "mingshe", "huashe", "qinyuan", "tulou"]
            },
            4: {
                id: "fei",
                name: "蜚 (第四關 - 終極災獸)",
                avatar: "assets/webp/fei.webp",
                maxHp: 320,
                hp: 320,
                skillName: "太山大疫",
                skillDesc: "蜚散播致命瘟疫。每回合開始時，使玩家所有手牌的生命上限降低 15%。",
                deck: ["huahuai", "manman-bird", "feiyi", "aoye", "yong", "xiegou"]
            }
        }
    },
    "auspicious": {
        name: "四大瑞獸戰役",
        levels: {
            1: {
                id: "zouyu",
                name: "騶虞 (第一關)",
                avatar: "assets/webp/zouyu.webp",
                maxHp: 180,
                hp: 180,
                skillName: "仁慈不噬",
                skillDesc: "騶虞不主動攻擊。玩家每召喚一張卡牌，騶虞本體回復 10 點生命值。",
                deck: ["boyi", "guanguan", "lushu", "lei", "huan-sheep"]
            },
            2: {
                id: "baize-spirit",
                name: "白澤 (第二關)",
                avatar: "assets/webp/baize-spirit.webp",
                maxHp: 220,
                hp: 220,
                skillName: "萬物避邪",
                skillDesc: "白澤洞悉萬物邪祟。玩家所有凶獸 (Perilous) 屬性卡牌攻擊力降低 40%。",
                deck: ["qilin", "mizhi", "qinggeng", "shuhu", "songsi"]
            },
            3: {
                id: "fenghuang",
                name: "鳳凰 (第三關)",
                avatar: "assets/webp/fenghuang.webp",
                maxHp: 280,
                hp: 280,
                skillName: "浴火涅槃",
                skillDesc: "鳳凰生命值首次降為 0 時，立即原地復活並回復 50% 的最大生命值。",
                deck: ["luanniao", "sanzuwu", "sanshu-bird", "tianzhi-bird", "qilin-lin-female"]
            },
            4: {
                id: "qilin",
                name: "麒麟 (第四關 - 終極瑞獸)",
                avatar: "assets/webp/qilin.webp",
                maxHp: 350,
                hp: 350,
                skillName: "天下太平",
                skillDesc: "麒麟降福。敵方所有場上隨從卡牌每回合結束時回復 15 點生命值。",
                deck: ["baize-spirit", "zouyu", "fenghuang", "chenghuang", "tianma", "yuchan"]
            }
        }
    }
};

// 取得當前關卡魔王設定
function getBossConfig(levelNum) {
    const campaign = gameState.currentCampaign || "fiends";
    return CAMPAIGNS_CONFIG[campaign].levels[levelNum];
}

// 3. 遊戲全局狀態
let gameState = {
    currentCampaign: "fiends",
    currentLevel: 1,
    playerHp: 100,
    playerMaxHp: 100,
    playerMana: 3,
    playerMaxMana: 3,
    playerDeck: [],
    playerHand: [],
    playerSlots: { east: null, south: null, west: null, north: null, central: null },
    enemySlots: { east: null, south: null, west: null, north: null, central: null },
    selectedHandCardIndex: null,
    bossHp: 150,
    bossMaxHp: 150,
    isClashing: false
};

function applyEnvironment(env) {
    window.currentEnvironment = env || "mountain";
    const envCurName = document.getElementById("env-current-name");
    const names = {
        mountain: "【山中環境】",
        water: "【水中環境】",
        heaven: "【天界環境】"
    };
    if (envCurName) envCurName.textContent = names[window.currentEnvironment] || "【山中環境】";
}

// 4. 初始化卡牌對戰
function initCardGame() {
    console.log("Initializing Card Game Module...");
    setupGameDomListeners();
    setupPremListeners();
    setupCampaignSelector();
    loadLevel(1);
}

function setupCampaignSelector() {
    const selectEl = document.getElementById("campaign-select");
    if (selectEl) {
        selectEl.value = gameState.currentCampaign;
        selectEl.addEventListener("change", (e) => {
            gameState.currentCampaign = e.target.value;
            loadLevel(1);
        });
    }
}

// 5. 載入關卡
function loadLevel(levelNum) {
    gameState.currentLevel = levelNum;
    const bossConfig = getBossConfig(levelNum);
    
    gameState.playerHp = 100;
    gameState.playerMana = 3;
    gameState.playerMaxMana = 3;
    gameState.bossHp = bossConfig.maxHp;
    gameState.bossMaxHp = bossConfig.maxHp;
    gameState.selectedHandCardIndex = null;
    gameState.isClashing = false;

    // 清空戰地插槽
    Object.keys(gameState.playerSlots).forEach(k => {
        gameState.playerSlots[k] = null;
        gameState.enemySlots[k] = null;
    });

    // 建立玩家隨機 20 張牌組
    buildPlayerDeck();
    
    // 抽 5 張初始手牌
    gameState.playerHand = [];
    for (let i = 0; i < 5; i++) {
        drawCard();
    }

    // 更新介面
    updateLevelIndicators();
    updateBossPanel();
    updatePlayerStatus();
    renderPlayerHand();
    renderBattlefield();

    // 重新載入時套用目前下拉選單選取的環境
    const envSelect = document.getElementById("env-select");
    if (envSelect) {
        applyEnvironment(envSelect.value);
    } else {
        applyEnvironment("mountain");
    }
}

// 6. 篩選資料庫並建立牌組
function buildPlayerDeck() {
    gameState.playerDeck = [];
    // 抓取全域 BEASTS_DATABASE
    if (typeof BEASTS_DATABASE === "undefined") {
        console.error("BEASTS_DATABASE not loaded!");
        return;
    }

    // 過濾出安全有圖的異獸
    const pool = BEASTS_DATABASE.filter(b => SAFE_CARD_POOL_IDS.includes(b.id));
    
    // 隨機抽取 20 隻
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const selectedBeasts = shuffled.slice(0, 20);

    gameState.playerDeck = selectedBeasts.map(b => convertToCard(b));
}

// 7. 將資料庫異獸轉換成卡牌數值
function convertToCard(beast) {
    const spiritual = beast.stats?.spiritual || 50;
    const aggression = beast.stats?.aggression || 50;
    const rarity = beast.stats?.rarity || 50;

    // 靈力消耗 (Cost) - 1~8
    const cost = Math.max(1, Math.min(8, Math.round((spiritual + aggression + rarity) / 30)));
    
    // 戰力 (ATK)
    const atk = Math.max(10, Math.round(aggression * 0.8 + spiritual * 0.2));
    
    // 生命 (HP)
    const maxHp = Math.max(20, Math.round(spiritual * 0.5 + rarity * 0.8));

    // 先手判斷 (Initiative) - 飛行/翅膀相關字
    const hasFlight = /飛|翅|鳥|羽|翼|速|快|風|空|奔/.test(beast.description + beast.classicText);
    const initiative = hasFlight ? 2 : 1;

    // 嘲諷/體型判斷 (Shield)
    const isHeavy = /巨|大|重|厚|粗|壯|牛|象|龜|壁|石/.test(beast.description + beast.classicText);
    const shield = isHeavy || maxHp > 75;

    // 眼睛數量判定 (洞悉天賦)
    const hasManyEyes = /目|眼|視|看|窺/.test(beast.description + beast.classicText);
    const insight = hasManyEyes;

    // 地域 → 五行屬性映射
    const elementMap = {
        east: { cn: "木", emoji: "🌿", cls: "elem-wood" },
        south: { cn: "火", emoji: "🔥", cls: "elem-fire" },
        west: { cn: "金", emoji: "⚙️", cls: "elem-metal" },
        north: { cn: "水", emoji: "💧", cls: "elem-water" },
        central: { cn: "土", emoji: "🟤", cls: "elem-earth" }
    };
    const element = elementMap[beast.region] || elementMap["central"];

    return {
        id: beast.id,
        nameCn: beast.nameCn,
        category: beast.category,
        categoryCn: beast.categoryCn,
        region: beast.region,
        regionCn: beast.regionCn,
        element: element,
        image: beast.image,
        cost: cost,
        atk: atk,
        hp: maxHp,
        maxHp: maxHp,
        initiative: initiative,
        shield: shield,
        insight: insight,
        desc: beast.description
    };
}

// 8. 抽一張牌
function drawCard() {
    if (gameState.playerDeck.length === 0) return;
    if (gameState.playerHand.length >= 5) return; // 手牌上限 5 張
    const card = gameState.playerDeck.pop();
    gameState.playerHand.push(card);
}

// 9. 更新關卡指引條
function updateLevelIndicators() {
    for (let i = 1; i <= 4; i++) {
        const node = document.getElementById(`node-level-${i}`);
        const line = document.getElementById(`line-level-${i - 1}`);
        if (!node) continue;

        node.classList.remove("active", "completed");
        if (line) line.classList.remove("active");

        if (i === gameState.currentLevel) {
            node.classList.add("active");
        } else if (i < gameState.currentLevel) {
            node.classList.add("completed");
            if (line) line.classList.add("active");
        }

        // 動態更換魔王節點名稱
        const nameSpan = node.querySelector(".node-name");
        if (nameSpan) {
            const bossConfig = getBossConfig(i);
            // 簡化字元，例如將 "混沌 (第一關)" 轉成 "混沌"
            nameSpan.innerText = bossConfig.name.split(" ")[0];
        }
    }
}

// 10. 更新魔王面板
function updateBossPanel() {
    const boss = getBossConfig(gameState.currentLevel);
    const percent = Math.max(0, (gameState.bossHp / gameState.bossMaxHp) * 100);

    const bossAvatar = document.getElementById("boss-avatar");
    if (bossAvatar) bossAvatar.src = boss.avatar;
    const bossName = document.getElementById("boss-name");
    if (bossName) bossName.innerText = `四大魔王/守護獸：${boss.name}`;
    const bossSkillDesc = document.getElementById("boss-skill-desc");
    if (bossSkillDesc) bossSkillDesc.innerHTML = `<strong>【${boss.skillName}】</strong>${boss.skillDesc}`;
    const bossHpFill = document.getElementById("boss-hp-fill");
    if (bossHpFill) bossHpFill.style.width = `${percent}%`;
    const bossHpText = document.getElementById("boss-hp-text");
    if (bossHpText) bossHpText.innerText = `${gameState.bossHp} / ${gameState.bossMaxHp}`;

    // 同步更新橫屏手機佈局魔王面版
    const newBossHpFill = document.getElementById("new-boss-hp-fill");
    if (newBossHpFill) newBossHpFill.style.width = `${percent}%`;
    const newBossHpText = document.getElementById("new-boss-hp-text");
    if (newBossHpText) newBossHpText.innerText = `${gameState.bossHp}/${gameState.bossMaxHp}`;
    const newBossAvatar = document.getElementById("new-boss-avatar");
    if (newBossAvatar) newBossAvatar.src = boss.avatar;
    const newBossNameMob = document.getElementById("new-boss-name-mob");
    if (newBossNameMob) newBossNameMob.innerText = boss.name.split(" ")[0];
    const newEnemyDeckCount = document.getElementById("new-enemy-deck-count");
    if (newEnemyDeckCount) newEnemyDeckCount.innerText = boss.deck ? `${boss.deck.length} 張` : "8 張";

    // 同步更新橫屏電腦版佈局魔王面板 (Layout C)
    const newPcBossHpFill = document.getElementById("new-pc-boss-hp-fill");
    if (newPcBossHpFill) newPcBossHpFill.style.width = `${percent}%`;
    const newPcBossHpText = document.getElementById("new-pc-boss-hp-text");
    if (newPcBossHpText) newPcBossHpText.innerText = `${gameState.bossHp}/${gameState.bossMaxHp}`;
    const newPcBossAvatar = document.getElementById("new-pc-boss-avatar");
    if (newPcBossAvatar) newPcBossAvatar.src = boss.avatar;
    const newPcBossNameMob = document.getElementById("new-pc-boss-name-mob");
    if (newPcBossNameMob) newPcBossNameMob.innerText = boss.name.split(" ")[0];
    const newPcEnemyDeckCount = document.getElementById("new-pc-enemy-deck-count");
    if (newPcEnemyDeckCount) newPcEnemyDeckCount.innerText = boss.deck ? `${boss.deck.length} 張` : "8 張";

    // 同步更新手繪佈局魔王面板 (Layout 4)
    const sketchBossHpText = document.getElementById("sketch-boss-hp-text");
    if (sketchBossHpText) sketchBossHpText.innerText = `${gameState.bossHp}/${gameState.bossMaxHp}`;
    const sketchBossAvatar = document.getElementById("sketch-boss-avatar");
    const sketchBossAvatarIcon = document.getElementById("sketch-boss-avatar-icon");
    if (sketchBossAvatar && sketchBossAvatarIcon) {
        sketchBossAvatar.src = boss.avatar;
        sketchBossAvatar.style.display = "block";
        sketchBossAvatarIcon.style.display = "none";
    }
    const sketchBossIntent = document.getElementById("sketch-boss-intent");
    if (sketchBossIntent) sketchBossIntent.innerText = `意圖：${boss.skillName}`;
    const sketchBossRage = document.getElementById("sketch-boss-rage");
    if (sketchBossRage) sketchBossRage.innerText = `怒氣：${Math.min(100, gameState.currentLevel * 25)}%`;
    const sketchBossUltimate = document.getElementById("sketch-boss-ultimate");
    if (sketchBossUltimate) {
        sketchBossUltimate.innerText = gameState.bossHp < gameState.bossMaxHp * 0.4 ? "絕招：準備就緒" : "絕招：蓄勢中";
    }

    // 同步更新 Premium 主介面魔王面板
    updatePremBossPanel();
}

// 11. 更新玩家面板狀態
function updatePlayerStatus() {
    // HP
    const hpPercent = Math.max(0, (gameState.playerHp / gameState.playerMaxHp) * 100);
    const playerHpFill = document.getElementById("player-hp-fill");
    if (playerHpFill) playerHpFill.style.width = `${hpPercent}%`;
    const playerHpText = document.getElementById("player-hp-text");
    if (playerHpText) playerHpText.innerText = `${gameState.playerHp} / ${gameState.playerMaxHp}`;

    // Mana
    const playerManaText = document.getElementById("player-mana-text");
    if (playerManaText) playerManaText.innerText = `${gameState.playerMana} / ${gameState.playerMaxMana}`;
    
    const bubblesContainer = document.getElementById("mana-bubbles-container");
    if (bubblesContainer) {
        bubblesContainer.innerHTML = "";
        for (let i = 1; i <= gameState.playerMaxMana; i++) {
            const bubble = document.createElement("div");
            bubble.classList.add("mana-bubble");
            if (i <= gameState.playerMana) {
                bubble.classList.add("filled");
            }
            bubblesContainer.appendChild(bubble);
        }
    }

    // 同步更新手機橫屏佈局玩家狀態
    const newPlayerHpFill = document.getElementById("new-player-hp-fill");
    if (newPlayerHpFill) newPlayerHpFill.style.width = `${hpPercent}%`;
    const newPlayerHpText = document.getElementById("new-player-hp-text");
    if (newPlayerHpText) newPlayerHpText.innerText = `${gameState.playerHp}/${gameState.playerMaxHp}`;
    const newPlayerManaText = document.getElementById("new-player-mana-text");
    if (newPlayerManaText) newPlayerManaText.innerText = `${gameState.playerMana}/${gameState.playerMaxMana}`;

    // 同步更新橫屏電腦版佈局玩家狀態 (Layout C)
    const newPcPlayerHpFill = document.getElementById("new-pc-player-hp-fill");
    if (newPcPlayerHpFill) newPcPlayerHpFill.style.width = `${hpPercent}%`;
    const newPcPlayerHpText = document.getElementById("new-pc-player-hp-text");
    if (newPcPlayerHpText) newPcPlayerHpText.innerText = `${gameState.playerHp}/${gameState.playerMaxHp}`;
    const newPcPlayerManaText = document.getElementById("new-pc-player-mana-text");
    if (newPcPlayerManaText) newPcPlayerManaText.innerText = `${gameState.playerMana}/${gameState.playerMaxMana}`;

    // 同步更新手繪佈局玩家狀態 (Layout 4)
    const sketchPlayerHpText = document.getElementById("sketch-player-hp-text");
    if (sketchPlayerHpText) sketchPlayerHpText.innerText = `${gameState.playerHp}/${gameState.playerMaxHp}`;
    const sketchPlayerManaText = document.getElementById("sketch-player-mana-text");
    if (sketchPlayerManaText) sketchPlayerManaText.innerText = `${gameState.playerMana}/${gameState.playerMaxMana}`;

    // 同步更新 Premium 主介面玩家狀態
    updatePremPlayerStatus();
}

// 12. 渲染玩家手牌
function renderPlayerHand() {
    const handContainer = document.getElementById("player-hand-cards");
    const newHandContainer = document.getElementById("new-player-hand-cards");
    const newPcHandContainer = document.getElementById("new-pc-player-hand-cards");
    if (handContainer) handContainer.innerHTML = "";
    if (newHandContainer) newHandContainer.innerHTML = "";
    if (newPcHandContainer) newPcHandContainer.innerHTML = "";

    gameState.playerHand.forEach((card, index) => {
        // 12.1 渲染經典版手牌
        const cardEl = document.createElement("div");
        cardEl.className = `game-card ${gameState.selectedHandCardIndex === index ? "selected" : ""}`;
        cardEl.setAttribute("data-index", index);

        // 屬性配色類別
        const typeClass = card.category; // divine, auspicious, perilous
        
        const elemData = card.element || { cn: "土", emoji: "🟤", cls: "elem-earth" };
        cardEl.innerHTML = `
            <div class="card-header">
                <span class="card-cost">${card.cost}</span>
                <span class="card-element-badge ${elemData.cls}">${elemData.emoji}${elemData.cn}</span>
                <span class="card-type-dot ${typeClass}"></span>
            </div>
            <div class="card-img-wrap">
                <img src="${card.image}" alt="${card.nameCn}" onerror="this.onerror=null; this.src='assets/placeholder_beast.png';">
                <span class="card-name-overlay">${card.nameCn}</span>
            </div>
            <div class="card-stats">
                <span class="stat-item atk"><i class="fa-solid fa-swords"></i> ${card.atk}</span>
                <span class="stat-item hp"><i class="fa-solid fa-heart"></i> ${card.hp}</span>
            </div>
        `;

        const cardClickHandler = () => {
            if (gameState.isClashing) return;
            // 點選卡牌切換選取狀態
            if (gameState.selectedHandCardIndex === index) {
                gameState.selectedHandCardIndex = null;
            } else {
                gameState.selectedHandCardIndex = index;
            }
            renderPlayerHand();
            updateTargetSlotsHighlight();
        };

        if (handContainer) {
            cardEl.addEventListener("click", cardClickHandler);
            handContainer.appendChild(cardEl);
        }

        // 12.2 渲染橫向手機版迷你手牌
        if (newHandContainer) {
            const miniCardEl = document.createElement("div");
            miniCardEl.className = `mini-hand-card ${gameState.selectedHandCardIndex === index ? "selected" : ""}`;
            miniCardEl.setAttribute("data-index", index);
            miniCardEl.innerHTML = `
                <span class="mini-card-cost">${card.cost}</span>
                <span class="mini-card-name">${card.nameCn}</span>
            `;
            miniCardEl.addEventListener("click", cardClickHandler);
            newHandContainer.appendChild(miniCardEl);
        }

        // 12.3 渲染橫向電腦寬屏版迷你手牌
        if (newPcHandContainer) {
            const miniCardEl = document.createElement("div");
            miniCardEl.className = `mini-hand-card ${gameState.selectedHandCardIndex === index ? "selected" : ""}`;
            miniCardEl.setAttribute("data-index", index);
            miniCardEl.innerHTML = `
                <span class="mini-card-cost">${card.cost}</span>
                <span class="mini-card-name">${card.nameCn}</span>
            `;
            miniCardEl.addEventListener("click", cardClickHandler);
            newPcHandContainer.appendChild(miniCardEl);
        }
    });

    // 同步更新 Premium 手牌
    renderPremHand();
}

// 13. 更新可部署槽位高亮
function updateTargetSlotsHighlight() {
    const slots = document.querySelectorAll(".player-slot");
    slots.forEach(slot => {
        slot.classList.remove("active-target");
        if (gameState.selectedHandCardIndex !== null) {
            const dir = slot.getAttribute("data-direction");
            // 若該格子尚未放置卡牌，且靈力足夠
            const card = gameState.playerHand[gameState.selectedHandCardIndex];
            if (!gameState.playerSlots[dir] && gameState.playerMana >= card.cost) {
                slot.classList.add("active-target");
            }
        }
    });
}

// 14. 渲染戰場插槽
function renderBattlefield() {
    const dirs = ["east", "south", "west", "north"];
    
    dirs.forEach(dir => {
        const playerSlot = document.getElementById(`player-slot-${dir}`);
        const enemySlot = document.getElementById(`enemy-slot-${dir}`);
        const newPlayerSlot = document.getElementById(`new-player-slot-${dir}`);
        const newEnemySlot = document.getElementById(`new-enemy-slot-${dir}`);
        const newPcPlayerSlot = document.getElementById(`new-pc-player-slot-${dir}`);
        const newPcEnemySlot = document.getElementById(`new-pc-enemy-slot-${dir}`);
        const sketchPlayerSlot = document.getElementById(`sketch-player-slot-${dir}`);
        const sketchEnemySlot = document.getElementById(`sketch-enemy-slot-${dir}`);

        // 1. 玩家卡槽渲染 (經典佈局)
        if (playerSlot) {
            playerSlot.innerHTML = "";
            playerSlot.classList.remove("resonance");
        }
        
        // 2. 玩家卡槽渲染 (橫屏手機佈局)
        if (newPlayerSlot) {
            newPlayerSlot.innerHTML = "";
            newPlayerSlot.classList.remove("resonance");
        }

        // 2b. 玩家卡槽渲染 (橫屏電腦版佈局)
        if (newPcPlayerSlot) {
            newPcPlayerSlot.innerHTML = "";
            newPcPlayerSlot.classList.remove("resonance");
        }

        // 2c. 玩家卡槽渲染 (手繪佈局 - Layout 4)
        if (sketchPlayerSlot) {
            sketchPlayerSlot.innerHTML = "";
            sketchPlayerSlot.classList.remove("resonance");
        }

        const playerCard = gameState.playerSlots[dir];
        if (playerCard) {
            const cardEl = createCardHtml(playerCard);
            playerSlot.appendChild(cardEl);
            
            // 方位共鳴高亮判斷
            if (isResonance(playerCard, dir)) {
                playerSlot.classList.add("resonance");
            }

            if (newPlayerSlot) {
                const cardElNew = createCardHtml(playerCard);
                newPlayerSlot.appendChild(cardElNew);
                if (isResonance(playerCard, dir)) {
                    newPlayerSlot.classList.add("resonance");
                }
            }

            if (newPcPlayerSlot) {
                const cardElNew = createCardHtml(playerCard);
                newPcPlayerSlot.appendChild(cardElNew);
                if (isResonance(playerCard, dir)) {
                    newPcPlayerSlot.classList.add("resonance");
                }
            }

            if (sketchPlayerSlot) {
                const cardElNew = createCardHtml(playerCard);
                sketchPlayerSlot.appendChild(cardElNew);
                if (isResonance(playerCard, dir)) {
                    sketchPlayerSlot.classList.add("resonance");
                }
            }
        } else {
            if (newPlayerSlot) newPlayerSlot.innerHTML = `<div class="slot-empty-hint">空格</div>`;
            if (newPcPlayerSlot) newPcPlayerSlot.innerHTML = `<div class="slot-empty-hint">空格</div>`;
            if (sketchPlayerSlot) sketchPlayerSlot.innerHTML = `<div class="slot-empty-hint">空格</div>`;
        }

        // 3. 敵方卡槽渲染 (經典佈局)
        if (enemySlot) {
            enemySlot.innerHTML = "";
            enemySlot.classList.remove("resonance");
        }

        // 4. 敵方卡槽渲染 (橫屏手機佈局)
        if (newEnemySlot) {
            newEnemySlot.innerHTML = "";
            newEnemySlot.classList.remove("resonance");
        }

        // 4b. 敵方卡槽渲染 (橫屏電腦版佈局)
        if (newPcEnemySlot) {
            newPcEnemySlot.innerHTML = "";
            newPcEnemySlot.classList.remove("resonance");
        }

        // 4c. 敵方卡槽渲染 (手繪佈局 - Layout 4)
        if (sketchEnemySlot) {
            sketchEnemySlot.innerHTML = "";
            sketchEnemySlot.classList.remove("resonance");
        }

        const enemyCard = gameState.enemySlots[dir];
        if (enemyCard) {
            const cardEl = createCardHtml(enemyCard);
            enemySlot.appendChild(cardEl);
            
            if (isResonance(enemyCard, dir)) {
                enemySlot.classList.add("resonance");
            }

            if (newEnemySlot) {
                const cardElNew = createCardHtml(enemyCard);
                newEnemySlot.appendChild(cardElNew);
                if (isResonance(enemyCard, dir)) {
                    newEnemySlot.classList.add("resonance");
                }
            }

            if (newPcEnemySlot) {
                const cardElNew = createCardHtml(enemyCard);
                newPcEnemySlot.appendChild(cardElNew);
                if (isResonance(enemyCard, dir)) {
                    newPcEnemySlot.classList.add("resonance");
                }
            }

            if (sketchEnemySlot) {
                const cardElNew = createCardHtml(enemyCard);
                sketchEnemySlot.appendChild(cardElNew);
                if (isResonance(enemyCard, dir)) {
                    sketchEnemySlot.classList.add("resonance");
                }
            }
        } else {
            if (newEnemySlot) newEnemySlot.innerHTML = `<div class="slot-empty-hint">空格</div>`;
            if (newPcEnemySlot) newPcEnemySlot.innerHTML = `<div class="slot-empty-hint">空格</div>`;
            if (sketchEnemySlot) sketchEnemySlot.innerHTML = `<div class="slot-empty-hint">空格</div>`;
        }
    });

    // 同步更新 Premium 戰場
    renderPremBattlefield();
}

// 輔助：建立卡牌 DOM
function createCardHtml(card) {
    const cardEl = document.createElement("div");
    cardEl.className = "game-card";
    const typeClass = card.category;

    // 特殊技能小徽章
    let traits = "";
    if (card.initiative > 1) traits += `<span style="color:#d4af37;" title="先手速攻">⚡</span>`;
    if (card.shield) traits += `<span style="color:#2d6b4f;" title="堅壁嘲諷">🛡️</span>`;
    if (card.insight) traits += `<span style="color:#9e2a2b;" title="多眼洞悉">👁️</span>`;

    const elemData = card.element || { cn: "土", emoji: "🟤", cls: "elem-earth" };
    cardEl.innerHTML = `
        <div class="card-header">
            <span class="card-cost">${card.cost}</span>
            <span class="card-element-badge ${elemData.cls}">${elemData.emoji}${elemData.cn}</span>
            <span class="card-type-dot ${typeClass}"></span>
        </div>
        <div class="card-img-wrap">
            <img src="${card.image}" alt="${card.nameCn}" onerror="this.onerror=null; this.src='assets/placeholder_beast.png';">
            <span class="card-name-overlay">${card.nameCn} ${traits}</span>
        </div>
        <div class="card-stats">
            <span class="stat-item atk"><i class="fa-solid fa-swords"></i> ${card.atk}</span>
            <span class="stat-item hp"><i class="fa-solid fa-heart"></i> ${card.hp}/${card.maxHp}</span>
        </div>
    `;
    return cardEl;
}

// 輔助：方位共鳴判定
function isResonance(card, direction) {
    if (card && card.region === "central") return true; // 中山經（土）在任何插槽皆可觸發共鳴！
    return card && card.region === direction;
}

// 15. DOM 事件監聽
function setupGameDomListeners() {
    // 部署到槽位點擊監聽
    const playerSlots = document.querySelectorAll(".player-slot");
    playerSlots.forEach(slot => {
        if (!slot) return;
        slot.addEventListener("click", () => {
            if (gameState.isClashing) return;
            if (gameState.selectedHandCardIndex === null) {
                // 如果沒有選手牌，點選已放置的卡牌可以收回手牌 (退回靈力)
                const dir = slot.getAttribute("data-direction");
                const card = gameState.playerSlots[dir];
                if (card) {
                    gameState.playerMana += card.cost;
                    gameState.playerHand.push(card);
                    gameState.playerSlots[dir] = null;
                    renderPlayerHand();
                    renderBattlefield();
                    updatePlayerStatus();
                }
                return;
            }

            const dir = slot.getAttribute("data-direction");
            const card = gameState.playerHand[gameState.selectedHandCardIndex];

            // 檢查該插槽是否空缺且靈力足夠
            if (!gameState.playerSlots[dir] && gameState.playerMana >= card.cost) {
                // 扣除靈力、擺放卡牌、移除手牌
                gameState.playerMana -= card.cost;
                
                gameState.playerSlots[dir] = card;
                gameState.playerHand.splice(gameState.selectedHandCardIndex, 1);
                
                gameState.selectedHandCardIndex = null;
                
                renderPlayerHand();
                renderBattlefield();
                updatePlayerStatus();
                updateTargetSlotsHighlight();
            }
        });
    });

    // 開始對決按鈕
    const startClashBtn = document.getElementById("start-clash-btn");
    if (startClashBtn) {
        startClashBtn.addEventListener("click", () => {
            if (gameState.isClashing) return;
            startBattleClash();
        });
    }

    // 重新挑戰按鈕
    const restartBtn = document.getElementById("restart-level-btn");
    if (restartBtn) {
        restartBtn.addEventListener("click", () => {
            loadLevel(gameState.currentLevel);
        });
    }

    // 彈窗挑戰下一關/重來按鈕
    const gameResultBtn = document.getElementById("game-result-action-btn");
    if (gameResultBtn) {
        gameResultBtn.addEventListener("click", () => {
            const modal = document.getElementById("game-result-modal");
            if (modal) modal.style.display = "none";
            
            if (gameState.playerHp <= 0) {
                // 失敗重新載入本關
                loadLevel(gameState.currentLevel);
            } else {
                // 成功進入下一關
                if (gameState.currentLevel < 4) {
                    loadLevel(gameState.currentLevel + 1);
                } else {
                    // 通關，回到第一關
                    loadLevel(1);
                }
            }
        });
    }

    // 戰場環境選擇監聽
    const envSelect = document.getElementById("env-select");
    if (envSelect) {
        envSelect.value = currentEnvironment;
        envSelect.addEventListener("change", (e) => {
            applyEnvironment(e.target.value);
        });
    }
}

// 16. 開始對局回合結算 (Battle Phase)
// 16. 開始對局回合結算 (Battle Phase)
async function startBattleClash() {
    const clashBtn = document.getElementById("start-clash-btn") || document.getElementById("prem-clash-btn");
    if (clashBtn) clashBtn.disabled = true;

    const sketchStatus = document.getElementById("sketch-battle-status");
    if (sketchStatus) sketchStatus.innerText = "【對決開始！魔王回合開始】";

    // 1. 魔王回合 AI：隨機部署卡牌
    deployEnemyCards();
    renderBattlefield();
    if (sketchStatus) sketchStatus.innerText = "【魔王召喚隨從上陣！】";
    await delay(800);

    // 2. 觸發魔王專屬被動技能
    applyBossPassiveBeforeClash();
    updateBossPanel();
    updatePlayerStatus();
    renderBattlefield();
    if (sketchStatus) sketchStatus.innerText = "【魔王被動技能觸發！】";
    await delay(1000);

    // 2.5 觸發百鳥爭鳴陣營特效
    const pBirdCount = Object.values(gameState.playerSlots).filter(c => c && c.initiative > 1).length;
    const eBirdCount = Object.values(gameState.enemySlots).filter(c => c && c.initiative > 1).length;
    const originalEnemyAtks = {};
    const originalPlayerAtks = {};

    if (pBirdCount >= 3) {
        showFloatingText("boss-avatar", "📣 百鳥爭鳴！敵方戰力-20%");
        if (sketchStatus) sketchStatus.innerText = "📣 我方觸發【百鳥爭鳴】！敵方戰力降低";
        dirs.forEach(dir => {
            const card = gameState.enemySlots[dir];
            if (card) {
                originalEnemyAtks[dir] = card.atk;
                card.atk = Math.max(5, Math.round(card.atk * 0.8));
                showFloatingText(`enemy-slot-${dir}`, "-20% ATK");
            }
        });
        renderBattlefield();
        await delay(1000);
    }

    if (eBirdCount >= 3) {
        showFloatingText("player-hp-text", "📣 百鳥爭鳴！我方戰力-20%");
        if (sketchStatus) sketchStatus.innerText = "📣 敵方觸發【百鳥爭鳴】！我方戰力降低";
        dirs.forEach(dir => {
            const card = gameState.playerSlots[dir];
            if (card) {
                originalPlayerAtks[dir] = card.atk;
                card.atk = Math.max(5, Math.round(card.atk * 0.8));
                showFloatingText(`player-slot-${dir}`, "-20% ATK");
            }
        });
        renderBattlefield();
        await delay(1000);
    }

    // 2.6 觸發天地五行大共鳴
    const allDeployedCards = [
        ...Object.values(gameState.playerSlots),
        ...Object.values(gameState.enemySlots)
    ].filter(c => c !== null);

    const regionsOnBoard = new Set(allDeployedCards.map(c => c.region));
    const hasFiveElements = ["east", "south", "west", "north", "central"].every(r => regionsOnBoard.has(r));

    if (hasFiveElements) {
        showFloatingText("boss-avatar", "💥 五行齊聚！魔王受到 30 傷害");
        showFloatingText("player-hp-text", "✨ 乾坤共鳴！我方回復 20 生命");
        if (sketchStatus) sketchStatus.innerText = "💥 戰場五行齊聚！發動天地大共鳴！";
        
        gameState.bossHp = Math.max(0, gameState.bossHp - 30);
        gameState.playerHp = Math.min(100, gameState.playerHp + 20);
        
        updateBossPanel();
        updatePlayerStatus();
        renderBattlefield();
        await delay(1500);
    }

    // 3. 逐一結算四個方向的戰線
    const dirs = ["east", "south", "west", "north"];
    
    for (let dir of dirs) {
        const playerCard = gameState.playerSlots[dir];
        const enemyCard = gameState.enemySlots[dir];

        if (!playerCard && !enemyCard) continue;

        // 高亮當前對決戰線
        const clashLine = document.getElementById(`clash-${dir}`);
        if (clashLine) clashLine.classList.add("active");
        
        if (sketchStatus) {
            let dirName = "";
            if (dir === "east") dirName = "東山 (木)";
            if (dir === "south") dirName = "南山 (火)";
            if (dir === "west") dirName = "西山 (金)";
            if (dir === "north") dirName = "北山 (水)";
            sketchStatus.innerText = `【對決結算：${dirName}戰線】`;
        }
        await delay(500);

        if (playerCard && enemyCard) {
            // 雙方皆有卡片：卡片互毆
            await resolveCardVsCard(playerCard, enemyCard, dir);
        } else if (playerCard && !enemyCard) {
            // 玩家有卡，魔王沒卡 ── 直接重創魔王本體！
            await resolveAttackBoss(playerCard, dir);
        } else if (!playerCard && enemyCard) {
            // 魔王有卡，玩家沒卡 ── 卡牌直接重創玩家本體！
            await resolveAttackPlayer(enemyCard, dir);
        }

        renderBattlefield();
        updateBossPanel();
        updatePlayerStatus();
        if (clashLine) clashLine.classList.remove("active");
        await delay(800);

        // 如果有一方已經陣亡，結束戰鬥
        if (gameState.playerHp <= 0 || gameState.bossHp <= 0) break;
    }

    // 3.5 還原百鳥爭鳴降低的戰力
    dirs.forEach(dir => {
        if (originalEnemyAtks[dir] !== undefined && gameState.enemySlots[dir]) {
            gameState.enemySlots[dir].atk = originalEnemyAtks[dir];
        }
        if (originalPlayerAtks[dir] !== undefined && gameState.playerSlots[dir]) {
            gameState.playerSlots[dir].atk = originalPlayerAtks[dir];
        }
    });

    // 4. 回合結束結算 (處理再生共鳴、抽卡、增加靈力上限)
    if (gameState.playerHp > 0 && gameState.bossHp > 0) {
        // 方位共鳴：東山經每回合回復 HP
        applyEndRoundResonance();
        
        // 靈力上限增加 1 (上限 10)
        if (gameState.playerMaxMana < 10) gameState.playerMaxMana++;
        gameState.playerMana = gameState.playerMaxMana;

        // 抽卡
        drawCard();
        drawCard();

        gameState.isClashing = false;
        document.getElementById("start-clash-btn").disabled = false;
        if (sketchStatus) sketchStatus.innerText = "【回合結束，重整戰線與靈力】";
        
        renderPlayerHand();
        renderBattlefield();
        updatePlayerStatus();
    } else {
        // 遊戲結束 (勝利或失敗)
        if (sketchStatus) sketchStatus.innerText = gameState.bossHp <= 0 ? "【對決勝利！邪祟退散】" : "【不幸戰敗...】";
        showGameResult();
    }
}

// 17. 敵方 AI 部署卡牌
function deployEnemyCards() {
    const boss = getBossConfig(gameState.currentLevel);
    const dirs = ["east", "south", "west", "north"];

    // 隨機在 2 ~ 4 個方向部署手下卡牌
    const deployCount = Math.floor(Math.random() * 3) + 2; // 2~4個
    const shuffledDirs = [...dirs].sort(() => 0.5 - Math.random());
    const selectedDirs = shuffledDirs.slice(0, deployCount);

    selectedDirs.forEach(dir => {
        // 如果目前該格子沒有怪，就部署一隻
        if (!gameState.enemySlots[dir]) {
            const randomBeastId = boss.deck[Math.floor(Math.random() * boss.deck.length)];
            const beast = BEASTS_DATABASE.find(b => b.id === randomBeastId);
            if (beast) {
                const card = convertToCard(beast);
                gameState.enemySlots[dir] = card;
            }
        }
    });
}

// 18. 魔王戰前被動技能觸發
function applyBossPassiveBeforeClash() {
    const level = gameState.currentLevel;
    const dirs = ["east", "south", "west", "north"];

    if (level === 1) {
        // 混沌：隨機降低玩家場上一張卡牌 20% 攻擊力
        const activeSlots = dirs.filter(d => gameState.playerSlots[d] !== null);
        if (activeSlots.length > 0) {
            const chosenDir = activeSlots[Math.floor(Math.random() * activeSlots.length)];
            const card = gameState.playerSlots[chosenDir];
            card.atk = Math.max(5, Math.round(card.atk * 0.8));
            showFloatingText(`player-slot-${chosenDir}`, "-20% ATK");
        }
    }
}

// 18.5 戰場環境變數狀態與計算
if (typeof window.currentEnvironment === "undefined") {
    window.currentEnvironment = "mountain";
}

function getCardEnvironmentType(card) {
    if (!card) return "mountain";
    if (card.category === "divine") {
        return "heaven";
    }
    const waterKeywords = ["水", "魚", "澤", "海", "河", "蛇", "龜", "鱵", "鯁", "鯈", "流", "波"];
    const isWaterId = ["bashe", "xuanguian", "huashe", "mingshe", "lingyu", "helu-fish", "wenyao-fish", "yuzhi-fish", "yongyong-fish", "ranyi-fish", "xuanwu", "changyou", "luoyu-spirit", "bingyi", "yushiqie"].includes(card.id);
    const nameStr = card.nameCn || "";
    const descStr = card.desc || "";
    const containsWaterKeyword = waterKeywords.some(kw => nameStr.includes(kw) || descStr.includes(kw));
    if (isWaterId || containsWaterKeyword) {
        return "water";
    }
    return "mountain";
}

function applyEnvironment(env) {
    currentEnvironment = env;
    
    const displayBar = document.getElementById("env-display-bar");
    const phoneEnvText = document.getElementById("phone-env-text");
    const phoneScreen = document.getElementById("phone-screen-env");
    const pcEnvText = document.getElementById("desktop-env-text");
    const pcScreen = document.getElementById("desktop-board-env");
    
    if (phoneScreen) {
        phoneScreen.classList.remove("env-mountain", "env-water", "env-heaven");
        phoneScreen.classList.add(`env-${env}`);
    }
    if (pcScreen) {
        pcScreen.classList.remove("env-mountain", "env-water", "env-heaven");
        pcScreen.classList.add(`env-${env}`);
    }
    
    let envName = "山中";
    if (env === "mountain") {
        if (displayBar) displayBar.innerHTML = `當前環境：<span id="env-current-name" style="color: var(--vermilion-red); font-weight: bold;">【山中環境】</span> - 幽深山林，怪石嶙峋。山經屬性異獸護甲額外提升 20%。`;
        envName = "山中";
    } else if (env === "water") {
        if (displayBar) displayBar.innerHTML = `當前環境：<span id="env-current-name" style="color: var(--vermilion-red); font-weight: bold;">【水中環境】</span> - 狂風怒濤，百川歸海。海經/澤經屬性異獸攻擊額外提升 20%。`;
        envName = "水中";
    } else if (env === "heaven") {
        if (displayBar) displayBar.innerHTML = `當前環境：<span id="env-current-name" style="color: var(--vermilion-red); font-weight: bold;">【天界環境】</span> - 祥雲繚繞，日月同輝。神獸最大生命與攻擊額外提升 15%。`;
        envName = "天界";
    }
    
    if (phoneEnvText) phoneEnvText.innerText = envName;
    if (pcEnvText) pcEnvText.innerText = envName;
    
    showFloatingText("landscape-slot-1", `環境：${envName}`);
}

// 19. 結算兩張卡牌對決
async function resolveCardVsCard(pCard, eCard, dir) {
    // 北山水共鳴：25%機率冰凍對手
    let pFrozen = false;
    let eFrozen = false;

    if (dir === "north") {
        if (isResonance(pCard, dir) && Math.random() < 0.25) {
            eFrozen = true;
            showFloatingText(`enemy-slot-${dir}`, "❄️ 凍結！");
            await delay(400);
        }
        if (isResonance(eCard, dir) && Math.random() < 0.25) {
            pFrozen = true;
            showFloatingText(`player-slot-${dir}`, "❄️ 凍結！");
            await delay(400);
        }
    }

    // 屬性相剋判定
    let pDamageMultiplier = 1.0;
    let eDamageMultiplier = 1.0;

    if (pCard.category === "divine" && eCard.category === "perilous") pDamageMultiplier = 1.3;
    if (pCard.category === "perilous" && eCard.category === "auspicious") pDamageMultiplier = 1.3;
    if (pCard.category === "auspicious" && eCard.category === "divine") pDamageMultiplier = 1.3;

    if (eCard.category === "divine" && pCard.category === "perilous") eDamageMultiplier = 1.3;
    if (eCard.category === "perilous" && pCard.category === "auspicious") eDamageMultiplier = 1.3;
    if (eCard.category === "auspicious" && pCard.category === "divine") eDamageMultiplier = 1.3;

    // 方位共鳴加成
    let pAtk = pCard.atk;
    let eAtk = eCard.atk;

    if (isResonance(pCard, dir) && dir === "south") pAtk = Math.round(pAtk * 1.3);
    if (isResonance(eCard, dir) && dir === "south") eAtk = Math.round(eAtk * 1.3);

    // 戰場環境影響計算 (水中/天界對攻擊加成)
    if (currentEnvironment === "water") {
        if (getCardEnvironmentType(pCard) === "water") pAtk = Math.round(pAtk * 1.2);
        if (getCardEnvironmentType(eCard) === "water") eAtk = Math.round(eAtk * 1.2);
    } else if (currentEnvironment === "heaven") {
        if (getCardEnvironmentType(pCard) === "heaven") pAtk = Math.round(pAtk * 1.15);
        if (getCardEnvironmentType(eCard) === "heaven") eAtk = Math.round(eAtk * 1.15);
    }

    // 西山金共鳴
    let pFinalDamage = Math.round(pAtk * pDamageMultiplier);
    let eFinalDamage = Math.round(eAtk * eDamageMultiplier);

    if (isResonance(pCard, dir) && dir === "west") pFinalDamage = Math.round(pFinalDamage * 1.2);
    if (isResonance(eCard, dir) && dir === "west") eFinalDamage = Math.round(eFinalDamage * 1.2);

    // 戰場環境影響計算 (山中/天界對護甲/傷害減免加成)
    if (currentEnvironment === "mountain") {
        if (getCardEnvironmentType(pCard) === "mountain") eFinalDamage = Math.round(eFinalDamage * 0.8);
        if (getCardEnvironmentType(eCard) === "mountain") pFinalDamage = Math.round(pFinalDamage * 0.8);
    } else if (currentEnvironment === "heaven") {
        if (getCardEnvironmentType(pCard) === "heaven") eFinalDamage = Math.round(eFinalDamage * 0.85);
        if (getCardEnvironmentType(eCard) === "heaven") pFinalDamage = Math.round(pFinalDamage * 0.85);
    }

    // 凍結影響：無法造成傷害
    if (pFrozen) pFinalDamage = 0;
    if (eFrozen) eFinalDamage = 0;

    // 關卡 2 窮奇魔王技能
    if (gameState.currentLevel === 2) {
        pFinalDamage = Math.round(pFinalDamage * 1.25);
    }

    // 先手判定 (Initiative)
    if (pCard.initiative > eCard.initiative) {
        eCard.hp -= pFinalDamage;
        showFloatingText(`enemy-slot-${dir}`, `-${pFinalDamage}`);
        await delay(500);
        
        if (eCard.hp > 0) {
            pCard.hp -= eFinalDamage;
            showFloatingText(`player-slot-${dir}`, `-${eFinalDamage}`);
        }
    } else if (eCard.initiative > pCard.initiative) {
        pCard.hp -= eFinalDamage;
        showFloatingText(`player-slot-${dir}`, `-${eFinalDamage}`);
        await delay(500);

        if (pCard.hp > 0) {
            eCard.hp -= pFinalDamage;
            showFloatingText(`enemy-slot-${dir}`, `-${pFinalDamage}`);
        }
    } else {
        eCard.hp -= pFinalDamage;
        pCard.hp -= eFinalDamage;
        showFloatingText(`enemy-slot-${dir}`, `-${pFinalDamage}`);
        showFloatingText(`player-slot-${dir}`, `-${eFinalDamage}`);
    }
    
    await delay(500);

    // 關卡 3 檮杌魔王技能
    if (gameState.currentLevel === 3 && pCard.hp > 0) {
        if (Math.random() < 0.3) {
            const reflectDmg = Math.round(pFinalDamage * 0.3);
            pCard.hp -= reflectDmg;
            showFloatingText(`player-slot-${dir}`, `反彈 -${reflectDmg}`);
        }
    }

    // 結算死亡
    if (pCard.hp <= 0) {
        gameState.playerSlots[dir] = null;
        if (gameState.currentLevel === 4) {
            const heal = Math.round(pCard.maxHp * 0.5);
            gameState.bossHp = Math.min(gameState.bossMaxHp, gameState.bossHp + heal);
            showFloatingText("boss-avatar", `+${heal} HP`);
        }
    }
    if (eCard.hp <= 0) {
        gameState.enemySlots[dir] = null;
    }
}

// 20. 結算卡牌直接攻擊魔王
async function resolveAttackBoss(pCard, dir) {
    let pAtk = pCard.atk;
    if (isResonance(pCard, dir) && dir === "south") pAtk = Math.round(pAtk * 1.3);
    if (isResonance(pCard, dir) && dir === "west") pAtk = Math.round(pAtk * 1.2);

    // 環境加成
    if (currentEnvironment === "water" && getCardEnvironmentType(pCard) === "water") {
        pAtk = Math.round(pAtk * 1.2);
    } else if (currentEnvironment === "heaven" && getCardEnvironmentType(pCard) === "heaven") {
        pAtk = Math.round(pAtk * 1.15);
    }

    // 魔王減傷環境
    const boss = getBossConfig(gameState.currentLevel);
    const bossBeast = BEASTS_DATABASE.find(b => b.id === boss.id);
    if (currentEnvironment === "mountain" && bossBeast && getCardEnvironmentType(bossBeast) === "mountain") {
        pAtk = Math.round(pAtk * 0.8);
    } else if (currentEnvironment === "heaven" && bossBeast && getCardEnvironmentType(bossBeast) === "heaven") {
        pAtk = Math.round(pAtk * 0.85);
    }

    gameState.bossHp = Math.max(0, gameState.bossHp - pAtk);
    showFloatingText("boss-avatar", `-${pAtk}`);
    await delay(500);
}

// 21. 結算卡牌直接攻擊玩家
async function resolveAttackPlayer(eCard, dir) {
    let eAtk = eCard.atk;
    if (isResonance(eCard, dir) && dir === "south") eAtk = Math.round(eAtk * 1.3);
    if (isResonance(eCard, dir) && dir === "west") eAtk = Math.round(eAtk * 1.2);

    // 環境加成
    if (currentEnvironment === "water" && getCardEnvironmentType(eCard) === "water") {
        eAtk = Math.round(eAtk * 1.2);
    } else if (currentEnvironment === "heaven" && getCardEnvironmentType(eCard) === "heaven") {
        eAtk = Math.round(eAtk * 1.15);
    }

    // 玩家減傷環境 (我方英雄為麒麟屬瑞獸/山經)
    if (currentEnvironment === "mountain") {
        eAtk = Math.round(eAtk * 0.8);
    } else if (currentEnvironment === "heaven") {
        eAtk = Math.round(eAtk * 0.85);
    }

    gameState.playerHp = Math.max(0, gameState.playerHp - eAtk);
    showFloatingText("player-hp-text", `-${eAtk}`);
    await delay(500);
}

// 22. 每回合結束，處理方位共鳴 (再生)
function applyEndRoundResonance() {
    const dirs = ["east", "south", "west", "north"];
    dirs.forEach(dir => {
        const pCard = gameState.playerSlots[dir];
        const eCard = gameState.enemySlots[dir];

        if (pCard && isResonance(pCard, dir) && dir === "east") {
            pCard.hp = Math.min(pCard.maxHp, pCard.hp + 15);
            showFloatingText(`player-slot-${dir}`, "+15 HP");
        }
        if (eCard && isResonance(eCard, dir) && dir === "east") {
            eCard.hp = Math.min(eCard.maxHp, eCard.hp + 15);
            showFloatingText(`enemy-slot-${dir}`, "+15 HP");
        }
    });
}

// 23. 顯示浮動受傷文字
function showFloatingText(elementId, text) {
    const targets = [elementId];
    if (elementId.startsWith("player-slot-")) {
        targets.push("new-" + elementId);
        targets.push("new-pc-" + elementId);
        targets.push("sketch-" + elementId);
    } else if (elementId.startsWith("enemy-slot-")) {
        targets.push("new-" + elementId);
        targets.push("new-pc-" + elementId);
        targets.push("sketch-" + elementId);
    } else if (elementId === "boss-avatar") {
        targets.push("new-boss-avatar");
        targets.push("new-pc-boss-avatar");
        targets.push("sketch-boss-avatar-container");
    } else if (elementId === "player-hp-text") {
        targets.push("new-player-hp-text");
        targets.push("new-pc-player-hp-text");
        targets.push("sketch-player-status-bar");
    } else if (elementId === "landscape-slot-1") {
        targets.push("desktop-slot-1");
    }

    targets.forEach(id => {
        const container = document.getElementById(id);
        if (!container) return;

        const floatEl = document.createElement("div");
        floatEl.className = "damage-number";
        floatEl.innerText = text;

        container.appendChild(floatEl);

        setTimeout(() => {
            floatEl.remove();
        }, 1000);
    });
}

// 24. 展現勝負彈窗
function showGameResult() {
    const modal = document.getElementById("game-result-modal");
    const title = document.getElementById("game-result-title");
    const desc = document.getElementById("game-result-desc");
    const btn = document.getElementById("game-result-action-btn");

    modal.style.display = "flex";

    if (gameState.bossHp <= 0) {
        title.innerText = "對決勝利！";
        title.style.color = "var(--jade-primary)";
        
        if (gameState.currentLevel === 4) {
            desc.innerText = `神蹟！您成功擊敗了終極挑戰 ${getBossConfig(4).name}，護佑了華夏九州的安全！`;
            btn.innerText = "重新挑戰第一關";
        } else {
            const boss = getBossConfig(gameState.currentLevel);
            desc.innerText = `您成功擊退了${boss.name}！下一關守護神/魔王已甦醒...`;
            btn.innerText = "挑戰下一關";
        }
    } else {
        title.innerText = "不幸落敗...";
        title.style.color = "var(--vermilion)";
        desc.innerText = "四大神魔威能無比，您的奇獸防線已被撕裂。請重整旗鼓！";
        btn.innerText = "重新挑戰本關";
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 全域啟動
document.addEventListener("DOMContentLoaded", () => {
    // 檢查是否是在 standalone 遊戲頁面 (有 game-wrapper 或是 game.html)
    const isStandaloneGamePage = document.querySelector('.game-wrapper') !== null || document.querySelector('.gp-wrapper') !== null || window.location.pathname.includes('game');
    
    if (isStandaloneGamePage) {
        initCardGame();
    } else {
        const cardGameTab = document.querySelector('[data-target="tab-cardgame"]');
        if (cardGameTab) {
            cardGameTab.addEventListener("click", () => {
                if (gameState.playerDeck.length === 0) {
                    initCardGame();
                }
            });
        }
    }
});

/* ================================================================
   佈局 P (Premium) 同步更新函式
   ================================================================ */

// 渲染 Premium 手牌
function renderPremHand() {
    const container = document.getElementById("prem-hand-cards");
    const countEl = document.getElementById("prem-hand-count");
    if (!container) return;
    container.innerHTML = "";
    if (countEl) countEl.textContent = gameState.playerHand.length;

    gameState.playerHand.forEach((card, index) => {
        const cardEl = createCardHtml(card);
        cardEl.setAttribute("data-index", index);
        if (gameState.selectedHandCardIndex === index) {
            cardEl.classList.add("selected");
        }
        cardEl.addEventListener("click", () => {
            if (gameState.isClashing) return;
            gameState.selectedHandCardIndex = (gameState.selectedHandCardIndex === index) ? null : index;
            renderPremHand();
            updatePremSlotsHighlight();
        });
        container.appendChild(cardEl);
    });
}

// 更新可部署格位高亮
function updatePremSlotsHighlight() {
    document.querySelectorAll(".prem-player-slot").forEach(slot => {
        slot.classList.remove("active-target");
        if (gameState.selectedHandCardIndex !== null) {
            const dir = slot.getAttribute("data-direction");
            const card = gameState.playerHand[gameState.selectedHandCardIndex];
            if (!gameState.playerSlots[dir] && gameState.playerMana >= card.cost) {
                slot.classList.add("active-target");
            }
        }
    });
}

// 渲染 Premium 戰場格位
function renderPremBattlefield() {
    const dirs = ["east", "south", "west", "north"];
    dirs.forEach(dir => {
        const pSlot = document.getElementById(`prem-player-slot-${dir}`);
        const eSlot = document.getElementById(`prem-enemy-slot-${dir}`);

        // 我方格位
        if (pSlot) {
            pSlot.innerHTML = "";
            pSlot.classList.remove("resonance");
            const playerCard = gameState.playerSlots[dir];
            if (playerCard) {
                pSlot.appendChild(createCardHtml(playerCard));
                if (isResonance(playerCard, dir)) pSlot.classList.add("resonance");
            } else {
                pSlot.innerHTML = `<div class="slot-empty-hint">空格</div>`;
            }
        }

        // 敵方格位
        if (eSlot) {
            eSlot.innerHTML = "";
            eSlot.classList.remove("resonance");
            const enemyCard = gameState.enemySlots[dir];
            if (enemyCard) {
                eSlot.appendChild(createCardHtml(enemyCard));
                if (isResonance(enemyCard, dir)) eSlot.classList.add("resonance");
            } else {
                eSlot.innerHTML = `<div class="slot-empty-hint">空格</div>`;
            }
        }
    });
}

// 更新 Premium 玩家狀態
function updatePremPlayerStatus() {
    const hpPct = Math.max(0, (gameState.playerHp / gameState.playerMaxHp) * 100);
    const manaPct = Math.max(0, (gameState.playerMana / 8) * 100);

    const hpFill = document.getElementById("prem-player-hp-fill");
    if (hpFill) hpFill.style.width = `${hpPct}%`;
    const hpText = document.getElementById("prem-player-hp-text");
    if (hpText) hpText.textContent = `${gameState.playerHp}/${gameState.playerMaxHp}`;

    const manaFill = document.getElementById("prem-player-mana-fill");
    if (manaFill) manaFill.style.width = `${manaPct}%`;
    const manaText = document.getElementById("prem-player-mana-text");
    if (manaText) manaText.textContent = `${gameState.playerMana}/${gameState.playerMaxMana}`;
}

// 更新 Premium 魔王面板
function updatePremBossPanel() {
    const boss = getBossConfig(gameState.currentLevel);
    const pct = Math.max(0, (gameState.bossHp / gameState.bossMaxHp) * 100);

    const bossHpFill = document.getElementById("prem-boss-hp-fill");
    if (bossHpFill) bossHpFill.style.width = `${pct}%`;
    const bossHpText = document.getElementById("prem-boss-hp-text");
    if (bossHpText) bossHpText.textContent = `${gameState.bossHp}/${gameState.bossMaxHp}`;
    const bossAvatar = document.getElementById("prem-boss-avatar");
    if (bossAvatar) bossAvatar.src = boss.avatar;
    const bossName = document.getElementById("prem-boss-name");
    if (bossName) bossName.textContent = boss.name.split(" ")[0];
    const bossSkill = document.getElementById("prem-boss-skill-desc");
    if (bossSkill) bossSkill.innerHTML = `【${boss.skillName}】${boss.skillDesc}`;

    // 怒氣進度
    const rageText = gameState.bossHp < gameState.bossMaxHp * 0.4 ? "狀態：激怒（HP < 40%）" : "狀態：待機";
    const statusEl = document.getElementById("prem-boss-status");
    if (statusEl) statusEl.textContent = rageText;
}

// 設定 Premium 佈局的 DOM 監聽
function setupPremListeners() {
    // 格位點擊部署
    document.querySelectorAll(".prem-player-slot").forEach(slot => {
        slot.addEventListener("click", () => {
            if (gameState.isClashing) return;
            const dir = slot.getAttribute("data-direction");

            if (gameState.selectedHandCardIndex === null) {
                // 沒選手牌 → 點格位可收回已部署的卡
                const card = gameState.playerSlots[dir];
                if (card) {
                    gameState.playerMana += card.cost;
                    gameState.playerHand.push(card);
                    gameState.playerSlots[dir] = null;
                    renderPremHand();
                    renderPremBattlefield();
                    updatePremPlayerStatus();
                }
                return;
            }

            const card = gameState.playerHand[gameState.selectedHandCardIndex];
            if (!gameState.playerSlots[dir] && gameState.playerMana >= card.cost) {
                gameState.playerMana -= card.cost;
                gameState.playerSlots[dir] = card;
                gameState.playerHand.splice(gameState.selectedHandCardIndex, 1);
                gameState.selectedHandCardIndex = null;
                renderPremHand();
                renderPremBattlefield();
                updatePremPlayerStatus();
                updatePremSlotsHighlight();

                // 同步更新事件欄
                const evBar = document.getElementById("prem-event-text");
                if (evBar) evBar.textContent = `【部署】${card.nameCn} 出陣！（靈力剩餘 ${gameState.playerMana}）`;
            }
        });
    });

    // 開始對決按鈕
    const clashBtn = document.getElementById("prem-clash-btn");
    if (clashBtn) {
        clashBtn.addEventListener("click", () => {
            if (!gameState.isClashing) {
                const hasCardOnBoard = Object.values(gameState.playerSlots).some(card => card !== null);
                const evBar = document.getElementById("prem-event-text");
                if (!hasCardOnBoard) {
                    if (evBar) evBar.textContent = "【提醒】請至少選擇並部署 1 張異獸卡牌上陣備戰！";
                    return;
                }
                if (evBar) evBar.textContent = "【對決開始！】雙方隨從正面交鋒！";
                startBattleClash();
            }
        });
    }

    // 重新挑戰
    const restartBtn = document.getElementById("prem-restart-btn");
    if (restartBtn) {
        restartBtn.addEventListener("click", () => {
            loadLevel(gameState.currentLevel);
            const evBar = document.getElementById("prem-event-text");
            if (evBar) evBar.textContent = "【重新挑戰】牌局重置，再次備戰！";
        });
    }

    // 魔王資訊彈出提示
    const intentBtn = document.getElementById("prem-boss-intent-btn");
    if (intentBtn) {
        intentBtn.addEventListener("click", () => {
            const boss = getBossConfig(gameState.currentLevel);
            const evBar = document.getElementById("prem-event-text");
            if (evBar) evBar.textContent = `【魔王意圖】${boss.name} 準備施展【${boss.skillName}】：${boss.skillDesc}`;
        });
    }
    const rageBtn = document.getElementById("prem-boss-rage-btn");
    if (rageBtn) {
        rageBtn.addEventListener("click", () => {
            const ragePct = Math.round((1 - gameState.bossHp / gameState.bossMaxHp) * 100);
            const evBar = document.getElementById("prem-event-text");
            if (evBar) evBar.textContent = `【魔王怒氣】當前怒氣值 ${ragePct}%。血量越低，怒氣越高！`;
        });
    }
    const ultimateBtn = document.getElementById("prem-boss-ultimate-btn");
    if (ultimateBtn) {
        ultimateBtn.addEventListener("click", () => {
            const evBar = document.getElementById("prem-event-text");
            const isReady = gameState.bossHp < gameState.bossMaxHp * 0.4;
            if (evBar) evBar.textContent = isReady ? "【絕招警告！】魔王即將發動絕招，做好準備！" : "【絕招蓄勢】魔王血量尚未低於 40%，絕招還未就緒。";
        });
    }
}

// 呼叫初始化 Premium 佈局
(function initPremiumLayout() {
    function startPrem() {
        if (typeof initCardGame === "function") {
            initCardGame();
        }
        setupPremListeners();
        renderPremHand();
        renderPremBattlefield();
        updatePremPlayerStatus();
        updatePremBossPanel();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", startPrem);
    } else {
        startPrem();
    }
})();
