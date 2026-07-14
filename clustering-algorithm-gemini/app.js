// Global State variables
let points = [];
let algorithmState = {
    name: 'kmeans',
    preset: 'blobs',
    iteration: 0,
    isConverged: false,
    isRunning: false,
    timerId: null,
    cost: null,
    
    // Algorithm-specific structures
    centroids: [], // For K-Means
    medoids: [],   // For K-Medoids (indices into points)
    gmmComponents: [], // For GMM (mean, covariance, weight)
    dbscanQueue: [],   // For step-by-step DBSCAN
    dbscanUnvisited: [],
    dbscanClustersCount: 0
};

// Canvas references
let canvas, ctx;
const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;

// Color Palette for Clusters (Ink Wash style colors)
const CLUSTER_COLORS = [
    { rgb: [158, 42, 43], hex: '#9e2a2b' },   // 硃砂紅
    { rgb: [140, 107, 18], hex: '#8c6b12' },  // 古金黃
    { rgb: [43, 91, 54], hex: '#2b5b36' },    // 青松綠
    { rgb: [53, 80, 112], hex: '#355070' },   // 黛藍
    { rgb: [112, 108, 97], hex: '#706c61' },  // 玄石灰
    { rgb: [180, 100, 40], hex: '#b46428' }   // 琥珀褐
];
const NOISE_COLOR = '#a0a0a0'; // DBSCAN Noise is Gray

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    canvas = document.getElementById('clustering-canvas');
    ctx = canvas.getContext('2d');
    
    // Set Canvas event listeners
    canvas.addEventListener('click', handleCanvasClick);
    canvas.addEventListener('contextmenu', handleCanvasRightClick);
    
    // Load default dataset preset
    onPresetChange();
    
    // Setup guides
    updateAlgoGuide();
});

// Tab switching logic
function switchTab(tabName) {
    const tabs = ['playground', 'tutorial', 'notes'];
    tabs.forEach(t => {
        const btn = document.querySelector(`.tab-btn[onclick="switchTab('${t}')"]`);
        const tabContent = document.getElementById(`${t}-tab`);
        if (t === tabName) {
            btn.classList.add('active');
            tabContent.classList.add('active');
        } else {
            btn.classList.remove('active');
            tabContent.classList.remove('active');
        }
    });
}

// Coordinate mapping / Vector math helpers
function getDistance(p1, p2) {
    return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
}

// Bivariate Box-Muller transform for Gaussian distributions
function randomNormal(mean, stdDev) {
    let u = 0, v = 0;
    while(u === 0) u = Math.random(); 
    while(v === 0) v = Math.random();
    let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    return num * stdDev + mean;
}

// Generate data presets
function onPresetChange() {
    stopAutoRun();
    const preset = document.getElementById('dataset-preset').value;
    algorithmState.preset = preset;
    points = [];
    
    const count = 120;
    
    if (preset === 'blobs') {
        // Generate 3 blobs
        const centers = [
            { x: 150, y: 150, std: 35 },
            { x: 350, y: 180, std: 40 },
            { x: 230, y: 360, std: 45 }
        ];
        
        for (let i = 0; i < count; i++) {
            const center = centers[i % centers.length];
            points.push({
                x: Math.max(20, Math.min(CANVAS_WIDTH - 20, randomNormal(center.x, center.std))),
                y: Math.max(20, Math.min(CANVAS_HEIGHT - 20, randomNormal(center.y, center.std))),
                label: -1
            });
        }
    } else if (preset === 'circles') {
        // Outer circle and inner circle
        const centerX = CANVAS_WIDTH / 2;
        const centerY = CANVAS_HEIGHT / 2;
        
        // Outer ring
        for (let i = 0; i < 80; i++) {
            const theta = (i / 80) * 2.0 * Math.PI;
            const r = 160 + (Math.random() - 0.5) * 20;
            points.push({
                x: centerX + r * Math.cos(theta),
                y: centerY + r * Math.sin(theta),
                label: -1
            });
        }
        
        // Inner ring
        for (let i = 0; i < 40; i++) {
            const theta = (i / 40) * 2.0 * Math.PI;
            const r = 60 + (Math.random() - 0.5) * 15;
            points.push({
                x: centerX + r * Math.cos(theta),
                y: centerY + r * Math.sin(theta),
                label: -1
            });
        }
    } else if (preset === 'moons') {
        // Two interlocking crescent shapes
        const ptsPerMoon = 60;
        // Moon 1 (top left crescent)
        for (let i = 0; i < ptsPerMoon; i++) {
            const theta = (i / ptsPerMoon) * Math.PI;
            const r = 100 + (Math.random() - 0.5) * 18;
            points.push({
                x: 180 + r * Math.cos(-theta + Math.PI/4),
                y: 200 + r * Math.sin(-theta + Math.PI/4),
                label: -1
            });
        }
        // Moon 2 (bottom right crescent)
        for (let i = 0; i < ptsPerMoon; i++) {
            const theta = (i / ptsPerMoon) * Math.PI;
            const r = 100 + (Math.random() - 0.5) * 18;
            points.push({
                x: 300 + r * Math.cos(theta - Math.PI/4),
                y: 280 + r * Math.sin(theta - Math.PI/4),
                label: -1
            });
        }
    } else if (preset === 'spiral') {
        // Double Archmedian spirals
        const thetaMax = 3.5 * Math.PI;
        
        // Spiral 1
        for (let i = 0; i < 60; i++) {
            const theta = 0.5 + (i / 60) * thetaMax;
            const r = 18 * theta;
            const noiseX = (Math.random() - 0.5) * 12;
            const noiseY = (Math.random() - 0.5) * 12;
            points.push({
                x: CANVAS_WIDTH / 2 + r * Math.cos(theta) + noiseX,
                y: CANVAS_HEIGHT / 2 + r * Math.sin(theta) + noiseY,
                label: -1
            });
        }
        
        // Spiral 2 (180 deg shifted)
        for (let i = 0; i < 60; i++) {
            const theta = 0.5 + (i / 60) * thetaMax;
            const r = 18 * theta;
            const noiseX = (Math.random() - 0.5) * 12;
            const noiseY = (Math.random() - 0.5) * 12;
            points.push({
                x: CANVAS_WIDTH / 2 + r * Math.cos(theta + Math.PI) + noiseX,
                y: CANVAS_HEIGHT / 2 + r * Math.sin(theta + Math.PI) + noiseY,
                label: -1
            });
        }
    }
    
    // Redraw and initialize model state
    resetAlgorithmState();
    updateUIElements();
}

