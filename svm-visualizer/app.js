// SVM 3D Interactive Visualizer - Main JavaScript Application

// Global variables for Three.js
let scene, camera, renderer, controls;
let pointsGroup;
let hyperplaneMesh, marginLowMesh, hyperplaneHighMesh, marginDarrow;
let rbfMesh, projectionRing;
let pointLights = [];

// Visualizer State
const state = {
    numPoints: 200,
    noise: 0.05,
    factor: 0.4,
    liftProgress: 0,        // 0 = 2D space, 1 = fully lifted in 3D
    isProjected: false,     // true = projected back to 2D with boundary ring
    points: [],             // Data structures
    sphereMeshes: [],       // Three.js meshes
    supportBlueIdxs: [],    // Indices of support vectors
    supportRedIdxs: []
};

// Math constant multipliers
const Z_SCALE = 0.4;        // Scale Z axis to fit viewport beautifully
const HYPERPLANE_Z = 3.6;   // Separation height (Z = x^2 + y^2 ~ 3.6)

// DOM Elements
const elements = {
    canvasContainer: document.getElementById('canvas3d'),
    numPointsInput: document.getElementById('num-points'),
    numPointsVal: document.getElementById('num-points-val'),
    noiseLevelInput: document.getElementById('noise-level'),
    noiseLevelVal: document.getElementById('noise-level-val'),
    regenBtn: document.getElementById('regen-btn'),
    step2dBtn: document.getElementById('step-2d-btn'),
    stepLiftBtn: document.getElementById('step-lift-btn'),
    stepProjectBtn: document.getElementById('step-project-btn'),
    hyperplaneToggle: document.getElementById('hyperplane-toggle'),
    svToggle: document.getElementById('sv-toggle'),
    marginToggle: document.getElementById('margin-toggle'),
    rbfToggle: document.getElementById('rbf-toggle'),
    infoContent: document.getElementById('info-content')
};

// Step Explanations Text Templates (Traditional Chinese)
const explanations = {
    1: `
        <h3>Step 1: 原始 2D 空間</h3>
        <p>在此空間中，資料呈現同心圓分佈：</p>
        <ul>
            <li><b style="color: #3b82f6;">藍色樣本</b> 位於內部核心圓區。</li>
            <li><b style="color: #ef4444;">紅色樣本</b> 形成外部包圍環。</li>
        </ul>
        <p>由於這兩組類別無法被任何一條直線完全切開，因此稱作<b>線性不可分 (Linearly Non-separable)</b>。</p>
        <p class="highlight">線性 SVM 在此空間中會遭遇失敗，必須進行非線性變革！</p>
    `,
    2: `
        <h3>Step 2: 3D 非線性投影</h3>
        <p>我們對每個樣本 (x, y) 施加一個非線性映射函數：</p>
        <div class="formula-box">z = x² + y²</div>
        <p>這代表：</p>
        <ul>
            <li>靠近原點的藍色樣本因為 x, y 很小，所以其升維高度 z 非常低。</li>
            <li>遠離原點的紅色樣本因為半徑較大，所以升維高度 z 非常高。</li>
        </ul>
        <p>三維抛物面空間就此誕生，原本擠在一起的群落沿著 Z 軸被拉開了！</p>
    `,
    3: `
        <h3>Step 3: 決策超平面與支持向量</h3>
        <p>在 3D 空間中，藍紅兩色已經完全拉開，此時可以使用一個平坦的<b>線性決策超平面 (Linear Hyperplane)</b> 進行劃分：</p>
        <div class="formula-box">w₁x + w₂y + w₃z + b = 0</div>
        <ul>
            <li><b>綠色平面</b>：即為分類界線，z 軸高度約在 3.6。</li>
            <li><b>支持向量</b>：黃色點即為最靠近分類平面的關鍵邊界點。</li>
            <li><b>Margin (間隔)</b>：SVM 的優化目標是拉大平行邊界面，求得<b>最大分類間隔</b>以獲取最強的泛化能力。</li>
        </ul>
    `,
    4: `
        <h3>Step 4: 投影回 2D 空間</h3>
        <p>如果我們把 3D 超平面的截面投影回原本的 2D 空間...</p>
        <div class="formula-box">截面公式: x² + y² = 3.6</div>
        <p>這在 2D xy 平面上代表一個<b>圓形邊界</b>（綠色環）！</p>
        <p class="highlight">💡 結論：這就是 <b>Kernel Trick</b> 的魔力。我們不需在 2D 計算複雜的曲線，而是透過核函數在高維尋找線性平面，投影回來即成為完美的非線性分類決策邊界！</p>
    `
};

