// Preloaded default images
const defaultImages = [
    { name: "李多慧", url: "assets/dahye.png" },
    { name: "林襄", url: "assets/mizuki.png" },
    { name: "峮峮", url: "assets/qunqun.png" },
    { name: "安芝儇", url: "assets/an.png" },
    { name: "慈妹", url: "assets/cimei.png" },
    { name: "李雅英", url: "assets/yayeong.png" }
];

// App State
let selectedImage = defaultImages[0].url;
let gridSize = 3; // 3x3 default
let isPlaying = false;
let timeElapsed = 0;
let timerInterval = null;
let movesCount = 0;
let piecesLocked = 0;

// DOM Elements
const imageSelector = document.getElementById("image-selector");
const fileUpload = document.getElementById("file-upload");
const diffButtons = document.querySelectorAll(".diff-btn");
const puzzleBoard = document.getElementById("puzzle-board");
const piecesPool = document.getElementById("pieces-pool");
const gameTimer = document.getElementById("game-timer");
const gameMoves = document.getElementById("game-moves");
const boardPlaceholder = document.getElementById("board-placeholder");
const btnPreview = document.getElementById("btn-preview");
const previewOverlay = document.getElementById("preview-overlay");
const previewImg = document.getElementById("preview-img");
const victoryModal = document.getElementById("victory-modal");

// Initialize application on load
document.addEventListener("DOMContentLoaded", () => {
    initImageSelector();
    setupDifficultySelectors();
    setupImageUpload();
    setupPreviewButton();
    
    // Set default css grid-size variable
    document.documentElement.style.setProperty("--grid-size", gridSize);
});

// 1. Render default image selector list
function initImageSelector() {
    defaultImages.forEach((img, idx) => {
        const thumb = document.createElement("div");
        thumb.className = `img-thumb${idx === 0 ? " active" : ""}`;
        thumb.innerHTML = `<img src="${img.url}" alt="${img.name}">`;
        thumb.onclick = () => selectImage(img.url, thumb);
        imageSelector.appendChild(thumb);
    });
}

function selectImage(url, thumbEl) {
    selectedImage = url;
    document.querySelectorAll(".img-thumb").forEach(t => t.classList.remove("active"));
    thumbEl.classList.add("active");
    
    // If game is active, prompt restart
    if (isPlaying) {
        if (confirm("更換照片將會打亂並重新開始遊戲，是否繼續？")) {
            startGame();
        }
    }
}

// 2. Setup Custom Upload
function setupImageUpload() {
    fileUpload.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const uploadedUrl = event.target.result;
                
                // Add a temporary thumbnail for the custom upload
                const customThumb = document.createElement("div");
                customThumb.className = "img-thumb active";
                customThumb.innerHTML = `<img src="${uploadedUrl}" alt="自訂圖片">`;
                customThumb.onclick = () => selectImage(uploadedUrl, customThumb);
                
                // Remove active class from others, and append new thumb
                document.querySelectorAll(".img-thumb").forEach(t => t.classList.remove("active"));
                imageSelector.appendChild(customThumb);
                
                // Select custom image
                selectedImage = uploadedUrl;
                
                if (isPlaying) {
                    startGame();
                }
            };
            reader.readAsDataURL(file);
        }
    });
}

// 3. Difficulty setup
function setupDifficultySelectors() {
    diffButtons.forEach(btn => {
        btn.onclick = () => {
            gridSize = parseInt(btn.getAttribute("data-grid"));
            diffButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            // Set css grid size
            document.documentElement.style.setProperty("--grid-size", gridSize);
            
            if (isPlaying) {
                if (confirm("變更難度將重新打亂開始，是否確認？")) {
                    startGame();
                }
            }
        };
    });
}

