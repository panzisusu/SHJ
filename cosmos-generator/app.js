// Cosmos Gravity Simulator - Core Physics & Animation Engine

let canvas;
let ctx;
let particles = [];
let gravitySources = [];
let isPlaying = true;
let animationFrameId = null;

// Physics Parameters
let G = 1.2;
let coreMass = 15000;
let maxParticles = 600;
let trailFade = 0.95; // Fading coefficient (0.05 clear alpha)
let activePalette = 'supernova';

// Mouse Interaction state
let isMouseDown = false;
let mouseX = 0;
let mouseY = 0;
let lastMouseX = 0;
let lastMouseY = 0;

// FPS Counter state
let lastTime = performance.now();
let frameCount = 0;
let fps = 60;

// Color palettes configurations (base colors for particle interpolation)
const PALETTES = {
    supernova: {
        bg: '#03030a',
        starColors: ['#ec4899', '#f59e0b', '#38bdf8', '#ffffff'], // Pink, Gold, Light Blue, White
        sourceGlow: ['rgba(236, 72, 153, 0.4)', 'rgba(245, 158, 11, 0.2)', 'rgba(255, 255, 255, 0)']
    },
    deepspace: {
        bg: '#020208',
        starColors: ['#06b6d4', '#8b5cf6', '#3b82f6', '#10b981'], // Cyan, Purple, Royal Blue, Emerald
        sourceGlow: ['rgba(6, 182, 212, 0.4)', 'rgba(139, 92, 246, 0.2)', 'rgba(255, 255, 255, 0)']
    },
    solar: {
        bg: '#040202',
        starColors: ['#ef4444', '#f97316', '#eab308', '#ffffff'], // Red, Orange, Gold, White
        sourceGlow: ['rgba(239, 68, 68, 0.4)', 'rgba(249, 115, 22, 0.2)', 'rgba(255, 255, 255, 0)']
    },
    frost: {
        bg: '#010308',
        starColors: ['#a5f3fc', '#38bdf8', '#6366f1', '#ffffff'], // Aurora Ice, Sky Blue, Indigo, White
        sourceGlow: ['rgba(165, 243, 252, 0.4)', 'rgba(56, 189, 248, 0.2)', 'rgba(255, 255, 255, 0)']
    }
};

// -------------------------------------------------------------
// Core Celestial Classes
// -------------------------------------------------------------

class GravitySource {
    constructor(x, y, mass, isCentral = false) {
        this.x = x;
        this.y = y;
        this.mass = mass;
        this.isCentral = isCentral;
        this.pulse = 0;
    }

    update() {
        this.pulse += 0.05;
    }

    draw(ctx) {
        ctx.save();
        
        // Accumulate pulsing glow
        const glowRadius = this.isCentral 
            ? 35 + Math.sin(this.pulse) * 5 
            : 15 + Math.sin(this.pulse) * 2;
        
        const paletteConfig = PALETTES[activePalette];
        
        // Gradient glow
        const grad = ctx.createRadialGradient(this.x, this.y, 1, this.x, this.y, glowRadius);
        grad.addColorStop(0, '#ffffff');
        grad.addColorStop(0.2, paletteConfig.starColors[0]);
        grad.addColorStop(0.5, paletteConfig.sourceGlow[0]);
        grad.addColorStop(0.8, paletteConfig.sourceGlow[1]);
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(this.x, this.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Draw black core singularity
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.isCentral ? 8 : 4, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
    }
}

class Particle {
    constructor(x, y, vx, vy, size = null) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        
        // Random size unless specified
        this.size = size || Math.random() * 2 + 1;
        
        // Assign random color from current palette config
        const colors = PALETTES[activePalette].starColors;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        
        this.history = [];
        this.speedLimit = 22;
        this.alpha = 1.0;
    }

