/**
 * Watermelon Ninja (西瓜忍者) - Mobile Web App
 * Light & White Edition
 */

(function() {
    'use strict';

    // ==========================================
    // 1. Audio Engine (Web Audio API Synthesizer)
    // ==========================================
    class SoundEngine {
        constructor() {
            this.ctx = null;
            this.muted = false;
        }

        init() {
            if (!this.ctx) {
                const AudioCtx = window.AudioContext || window.webkitAudioContext;
                if (AudioCtx) {
                    this.ctx = new AudioCtx();
                }
            }
        }

        playSwish() {
            if (this.muted || !this.ctx) return;
            try {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(400, this.ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(100, this.ctx.currentTime + 0.1);
                
                gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);
                
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                
                osc.start();
                osc.stop(this.ctx.currentTime + 0.1);
            } catch(e) {}
        }

        playSlice() {
            if (this.muted || !this.ctx) return;
            try {
                // High frequency crisp slice sound
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(800, this.ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(200, this.ctx.currentTime + 0.08);

                gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);

                osc.connect(gain);
                gain.connect(this.ctx.destination);

                osc.start();
                osc.stop(this.ctx.currentTime + 0.08);
            } catch(e) {}
        }

        playCombo() {
            if (this.muted || !this.ctx) return;
            try {
                const now = this.ctx.currentTime;
                [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.type = 'sine';
                    osc.frequency.value = freq;
                    
                    gain.gain.setValueAtTime(0.2, now + idx * 0.05);
                    gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.05 + 0.15);
                    
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);
                    
                    osc.start(now + idx * 0.05);
                    osc.stop(now + idx * 0.05 + 0.15);
                });
            } catch(e) {}
        }

        playExplosion() {
            if (this.muted || !this.ctx) return;
            try {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(150, this.ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(30, this.ctx.currentTime + 0.4);

                gain.gain.setValueAtTime(0.4, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.4);

                osc.connect(gain);
                gain.connect(this.ctx.destination);

                osc.start();
                osc.stop(this.ctx.currentTime + 0.4);
            } catch(e) {}
        }
    }

    // ==========================================
    // 2. Fruit Definitions & Graphics
    // ==========================================
    const FRUIT_TYPES = {
        watermelon: {
            name: '西瓜',
            radius: 42,
            points: 10,
            juiceColor: '#e11d48',
            draw: function(ctx, r) {
                // Outer green rind
                ctx.fillStyle = '#28a745';
                ctx.beginPath();
                ctx.arc(0, 0, r, 0, Math.PI * 2);
                ctx.fill();
                ctx.lineWidth = 3;
                ctx.strokeStyle = '#1e293b';
                ctx.stroke();

                // Dark stripes
                ctx.strokeStyle = '#14532d';
                ctx.lineWidth = 4;
                for (let a = 0; a < Math.PI * 2; a += Math.PI / 3) {
                    ctx.beginPath();
                    ctx.arc(0, 0, r - 2, a, a + 0.4);
                    ctx.stroke();
                }

                // Inner flesh
                ctx.fillStyle = '#e11d48';
                ctx.beginPath();
                ctx.arc(0, 0, r - 6, 0, Math.PI * 2);
                ctx.fill();

                // Watermelon seeds
                ctx.fillStyle = '#1e293b';
                for (let i = 0; i < 5; i++) {
                    const angle = (i * Math.PI * 2) / 5;
                    const sr = r * 0.45;
                    const sx = Math.cos(angle) * sr;
                    const sy = Math.sin(angle) * sr;
                    ctx.beginPath();
                    ctx.arc(sx, sy, 2.5, 0, Math.PI * 2);
                    ctx.fill();
                }
            },
            drawHalf: function(ctx, r, isLeft) {
                const side = isLeft ? -1 : 1;
                ctx.save();
                ctx.beginPath();
                ctx.rect(isLeft ? -r - 5 : 0, -r - 5, r + 5, (r + 5) * 2);
                ctx.clip();

                // Rind
                ctx.fillStyle = '#28a745';
                ctx.beginPath();
                ctx.arc(0, 0, r, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = '#1e293b';
                ctx.lineWidth = 2;
                ctx.stroke();

                // Flesh
                ctx.fillStyle = '#e11d48';
                ctx.beginPath();
                ctx.arc(0, 0, r - 6, 0, Math.PI * 2);
                ctx.fill();

                // Seeds
                ctx.fillStyle = '#1e293b';
                ctx.beginPath();
                ctx.arc(side * (r * 0.4), 0, 2.5, 0, Math.PI * 2);
                ctx.arc(side * (r * 0.3), -r * 0.3, 2.5, 0, Math.PI * 2);
                ctx.fill();

                ctx.restore();
            }
        },

        dragonfruit: {
            name: '火龍果',
            radius: 36,
            points: 15,
            juiceColor: '#db2777',
            draw: function(ctx, r) {
                // Pink magenta body
                ctx.fillStyle = '#db2777';
                ctx.beginPath();
                ctx.arc(0, 0, r, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = '#1e293b';
                ctx.lineWidth = 2;
                ctx.stroke();

                // White inner pulp
                ctx.fillStyle = '#f8fafc';
                ctx.beginPath();
                ctx.arc(0, 0, r - 6, 0, Math.PI * 2);
                ctx.fill();

                // Black seeds
                ctx.fillStyle = '#1e293b';
                for(let i=0; i<12; i++) {
                    const a = Math.random() * Math.PI * 2;
                    const dist = Math.random() * (r - 12);
                    ctx.fillRect(Math.cos(a)*dist, Math.sin(a)*dist, 2, 2);
                }
            },
            drawHalf: function(ctx, r, isLeft) {
                ctx.save();
                ctx.beginPath();
                ctx.rect(isLeft ? -r - 5 : 0, -r - 5, r + 5, (r + 5) * 2);
                ctx.clip();
                ctx.fillStyle = '#db2777';
                ctx.beginPath();
                ctx.arc(0, 0, r, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#f8fafc';
                ctx.beginPath();
                ctx.arc(0, 0, r - 6, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        },

        orange: {
            name: '柳橙',
            radius: 34,
            points: 10,
            juiceColor: '#df5c00',
            draw: function(ctx, r) {
                ctx.fillStyle = '#df5c00';
                ctx.beginPath();
                ctx.arc(0, 0, r, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = '#1e293b';
                ctx.lineWidth = 2;
                ctx.stroke();

                ctx.fillStyle = '#ffedd5';
                ctx.beginPath();
                ctx.arc(0, 0, r - 5, 0, Math.PI * 2);
                ctx.fill();

                // Segments
                ctx.fillStyle = '#f97316';
                for (let i = 0; i < 6; i++) {
                    const a1 = (i * Math.PI) / 3;
                    const a2 = a1 + Math.PI / 4;
                    ctx.beginPath();
                    ctx.moveTo(0, 0);
                    ctx.arc(0, 0, r - 7, a1, a2);
                    ctx.closePath();
                    ctx.fill();
                }
            },
            drawHalf: function(ctx, r, isLeft) {
                ctx.save();
                ctx.beginPath();
                ctx.rect(isLeft ? -r - 5 : 0, -r - 5, r + 5, (r + 5) * 2);
                ctx.clip();
                ctx.fillStyle = '#df5c00';
                ctx.beginPath();
                ctx.arc(0, 0, r, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#ffedd5';
                ctx.beginPath();
                ctx.arc(0, 0, r - 5, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        },

        pineapple: {
            name: '鳳梨',
            radius: 40,
            points: 20,
            juiceColor: '#eab308',
            draw: function(ctx, r) {
                ctx.fillStyle = '#ca8a04';
                ctx.beginPath();
                ctx.arc(0, 0, r, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = '#1e293b';
                ctx.lineWidth = 2;
                ctx.stroke();

                // Yellow pulp
                ctx.fillStyle = '#fef08a';
                ctx.beginPath();
                ctx.arc(0, 0, r - 6, 0, Math.PI * 2);
                ctx.fill();

                // Center core
                ctx.fillStyle = '#eab308';
                ctx.beginPath();
                ctx.arc(0, 0, r * 0.3, 0, Math.PI * 2);
                ctx.fill();
            },
            drawHalf: function(ctx, r, isLeft) {
                ctx.save();
                ctx.beginPath();
                ctx.rect(isLeft ? -r - 5 : 0, -r - 5, r + 5, (r + 5) * 2);
                ctx.clip();
                ctx.fillStyle = '#ca8a04';
                ctx.beginPath();
                ctx.arc(0, 0, r, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#fef08a';
                ctx.beginPath();
                ctx.arc(0, 0, r - 6, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        },

        bomb: {
            name: '炸彈',
            isBomb: true,
            radius: 35,
            points: 0,
            draw: function(ctx, r) {
                // Slate Iron Bomb Body
                ctx.fillStyle = '#334155';
                ctx.beginPath();
                ctx.arc(0, 0, r, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = '#0f172a';
                ctx.lineWidth = 3;
                ctx.stroke();

                // Highlight
                ctx.fillStyle = '#64748b';
                ctx.beginPath();
                ctx.arc(-r*0.3, -r*0.3, r*0.2, 0, Math.PI*2);
                ctx.fill();

                // Fuse spark
                ctx.strokeStyle = '#df5c00';
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(0, -r);
                ctx.quadraticCurveTo(10, -r - 12, 15, -r - 18);
                ctx.stroke();

                ctx.fillStyle = '#f59e0b';
                ctx.beginPath();
                ctx.arc(15, -r - 18, 5, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    };

    // ==========================================
    // 3. Main Game Engine
    // ==========================================
    class GameEngine {
        constructor() {
            this.canvas = document.getElementById('game-canvas');
            this.ctx = this.canvas.getContext('2d');
            
            this.sound = new SoundEngine();
            this.bladeColor = '#0a84ff';
            
            this.gameMode = 'zen'; // 'classic', 'zen', 'practice'
            this.state = 'menu'; // 'menu', 'playing', 'paused', 'gameover'
            
            this.score = 0;
            this.highScore = parseInt(localStorage.getItem('watermelon_ninja_highscore') || '0', 10);
            this.lives = 3;
            this.slicedCount = 0;
            this.maxCombo = 0;
            this.zenTimeLeft = 60;
            this.zenInterval = null;

            this.fruits = [];
            this.halves = [];
            this.particles = [];
            this.splatters = [];
            this.bladeTrail = [];

            this.isPointerDown = false;
            this.lastPointer = null;
            this.currentSwipeSlices = 0;
            this.spawnTimer = 0;

            this.initDOMReferences();
            this.setupEventListeners();
            this.resizeCanvas();
            
            // Start render loop
            requestAnimationFrame((ts) => this.loop(ts));
        }

        initDOMReferences() {
            this.hudScore = document.getElementById('hud-score');
            this.hudTimerCard = document.getElementById('hud-timer-card');
            this.hudTimer = document.getElementById('hud-timer');
            this.hudLivesCard = document.getElementById('hud-lives-card');

            this.startMenuScreen = document.getElementById('start-menu-screen');
            this.gameOverScreen = document.getElementById('game-over-screen');
            this.pauseScreen = document.getElementById('pause-screen');
            
            this.comboBanner = document.getElementById('combo-banner');
            this.menuHighScore = document.getElementById('menu-high-score');
            this.menuHighScore.textContent = this.highScore;
        }

        setupEventListeners() {
            window.addEventListener('resize', () => this.resizeCanvas());

            // Pointer/Touch events on Canvas
            this.canvas.addEventListener('pointerdown', (e) => this.onPointerDown(e));
            this.canvas.addEventListener('pointermove', (e) => this.onPointerMove(e));
            window.addEventListener('pointerup', () => this.onPointerUp());

            // Sound Toggle Button
            document.getElementById('btn-sound-toggle').addEventListener('click', () => {
                this.sound.muted = !this.sound.muted;
                document.getElementById('sound-icon').textContent = this.sound.muted ? '🔇' : '🔊';
            });

            // Pause Button
            document.getElementById('btn-pause-toggle').addEventListener('click', () => {
                if (this.state === 'playing') this.pauseGame();
            });

            // Start Game Button
            document.getElementById('btn-start-game').addEventListener('click', () => {
                this.sound.init();
                this.startGame();
            });

            // Mode Selector Tabs
            const modeTabs = document.querySelectorAll('.mode-selector .tab-btn');
            modeTabs.forEach(tab => {
                tab.addEventListener('click', (e) => {
                    modeTabs.forEach(t => t.classList.remove('active'));
                    e.target.classList.add('active');
                    this.gameMode = e.target.getAttribute('data-mode');
                });
            });

            // Blade Color Selector Options
            const bladeOpts = document.querySelectorAll('.blade-opt');
            bladeOpts.forEach(opt => {
                opt.addEventListener('click', (e) => {
                    bladeOpts.forEach(b => b.classList.remove('selected'));
                    const target = e.target;
                    target.classList.add('selected');
                    this.bladeColor = target.getAttribute('data-color');
                });
            });

            // Restart & Menu Navigation Buttons
            document.getElementById('btn-restart-game').addEventListener('click', () => this.startGame());
            document.getElementById('btn-back-menu').addEventListener('click', () => this.showMenu());
            document.getElementById('btn-resume-game').addEventListener('click', () => this.resumeGame());
            document.getElementById('btn-pause-menu').addEventListener('click', () => this.showMenu());
        }

        resizeCanvas() {
            const container = document.getElementById('game-container');
            this.canvas.width = container.clientWidth;
            this.canvas.height = container.clientHeight;
        }

        startGame() {
            this.score = 0;
            this.lives = 3;
            this.slicedCount = 0;
            this.maxCombo = 0;
            this.fruits = [];
            this.halves = [];
            this.particles = [];
            this.splatters = [];
            
            this.hudScore.textContent = '0';
            this.updateLivesDisplay();

            if (this.gameMode === 'zen') {
                this.zenTimeLeft = 60;
                this.hudTimer.textContent = '60s';
                this.hudTimerCard.style.display = 'flex';
                this.hudLivesCard.style.display = 'none';

                if (this.zenInterval) clearInterval(this.zenInterval);
                this.zenInterval = setInterval(() => {
                    if (this.state === 'playing') {
                        this.zenTimeLeft--;
                        this.hudTimer.textContent = this.zenTimeLeft + 's';
                        if (this.zenTimeLeft <= 0) {
                            clearInterval(this.zenInterval);
                            this.endGame('時間到！');
                        }
                    }
                }, 1000);
            } else if (this.gameMode === 'practice') {
                this.hudTimerCard.style.display = 'none';
                this.hudLivesCard.style.display = 'none';
            } else {
                // Classic Mode
                this.hudTimerCard.style.display = 'none';
                this.hudLivesCard.style.display = 'flex';
            }

            this.startMenuScreen.classList.remove('active');
            this.gameOverScreen.classList.remove('active');
            this.pauseScreen.classList.remove('active');
            this.state = 'playing';
        }

        pauseGame() {
            this.state = 'paused';
            this.pauseScreen.classList.add('active');
        }

        resumeGame() {
            this.state = 'playing';
            this.pauseScreen.classList.remove('active');
        }

        showMenu() {
            if (this.zenInterval) clearInterval(this.zenInterval);
            this.state = 'menu';
            this.menuHighScore.textContent = this.highScore;
            this.startMenuScreen.classList.add('active');
            this.gameOverScreen.classList.remove('active');
            this.pauseScreen.classList.remove('active');
        }

        endGame(titleMsg = '切割結束!') {
            if (this.zenInterval) clearInterval(this.zenInterval);
            this.state = 'gameover';

            if (this.score > this.highScore) {
                this.highScore = this.score;
                localStorage.setItem('watermelon_ninja_highscore', this.highScore.toString());
            }

            document.getElementById('game-over-title').textContent = titleMsg;
            document.getElementById('stat-final-score').textContent = this.score;
            document.getElementById('stat-sliced-count').textContent = this.slicedCount;
            document.getElementById('stat-max-combo').textContent = this.maxCombo + 'x';
            document.getElementById('stat-high-score').textContent = this.highScore;

            this.gameOverScreen.classList.add('active');
        }

        updateLivesDisplay() {
            for (let i = 1; i <= 3; i++) {
                const el = document.getElementById(`life-${i}`);
                if (i <= this.lives) {
                    el.classList.remove('lost');
                } else {
                    el.classList.add('lost');
                }
            }
        }

        onPointerDown(e) {
            this.sound.init();
            this.isPointerDown = true;
            const rect = this.canvas.getBoundingClientRect();
            const p = { x: e.clientX - rect.left, y: e.clientY - rect.top, age: 0 };
            this.bladeTrail = [p];
            this.lastPointer = p;
            this.currentSwipeSlices = 0;
        }

        onPointerMove(e) {
            if (!this.isPointerDown) return;
            const rect = this.canvas.getBoundingClientRect();
            const curr = { x: e.clientX - rect.left, y: e.clientY - rect.top, age: 0 };

            if (this.lastPointer) {
                const dx = curr.x - this.lastPointer.x;
                const dy = curr.y - this.lastPointer.y;
                const dist = Math.hypot(dx, dy);

                if (dist > 15 && Math.random() < 0.3) {
                    this.sound.playSwish();
                }

                // Check slicing collisions
                if (this.state === 'playing') {
                    this.checkSliceIntersections(this.lastPointer, curr);
                }
            }

            this.bladeTrail.push(curr);
            this.lastPointer = curr;
        }

        onPointerUp() {
            this.isPointerDown = false;
            this.lastPointer = null;

            // Trigger Combo Banner if multi-slice in one swipe
            if (this.currentSwipeSlices >= 3) {
                this.sound.playCombo();
                const bonus = this.currentSwipeSlices * 10;
                this.score += bonus;
                this.hudScore.textContent = this.score;
                
                if (this.currentSwipeSlices > this.maxCombo) {
                    this.maxCombo = this.currentSwipeSlices;
                }

                this.showComboBanner(`${this.currentSwipeSlices}x COMBO! +${bonus}`);
            }
            this.currentSwipeSlices = 0;
        }

        showComboBanner(msg) {
            this.comboBanner.textContent = msg;
            this.comboBanner.classList.add('active');
            setTimeout(() => {
                this.comboBanner.classList.remove('active');
            }, 1200);
        }

        checkSliceIntersections(p1, p2) {
            for (let i = this.fruits.length - 1; i >= 0; i--) {
                const fruit = this.fruits[i];
                if (fruit.sliced) continue;

                // Distance from center of fruit to blade line segment
                const dist = this.distToSegment(fruit.x, fruit.y, p1.x, p1.y, p2.x, p2.y);
                if (dist < fruit.type.radius) {
                    this.sliceFruit(fruit, p1, p2);
                }
            }
        }

        distToSegment(px, py, x1, y1, x2, y2) {
            const l2 = (x2 - x1) ** 2 + (y2 - y1) ** 2;
            if (l2 === 0) return Math.hypot(px - x1, py - y1);
            let t = ((px - x1) * (x2 - x1) + (py - y1) * (y2 - y1)) / l2;
            t = Math.max(0, Math.min(1, t));
            return Math.hypot(px - (x1 + t * (x2 - x1)), py - (y1 + t * (y2 - y1)));
        }

        sliceFruit(fruit, p1, p2) {
            fruit.sliced = true;
            this.slicedCount++;

            if (fruit.type.isBomb) {
                this.sound.playExplosion();
                this.createExplosionParticles(fruit.x, fruit.y);
                
                if (this.gameMode === 'classic') {
                    this.lives--;
                    this.updateLivesDisplay();
                    if (this.lives <= 0) {
                        this.endGame('炸彈爆炸！');
                    }
                } else if (this.gameMode === 'zen') {
                    this.score = Math.max(0, this.score - 20);
                    this.hudScore.textContent = this.score;
                }
                return;
            }

            // Normal fruit sliced
            this.sound.playSlice();
            this.currentSwipeSlices++;
            this.score += fruit.type.points;
            this.hudScore.textContent = this.score;

            // Haptics if available
            if (navigator.vibrate) navigator.vibrate(40);

            // Add Juice Splatter stain
            this.splatters.push({
                x: fruit.x,
                y: fruit.y,
                color: fruit.type.juiceColor,
                radius: fruit.type.radius * (0.8 + Math.random() * 0.4),
                alpha: 0.35
            });
            if (this.splatters.length > 15) this.splatters.shift();

            // Create 2 fruit halves
            const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);
            const perp = angle + Math.PI / 2;

            this.halves.push({
                type: fruit.type,
                x: fruit.x,
                y: fruit.y,
                vx: fruit.vx + Math.cos(perp) * 3,
                vy: fruit.vy - 2,
                rotation: fruit.rotation,
                vRot: -0.1,
                isLeft: true
            });

            this.halves.push({
                type: fruit.type,
                x: fruit.x,
                y: fruit.y,
                vx: fruit.vx - Math.cos(perp) * 3,
                vy: fruit.vy - 2,
                rotation: fruit.rotation,
                vRot: 0.1,
                isLeft: false
            });

            // Particles
            for (let i = 0; i < 12; i++) {
                const speed = 2 + Math.random() * 5;
                const pAngle = Math.random() * Math.PI * 2;
                this.particles.push({
                    x: fruit.x,
                    y: fruit.y,
                    vx: Math.cos(pAngle) * speed,
                    vy: Math.sin(pAngle) * speed,
                    color: fruit.type.juiceColor,
                    size: 3 + Math.random() * 4,
                    life: 1.0
                });
            }
        }

        createExplosionParticles(x, y) {
            for (let i = 0; i < 30; i++) {
                const angle = Math.random() * Math.PI * 2;
                const speed = 3 + Math.random() * 8;
                this.particles.push({
                    x: x,
                    y: y,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    color: Math.random() > 0.5 ? '#df5c00' : '#1e293b',
                    size: 4 + Math.random() * 6,
                    life: 1.0
                });
            }
        }

        spawnFruit() {
            const types = [
                FRUIT_TYPES.watermelon,
                FRUIT_TYPES.watermelon, // Weight watermelon higher
                FRUIT_TYPES.dragonfruit,
                FRUIT_TYPES.orange,
                FRUIT_TYPES.pineapple
            ];

            if (this.gameMode === 'classic') {
                types.push(FRUIT_TYPES.bomb);
            }

            const type = types[Math.floor(Math.random() * types.length)];
            const x = 50 + Math.random() * (this.canvas.width - 100);
            const y = this.canvas.height + 40;

            // Launch velocity upwards towards center
            const targetX = this.canvas.width / 2 + (Math.random() * 120 - 60);
            const vx = (targetX - x) / 45;
            const vy = -12 - Math.random() * 4;

            this.fruits.push({
                type: type,
                x: x,
                y: y,
                vx: vx,
                vy: vy,
                rotation: Math.random() * Math.PI,
                vRot: (Math.random() - 0.5) * 0.08,
                sliced: false
            });
        }

        update(dt) {
            // Update blade trail points age
            for (let i = this.bladeTrail.length - 1; i >= 0; i--) {
                this.bladeTrail[i].age += dt;
                if (this.bladeTrail[i].age > 0.2) {
                    this.bladeTrail.splice(i, 1);
                }
            }

            if (this.state !== 'playing') return;

            // Spawning fruits
            this.spawnTimer += dt;
            const spawnInterval = this.gameMode === 'practice' ? 0.8 : 1.4;
            if (this.spawnTimer > spawnInterval) {
                this.spawnTimer = 0;
                this.spawnFruit();
                if (Math.random() < 0.4) this.spawnFruit(); // Occasional double fruit launch
            }

            // Update fruits physics
            const gravity = 0.28;
            for (let i = this.fruits.length - 1; i >= 0; i--) {
                const f = this.fruits[i];
                f.x += f.vx;
                f.y += f.vy;
                f.vy += gravity;
                f.rotation += f.vRot;

                // Check if missed fruit fell off screen in Classic mode
                if (f.y > this.canvas.height + 60) {
                    if (!f.sliced && !f.type.isBomb && this.gameMode === 'classic') {
                        this.lives--;
                        this.updateLivesDisplay();
                        if (this.lives <= 0) {
                            this.endGame('錯過太多水果！');
                        }
                    }
                    this.fruits.splice(i, 1);
                } else if (f.sliced) {
                    this.fruits.splice(i, 1);
                }
            }

            // Update fruit halves
            for (let i = this.halves.length - 1; i >= 0; i--) {
                const h = this.halves[i];
                h.x += h.vx;
                h.y += h.vy;
                h.vy += gravity;
                h.rotation += h.vRot;

                if (h.y > this.canvas.height + 60) {
                    this.halves.splice(i, 1);
                }
            }

            // Update particles
            for (let i = this.particles.length - 1; i >= 0; i--) {
                const p = this.particles[i];
                p.x += p.vx;
                p.y += p.vy;
                p.life -= 0.03;
                if (p.life <= 0) {
                    this.particles.splice(i, 1);
                }
            }
        }

        render() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            // 1. Draw Juice Splatters
            for (const s of this.splatters) {
                this.ctx.save();
                this.ctx.globalAlpha = s.alpha;
                this.ctx.fillStyle = s.color;
                this.ctx.beginPath();
                this.ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.restore();
            }

            // 2. Draw Whole Fruits
            for (const f of this.fruits) {
                this.ctx.save();
                this.ctx.translate(f.x, f.y);
                this.ctx.rotate(f.rotation);
                f.type.draw(this.ctx, f.type.radius);
                this.ctx.restore();
            }

            // 3. Draw Sliced Halves
            for (const h of this.halves) {
                this.ctx.save();
                this.ctx.translate(h.x, h.y);
                this.ctx.rotate(h.rotation);
                h.type.drawHalf(this.ctx, h.type.radius, h.isLeft);
                this.ctx.restore();
            }

            // 4. Draw Juice Particles
            for (const p of this.particles) {
                this.ctx.save();
                this.ctx.globalAlpha = p.life;
                this.ctx.fillStyle = p.color;
                this.ctx.beginPath();
                this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.restore();
            }

            // 5. Draw Glowing Blade Trail
            if (this.bladeTrail.length > 1) {
                this.ctx.save();
                this.ctx.strokeStyle = this.bladeColor;
                this.ctx.shadowColor = this.bladeColor;
                this.ctx.shadowBlur = 12;
                this.ctx.lineCap = 'round';
                this.ctx.lineJoin = 'round';

                for (let i = 1; i < this.bladeTrail.length; i++) {
                    const p1 = this.bladeTrail[i - 1];
                    const p2 = this.bladeTrail[i];
                    const width = (1 - p2.age / 0.2) * 8;
                    if (width > 0) {
                        this.ctx.lineWidth = width;
                        this.ctx.beginPath();
                        this.ctx.moveTo(p1.x, p1.y);
                        this.ctx.lineTo(p2.x, p2.y);
                        this.ctx.stroke();
                    }
                }
                this.ctx.restore();
            }
        }

        loop(timestamp) {
            const dt = 0.016;
            this.update(dt);
            this.render();
            requestAnimationFrame((ts) => this.loop(ts));
        }
    }

    // Initialize application when DOM is ready
    document.addEventListener('DOMContentLoaded', () => {
        window.watermelonGame = new GameEngine();
    });

})();