// 4. Setup Preview Toggle (Hold or Toggle view)
function setupPreviewButton() {
    // Show preview on hover / touchstart
    const showPreview = () => {
        previewImg.src = selectedImage;
        previewOverlay.classList.add("show");
    };
    
    const hidePreview = () => {
        previewOverlay.classList.remove("show");
    };
    
    btnPreview.addEventListener("mousedown", showPreview);
    btnPreview.addEventListener("mouseup", hidePreview);
    btnPreview.addEventListener("mouseleave", hidePreview);
    
    btnPreview.addEventListener("touchstart", (e) => {
        e.preventDefault();
        showPreview();
    });
    btnPreview.addEventListener("touchend", hidePreview);
}

// 5. Game Core Logic
function startGame() {
    // Reset state
    clearInterval(timerInterval);
    timeElapsed = 0;
    movesCount = 0;
    piecesLocked = 0;
    isPlaying = true;
    
    gameTimer.textContent = "00:00";
    gameMoves.textContent = "0";
    
    // Hide placeholder, show board
    boardPlaceholder.style.display = "none";
    puzzleBoard.style.display = "grid";
    
    // Clear board and pool
    puzzleBoard.innerHTML = "";
    piecesPool.innerHTML = "";
    
    // Start timer
    timerInterval = setInterval(() => {
        timeElapsed++;
        const mins = Math.floor(timeElapsed / 60).toString().padStart(2, "0");
        const secs = (timeElapsed % 60).toString().padStart(2, "0");
        gameTimer.textContent = `${mins}:${secs}`;
    }, 1000);
    
    // Generate grid slots
    const totalPieces = gridSize * gridSize;
    for (let i = 0; i < totalPieces; i++) {
        const slot = document.createElement("div");
        slot.className = "board-cell";
        slot.setAttribute("data-index", i);
        puzzleBoard.appendChild(slot);
    }
    
    // Generate puzzle pieces
    const pieces = [];
    for (let i = 0; i < totalPieces; i++) {
        const row = Math.floor(i / gridSize);
        const col = i % gridSize;
        
        const piece = document.createElement("div");
        piece.className = "puzzle-piece";
        piece.setAttribute("data-correct-index", i);
        piece.style.backgroundImage = `url(${selectedImage})`;
        
        // Pass positioning variables inline to the CSS variables
        piece.style.setProperty("--col", col);
        piece.style.setProperty("--row", row);
        
        // Pointer down listener for drag-n-drop
        piece.addEventListener("pointerdown", onPointerDown);
        
        pieces.push(piece);
    }
    
    // Shuffle pieces
    shuffle(pieces);
    
    // Place in pieces pool
    pieces.forEach(p => piecesPool.appendChild(p));
}

