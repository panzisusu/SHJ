// Default McDonald's meals (Burgers & Nuggets only, ignoring drinks/snacks)
const DEFAULT_MEALS = [
    { id: '1', name: '麥香魚', price: 49 },
    { id: '2', name: '麥香鷄', price: 49 },
    { id: '3', name: '雙層牛肉吉事堡', price: 65 },
    { id: '4', name: '麥克鷄塊 (6塊)', price: 64 },
    { id: '5', name: '大麥克', price: 75 },
    { id: '6', name: '勁辣鷄腿堡', price: 75 },
    { id: '7', name: '嫩煎鷄腿堡', price: 80 },
    { id: '8', name: '麥克鷄塊 (10塊)', price: 104 },
    { id: '9', name: 'BLT 安格斯牛肉堡', price: 114 },
    { id: '10', name: '麥脆鷄腿 (2塊)', price: 120 },
    { id: '11', name: '蕈菇安格斯牛肉堡', price: 124 }
];

// App State
let meals = [];
let isWeightedMode = true;
let isSpinning = false;

// DOM Elements
const menuListItems = document.getElementById('menu-list-items');
const addItemForm = document.getElementById('add-item-form');
const newItemName = document.getElementById('new-item-name');
const newItemPrice = document.getElementById('new-item-price');
const modeToggle = document.getElementById('mode-toggle');
const btnSpin = document.getElementById('btn-spin');
const btnReset = document.getElementById('btn-reset');
const pickerDisplay = document.getElementById('picker-display');
const labelWeighted = document.getElementById('label-weighted');
const labelEqual = document.getElementById('label-equal');
const totalItemsCount = document.getElementById('total-items-count');
const averagePriceEl = document.getElementById('average-price');

// Modal Elements
const winModal = document.getElementById('win-modal');
const winName = document.getElementById('win-name');
const winPrice = document.getElementById('win-price');
const winProbability = document.getElementById('win-probability');
const winRemark = document.getElementById('win-remark');
const btnModalClose = document.getElementById('btn-modal-close');
const btnModalRetry = document.getElementById('btn-modal-retry');
const confettiContainer = document.getElementById('confetti-container');

// Initialize App
function init() {
    // Load from local storage or set defaults
    const savedMeals = localStorage.getItem('mcd_meals');
    if (savedMeals) {
        meals = JSON.parse(savedMeals);
    } else {
        meals = [...DEFAULT_MEALS];
        saveMealsToStorage();
    }

    // Event Listeners
    addItemForm.addEventListener('submit', handleAddItem);
    modeToggle.addEventListener('change', handleModeChange);
    btnSpin.addEventListener('click', startSpinAnimation);
    btnReset.addEventListener('click', resetToDefault);
    btnModalClose.addEventListener('click', closeModal);
    btnModalRetry.addEventListener('click', () => {
        closeModal();
        startSpinAnimation();
    });

    // Render list
    renderMenu();
}

// Save meals to local storage
function saveMealsToStorage() {
    localStorage.setItem('mcd_meals', JSON.stringify(meals));
}

// Calculate probabilities based on current mode
function calculateProbabilities() {
    if (meals.length === 0) return [];

    if (!isWeightedMode) {
        // Equal mode: 1/N
        const prob = 1 / meals.length;
        return meals.map(meal => ({
            ...meal,
            probability: prob,
            weight: 1
        }));
    }

    // Weighted mode: inverse price weighting (1 / Price)
    // Find weights
    const mealsWithWeights = meals.map(meal => {
        const weight = 1 / meal.price;
        return { ...meal, weight };
    });

    const sumWeights = mealsWithWeights.reduce((sum, item) => sum + item.weight, 0);

    return mealsWithWeights.map(item => ({
        ...item,
        probability: sumWeights > 0 ? (item.weight / sumWeights) : 0
    }));
}