// -------------------------------------------------------------
// Initialize App
// -------------------------------------------------------------
function init() {
    setupThreeJS();
    generateData();
    createSceneObjects();
    setupEvents();
    animateLoop();
    
    // Set initial text
    elements.infoContent.innerHTML = explanations[1];
}

// -------------------------------------------------------------
// Setup Three.js Engine
// -------------------------------------------------------------
function setupThreeJS() {
    const width = elements.canvasContainer.clientWidth;
    const height = elements.canvasContainer.clientHeight;

    // Scene
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xf8fafc, 0.015);

    // Camera
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 10); // Start top-down

    // Renderer (Alpha true to overlay on CSS background)
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    elements.canvasContainer.appendChild(renderer.domElement);

    // Controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 + 0.1; // Don't look below ground
    controls.minDistance = 3;
    controls.maxDistance = 20;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight1.position.set(5, 10, 7);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x3b82f6, 0.5); // Blue highlight fill light
    dirLight2.position.set(-5, -5, 5);
    scene.add(dirLight2);

    // Grid helper (infinite looking)
    const gridHelper = new THREE.GridHelper(20, 20, 0x94a3b8, 0xe2e8f0);
    gridHelper.position.y = -0.01;
    scene.add(gridHelper);

    // Group for points
    pointsGroup = new THREE.Group();
    scene.add(pointsGroup);

    // Listen to resize
    window.addEventListener('resize', onWindowResize);
}

// -------------------------------------------------------------
// Data Point Generation
// -------------------------------------------------------------
function generateData() {
    const n = state.numPoints;
    const noise = state.noise;
    const factor = state.factor;

    state.points = [];
    state.supportBlueIdxs = [];
    state.supportRedIdxs = [];

    // Inner circle (BLUE label 1)
    const nInner = Math.floor(n / 2);
    const innerPoints = [];
    for (let i = 0; i < nInner; i++) {
        const r = factor * 2.5 + (Math.random() - 0.5) * noise * 6;
        const theta = Math.random() * Math.PI * 2;
        const x = r * Math.cos(theta);
        const y = r * Math.sin(theta);
        const norm = x*x + y*y;
        innerPoints.push({ x, y, norm, label: 1, color: 0x3b82f6 });
    }

    // Outer circle (RED label 0)
    const nOuter = n - nInner;
    const outerPoints = [];
    for (let i = 0; i < nOuter; i++) {
        const r = 2.5 + (Math.random() - 0.5) * noise * 6;
        const theta = Math.random() * Math.PI * 2;
        const x = r * Math.cos(theta);
        const y = r * Math.sin(theta);
        const norm = x*x + y*y;
        outerPoints.push({ x, y, norm, label: 0, color: 0xef4444 });
    }

    state.points = [...innerPoints, ...outerPoints];

    // Find Support Vectors (closest to separator HYPERPLANE_Z)
    // Blue innermost red-side (largest norm blue points)
    const sortedBlueIdxs = innerPoints
        .map((p, idx) => ({ idx, norm: p.norm }))
        .sort((a, b) => b.norm - a.norm);
    state.supportBlueIdxs = sortedBlueIdxs.slice(0, 4).map(o => o.idx);

    // Red innermost blue-side (smallest norm red points)
    const sortedRedIdxs = outerPoints
        .map((p, idx) => ({ idx: idx + nInner, norm: p.norm }))
        .sort((a, b) => a.norm - b.norm);
    state.supportRedIdxs = sortedRedIdxs.slice(0, 4).map(o => o.idx);
}

