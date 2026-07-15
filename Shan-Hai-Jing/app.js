/**
 * 山海經 · 奇獸異誌 | Classic of Mountains & Seas
 * Application Logic
 */

let currentCategory = "all";
let currentRegion = "all";
let activeBeastId = null;

// 4. Dom Elements
const beastGrid = document.getElementById("beast-cards-grid");
const filterStatusText = document.getElementById("filter-status-text");
const navTabs = document.querySelectorAll(".nav-tab");
const tabPanes = document.querySelectorAll(".tab-pane");

const luoPan = document.getElementById("luo-pan-compass");
const compassCenter = document.getElementById("compass-center");
const directionLabels = document.querySelectorAll(".direction-label");
const needle = document.querySelector(".needle");

// Modals
const beastModal = document.getElementById("beast-modal");
const beastModalClose = document.getElementById("modal-close");
const storyModal = document.getElementById("story-modal");
const storyModalClose = document.getElementById("story-modal-close");

// Modal Elements
const modalImg = document.getElementById("modal-beast-img");
const modalRegion = document.getElementById("modal-beast-region");
const modalCategory = document.getElementById("modal-beast-category");
const modalName = document.getElementById("modal-beast-name");
const modalEnglish = document.getElementById("modal-beast-english");
const modalClassic = document.getElementById("modal-beast-classic");
const modalDesc = document.getElementById("modal-beast-desc");
const statSpiritual = document.getElementById("stat-spiritual");
const statAggression = document.getElementById("stat-aggression");
const statRarity = document.getElementById("stat-rarity");
const valSpiritual = document.getElementById("val-spiritual");
const valAggression = document.getElementById("val-aggression");
const valRarity = document.getElementById("val-rarity");

const modalStoryTitle = document.getElementById("modal-story-title");
const modalStoryBody = document.getElementById("modal-story-body");

// 5. Initialize the App
document.addEventListener("DOMContentLoaded", () => {
    initParticles();
    renderBeasts();
    setupTabNavigation();
    setupFilters();
    setupCompass();
    setupModalListeners();
    registerServiceWorker();
});

function registerServiceWorker() {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("sw.js")
            .then(reg => console.log("Service Worker registered successfully on scope:", reg.scope))
            .catch(err => console.error("Service Worker registration failed:", err));
    }
}