    update(sources) {
        // Accelerate based on all active gravity sources
        sources.forEach(source => {
            const dx = source.x - this.x;
            const dy = source.y - this.y;
            const distSq = dx * dx + dy * dy;
            const dist = Math.sqrt(distSq);

            if (dist < 10) {
                // If it hits/gets extremely close to gravity core, slingshot or reset it
                // We reset it with high speed tangent orbit to avoid getting locked at infinity speed
                const tangentX = -dy / dist;
                const tangentY = dx / dist;
                const orbitalSpeed = Math.sqrt((G * source.mass) / 10);
                
                this.vx = tangentX * orbitalSpeed * (Math.random() * 0.5 + 0.8);
                this.vy = tangentY * orbitalSpeed * (Math.random() * 0.5 + 0.8);
                
                // Nudge out of collision radius
                this.x += this.vx * 1.5;
                this.y += this.vy * 1.5;
                return;
            }

            // Gravity formula with softening term (150) to avoid infinite division anomalies
            const force = (G * source.mass) / (distSq + 150);
            
            // Acceleration vectors
            const ax = (force * dx) / dist;
            const ay = (force * dy) / dist;

            this.vx += ax;
            this.vy += ay;
        });

        // Apply slight orbital friction (keeps orbit configurations aesthetic)
        this.vx *= 0.9995;
        this.vy *= 0.9995;

        // Speed clamping
        const currentSpeed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (currentSpeed > this.speedLimit) {
            this.vx = (this.vx / currentSpeed) * this.speedLimit;
            this.vy = (this.vy / currentSpeed) * this.speedLimit;
        }

        // Apply movement
        this.x += this.vx;
        this.y += this.vy;
    }