// -------------------------------------------------------------
// Create Scene Meshes
// -------------------------------------------------------------
function createSceneObjects() {
    // 1. Clear old points
    while (pointsGroup.children.length > 0) {
        const obj = pointsGroup.children[0];
        obj.geometry.dispose();
        obj.material.dispose();
        pointsGroup.remove(obj);
    }
    state.sphereMeshes = [];

    // Create dot meshes
    // Standard circular billboard sprite/disk behaves faster and cleaner than SphereGeometry
    const sphereGeo = new THREE.SphereGeometry(0.07, 8, 8);
    
    state.points.forEach((p, idx) => {
        const mat = new THREE.MeshStandardMaterial({
            color: p.color,
            roughness: 0.2,
            metalness: 0.1,
            emissive: p.color,
            emissiveIntensity: 0.15
        });
        const mesh = new THREE.Mesh(sphereGeo, mat);
        
        // Save metadata on object
        mesh.userData = {
            origX: p.x,
            origY: p.y,
            label: p.label,
            color: p.color,
            isSupportVector: state.supportBlueIdxs.includes(idx) || state.supportRedIdxs.includes(idx)
        };
        
        // Initial 2D placement
        mesh.position.set(p.x, 0, p.y);
        pointsGroup.add(mesh);
        state.sphereMeshes.push(mesh);
    });

    // 2. Create Hyperplane Plane (Semi-transparent disk at separation boundary)
    const planeGeo = new THREE.RingGeometry(0, 3.2, 32);
    const planeMat = new THREE.MeshStandardMaterial({
        color: 0x10b981,
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
        roughness: 0.4,
        metalness: 0.1
    });
    hyperplaneMesh = new THREE.Mesh(planeGeo, planeMat);
    hyperplaneMesh.rotation.x = -Math.PI / 2; // Flat parallel to grid
    hyperplaneMesh.position.y = HYPERPLANE_Z * Z_SCALE;
    scene.add(hyperplaneMesh);

    // 3. Create Margin Boundaries (Low & High planes)
    // Inner boundary (around Z=1.0)
    const marginLowGeo = new THREE.RingGeometry(0, 1.4, 32);
    const marginLowMat = new THREE.MeshStandardMaterial({
        color: 0x3b82f6,
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide
    });
    marginLowMesh = new THREE.Mesh(marginLowGeo, marginLowMat);
    marginLowMesh.rotation.x = -Math.PI / 2;
    marginLowMesh.position.y = 1.0 * Z_SCALE;
    scene.add(marginLowMesh);

    // Outer boundary (around Z=6.2)
    const marginHighGeo = new THREE.RingGeometry(2.3, 3.2, 32);
    const marginHighMat = new THREE.MeshStandardMaterial({
        color: 0xef4444,
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide
    });
    marginHighMesh = new THREE.Mesh(marginHighGeo, marginHighMat);
    marginHighMesh.rotation.x = -Math.PI / 2;
    marginHighMesh.position.y = 6.2 * Z_SCALE;
    scene.add(marginHighMesh);

    // Margin Arrow cylinders (to visualize gap distance)
    const darrowGeo = new THREE.CylinderGeometry(0.03, 0.03, 5.2 * Z_SCALE, 8);
    const darrowMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b, transparent: true, opacity: 0 });
    marginDarrow = new THREE.Mesh(darrowGeo, darrowMat);
    marginDarrow.position.set(0, 3.6 * Z_SCALE, 0); // centered between margins
    scene.add(marginDarrow);

    // 4. Create RBF Kernel Gaussian surface: Z = 4.0 * exp(-(x^2 + y^2)/2)
    const rbfGeo = new THREE.PlaneGeometry(6, 6, 24, 24);
    const pos = rbfGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const y = pos.getY(i);
        const z = 4.0 * Math.exp(-(x*x + y*y) / 2.0); // Bell shape
        pos.setZ(i, z * Z_SCALE);
    }
    rbfGeo.computeVertexNormals();
    const rbfMat = new THREE.MeshStandardMaterial({
        color: 0x3b82f6,
        wireframe: true,
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide
    });
    rbfMesh = new THREE.Mesh(rbfGeo, rbfMat);
    rbfMesh.rotation.x = -Math.PI / 2;
    scene.add(rbfMesh);

    // 5. Create 2D Decision Boundary Ring (Green circular line on Z = 0)
    const ringGeo = new THREE.RingGeometry(1.88, 1.92, 64);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0, side: THREE.DoubleSide });
    projectionRing = new THREE.Mesh(ringGeo, ringMat);
    projectionRing.rotation.x = -Math.PI / 2;
    projectionRing.position.y = 0.02; // Slightly offset to prevent z-fighting with grid
    scene.add(projectionRing);
}