// Fisher-Yates Shuffle
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Drag & Drop Pointer Events Handler
function onPointerDown(e) {
    // Only drag unlocked pieces and only left clicks
    if (e.target.classList.contains("locked") || e.button !== 0) return;
    
    e.preventDefault();
    const piece = e.currentTarget;
    piece.classList.add("dragging");
    piece.setPointerCapture(e.pointerId);
    
    let startX = e.clientX;
    let startY = e.clientY;
    let currentX = 0;
    let currentY = 0;
    
    // Trigger vibration if available
    if (navigator.vibrate) navigator.vibrate(15);
    
    function onPointerMove(e) {
        currentX = e.clientX - startX;
        currentY = e.clientY - startY;
        
        // Apply transform translates
        piece.style.transform = `translate3d(${currentX}px, ${currentY}px, 100px)`;
        piece.style.zIndex = "1000";
        
        // Detect slot underneath pointer coordinates
        piece.style.visibility = "hidden";
        const elemBelow = document.elementFromPoint(e.clientX, e.clientY);
        piece.style.visibility = "visible";
        
        // Clear all cell drag-overs
        document.querySelectorAll(".board-cell").forEach(cell => cell.classList.remove("drag-over"));
        
        if (elemBelow) {
            const cell = elemBelow.closest(".board-cell");
            if (cell) {
                cell.classList.add("drag-over");
            }
        }
    }
    
    function onPointerUp(e) {
        piece.releasePointerCapture(e.pointerId);
        piece.classList.remove("dragging");
        piece.style.zIndex = "";
        
        piece.removeEventListener("pointermove", onPointerMove);
        piece.removeEventListener("pointerup", onPointerUp);
        
        // Locate element under point
        piece.style.visibility = "hidden";
        const elemBelow = document.elementFromPoint(e.clientX, e.clientY);
        piece.style.visibility = "visible";
        
        document.querySelectorAll(".board-cell").forEach(cell => cell.classList.remove("drag-over"));
        
        let snapped = false;
        
        if (elemBelow) {
            const cell = elemBelow.closest(".board-cell");
            if (cell) {
                const cellIndex = parseInt(cell.getAttribute("data-index"));
                const pieceIndex = parseInt(piece.getAttribute("data-correct-index"));
                
                // Smart snap: lock ONLY if cellIndex fits pieceIndex and cell is empty
                if (cellIndex === pieceIndex && !cell.hasChildNodes()) {
                    cell.appendChild(piece);
                    
                    // Reset custom inline transforms, locking styles take over in CSS
                    piece.style.transform = "";
                    piece.classList.add("locked");
                    piece.removeEventListener("pointerdown", onPointerDown);
                    
                    piecesLocked++;
                    movesCount++;
                    gameMoves.textContent = movesCount;
                    snapped = true;
                    
                    if (navigator.vibrate) navigator.vibrate([20, 50]);
                    
                    checkWinCondition();
                }
            }
        }
        
        if (!snapped) {
            // Smoothly slide back to initial pool slot
            piece.style.transition = "transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
            piece.style.transform = "translate3d(0, 0, 0)";
            
            // Clean inline styles after transition
            setTimeout(() => {
                piece.style.transition = "";
                piece.style.transform = "";
            }, 200);
            
            movesCount++;
            gameMoves.textContent = movesCount;
        }
    }
    
    piece.addEventListener("pointermove", onPointerMove);
    piece.addEventListener("pointerup", onPointerUp);
}

// Check Win condition
function checkWinCondition() {
    const totalPieces = gridSize * gridSize;
    if (piecesLocked === totalPieces) {
        clearInterval(timerInterval);
        isPlaying = false;
        
        // Display Victory statistics
        document.getElementById("v-time").textContent = gameTimer.textContent;
        document.getElementById("v-moves").textContent = movesCount;
        
        setTimeout(() => {
            victoryModal.classList.add("show");
            initConfetti();
        }, 400);
    }
}

function closeVictoryModal() {
    victoryModal.classList.remove("show");
    stopConfetti();
    startGame();
}

// Custom Paper Confetti Particle System
let confettiActive = false;
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");
let confettiPieces = [];

function initConfetti() {
    canvas.style.display = "block";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    confettiPieces = [];
    
    for (let i = 0; i < 150; i++) {
        confettiPieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 4,
            d: Math.random() * canvas.height,
            color: `hsl(${Math.random() * 360}, 80%, 60%)`,
            tilt: Math.random() * 10 - 5,
            tiltAngleIncremental: Math.random() * 0.07 + 0.02,
            tiltAngle: 0
        });
    }
    confettiActive = true;
    requestAnimationFrame(updateConfetti);
}

function updateConfetti() {
    if (!confettiActive) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let remaining = 0;
    
    confettiPieces.forEach(p => {
        p.tiltAngle += p.tiltAngleIncremental;
        p.y += (Math.cos(p.d) + 3 + p.r / 2) / 3;
        p.x += Math.sin(p.tiltAngle);
        p.tilt = Math.sin(p.tiltAngle - (p.r / 2)) * 15;
        
        if (p.y <= canvas.height) remaining++;
        
        ctx.beginPath();
        ctx.lineWidth = p.r;
        ctx.strokeStyle = p.color;
        ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
        ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
        ctx.stroke();
    });
    
    if (remaining > 0) {
        requestAnimationFrame(updateConfetti);
    } else {
        canvas.style.display = "none";
        confettiActive = false;
    }
}

function stopConfetti() {
    confettiActive = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.style.display = "none";
}

// Window resize handler for canvas
window.addEventListener("resize", () => {
    if (confettiActive) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});