    draw(ctx) {
        // Calculate kinetic heat index to blend color to white on high speed
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        const speedRatio = Math.min(1, speed / this.speedLimit);
        
        ctx.fillStyle = this.color;
        
        // If star runs extremely fast, draw glowing white core
        if (speedRatio > 0.8) {
            ctx.fillStyle = '#ffffff';
        }

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// -------------------------------------------------------------
// App Initialization
// -------------------------------------------------------------

function init() {
    canvas = document.getElementById("cosmos-canvas");
    if (!canvas) return;
    ctx = canvas.getContext("2d");

    window.addEventListener("resize", handleResize);
    handleResize();

    setupInputListeners();
    connectSliders();
    
    // Load initial spiral galaxy preset
    loadPreset('spiral');
    
    // Start simulation loop
    loop();
}

function handleResize() {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    
    // Scales drawing coordinate system to match display pixels
    ctx.scale(dpr, dpr);
    
    // Relocate central gravity core
    const centerSource = gravitySources.find(s => s.isCentral);
    if (centerSource) {
        centerSource.x = rect.width / 2;
        centerSource.y = rect.height / 2;
    } else {
        gravitySources.push(new GravitySource(rect.width / 2, rect.height / 2, coreMass, true));
    }
}

// -------------------------------------------------------------
// Input & Sliders Setup
// -------------------------------------------------------------

function setupInputListeners() {
    // Mouse drawing stars orbit stream
    canvas.addEventListener('mousedown', (e) => {
        const rect = canvas.getBoundingClientRect();
        const mX = e.clientX - rect.left;
        const mY = e.clientY - rect.top;

        if (e.shiftKey) {
            // Shift + click: Create a new custom gravity center/black hole
            gravitySources.push(new GravitySource(mX, mY, coreMass * 0.6, false));
            updateHUD();
            showFloatingToast("已建立新的重力奇點！", "success");
        } else {
            isMouseDown = true;
            mouseX = mX;
            mouseY = mY;
            lastMouseX = mX;
            lastMouseY = mY;
            spawnStarAtCursor();
        }
    });

    canvas.addEventListener('mousemove', (e) => {
        if (!isMouseDown) return;
        const rect = canvas.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
        spawnStarAtCursor();
    });

    window.addEventListener('mouseup', () => {
        isMouseDown = false;
    });

    // Touch support for mobiles
    canvas.addEventListener('touchstart', (e) => {
        if (e.touches.length === 0) return;
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        isMouseDown = true;
        mouseX = touch.clientX - rect.left;
        mouseY = touch.clientY - rect.top;
        lastMouseX = mouseX;
        lastMouseY = mouseY;
        spawnStarAtCursor();
    });

    canvas.addEventListener('touchmove', (e) => {
        if (!isMouseDown || e.touches.length === 0) return;
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        mouseX = touch.clientX - rect.left;
        mouseY = touch.clientY - rect.top;
        spawnStarAtCursor();
    });

    canvas.addEventListener('touchend', () => {
        isMouseDown = false;
    });

    // Color palette change selector
    const paletteSelect = document.getElementById("color-palette");
    paletteSelect.addEventListener('change', (e) => {
        activePalette = e.target.value;
        // Dynamically recolor active particles
        const colors = PALETTES[activePalette].starColors;
        particles.forEach(p => {
            p.color = colors[Math.floor(Math.random() * colors.length)];
        });
    });
}

function spawnStarAtCursor() {
    // Generate particles around mouse coordinate with orbit tangent speed
    const rect = canvas.getBoundingClientRect();
    const cX = rect.width / 2;
    const cY = rect.height / 2;
    
    // Distance from center
    const dx = mouseX - cX;
    const dy = mouseY - cY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    
    if (dist < 10) return;

    // Calculate tangent velocity angle for circular orbit flow
    // vx = -dy/dist * Speed, vy = dx/dist * Speed
    const tangentX = -dy / dist;
    const tangentY = dx / dist;
    
    // Orbital speed estimation v = sqrt(GM / r)
    const orbitalSpeed = Math.sqrt((G * coreMass) / dist);
    
    // Add multiple stars with slight speed variation
    for (let i = 0; i < 3; i++) {
        if (particles.length >= maxParticles) {
            particles.shift(); // Remove oldest to limit counts
        }
        
        // Add random scatter offset and launch direction variations
        const scatterX = (Math.random() - 0.5) * 8;
        const scatterY = (Math.random() - 0.5) * 8;
        
        const speedMultiplier = (Math.random() * 0.4 + 0.8);
        const vx = tangentX * orbitalSpeed * speedMultiplier + (Math.random() - 0.5) * 0.5;
        const vy = tangentY * orbitalSpeed * speedMultiplier + (Math.random() - 0.5) * 0.5;
        
        particles.push(new Particle(
            mouseX + scatterX, 
            mouseY + scatterY, 
            vx, 
            vy, 
            Math.random() * 1.5 + 0.8
        ));
    }
}

// Connect inputs to state variables
function connectSliders() {
    const sliderG = document.getElementById("gravity-g");
    const valG = document.getElementById("g-val");
    sliderG.addEventListener('input', (e) => {
        G = parseFloat(e.target.value);
        valG.textContent = G.toFixed(1);
    });

    const sliderMass = document.getElementById("core-mass");
    const valMass = document.getElementById("mass-val");
    sliderMass.addEventListener('input', (e) => {
        coreMass = parseInt(e.target.value);
        valMass.textContent = coreMass.toLocaleString();
        
        // Update central source mass
        const central = gravitySources.find(s => s.isCentral);
        if (central) central.mass = coreMass;
    });

    const sliderCount = document.getElementById("particle-count");
    const valCount = document.getElementById("count-val");
    sliderCount.addEventListener('input', (e) => {
        maxParticles = parseInt(e.target.value);
        valCount.textContent = maxParticles.toLocaleString();
        
        // Trim current particles if exceeds
        while (particles.length > maxParticles) {
            particles.shift();
        }
    });

    const sliderTrail = document.getElementById("trail-length");
    const valTrail = document.getElementById("trail-val");
    sliderTrail.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        trailFade = val / 100;
        valTrail.textContent = `${val}%`;
    });
}

// -------------------------------------------------------------
// Preset Galaxy Generators
// -------------------------------------------------------------