// Custom data insertion
function handleCanvasClick(e) {
    const rect = canvas.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * CANVAS_WIDTH;
    const y = ((e.clientY - rect.top) / rect.height) * CANVAS_HEIGHT;
    
    // Add custom point
    points.push({ x: x, y: y, label: -1 });
    
    // Hide instructions hint if clicked once
    document.getElementById('canvas-hint').classList.add('fade-out');
    
    resetAlgorithmState();
    updateUIElements();
}

function handleCanvasRightClick(e) {
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * CANVAS_WIDTH;
    const y = ((e.clientY - rect.top) / rect.height) * CANVAS_HEIGHT;
    
    // Find closest point to delete
    let minIndex = -1;
    let minDist = 15; // 15 pixels threshold
    
    for (let i = 0; i < points.length; i++) {
        const dist = getDistance({ x, y }, points[i]);
        if (dist < minDist) {
            minDist = dist;
            minIndex = i;
        }
    }
    
    if (minIndex !== -1) {
        points.splice(minIndex, 1);
        resetAlgorithmState();
        updateUIElements();
    }
}

// Clear all inputs
function clearCanvas() {
    stopAutoRun();
    points = [];
    resetAlgorithmState();
    updateUIElements();
}

// Sliders and Selects listener
function onAlgorithmChange() {
    stopAutoRun();
    const algo = document.getElementById('algorithm-select').value;
    algorithmState.name = algo;
    
    // Show/Hide sliders based on selected algorithm
    document.getElementById('group-k').style.display = (algo === 'dbscan') ? 'none' : 'block';
    document.getElementById('group-eps').style.display = (algo === 'dbscan') ? 'block' : 'none';
    document.getElementById('group-minpts').style.display = (algo === 'dbscan') ? 'block' : 'none';
    document.getElementById('group-gamma').style.display = (algo === 'spectral') ? 'block' : 'none';
    
    // Show stats
    document.getElementById('dbscan-breakdown').style.display = (algo === 'dbscan') ? 'block' : 'none';
    document.getElementById('status-extra-cost').style.display = (algo === 'dbscan') ? 'none' : 'block';
    
    updateAlgoGuide();
    resetAlgorithmState();
    updateUIElements();
}

function onParamChange() {
    stopAutoRun();
    // Update value tags
    document.getElementById('val-k').textContent = document.getElementById('cluster-k').value;
    document.getElementById('val-eps').textContent = document.getElementById('dbscan-eps').value;
    document.getElementById('val-minpts').textContent = document.getElementById('dbscan-minpts').value;
    document.getElementById('val-gamma').textContent = document.getElementById('kernel-gamma').value;
    
    resetAlgorithmState();
    updateUIElements();
}

function generateRandomPoints() {
    onPresetChange();
}