// -------------------------------------------------------------
// Animation & State Transitions (GSAP)
// -------------------------------------------------------------
function updatePointPositions() {
    state.sphereMeshes.forEach(mesh => {
        const meta = mesh.userData;
        const radiusSq = meta.origX * meta.origX + meta.origY * meta.origY;
        
        // Z height dynamically scales with liftProgress
        const targetZ = radiusSq * Z_SCALE;
        const currentZ = state.liftProgress * targetZ;
        
        // Map Three.js Y coordinate to Z (since three grid uses Y as vertical)
        mesh.position.set(meta.origX, currentZ, meta.origY);
    });
}

function transitionTo2D() {
    state.isProjected = false;
    
    // Close toggles
    elements.hyperplaneToggle.checked = false;
    elements.svToggle.checked = false;
    elements.marginToggle.checked = false;
    elements.rbfToggle.checked = false;
    
    // Reset camera target
    controls.target.set(0, 0, 0);

    // Animate camera to top-down view
    gsap.to(camera.position, { x: 0, y: 10, z: 0.01, duration: 1.5, ease: "power2.inOut" });
    
    // Collapse Z lifting
    gsap.to(state, {
        liftProgress: 0,
        duration: 1.5,
        ease: "power2.inOut",
        onUpdate: updatePointPositions
    });

    // Fade out elements
    fadeMesh(hyperplaneMesh, 0);
    fadeMesh(marginLowMesh, 0);
    fadeMesh(marginHighMesh, 0);
    fadeMesh(marginDarrow, 0);
    fadeMesh(rbfMesh, 0);
    fadeMesh(projectionRing, 0);
    
    // Scale support vector dots back to 1
    state.sphereMeshes.forEach(mesh => {
        gsap.to(mesh.scale, { x: 1, y: 1, z: 1, duration: 0.5 });
        mesh.material.color.setHex(mesh.userData.color);
    });

    elements.infoContent.innerHTML = explanations[1];
}

function transitionTo3D() {
    state.isProjected = false;
    
    // Fade out 2D projection boundary
    fadeMesh(projectionRing, 0);

    // Animate camera to 3D perspective orientation
    gsap.to(camera.position, { x: 5, y: 6, z: 8, duration: 2.0, ease: "power2.inOut" });
    controls.target.set(0, 1.5, 0);

    // Animate Z lifting
    gsap.to(state, {
        liftProgress: 1,
        duration: 2.0,
        ease: "elastic.out(1, 0.75)",
        onUpdate: updatePointPositions
    });

    elements.infoContent.innerHTML = explanations[2];
}

function projectTo2D() {
    state.isProjected = true;
    
    // Close 3D overlays
    elements.hyperplaneToggle.checked = false;
    elements.svToggle.checked = false;
    elements.marginToggle.checked = false;
    elements.rbfToggle.checked = false;
    
    fadeMesh(hyperplaneMesh, 0);
    fadeMesh(marginLowMesh, 0);
    fadeMesh(marginHighMesh, 0);
    fadeMesh(marginDarrow, 0);
    fadeMesh(rbfMesh, 0);
    
    // Animate camera back to top-down view
    gsap.to(camera.position, { x: 0, y: 10, z: 0.01, duration: 2.0, ease: "power2.inOut" });
    controls.target.set(0, 0, 0);

    // Collapse Z lifting back to 0
    gsap.to(state, {
        liftProgress: 0,
        duration: 2.0,
        ease: "power2.inOut",
        onUpdate: updatePointPositions
    });

    // Fade in projection ring
    fadeMesh(projectionRing, 0.8, 2.0);

    elements.infoContent.innerHTML = explanations[4];
}

function fadeMesh(mesh, targetOpacity, duration = 0.5) {
    gsap.to(mesh.material, { opacity: targetOpacity, duration: duration });
}