function loadPreset(presetName) {
    particles = [];
    // Retain only the central black hole gravity source
    gravitySources = gravitySources.filter(s => s.isCentral);
    
    const rect = canvas.getBoundingClientRect();
    const cX = rect.width / 2;
    const cY = rect.height / 2;

    document.querySelectorAll(".preset-btn").forEach(btn => btn.classList.remove("active"));
    // Highlight correct preset
    const activeBtn = Array.from(document.querySelectorAll(".preset-btn")).find(btn => btn.onclick.toString().includes(presetName));
    if (activeBtn) activeBtn.classList.add("active");

    switch (presetName) {
        case 'spiral':
            // Generate a two-armed spiral galaxy
            generateSpiralGalaxy(cX, cY, 2);
            break;
            
        case 'binary':
            // Add secondary massive black hole rotating in orbit
            const binOffset = Math.min(rect.width, rect.height) * 0.18;
            const central = gravitySources.find(s => s.isCentral);
            
            // Adjust core mass lower for split binary
            coreMass = 10000;
            document.getElementById("core-mass").value = coreMass;
            document.getElementById("mass-val").textContent = coreMass.toLocaleString();
            if (central) central.mass = coreMass;
            
            // Place second black hole
            gravitySources.push(new GravitySource(cX + binOffset, cY, 8000, false));
            
            // Spawn orbit particles revolving around both
            for (let i = 0; i < maxParticles; i++) {
                const angle = Math.random() * Math.PI * 2;
                const r = Math.random() * binOffset * 1.5 + binOffset * 0.6;
                const pX = cX + Math.cos(angle) * r;
                const pY = cY + Math.sin(angle) * r;
                
                // Orbital velocity
                const orbitalSpeed = Math.sqrt((G * (coreMass + 8000)) / r);
                const vx = -Math.sin(angle) * orbitalSpeed;
                const vy = Math.cos(angle) * orbitalSpeed;
                
                particles.push(new Particle(pX, pY, vx, vy, Math.random() * 1.2 + 0.8));
            }
            break;
            
        case 'dust':
            // Slower diffuse starry dust cloud drifting
            for (let i = 0; i < maxParticles; i++) {
                const angle = Math.random() * Math.PI * 2;
                const r = Math.random() * Math.min(rect.width, rect.height) * 0.45;
                const pX = cX + Math.cos(angle) * r;
                const pY = cY + Math.sin(angle) * r;
                
                // Very slow drift speed, will slowly accumulate to core gravity
                const vx = (Math.random() - 0.5) * 0.8;
                const vy = (Math.random() - 0.5) * 0.8;
                
                particles.push(new Particle(pX, pY, vx, vy, Math.random() * 2 + 0.6));
            }
            break;
            
        case 'collapse':
            // High count concentric ring falling inward
            for (let i = 0; i < maxParticles; i++) {
                const angle = Math.random() * Math.PI * 2;
                const r = Math.random() * Math.min(rect.width, rect.height) * 0.4 + 50;
                const pX = cX + Math.cos(angle) * r;
                const pY = cY + Math.sin(angle) * r;
                
                // Speed points directly inward with slight spiral torque
                const vx = -Math.cos(angle) * 0.2 - Math.sin(angle) * 0.1;
                const vy = -Math.sin(angle) * 0.2 + Math.cos(angle) * 0.1;
                
                particles.push(new Particle(pX, pY, vx, vy, Math.random() * 1.5 + 0.8));
            }
            break;
    }

    updateHUD();
}

function generateSpiralGalaxy(cX, cY, armsCount = 2) {
    const rect = canvas.getBoundingClientRect();
    const maxRadius = Math.min(rect.width, rect.height) * 0.42;

    for (let i = 0; i < maxParticles; i++) {
        // Distribute particle index to spiral arms
        const arm = i % armsCount;
        const ratio = i / maxParticles;
        
        // Math coordinates: radius + angle wrap spiral
        const r = Math.pow(ratio, 1.2) * maxRadius + Math.random() * 15;
        if (r < 15) continue; // Skip collision core
        
        // Arm angle offset + spiral wrap factor (constant rotation)
        const armAngle = (arm * Math.PI * 2) / armsCount;
        const spiralWrap = r * 0.022; // Speed of spiral wrap
        const scatterAngle = (Math.random() - 0.5) * 0.25; // Scatter dispersion
        
        const theta = armAngle + spiralWrap + scatterAngle;
        
        const pX = cX + Math.cos(theta) * r;
        const pY = cY + Math.sin(theta) * r;

        // Circular velocity v = sqrt(GM / r)
        const orbitalSpeed = Math.sqrt((G * coreMass) / r);
        const vx = -Math.sin(theta) * orbitalSpeed + (Math.random() - 0.5) * 0.2;
        const vy = Math.cos(theta) * orbitalSpeed + (Math.random() - 0.5) * 0.2;

        particles.push(new Particle(pX, pY, vx, vy, Math.random() * 1.3 + 0.7));
    }
}