// Dynamic info guide updates
function updateAlgoGuide() {
    const algo = algorithmState.name;
    const guideBox = document.getElementById('algo-guide-text');
    
    let text = '';
    if (algo === 'kmeans') {
        text = '<strong>K-Means 演算法：</strong><br>1. 隨機撒落 $K$ 個群心（圖中虛線十字標記）。<br>2. <strong>分配階段 (E)</strong>：將每個資料點分配給最近的群心。<br>3. <strong>更新階段 (M)</strong>：將群心移動到所有分配點的平均位置。<br>4. 重複以上步驟直到群心位置不再變更即收斂。';
    } else if (algo === 'kmedoids') {
        text = '<strong>K-Medoids (PAM 演算法)：</strong><br>1. 從現有的資料點中挑選 $K$ 個作為中心點 (Medoids，虛線十字標記)。<br>2. <strong>分配階段</strong>：計算各點到各 Medoid 的 Euclidean 距離，分派給最近的群。<br>3. <strong>更新階段</strong>：在每個群中，搜索另一個<strong>真實資料點</strong>，使該點到群內其他所有點的距離和最小，替換為新的 Medoid。<br>4. 重複直到中心不再轉移。';
    } else if (algo === 'dbscan') {
        text = '<strong>DBSCAN 密度分群法：</strong><br>1. 以 $\\epsilon$ 為半徑尋找各點的鄰居。鄰域點數 $\\ge MinPts$ 的點被標為<strong>核心點 (Core, 帶紅圈標記)</strong>。<br>2. 由未訪問的核心點出發，沿密度可達的鄰居進行遞迴廣度擴張，組成群落。<br>3. 落在核心點鄰近但其自身非核心的點為<strong>邊界點 (Border)</strong>；其餘孤立點為<strong>噪聲 (Noise, 灰色點)</strong>。';
    } else if (algo === 'gmm') {
        text = '<strong>GMM 混合高斯模型 (EM 步進)：</strong><br>1. 初始化 $K$ 個高斯分佈。協方差以方向圓環（橢圓）表示。<br>2. <strong>E-step (期望)</strong>：計算各點由各高斯分佈產生的<strong>響應度機率 (Responsibility)</strong>。畫布上的點會因為機率權重以「軟分配」的混合顏色漸變呈現。<br>3. <strong>M-step (最大化)</strong>：重新估算高斯分佈的均值向量、協方差矩陣 (決定橢圓偏斜度與大小) 與權重。<br>4. 橢圓在訓練過程中會逐漸扭轉、包裹住對應的資料群聚。';
    } else if (algo === 'spectral') {
        text = '<strong>核函數 K-Means (譜分群近似)：</strong><br>1. 使用徑向基核函數 (RBF Kernel) 計算樣本兩兩之間的相似度，隱式地將點映射至無窮維空間。<br>2. 在核空間下執行中心迭代，其決策邊界在 2D 畫布上呈現出強大的<strong>非線性彎曲分割能力</strong>。<br>3. 調大核函數寬度 $\\gamma$ 可提高非線性擬合敏銳度，適合分離同心圓與雙螺旋。';
    }
    
    guideBox.innerHTML = text;
    // Rerender MathJax formulas if loaded
    if (window.MathJax && window.MathJax.typeset) {
        window.MathJax.typesetPromise();
    }
}

// Reset solvers state without changing coordinates
function resetAlgorithmState() {
    algorithmState.iteration = 0;
    algorithmState.isConverged = false;
    algorithmState.cost = null;
    
    // Clear assignments
    points.forEach(p => p.label = -1);
    
    const K = parseInt(document.getElementById('cluster-k').value);
    
    if (algorithmState.name === 'kmeans') {
        // Initialize centroids by choosing random coordinates in bounds
        algorithmState.centroids = [];
        for (let i = 0; i < K; i++) {
            // Pick a random point's coordinates to guarantee they start in density
            if (points.length > 0) {
                const randPt = points[Math.floor(Math.random() * points.length)];
                algorithmState.centroids.push({ x: randPt.x, y: randPt.y });
            } else {
                algorithmState.centroids.push({
                    x: Math.random() * CANVAS_WIDTH,
                    y: Math.random() * CANVAS_HEIGHT
                });
            }
        }
    } else if (algorithmState.name === 'kmedoids') {
        // Pick K unique points as initial medoids indices
        algorithmState.medoids = [];
        if (points.length >= K) {
            const indices = [];
            while (indices.length < K) {
                const idx = Math.floor(Math.random() * points.length);
                if (!indices.includes(idx)) {
                    indices.push(idx);
                }
            }
            algorithmState.medoids = indices;
        }
    } else if (algorithmState.name === 'dbscan') {
        // Initialize DBSCAN queue and states
        algorithmState.dbscanQueue = [];
        algorithmState.dbscanUnvisited = [...Array(points.length).keys()];
        algorithmState.dbscanClustersCount = 0;
        points.forEach(p => {
            p.label = -1; // -1 represents unassigned/noise initially
            p.isCore = false;
        });
    } else if (algorithmState.name === 'gmm') {
        // Initialize GMM components
        algorithmState.gmmComponents = [];
        for (let k = 0; k < K; k++) {
            // Means: pick a random point
            let mean = { x: Math.random() * CANVAS_WIDTH, y: Math.random() * CANVAS_HEIGHT };
            if (points.length > 0) {
                const randPt = points[Math.floor(Math.random() * points.length)];
                mean = { x: randPt.x, y: randPt.y };
            }
            
            // Covariance matrix: initially isotropic identity-like matrix
            const cov = {
                xx: 1600, // variance x
                yy: 1600, // variance y
                xy: 0     // covariance xy
            };
            
            algorithmState.gmmComponents.push({
                mean: mean,
                cov: cov,
                weight: 1.0 / K
            });
        }
    } else if (algorithmState.name === 'spectral') {
        // Kernel K-Means initial partition: randomly partition points into K groups
        points.forEach(p => {
            p.label = Math.floor(Math.random() * K);
        });
    }
}