// Render menu items & metadata
function renderMenu() {
    const processedMeals = calculateProbabilities();
    
    // Clear list
    menuListItems.innerHTML = '';

    // Update stats
    totalItemsCount.textContent = `共 ${meals.length} 項餐點`;
    const avgPrice = meals.length > 0 
        ? Math.round(meals.reduce((sum, item) => sum + item.price, 0) / meals.length)
        : 0;
    averagePriceEl.textContent = `平均價格: NT$ ${avgPrice}`;

    if (processedMeals.length === 0) {
        menuListItems.innerHTML = `
            <div class="placeholder-content" style="padding: 2rem 0;">
                <p>選單為空，請新增餐點或點擊「重設預設」</p>
            </div>
        `;
        return;
    }

    // Sort by price ascending
    processedMeals.sort((a, b) => a.price - b.price);

    processedMeals.forEach(meal => {
        const percentage = (meal.probability * 100).toFixed(1);
        
        const itemDiv = document.createElement('div');
        itemDiv.className = 'menu-item';
        itemDiv.innerHTML = `
            <div class="item-name" title="${escapeHtml(meal.name)}">${escapeHtml(meal.name)}</div>
            <div class="item-price">NT$ ${meal.price}</div>
            <div class="item-prob-container">
                <span class="prob-value">${percentage}%</span>
                <div class="prob-bar-bg">
                    <div class="prob-bar-fill" style="width: ${percentage}%"></div>
                </div>
            </div>
            <button class="btn-delete" data-id="${meal.id}" title="刪除餐點">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        `;

        // Delete button listener
        itemDiv.querySelector('.btn-delete').addEventListener('click', (e) => {
            const id = e.currentTarget.getAttribute('data-id');
            deleteItem(id);
        });

        menuListItems.appendChild(itemDiv);
    });
}

// Add New Item
function handleAddItem(e) {
    e.preventDefault();

    const name = newItemName.value.trim();
    const price = parseInt(newItemPrice.value, 10);

    if (!name || isNaN(price) || price <= 0) return;

    const newMeal = {
        id: Date.now().toString(),
        name,
        price
    };

    meals.push(newMeal);
    saveMealsToStorage();
    renderMenu();

    // Reset Form
    newItemName.value = '';
    newItemPrice.value = '';
    newItemName.focus();
}

// Delete Item
function deleteItem(id) {
    meals = meals.filter(meal => meal.id !== id);
    saveMealsToStorage();
    renderMenu();
}

// Reset to default
function resetToDefault() {
    if (confirm('確定要回復為預設的麥當勞主餐清單嗎？這會覆蓋您目前的修改。')) {
        meals = [...DEFAULT_MEALS];
        saveMealsToStorage();
        renderMenu();
    }
}

// Handle toggling probability mode
function handleModeChange(e) {
    isWeightedMode = !e.target.checked;
    
    if (isWeightedMode) {
        labelWeighted.classList.add('active');
        labelEqual.classList.remove('active');
    } else {
        labelWeighted.classList.remove('active');
        labelEqual.classList.add('active');
    }
    
    renderMenu();
}