// -------------------------------------------------------------
// Interactive Actions
// -------------------------------------------------------------

function togglePlayState() {
    isPlaying = !isPlaying;
    const btn = document.getElementById("btn-pause");
    if (isPlaying) {
        btn.innerHTML = `<i class="fa-solid fa-pause"></i> 暫停模擬`;
        loop();
    } else {
        btn.innerHTML = `<i class="fa-solid fa-play"></i> 繼續模擬`;
        cancelAnimationFrame(animationFrameId);
    }
}

function clearParticles() {
    particles = [];
    // Reset back to only 1 central gravity source
    gravitySources = gravitySources.filter(s => s.isCentral);
    updateHUD();
    showFloatingToast("宇宙已清空。您可以點擊滑鼠或拉動星系預設來重新生成！", "success");
}

// Export high resolution screenshot of current starry sky trails
function exportStarrySky() {
    // 1. Temporarily draw gravity sources out of screenshot canvas (optional, but keep it clean)
    // To export, we'll create a download link directly from canvas.
    // However, canvas sizing rect could be high DPI scaled.
    // We'll create a temporary clean black background image and link to download.
    const link = document.createElement("a");
    link.download = `cosmos-starry-sky-${Date.now()}.png`;
    
    // Export raw canvas image
    link.href = canvas.toDataURL("image/png");
    link.click();
    showFloatingToast("星軌桌布相片下載成功！", "success");
}

// -------------------------------------------------------------
// Main Simulation & Rendering Loop
// -------------------------------------------------------------

function loop() {
    if (!isPlaying) return;

    // Clear Canvas using semi-transparent overlay to generate stellar trails fading
    // globalCompositeOperation: source-over for clear, screen for bright stars blend
    ctx.save();
    ctx.globalCompositeOperation = 'source-over';
    
    const alpha = (1 - trailFade).toFixed(4);
    ctx.fillStyle = `rgba(3, 3, 10, ${alpha})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();

    // Draw gravity sources & particles under 'screen' blend to get neon additive overlay glow
    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    
    // Update and Render gravity sources
    gravitySources.forEach(source => {
        source.update();
        source.draw(ctx);
    });

    // Update and Render particles
    particles.forEach(p => {
        p.update(gravitySources);
        p.draw(ctx);
    });
    ctx.restore();

    // Maintain FPS computations
    calculateFPS();
    updateHUD();

    animationFrameId = requestAnimationFrame(loop);
}

function calculateFPS() {
    frameCount++;
    const now = performance.now();
    if (now - lastTime >= 1000) {
        fps = Math.round((frameCount * 1000) / (now - lastTime));
        frameCount = 0;
        lastTime = now;
        document.getElementById("hud-fps").textContent = fps;
    }
}

function updateHUD() {
    document.getElementById("hud-particles").textContent = particles.length;
    document.getElementById("hud-sources").textContent = gravitySources.length;
}

// Custom sci-fi floating notification messages helper
function showFloatingToast(message, type = "success") {
    const container = document.body;
    const toast = document.createElement("div");
    
    // Setup floating inline styles
    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.left = "50%";
    toast.style.transform = "translateX(-50%) translateY(20px)";
    toast.style.background = type === "success" ? "rgba(139, 92, 246, 0.9)" : "rgba(239, 68, 68, 0.9)";
    toast.style.color = "white";
    toast.style.padding = "10px 20px";
    toast.style.borderRadius = "20px";
    toast.style.fontSize = "0.85rem";
    toast.style.fontWeight = "bold";
    toast.style.zIndex = "999999";
    toast.style.backdropFilter = "blur(8px)";
    toast.style.boxShadow = "0 8px 20px rgba(0,0,0,0.5), 0 0 10px rgba(139, 92, 246, 0.3)";
    toast.style.transition = "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    toast.style.opacity = "0";
    toast.innerHTML = `<i class="fa-solid fa-circle-info" style="margin-right: 6px;"></i> ${message}`;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = "1";
        toast.style.transform = "translateX(-50%) translateY(0)";
    }, 100);

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateX(-50%) translateY(20px)";
        setTimeout(() => {
            toast.remove();
        }, 350);
    }, 3500);
}

// Launch engine
window.addEventListener('DOMContentLoaded', init);