// Trigger single step of current solver
function triggerStep() {
    if (points.length === 0) return;
    
    if (algorithmState.isConverged) {
        return;
    }
    
    algorithmState.iteration++;
    
    if (algorithmState.name === 'kmeans') {
        stepKMeans();
    } else if (algorithmState.name === 'kmedoids') {
        stepKMedoids();
    } else if (algorithmState.name === 'dbscan') {
        stepDBSCAN();
    } else if (algorithmState.name === 'gmm') {
        stepGMM();
    } else if (algorithmState.name === 'spectral') {
        stepKernelKMeans();
    }
    
    updateUIElements();
}

// KMeans Step Solver
function stepKMeans() {
    const K = algorithmState.centroids.length;
    let changed = false;
    
    // E-Step: Assign points to nearest centroid
    points.forEach(p => {
        let minDist = Infinity;
        let newLabel = 0;
        for (let k = 0; k < K; k++) {
            const dist = getDistance(p, algorithmState.centroids[k]);
            if (dist < minDist) {
                minDist = dist;
                newLabel = k;
            }
        }
        if (p.label !== newLabel) {
            p.label = newLabel;
            changed = true;
        }
    });
    
    // M-Step: Compute new centroids as average coordinates of assigned points
    const sums = Array.from({ length: K }, () => ({ x: 0, y: 0, count: 0 }));
    points.forEach(p => {
        if (p.label !== -1) {
            sums[p.label].x += p.x;
            sums[p.label].y += p.y;
            sums[p.label].count++;
        }
    });
    
    let moved = false;
    for (let k = 0; k < K; k++) {
        if (sums[k].count > 0) {
            const nextX = sums[k].x / sums[k].count;
            const nextY = sums[k].y / sums[k].count;
            
            const shift = getDistance(algorithmState.centroids[k], { x: nextX, y: nextY });
            if (shift > 0.1) {
                algorithmState.centroids[k].x = nextX;
                algorithmState.centroids[k].y = nextY;
                moved = true;
            }
        }
    }
    
    // Compute total inertia cost (within-cluster sum of squares)
    let totalInertia = 0;
    points.forEach(p => {
        if (p.label !== -1) {
            totalInertia += getDistance(p, algorithmState.centroids[p.label]) ** 2;
        }
    });
    algorithmState.cost = totalInertia.toFixed(1);
    
    // Converged if no labels changed or centroids didn't move
    if (!changed || !moved) {
        algorithmState.isConverged = true;
        stopAutoRun();
    }
}

// KMedoids Step Solver
function stepKMedoids() {
    const K = algorithmState.medoids.length;
    let changed = false;
    
    // E-Step: Assign points to nearest medoid
    points.forEach(p => {
        let minDist = Infinity;
        let newLabel = 0;
        for (let k = 0; k < K; k++) {
            const medoid = points[algorithmState.medoids[k]];
            const dist = getDistance(p, medoid);
            if (dist < minDist) {
                minDist = dist;
                newLabel = k;
            }
        }
        if (p.label !== newLabel) {
            p.label = newLabel;
            changed = true;
        }
    });
    
    // M-Step: Recompute medoids for each cluster to minimize sum of distances
    let moved = false;
    for (let k = 0; k < K; k++) {
        // Collect indices of points in cluster k
        const clusterIdxs = [];
        points.forEach((p, idx) => {
            if (p.label === k) {
                clusterIdxs.push(idx);
            }
        });
        
        if (clusterIdxs.length > 0) {
            let minDistanceSum = Infinity;
            let bestMedoidIdx = algorithmState.medoids[k];
            
            // Search all candidate points in this cluster
            for (let i = 0; i < clusterIdxs.length; i++) {
                const candidateIdx = clusterIdxs[i];
                const candidate = points[candidateIdx];
                let distSum = 0;
                
                for (let j = 0; j < clusterIdxs.length; j++) {
                    distSum += getDistance(candidate, points[clusterIdxs[j]]);
                }
                
                if (distSum < minDistanceSum) {
                    minDistanceSum = distSum;
                    bestMedoidIdx = candidateIdx;
                }
            }
            
            if (algorithmState.medoids[k] !== bestMedoidIdx) {
                algorithmState.medoids[k] = bestMedoidIdx;
                moved = true;
            }
        }
    }
    
    // Compute total absolute distance cost
    let totalDist = 0;
    points.forEach(p => {
        if (p.label !== -1) {
            totalDist += getDistance(p, points[algorithmState.medoids[p.label]]);
        }
    });
    algorithmState.cost = totalDist.toFixed(1);
    
    if (!changed || !moved) {
        algorithmState.isConverged = true;
        stopAutoRun();
    }
}