// 6. Particle Engine (Spiritual Embers)
function initParticles() {
    const canvas = document.getElementById("particles-canvas");
    const ctx = canvas.getContext("2d");
    
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    
    window.addEventListener("resize", () => {
        width = (canvas.width = window.innerWidth);
        height = (canvas.height = window.innerHeight);
    });
    
    const particles = [];
    const maxParticles = 65;
    
    class Particle {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * width;
            this.y = height + Math.random() * 50;
            this.size = Math.random() * 2.5 + 0.5;
            this.speedY = Math.random() * 0.8 + 0.2;
            this.speedX = Math.random() * 0.6 - 0.3;
            // Gold and warm red particles
            this.color = Math.random() > 0.3 
                ? `rgba(212, 175, 55, ${Math.random() * 0.4 + 0.15})` // Gold
                : `rgba(178, 34, 34, ${Math.random() * 0.3 + 0.1})`;  // Vermilion
            this.alpha = 1;
            this.fadeSpeed = Math.random() * 0.005 + 0.002;
        }
        
        update() {
            this.y -= this.speedY;
            this.x += this.speedX;
            
            if (this.y < -10) {
                this.reset();
            }
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }
    
    for (let i = 0; i < maxParticles; i++) {
        particles.push(new Particle());
        // Stagger positions initially
        particles[i].y = Math.random() * height;
    }
    
    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// 7. Helper to get currently filtered beasts list
// Set of all synthesized beast image filenames existing on disk


function getFilteredBeasts() {
    // 1. Filter based on category and region
    const filtered = BEASTS_DATABASE.filter(beast => {
        const matchesCategory = currentCategory === "all" || beast.category === currentCategory;
        const matchesRegion = currentRegion === "all" || beast.region === currentRegion;
        return matchesCategory && matchesRegion;
    });

    // 2. Sort derived beasts: group same-name cards together
    const standardPart = filtered.filter(beast => !beast.id.startsWith("gen-"));
    const derivedPart = filtered.filter(beast => beast.id.startsWith("gen-"));
    
    derivedPart.sort((a, b) => {
        // Group by base name (first 2 characters)
        const baseA = a.nameCn.substring(0, 2);
        const baseB = b.nameCn.substring(0, 2);
        if (baseA !== baseB) {
            return baseA.localeCompare(baseB, "zh-Hans-CN");
        }
        // Within same name, sort by ID to maintain stability
        return a.id.localeCompare(b.id);
    });
    
    return [...standardPart, ...derivedPart];
}

// Render Beasts Cards
function renderBeasts() {
    beastGrid.innerHTML = "";
    
    const filteredBeasts = getFilteredBeasts();
    
    if (filteredBeasts.length === 0) {
        beastGrid.innerHTML = `
            <div class="no-results">
                <i class="fa-solid fa-ghost"></i>
                <p>未找到符合條件的奇獸...</p>
                <button class="reset-filter-btn" id="reset-filters">重置篩選</button>
            </div>
        `;
        document.getElementById("reset-filters").addEventListener("click", resetAllFilters);
        filterStatusText.innerText = "沒有匹配奇獸";
        
        // Hide scroll jump buttons if no beasts matched
        const jumpStandardBtn = document.getElementById("jump-to-standard-btn");
        const jumpDerivedBtn = document.getElementById("jump-to-derived-btn");
        if (jumpStandardBtn) jumpStandardBtn.style.display = "none";
        if (jumpDerivedBtn) jumpDerivedBtn.style.display = "none";
        
        return;
    }
    
    // Count standard (index < 161) and derived (starts with 'gen-') beasts in current view
    const standardBeasts = filteredBeasts.filter(beast => !beast.id.startsWith("gen-"));
    const derivedBeasts = filteredBeasts.filter(beast => beast.id.startsWith("gen-"));
    const standardCount = standardBeasts.length;
    const derivedCount = derivedBeasts.length;
    
    // Toggle Jump buttons visibility based on counts
    const jumpStandardBtn = document.getElementById("jump-to-standard-btn");
    const jumpDerivedBtn = document.getElementById("jump-to-derived-btn");
    if (jumpStandardBtn) {
        jumpStandardBtn.style.display = standardCount > 0 ? "inline-flex" : "none";
    }
    if (jumpDerivedBtn) {
        jumpDerivedBtn.style.display = derivedCount > 0 ? "inline-flex" : "none";
    }
    
    let standardHeaderInserted = false;
    let dividerInserted = false;
    
    filteredBeasts.forEach(beast => {
        const isDerived = beast.id.startsWith("gen-");
        
        // Render Standard beasts header at the very beginning of the loop
        if (!isDerived && !standardHeaderInserted) {
            const header = document.createElement("div");
            header.id = "standard-beasts-header";
            header.className = "beast-grid-header";
            header.innerText = "本卷神獸";
            beastGrid.appendChild(header);
            standardHeaderInserted = true;
        }
        
        // If we transition to derived beasts, and there is at least one standard beast in the current view, insert divider
        if (isDerived && !dividerInserted) {
            const hasStandard = filteredBeasts.some(b => !b.id.startsWith("gen-"));
            if (hasStandard) {
                const divider = document.createElement("div");
                divider.id = "derived-beasts-header";
                divider.className = "beast-grid-divider";
                divider.innerText = "衍伸神獸";
                beastGrid.appendChild(divider);
            }
            dividerInserted = true;
        }
        
        const card = document.createElement("div");
        card.className = "beast-card";
        card.setAttribute("data-id", beast.id);
        
        // Badge color mapping
        let badgeClass = "badge-divine";
        if (beast.category === "auspicious") badgeClass = "badge-auspicious";
        if (beast.category === "perilous") badgeClass = "badge-perilous";
        
        card.innerHTML = `
            <div class="beast-image-wrapper">
                <img src="${beast.image}" alt="${beast.nameCn}" loading="lazy" onerror="this.onerror=null; this.src='assets/webp/placeholder_beast.webp';">
                <span class="card-badge ${badgeClass}">${beast.categoryCn}</span>
                <span class="card-region"><i class="fa-solid fa-map-pin"></i> ${beast.regionCn.split(" ")[0]}</span>
            </div>
            <div class="beast-card-info">
                <div class="beast-card-header">
                    <div class="beast-names">
                        <h2 class="beast-title-cn">${beast.nameCn} <span class="beast-zhuyin">(${beast.zhuyin})</span></h2>
                        <span class="beast-title-en">${beast.nameEn}</span>
                    </div>
                </div>
                <p class="beast-classic-extract">${beast.classicText}</p>
                <button class="view-details-btn" data-id="${beast.id}"><i class="fa-solid fa-eye"></i> 觀看詳情</button>
            </div>
        `;
        
        beastGrid.appendChild(card);
    });
    
    // Add Event Listeners for Details buttons
    document.querySelectorAll(".view-details-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            openBeastModal(btn.getAttribute("data-id"));
        });
    });
    
    // Set up Jump scroll listener click actions
    if (jumpStandardBtn) {
        jumpStandardBtn.onclick = () => {
            const target = document.getElementById("standard-beasts-header");
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        };
    }
    if (jumpDerivedBtn) {
        jumpDerivedBtn.onclick = () => {
            const target = document.getElementById("derived-beasts-header");
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        };
    }
    
    // Update the status label text as requested (衍生神獸 instead of 衍生獸)
    filterStatusText.innerText = `正在展示山海經本卷神獸 ${standardCount} 隻，及衍生神獸 ${derivedCount} 隻。`;
}