// -------------------------------------------------------------
// Interactive Events
// -------------------------------------------------------------
function setupEvents() {
    // Regenerate data
    elements.regenBtn.addEventListener('click', () => {
        // Reset steps to 2D
        elements.step2dBtn.classList.add('active');
        elements.stepLiftBtn.classList.remove('active');
        elements.stepProjectBtn.classList.remove('active');
        
        generateData();
        createSceneObjects();
        transitionTo2D();
    });

    // Step Triggers
    elements.step2dBtn.addEventListener('click', () => {
        setActiveStepButton(elements.step2dBtn);
        transitionTo2D();
    });

    elements.stepLiftBtn.addEventListener('click', () => {
        setActiveStepButton(elements.stepLiftBtn);
        transitionTo3D();
    });

    elements.stepProjectBtn.addEventListener('click', () => {
        setActiveStepButton(elements.stepProjectBtn);
        projectTo2D();
    });

    // Checkbox Toggles
    elements.hyperplaneToggle.addEventListener('change', (e) => {
        if (!state.isProjected && state.liftProgress > 0.1) {
            fadeMesh(hyperplaneMesh, e.target.checked ? 0.4 : 0);
            updateMathExplanations(3);
        } else {
            e.target.checked = false; // block if not lifted
        }
    });

    elements.svToggle.addEventListener('change', (e) => {
        if (!state.isProjected && state.liftProgress > 0.1) {
            state.sphereMeshes.forEach(mesh => {
                if (mesh.userData.isSupportVector) {
                    if (e.target.checked) {
                        gsap.to(mesh.scale, { x: 2, y: 2, z: 2, duration: 0.5, ease: "back.out" });
                        mesh.material.color.setHex(0xf59e0b); // Gold
                    } else {
                        gsap.to(mesh.scale, { x: 1, y: 1, z: 1, duration: 0.5 });
                        mesh.material.color.setHex(mesh.userData.color); // original
                    }
                }
            });
            updateMathExplanations(3);
        } else {
            e.target.checked = false;
        }
    });

    elements.marginToggle.addEventListener('change', (e) => {
        if (!state.isProjected && state.liftProgress > 0.1) {
            const opacity = e.target.checked ? 0.35 : 0;
            fadeMesh(marginLowMesh, opacity);
            fadeMesh(marginHighMesh, opacity);
            fadeMesh(marginDarrow, e.target.checked ? 0.8 : 0);
            updateMathExplanations(3);
        } else {
            e.target.checked = false;
        }
    });

    elements.rbfToggle.addEventListener('change', (e) => {
        if (!state.isProjected && state.liftProgress > 0.1) {
            fadeMesh(rbfMesh, e.target.checked ? 0.6 : 0);
        } else {
            e.target.checked = false;
        }
    });

    // Sliders
    elements.numPointsInput.addEventListener('input', (e) => {
        state.numPoints = parseInt(e.target.value);
        elements.numPointsVal.textContent = state.numPoints;
    });

    elements.noiseLevelInput.addEventListener('input', (e) => {
        state.noise = parseFloat(e.target.value);
        elements.noiseLevelVal.textContent = state.noise.toFixed(2);
    });
}

function setActiveStepButton(activeBtn) {
    [elements.step2dBtn, elements.stepLiftBtn, elements.stepProjectBtn].forEach(btn => {
        btn.classList.remove('active');
    });
    activeBtn.classList.add('active');
}

function updateMathExplanations(stepId) {
    elements.infoContent.innerHTML = explanations[stepId];
}

// -------------------------------------------------------------
// Engine Loop & Render
// -------------------------------------------------------------
function animateLoop() {
    requestAnimationFrame(animateLoop);
    
    // Auto slow rotate points in 2D view for dynamic elegance
    if (state.liftProgress < 0.05 && !state.isProjected) {
        pointsGroup.rotation.y += 0.002;
    } else {
        pointsGroup.rotation.y = 0; // lock rotation in 3D
    }
    
    controls.update();
    renderer.render(scene, camera);
}

function onWindowResize() {
    const width = elements.canvasContainer.clientWidth;
    const height = elements.canvasContainer.clientHeight;
    
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}

// Launch App
window.addEventListener('DOMContentLoaded', init);