// DBSCAN Step Solver (Visual Search Expansion Queue)
function stepDBSCAN() {
    const eps = parseFloat(document.getElementById('dbscan-eps').value);
    const minPts = parseInt(document.getElementById('dbscan-minpts').value);
    
    // Run full DBSCAN iteration, but chunked for visual step-by-step
    // In each step, we expand the queue or find the next unvisited core point
    
    // Region query helper
    const getNeighbors = (pIdx) => {
        const neighbors = [];
        for (let i = 0; i < points.length; i++) {
            if (getDistance(points[pIdx], points[i]) <= eps) {
                neighbors.push(i);
            }
        }
        return neighbors;
    };
    
    let stepDone = false;
    
    while (!stepDone && (algorithmState.dbscanQueue.length > 0 || algorithmState.dbscanUnvisited.length > 0)) {
        if (algorithmState.dbscanQueue.length > 0) {
            // Expand cluster from queue
            const currIdx = algorithmState.dbscanQueue.shift();
            
            // Query neighbors
            const neighbors = getNeighbors(currIdx);
            
            // Check if core point
            if (neighbors.length >= minPts) {
                points[currIdx].isCore = true;
                
                // Process neighbors
                for (let i = 0; i < neighbors.length; i++) {
                    const neighborIdx = neighbors[i];
                    const neighbor = points[neighborIdx];
                    
                    // If unvisited or classified as noise
                    if (neighbor.label === -1) {
                        neighbor.label = algorithmState.dbscanClustersCount - 1; // Assign label
                        
                        // If it was unvisited, push to queue to explore further
                        const unvisitedPos = algorithmState.dbscanUnvisited.indexOf(neighborIdx);
                        if (unvisitedPos !== -1) {
                            algorithmState.dbscanUnvisited.splice(unvisitedPos, 1);
                            algorithmState.dbscanQueue.push(neighborIdx);
                        }
                    }
                }
            } else {
                // If it is not core, but is reachable, it is a border point
                // (Already labeled inside parent core expansion)
            }
            stepDone = true;
        } else {
            // Find next unvisited point to start a new cluster
            const nextIdx = algorithmState.dbscanUnvisited.shift();
            const neighbors = getNeighbors(nextIdx);
            
            if (neighbors.length >= minPts) {
                // Start a new cluster
                algorithmState.dbscanClustersCount++;
                points[nextIdx].label = algorithmState.dbscanClustersCount - 1;
                points[nextIdx].isCore = true;
                
                // Add all neighbors to queue
                for (let i = 0; i < neighbors.length; i++) {
                    const neighborIdx = neighbors[i];
                    points[neighborIdx].label = algorithmState.dbscanClustersCount - 1;
                    
                    const unvisitedPos = algorithmState.dbscanUnvisited.indexOf(neighborIdx);
                    if (unvisitedPos !== -1) {
                        algorithmState.dbscanUnvisited.splice(unvisitedPos, 1);
                        algorithmState.dbscanQueue.push(neighborIdx);
                    }
                }
                stepDone = true;
            } else {
                // Labeled as noise for now, might change if reachable later
                points[nextIdx].label = -1;
            }
        }
    }
    
    // Count stats
    let coreCount = 0;
    let borderCount = 0;
    let noiseCount = 0;
    
    points.forEach((p, idx) => {
        const neighbors = getNeighbors(idx);
        if (neighbors.length >= minPts) {
            p.isCore = true;
            coreCount++;
        } else if (p.label !== -1) {
            p.isCore = false;
            borderCount++;
        } else {
            p.isCore = false;
            noiseCount++;
        }
    });
    
    document.getElementById('count-core').textContent = coreCount;
    document.getElementById('count-border').textContent = borderCount;
    document.getElementById('count-noise').textContent = noiseCount;
    
    // Convergence check
    if (algorithmState.dbscanQueue.length === 0 && algorithmState.dbscanUnvisited.length === 0) {
        algorithmState.isConverged = true;
        stopAutoRun();
    }
}

// Bivariate normal PDF
function gaussianPdf2D(x, y, mean, cov) {
    const dx = x - mean.x;
    const dy = y - mean.y;
    
    const det = cov.xx * cov.yy - cov.xy * cov.xy;
    if (det <= 1e-6) return 0; // Prevent singular matrix division
    
    const scale = 1.0 / (2.0 * Math.PI * Math.sqrt(det));
    const exponent = -0.5 * (cov.yy * dx * dx - 2.0 * cov.xy * dx * dy + cov.xx * dy * dy) / det;
    return scale * Math.exp(exponent);
}