// 8. Tab Navigation
function setupTabNavigation() {
    navTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Remove active classes
            navTabs.forEach(t => t.classList.remove("active"));
            tabPanes.forEach(p => p.classList.remove("active"));
            
            // Add active class
            tab.classList.add("active");
            const targetPane = document.getElementById(tab.getAttribute("data-target"));
            targetPane.classList.add("active");
        });
    });
    
    // Setup scroll reading buttons in Tab 2
    document.querySelectorAll(".read-scroll-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            openStoryModal(btn.getAttribute("data-story"));
        });
    });
}

// 9. Filters Handling
function setupFilters() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const filterType = btn.getAttribute("data-filter-type");
            const value = btn.getAttribute("data-value");
            
            // Toggle active state in sibling buttons
            const siblings = btn.parentElement.querySelectorAll(".filter-btn");
            siblings.forEach(s => s.classList.remove("active"));
            btn.classList.add("active");
            
            if (filterType === "category") {
                currentCategory = value;
            } else if (filterType === "region") {
                currentRegion = value;
                // Sync compass compass ring active state
                syncCompassState(value);
            }
            
            renderBeasts();
        });
    });
}

// 10. Luo Pan Compass Sync and Interactions
function setupCompass() {
    directionLabels.forEach(label => {
        label.addEventListener("click", (e) => {
            e.stopPropagation(); // Avoid double trigger
            const dir = label.getAttribute("data-dir");
            rotateCompassToDirection(dir);
        });
    });
    
    compassCenter.addEventListener("click", (e) => {
        e.stopPropagation();
        rotateCompassToDirection("central");
    });
}