// Spin logic with high performance shuffling animation
function startSpinAnimation() {
    if (meals.length === 0) {
        alert('請先新增一些餐點！');
        return;
    }
    if (isSpinning) return;

    isSpinning = true;
    btnSpin.disabled = true;
    btnSpin.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> 選擇中...`;

    // Calculate probabilities & choose a winner
    const processedMeals = calculateProbabilities();
    const winner = pickRandomWeighted(processedMeals);

    // Prepare shuffling layout
    pickerDisplay.innerHTML = `
        <div class="shuffle-view">
            <div class="shuffle-card-box spinning" id="shuffle-card">
                <div class="shuffle-name" id="shuffle-name">---</div>
                <div class="shuffle-price" id="shuffle-price">NT$ --</div>
                <div class="shuffle-status-bar"><i class="fa-solid fa-spinner fa-spin"></i> 命運之輪旋轉中...</div>
            </div>
        </div>
    `;

    const shuffleCard = document.getElementById('shuffle-card');
    const shuffleName = document.getElementById('shuffle-name');
    const shufflePrice = document.getElementById('shuffle-price');

    // Shuffle animations: start very fast, gradually slow down
    let currentIdx = 0;
    let delay = 50; // milliseconds
    const totalDuration = 1800; // total animation time
    let elapsed = 0;

    function shuffleStep() {
        // Pick a random index to display during shuffling to look dynamic
        currentIdx = Math.floor(Math.random() * processedMeals.length);
        const randomMeal = processedMeals[currentIdx];
        
        shuffleName.textContent = randomMeal.name;
        shufflePrice.textContent = `NT$ ${randomMeal.price}`;

        // Scale effect on shuffleCard to make it bounce with shuffling
        shuffleCard.style.transform = `scale(${0.96 + Math.random() * 0.08})`;

        elapsed += delay;
        
        if (elapsed < totalDuration) {
            // Decelerate the shuffle speed
            if (elapsed > totalDuration * 0.7) {
                delay = 180;
            } else if (elapsed > totalDuration * 0.4) {
                delay = 100;
            }
            setTimeout(shuffleStep, delay);
        } else {
            // Finish animation
            finalizeSpin(winner);
        }
    }

    setTimeout(shuffleStep, delay);
}

// Select item using Cumulative Distribution Function (CDF)
function pickRandomWeighted(processedMeals) {
    const randomVal = Math.random();
    let cumulativeProb = 0;

    for (const meal of processedMeals) {
        cumulativeProb += meal.probability;
        if (randomVal <= cumulativeProb) {
            return meal;
        }
    }
    // Fallback just in case of float rounding errors
    return processedMeals[processedMeals.length - 1];
}

// Finalize selection
function finalizeSpin(winner) {
    isSpinning = false;
    btnSpin.disabled = false;
    btnSpin.innerHTML = `<i class="fa-solid fa-utensils"></i> 開始選餐！`;

    // Reset picker display
    pickerDisplay.innerHTML = `
        <div class="placeholder-content">
            <i class="fa-solid fa-burger burger-spin"></i>
            <p>準備好要吃什麼了嗎？</p>
        </div>
    `;

    // Populate Modal
    winName.textContent = winner.name;
    winPrice.textContent = winner.price;
    winProbability.textContent = `${(winner.probability * 100).toFixed(1)}%`;
    winRemark.textContent = getRemarkForPrice(winner.price);

    // Open Modal
    winModal.classList.add('open');
    createConfetti();
}

// Close Modal
function closeModal() {
    winModal.classList.remove('open');
    clearConfetti();
}

// Remarks depending on price ranges
function getRemarkForPrice(price) {
    if (price < 60) {
        return '超划算！CP值爆表，簡直是省錢超人！✨';
    } else if (price <= 90) {
        return '經典價格，既能吃飽又不傷荷包，完美選擇！👍';
    } else if (price <= 115) {
        return '稍微奢侈了一點，但美味的靈魂值得被滿足！😋';
    } else {
        return '哇！今天點到極選奢華餐，對自己特別好喔！👑';
    }
}

// Confetti effects
function createConfetti() {
    clearConfetti();
    const colors = ['#da291c', '#ffc72c', '#3b82f6', '#10b981', '#ffffff'];
    const totalConfetti = 50;

    for (let i = 0; i < totalConfetti; i++) {
        const p = document.createElement('div');
        p.className = 'confetti';
        p.style.left = `${Math.random() * 100}%`;
        p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Random dimensions
        const size = Math.random() * 6 + 6;
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        
        // Random animation delay & duration
        p.style.animationDelay = `${Math.random() * 2}s`;
        p.style.animationDuration = `${Math.random() * 2 + 1.5}s`;
        
        confettiContainer.appendChild(p);
    }
}

function clearConfetti() {
    confettiContainer.innerHTML = '';
}

// Safety Helpers
function escapeHtml(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Boot up
document.addEventListener('DOMContentLoaded', init);