// GMM EM Step Solver
function stepGMM() {
    const K = algorithmState.gmmComponents.length;
    const N = points.length;
    
    // 1. E-Step: Calculate responsibilities gamma(i, k)
    const gamma = Array.from({ length: N }, () => Array(K).fill(0));
    
    for (let i = 0; i < N; i++) {
        let probSum = 0;
        const probs = [];
        
        for (let k = 0; k < K; k++) {
            const comp = algorithmState.gmmComponents[k];
            const pVal = comp.weight * gaussianPdf2D(points[i].x, points[i].y, comp.mean, comp.cov);
            probs.push(pVal);
            probSum += pVal;
        }
        
        for (let k = 0; k < K; k++) {
            gamma[i][k] = probSum > 1e-12 ? probs[k] / probSum : 1.0 / K;
        }
    }
    
    // Soft assign label for visualization (highest responsibility)
    let logLikelihood = 0;
    points.forEach((p, i) => {
        let maxResp = -1;
        let bestK = 0;
        let sumProb = 0;
        for (let k = 0; k < K; k++) {
            const comp = algorithmState.gmmComponents[k];
            const pVal = comp.weight * gaussianPdf2D(p.x, p.y, comp.mean, comp.cov);
            sumProb += pVal;
            if (gamma[i][k] > maxResp) {
                maxResp = gamma[i][k];
                bestK = k;
            }
        }
        p.label = bestK;
        p.responsibilities = gamma[i]; // Store weights for soft coloring
        logLikelihood += Math.log(Math.max(1e-12, sumProb));
    });
    
    algorithmState.cost = logLikelihood.toFixed(1);
    
    // 2. M-Step: Re-estimate parameters
    const N_k = Array(K).fill(0);
    for (let k = 0; k < K; k++) {
        for (let i = 0; i < N; i++) {
            N_k[k] += gamma[i][k];
        }
    }
    
    let meanShiftSum = 0;
    
    for (let k = 0; k < K; k++) {
        const comp = algorithmState.gmmComponents[k];
        const nextWeight = N_k[k] / N;
        
        if (N_k[k] > 0.1) {
            // New Mean
            let nextMeanX = 0;
            let nextMeanY = 0;
            for (let i = 0; i < N; i++) {
                nextMeanX += gamma[i][k] * points[i].x;
                nextMeanY += gamma[i][k] * points[i].y;
            }
            nextMeanX /= N_k[k];
            nextMeanY /= N_k[k];
            
            meanShiftSum += getDistance(comp.mean, { x: nextMeanX, y: nextMeanY });
            comp.mean.x = nextMeanX;
            comp.mean.y = nextMeanY;
            
            // New Covariance matrix
            let nextCovXX = 0;
            let nextCovYY = 0;
            let nextCovXY = 0;
            for (let i = 0; i < N; i++) {
                const dx = points[i].x - comp.mean.x;
                const dy = points[i].y - comp.mean.y;
                nextCovXX += gamma[i][k] * dx * dx;
                nextCovYY += gamma[i][k] * dy * dy;
                nextCovXY += gamma[i][k] * dx * dy;
            }
            // Regularization to avoid singularity
            comp.cov.xx = (nextCovXX / N_k[k]) + 4.0;
            comp.cov.yy = (nextCovYY / N_k[k]) + 4.0;
            comp.cov.xy = nextCovXY / N_k[k];
            comp.weight = nextWeight;
        }
    }
    
    // GMM Convergence check
    if (meanShiftSum < 0.1) {
        algorithmState.isConverged = true;
        stopAutoRun();
    }
}