function rotateCompassToDirection(dir) {
    let rotation = 0;
    
    // De-activate all labels
    directionLabels.forEach(lbl => lbl.classList.remove("active"));
    compassCenter.classList.remove("active");
    
    if (dir === "north") {
        rotation = 0;
        document.querySelector(".dir-n").classList.add("active");
        needle.style.opacity = "1";
        needle.style.transform = `translateY(11px) rotate(0deg)`;
    } else if (dir === "east") {
        rotation = -90;
        document.querySelector(".dir-e").classList.add("active");
        needle.style.opacity = "1";
        needle.style.transform = `translateY(11px) rotate(90deg)`;
    } else if (dir === "south") {
        rotation = -180;
        document.querySelector(".dir-s").classList.add("active");
        needle.style.opacity = "1";
        needle.style.transform = `translateY(11px) rotate(180deg)`;
    } else if (dir === "west") {
        rotation = -270;
        document.querySelector(".dir-w").classList.add("active");
        needle.style.opacity = "1";
        needle.style.transform = `translateY(11px) rotate(270deg)`;
    } else if (dir === "central") {
        rotation = 45; // Subtle tilt for middle
        compassCenter.classList.add("active");
        needle.style.opacity = "0.2"; // Fade out needle in the center
    }
    
    // Rotate the outer compass disk
    luoPan.style.transform = `rotate(${rotation}deg)`;
    
    // Set Region Filter Value & Trigger render
    currentRegion = dir;
    
    // Update active filter button in tab
    const regionButtons = document.querySelectorAll('#select-region .filter-btn');
    regionButtons.forEach(btn => {
        if (btn.getAttribute("data-value") === dir) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    
    renderBeasts();
}

function syncCompassState(regionValue) {
    directionLabels.forEach(lbl => lbl.classList.remove("active"));
    compassCenter.classList.remove("active");
    
    let rotation = 0;
    
    if (regionValue === "north") {
        document.querySelector(".dir-n").classList.add("active");
        needle.style.opacity = "1";
        needle.style.transform = `translateY(11px) rotate(0deg)`;
        rotation = 0;
    } else if (regionValue === "east") {
        document.querySelector(".dir-e").classList.add("active");
        needle.style.opacity = "1";
        needle.style.transform = `translateY(11px) rotate(90deg)`;
        rotation = -90;
    } else if (regionValue === "south") {
        document.querySelector(".dir-s").classList.add("active");
        needle.style.opacity = "1";
        needle.style.transform = `translateY(11px) rotate(180deg)`;
        rotation = -180;
    } else if (regionValue === "west") {
        document.querySelector(".dir-w").classList.add("active");
        needle.style.opacity = "1";
        needle.style.transform = `translateY(11px) rotate(270deg)`;
        rotation = -270;
    } else if (regionValue === "central") {
        compassCenter.classList.add("active");
        needle.style.opacity = "0.2";
        rotation = 45;
    } else if (regionValue === "all") {
        needle.style.opacity = "1";
        needle.style.transform = `translateY(11px) rotate(0deg)`;
        rotation = 0;
    }
    
    luoPan.style.transform = `rotate(${rotation}deg)`;
}

// Helper Labels Translation
function getCategoryLabel(category) {
    switch(category) {
        case "divine": return "神獸";
        case "auspicious": return "瑞獸";
        case "perilous": return "凶獸";
        default: return "全部";
    }
}

function getRegionLabel(region) {
    switch(region) {
        case "east": return "東山經";
        case "south": return "南山經";
        case "west": return "西山經";
        case "north": return "北山經";
        case "central": return "中山經";
        default: return "全部";
    }
}

function resetAllFilters() {
    currentCategory = "all";
    currentRegion = "all";
    
    // Reset Filter Button states
    document.querySelectorAll(".filter-btn").forEach(btn => {
        if (btn.getAttribute("data-value") === "all") {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    
    // Reset compass
    directionLabels.forEach(lbl => lbl.classList.remove("active"));
    compassCenter.classList.remove("active");
    needle.style.opacity = "1";
    needle.style.transform = `translateY(11px) rotate(0deg)`;
    luoPan.style.transform = `rotate(0deg)`;
    
    renderBeasts();
}

// 11. Modal Logic
window.openBeastByName = function(name) {
    const targetBeast = BEASTS_DATABASE.find(b => b.nameCn === name);
    if (targetBeast) {
        openBeastModal(targetBeast.id);
    }
};

function openBeastModal(beastId) {
    activeBeastId = beastId;
    const beast = BEASTS_DATABASE.find(b => b.id === beastId);
    if (!beast) return;
    
    // Hide/show navigation buttons based on current list count
    const modalPrevBtn = document.getElementById("modal-prev");
    const modalNextBtn = document.getElementById("modal-next");
    if (modalPrevBtn && modalNextBtn) {
        const listCount = getFilteredBeasts().length;
        if (listCount <= 1) {
            modalPrevBtn.style.display = "none";
            modalNextBtn.style.display = "none";
        } else {
            modalPrevBtn.style.display = "flex";
            modalNextBtn.style.display = "flex";
        }
    }
    
    modalImg.src = beast.image;
    modalImg.alt = beast.nameCn;
    modalRegion.innerHTML = `<i class="fa-solid fa-compass"></i> ${beast.regionCn}`;
    
    modalCategory.innerText = beast.categoryCn;
    modalCategory.className = "beast-category-tag"; // Reset
    if (beast.category === "divine") modalCategory.classList.add("badge-divine");
    if (beast.category === "auspicious") modalCategory.classList.add("badge-auspicious");
    if (beast.category === "perilous") modalCategory.classList.add("badge-perilous");
    
    modalName.innerHTML = `${beast.nameCn} <span class="modal-zhuyin">(${beast.zhuyin})</span>`;
    modalEnglish.innerText = beast.nameEn;
    
    // Make <u>Name</u> clickable links
    let classicHtml = beast.classicText;
    classicHtml = classicHtml.replace(/<u>(.*?)<\/u>/g, `<span class="beast-link-inline" onclick="window.openBeastByName('$1')">$1</span>`);
    modalClassic.innerHTML = classicHtml;
    
    // Make 【Name】 clickable links
    let descHtml = beast.description;
    descHtml = descHtml.replace(/【(.*?)】/g, `【<span class="beast-link-inline" onclick="window.openBeastByName('$1')">$1</span>】`);
    modalDesc.innerHTML = descHtml;
    
    // Stats Bars Animations
    setTimeout(() => {
        statSpiritual.style.width = beast.stats.spiritual + "%";
        statAggression.style.width = beast.stats.aggression + "%";
        statRarity.style.width = beast.stats.rarity + "%";
    }, 100);
    
    valSpiritual.innerText = beast.stats.spiritual;
    valAggression.innerText = beast.stats.aggression;
    valRarity.innerText = beast.stats.rarity;
    
    beastModal.classList.add("active");
    document.body.style.overflow = "hidden"; // Disable scroll
}

function navigateBeast(direction) {
    const list = getFilteredBeasts();
    if (list.length <= 1) return;
    
    const currentIndex = list.findIndex(b => b.id === activeBeastId);
    if (currentIndex === -1) return;
    
    let nextIndex;
    if (direction === "next") {
        nextIndex = (currentIndex + 1) % list.length;
    } else {
        nextIndex = (currentIndex - 1 + list.length) % list.length;
    }
    
    openBeastModal(list[nextIndex].id);
}

function openStoryModal(storyKey) {
    const story = LORE_DATABASE[storyKey];
    if (!story) return;
    
    modalStoryTitle.innerText = story.title;
    
    modalStoryBody.innerHTML = "";
    story.paragraphs.forEach((p, idx) => {
        const paragraph = document.createElement("p");
        if (idx === 0) {
            paragraph.className = "classic-source";
        }
        paragraph.innerText = p;
        modalStoryBody.appendChild(paragraph);
    });
    
    storyModal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function setupModalListeners() {
    // Close Beast Modal
    beastModalClose.addEventListener("click", () => {
        beastModal.classList.remove("active");
        document.body.style.overflow = ""; // Re-enable scroll
    });
    
    beastModal.addEventListener("click", (e) => {
        if (e.target === beastModal) {
            beastModal.classList.remove("active");
            document.body.style.overflow = "";
        }
    });
    
    // Close Story Modal
    storyModalClose.addEventListener("click", () => {
        storyModal.classList.remove("active");
        document.body.style.overflow = "";
    });
    
    storyModal.addEventListener("click", (e) => {
        if (e.target === storyModal) {
            storyModal.classList.remove("active");
            document.body.style.overflow = "";
        }
    });
    
    // Left/Right Button Clicks
    const modalPrevBtn = document.getElementById("modal-prev");
    const modalNextBtn = document.getElementById("modal-next");
    if (modalPrevBtn && modalNextBtn) {
        modalPrevBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            navigateBeast("prev");
        });
        modalNextBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            navigateBeast("next");
        });
    }
    
    // Keyboard Navigation & Escape
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            beastModal.classList.remove("active");
            storyModal.classList.remove("active");
            document.body.style.overflow = "";
        }
        
        // Navigation within active beast modal
        if (beastModal.classList.contains("active")) {
            if (e.key === "ArrowLeft") {
                navigateBeast("prev");
            } else if (e.key === "ArrowRight") {
                navigateBeast("next");
            }
        }
    });
    
    // Swipe Gestures on Mobile
    const modalCard = beastModal.querySelector(".modal-card");
    if (modalCard) {
        let touchStartX = 0;
        let touchEndX = 0;
        
        modalCard.addEventListener("touchstart", (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        modalCard.addEventListener("touchend", (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const swipeDistance = touchEndX - touchStartX;
            const threshold = 60; // minimum swipe distance (pixels)
            
            if (Math.abs(swipeDistance) > threshold) {
                if (swipeDistance < 0) {
                    navigateBeast("next"); // swipe left -> next
                } else {
                    navigateBeast("prev"); // swipe right -> prev
                }
            }
        }, { passive: true });
    }
}