// Kernel K-Means Step Solver (RBF Spectral Clustering approximation)
function stepKernelKMeans() {
    const K = parseInt(document.getElementById('cluster-k').value);
    const N = points.length;
    const gamma = parseFloat(document.getElementById('kernel-gamma').value);
    
    // Compute RBF similarity matrix K_ij = exp(-gamma * ||x_i - x_j||^2)
    const K_matrix = Array.from({ length: N }, () => Array(N).fill(0));
    for (let i = 0; i < N; i++) {
        for (let j = i; j < N; j++) {
            const sim = Math.exp(-gamma * (getDistance(points[i], points[j]) ** 2));
            K_matrix[i][j] = sim;
            K_matrix[j][i] = sim;
        }
    }
    
    // Cluster assignments
    let changed = false;
    const newLabels = Array(N).fill(0);
    
    // Precompute terms for formula:
    // d(x_i, c_k)^2 = K_ii - (2/N_k)*sum_j(K_ij) + (1/N_k^2)*sum_j,l(K_jl)
    const N_k = Array(K).fill(0);
    points.forEach(p => N_k[p.label]++);
    
    const sum_K_j = Array.from({ length: K }, () => Array(N).fill(0)); // sum_j K(x_i, x_j) for j in C_k
    const sum_K_jl = Array(K).fill(0); // sum_j,l K(x_j, x_l) for j,l in C_k
    
    for (let k = 0; k < K; k++) {
        if (N_k[k] === 0) continue;
        
        let clusterSum = 0;
        for (let j = 0; j < N; j++) {
            if (points[j].label !== k) continue;
            for (let l = 0; l < N; l++) {
                if (points[l].label !== k) continue;
                clusterSum += K_matrix[j][l];
            }
        }
        sum_K_jl[k] = clusterSum;
    }
    
    for (let i = 0; i < N; i++) {
        let minKernelDist = Infinity;
        let bestCluster = points[i].label;
        
        for (let k = 0; k < K; k++) {
            if (N_k[k] === 0) continue;
            
            let sum_ij = 0;
            for (let j = 0; j < N; j++) {
                if (points[j].label === k) {
                    sum_ij += K_matrix[i][j];
                }
            }
            
            // Distance square in Hilbert feature space
            const distSq = 1.0 - (2.0 / N_k[k]) * sum_ij + (1.0 / (N_k[k] ** 2)) * sum_K_jl[k];
            
            if (distSq < minKernelDist) {
                minKernelDist = distSq;
                bestCluster = k;
            }
        }
        newLabels[i] = bestCluster;
        if (newLabels[i] !== points[i].label) {
            changed = true;
        }
    }
    
    // Apply updates
    for (let i = 0; i < N; i++) {
        points[i].label = newLabels[i];
    }
    
    // Loss calculation: average squared Hilbert distance to cluster centroids
    let totalLoss = 0;
    for (let i = 0; i < N; i++) {
        const k = points[i].label;
        let sum_ij = 0;
        for (let j = 0; j < N; j++) {
            if (points[j].label === k) {
                sum_ij += K_matrix[i][j];
            }
        }
        const distSq = 1.0 - (2.0 / N_k[k]) * sum_ij + (1.0 / (N_k[k] ** 2)) * sum_K_jl[k];
        totalLoss += distSq;
    }
    algorithmState.cost = totalLoss.toFixed(1);
    
    if (!changed) {
        algorithmState.isConverged = true;
        stopAutoRun();
    }
}

// Auto convergence runner
function toggleAutoRun() {
    if (points.length === 0) return;
    
    if (algorithmState.isRunning) {
        stopAutoRun();
    } else {
        algorithmState.isRunning = true;
        document.getElementById('btn-play-icon').className = 'fa-solid fa-pause';
        document.getElementById('btn-play-text').textContent = '暫停';
        autoRunLoop();
    }
}

function stopAutoRun() {
    algorithmState.isRunning = false;
    document.getElementById('btn-play-icon').className = 'fa-solid fa-play';
    document.getElementById('btn-play-text').textContent = '自動收斂';
    if (algorithmState.timerId) {
        clearTimeout(algorithmState.timerId);
        algorithmState.timerId = null;
    }
    updateUIElements();
}

function autoRunLoop() {
    if (!algorithmState.isRunning) return;
    
    triggerStep();
    
    if (!algorithmState.isConverged) {
        // Set dynamic timeout for smooth frames
        algorithmState.timerId = setTimeout(autoRunLoop, 250);
    } else {
        stopAutoRun();
    }
}

// UI State renderer
function updateUIElements() {
    // Render Canvas
    drawCanvas();
    
    // Update Stats Board
    document.getElementById('data-counter').textContent = `${points.length} 筆數據點`;
    document.getElementById('info-iteration').textContent = algorithmState.iteration;
    document.getElementById('info-cost').textContent = algorithmState.cost ? algorithmState.cost : '--';
    
    const statusTag = document.getElementById('info-status');
    if (algorithmState.isConverged) {
        statusTag.textContent = '已收斂';
        statusTag.className = 'badge badge-accent';
    } else if (algorithmState.iteration > 0) {
        statusTag.textContent = '迭代中...';
        statusTag.className = 'badge';
    } else {
        statusTag.textContent = '未開始';
        statusTag.className = 'badge';
    }
    
    // Render Legend
    renderLegend();
}

function renderLegend() {
    const legendContainer = document.getElementById('clustering-legend');
    legendContainer.innerHTML = '';
    
    const K = (algorithmState.name === 'dbscan') ? algorithmState.dbscanClustersCount : parseInt(document.getElementById('cluster-k').value);
    
    for (let k = 0; k < K; k++) {
        const color = CLUSTER_COLORS[k % CLUSTER_COLORS.length].hex;
        const item = document.createElement('span');
        item.className = 'legend-item';
        
        const colorDot = document.createElement('span');
        colorDot.className = 'legend-color';
        colorDot.style.backgroundColor = color;
        
        item.appendChild(colorDot);
        
        const labelText = document.createElement('span');
        labelText.textContent = `群集 (Cluster ${k+1})`;
        item.appendChild(labelText);
        
        legendContainer.appendChild(item);
    }
    
    if (algorithmState.name === 'dbscan') {
        const item = document.createElement('span');
        item.className = 'legend-item';
        
        const colorDot = document.createElement('span');
        colorDot.className = 'legend-color';
        colorDot.style.backgroundColor = NOISE_COLOR;
        
        item.appendChild(colorDot);
        
        const labelText = document.createElement('span');
        labelText.textContent = `孤立噪聲 (Noise)`;
        item.appendChild(labelText);
        
        legendContainer.appendChild(item);
    }
}

// Drawing shapes on Canvas
function drawCanvas() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    const algo = algorithmState.name;
    const K = (algo === 'dbscan') ? algorithmState.dbscanClustersCount : parseInt(document.getElementById('cluster-k').value);
    
    // Draw GMM Covariance Ellipses
    if (algo === 'gmm' && algorithmState.gmmComponents.length > 0) {
        for (let k = 0; k < K; k++) {
            const comp = algorithmState.gmmComponents[k];
            const color = CLUSTER_COLORS[k % CLUSTER_COLORS.length].hex;
            drawGMMEllipse(comp.mean, comp.cov, color);
        }
    }
    
    // Draw K-Means Centroids
    if (algo === 'kmeans' && algorithmState.centroids.length > 0) {
        for (let k = 0; k < K; k++) {
            const cent = algorithmState.centroids[k];
            const color = CLUSTER_COLORS[k % CLUSTER_COLORS.length].hex;
            drawCentroidCross(cent.x, cent.y, color);
        }
    }
    
    // Draw K-Medoids Medoids
    if (algo === 'kmedoids' && algorithmState.medoids.length > 0) {
        for (let k = 0; k < K; k++) {
            const medIdx = algorithmState.medoids[k];
            if (medIdx < points.length) {
                const med = points[medIdx];
                const color = CLUSTER_COLORS[k % CLUSTER_COLORS.length].hex;
                drawCentroidCross(med.x, med.y, color);
            }
        }
    }
    
    // Draw Points
    points.forEach((p, idx) => {
        let fillStyle = NOISE_COLOR;
        
        if (algo === 'gmm' && p.responsibilities) {
            // Soft coloring: mix colors based on GMM responsibilities
            let r = 0, g = 0, b = 0;
            for (let k = 0; k < K; k++) {
                const weight = p.responsibilities[k];
                const col = CLUSTER_COLORS[k % CLUSTER_COLORS.length].rgb;
                r += weight * col[0];
                g += weight * col[1];
                b += weight * col[2];
            }
            fillStyle = `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
        } else if (p.label !== -1) {
            // Hard coloring
            fillStyle = CLUSTER_COLORS[p.label % CLUSTER_COLORS.length].hex;
        }
        
        ctx.beginPath();
        // Core points in DBSCAN get double radius border ring
        if (algo === 'dbscan' && p.isCore) {
            ctx.arc(p.x, p.y, 7, 0, 2 * Math.PI);
            ctx.strokeStyle = fillStyle;
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.beginPath();
        }
        
        ctx.arc(p.x, p.y, 4.5, 0, 2 * Math.PI);
        ctx.fillStyle = fillStyle;
        ctx.fill();
    });
}

function drawCentroidCross(x, y, color) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 2.5;
    
    // Cross
    ctx.beginPath();
    ctx.moveTo(x - 12, y);
    ctx.lineTo(x + 12, y);
    ctx.moveTo(x, y - 12);
    ctx.lineTo(x, y + 12);
    ctx.stroke();
    
    // Target outer dashed circle
    ctx.beginPath();
    ctx.arc(x, y, 7.5, 0, 2 * Math.PI);
    ctx.strokeStyle = color;
    ctx.setLineDash([2, 2]);
    ctx.stroke();
    ctx.setLineDash([]); // Reset
}

function drawGMMEllipse(mean, cov, color) {
    // Math to compute covariance ellipse rotation and axis lengths
    const tr = cov.xx + cov.yy;
    const det = cov.xx * cov.yy - cov.xy * cov.xy;
    
    const discriminant = Math.sqrt((tr / 2) ** 2 - det);
    const l1 = tr / 2 + discriminant;
    const l2 = Math.max(0, tr / 2 - discriminant); // Max with 0 to prevent imaginary sqrt
    
    const theta = 0.5 * Math.atan2(2 * cov.xy, cov.xx - cov.yy);
    
    // 1-sigma, 2-sigma ellipses
    const scales = [1.5, 2.5];
    scales.forEach(s => {
        const a = s * Math.sqrt(l1);
        const b = s * Math.sqrt(l2);
        
        ctx.beginPath();
        ctx.ellipse(mean.x, mean.y, a, b, theta, 0, 2 * Math.PI);
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.0;
        ctx.globalAlpha = s === 1.5 ? 0.35 : 0.15;
        ctx.stroke();
        ctx.globalAlpha = 1.0;
    });
}
