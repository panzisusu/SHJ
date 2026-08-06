/**
 * 計算五行相剋倍率
 * @param {string} playerElement - 玩家卡牌屬性 ('火', '金', '木', '土', '水')
 * @param {string} bossElement - Boss 屬性 ('火', '金', '木', '土', '水')
 * @returns {number} 倍率 (相剋: 1.2 | 同屬: 0.8 | 其他: 1.0)
 */
function calculateElementMultiplier(playerElement, bossElement) {
  if (!playerElement || !bossElement) return 1.0;

  // 五行相剋對應表 (攻方 -> 被剋方)
  const counterMap = {
    '火': '金',
    '金': '木',
    '木': '土',
    '土': '水',
    '水': '火'
  };

  // 同屬減傷 (-20%)
  if (playerElement === bossElement) {
    return 0.8;
  }

  // 五行相剋 (+20%)
  if (counterMap[playerElement] === bossElement) {
    return 1.2;
  }

  // 其他 (一般倍率)
  return 1.0;
}

document.addEventListener('DOMContentLoaded', () => {
  let bossHp = 400;
  const bossMaxHp = 400;
  const bossElement = '木'; // 第一關 Boss 九尾狐 (木屬性)

  const elementTextMap = {
    north: '水',
    east: '木',
    south: '火',
    west: '金',
    center: '土'
  };

  const introOverlay = document.getElementById('intro-overlay');
  const startBattleBtn = document.getElementById('start-battle-btn');
  const enemyHpText = document.getElementById('enemy-hp-text');
  const enemyHpBar = document.getElementById('enemy-hp-bar');
  const battleMsg = document.getElementById('battle-msg');
  const victoryModal = document.getElementById('victory-modal');
  const readScrollBtn = document.getElementById('read-scroll-btn');
  const finishDemoBtn = document.getElementById('finish-demo-btn');
  const scrollStory = document.getElementById('scroll-story');
  const handBar = document.getElementById('hand-bar');

  // 背景音樂 BGM 管理 (確保單一 Audio 實例，避免重複建立)
  const bgmPlayer = document.getElementById('bgm-player');
  const bgmToggleBtn = document.getElementById('bgm-toggle-btn');
  let isMuted = false;

  if (bgmPlayer) {
    bgmPlayer.volume = 0.25;
    bgmPlayer.loop = true;
    bgmPlayer.onerror = () => {
      console.warn('BGM 提示：assets/bgm.mp3 尚不存在，已靜默跳過播放，不影響戰鬥流程。');
    };
  }

  function playBgm() {
    if (!bgmPlayer) return;
    bgmPlayer.volume = 0.25;
    bgmPlayer.loop = true;
    if (bgmPlayer.paused && !isMuted) {
      bgmPlayer.play().catch((err) => {
        console.warn('BGM 提示：assets/bgm.mp3 未找到或無法播放，不影響戰鬥流程。');
      });
    }
  }

  function toggleBgm() {
    if (!bgmPlayer) return;

    if (bgmPlayer.muted || isMuted) {
      bgmPlayer.muted = false;
      isMuted = false;
      if (bgmToggleBtn) {
        bgmToggleBtn.textContent = '🔊';
        bgmToggleBtn.classList.remove('muted');
      }
      playBgm();
    } else {
      bgmPlayer.muted = true;
      isMuted = true;
      if (bgmToggleBtn) {
        bgmToggleBtn.textContent = '🔇';
        bgmToggleBtn.classList.add('muted');
      }
    }
  }

  if (bgmToggleBtn) {
    bgmToggleBtn.addEventListener('click', toggleBgm);
  }

  // 攻擊音效 SFX 管理 (音量 0.45, 支援快速連續攻擊重置播放)
  const attackSfxMap = {
    '畢方': new Audio('assets/sfx/slash_heavy.wav'),
    '精衛': new Audio('assets/sfx/slash_crit.wav')
  };

  // 設置預設音量 0.45 與備用路徑容錯
  Object.keys(attackSfxMap).forEach((key) => {
    const audio = attackSfxMap[key];
    audio.volume = 0.45;
    audio.onerror = () => {
      if (key === '畢方' && !audio.src.includes('heavy_chop.wav')) {
        audio.src = 'assets/heavy_chop.wav';
      } else if (key === '精衛' && !audio.src.includes('critical_slash.wav')) {
        audio.src = 'assets/critical_slash.wav';
      }
    };
  });

  function playAttackSfx(beastName) {
    const sfx = attackSfxMap[beastName];
    if (!sfx) return;

    try {
      sfx.currentTime = 0;
      sfx.volume = 0.45;
      sfx.play().catch((err) => {
        console.warn(`[SFX 提示] ${beastName} 音效播放受限或未找到：`, err);
      });
    } catch (err) {
      console.warn(`[SFX 錯誤] ${beastName} 音效播放失敗：`, err);
    }
  }

  // 開始戰鬥按鈕事件
  if (startBattleBtn && introOverlay) {
    startBattleBtn.addEventListener('click', () => {
      introOverlay.classList.add('hidden');
      playBgm();
    });
  }

  // 起始手牌異獸配置 (不包含九尾狐，畢方火: 220 + 精衛水: 180 = 400 傷害)
  const targetBeastConfigs = {
    '畢方': {
      position: 'south',
      element: '火',
      elementLabel: '南方 (火)',
      damage: 220,
      imageSrc: 'assets/bi_fang.webp'
    },
    '精衛': {
      position: 'north',
      element: '水',
      elementLabel: '北方 (水)',
      damage: 180,
      imageSrc: 'assets/jingwei.webp'
    }
  };

  // 從 shan_hai_jing_all_list.json 動態載入資料
  fetch('shan_hai_jing_all_list.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // 僅使用原生異獸 (type === '原始')
      const nativeBeasts = data.filter((item) => item.type === '原始');

      // 依序搜尋目標原生異獸「畢方」與「精衛」
      const foundBeasts = [];
      Object.keys(targetBeastConfigs).forEach((targetName) => {
        const beastData = nativeBeasts.find((item) => item.name === targetName);
        if (beastData) {
          foundBeasts.push({
            ...beastData,
            config: targetBeastConfigs[targetName]
          });
        } else {
          console.warn(`未在原生異獸列表中找到：${targetName}`);
        }
      });

      renderCards(foundBeasts);
    })
    .catch((error) => {
      console.error('載入 shan_hai_jing_all_list.json 失敗：', error);
    });

  function renderCards(beastList) {
    if (!handBar) return;
    handBar.innerHTML = '';

    beastList.forEach((beast) => {
      const cardBtn = document.createElement('button');
      cardBtn.className = 'beast-card';
      cardBtn.dataset.name = beast.name;
      cardBtn.dataset.position = beast.config.position;
      cardBtn.dataset.element = beast.config.element;
      cardBtn.dataset.image = beast.config.imageSrc;
      cardBtn.dataset.damage = beast.config.damage;

      // 呈現：陣營、正式異獸圖像 (<img>)、名稱、所屬方位/五行、攻擊數值
      cardBtn.innerHTML = `
        <div class="card-category">${beast.category || '異獸'}</div>
        <div class="card-img-wrap">
          <img src="${beast.config.imageSrc}" alt="${beast.name}" class="card-official-img" />
        </div>
        <div class="card-name">${beast.name}</div>
        <div class="card-element">${beast.config.elementLabel}</div>
        <div class="card-damage">攻: ${beast.config.damage}</div>
      `;

      cardBtn.addEventListener('click', () => onCardClick(cardBtn));
      handBar.appendChild(cardBtn);
    });
  }

  function onCardClick(card) {
    if (card.classList.contains('used') || bossHp <= 0) return;

    const name = card.dataset.name;
    const position = card.dataset.position;
    const imageSrc = card.dataset.image;
    const playerElement = card.dataset.element;
    const baseDamage = parseInt(card.dataset.damage, 10) || 0;

    const node = document.querySelector(`.node[data-position="${position}"]`);
    if (!node) return;

    // 0ms: 1. 卡牌被選中狀態 (card-casting) 並立即禁用
    card.classList.add('card-casting', 'used');
    card.setAttribute('disabled', 'true');

    // 100ms: 2. 玩家角色施法反應 (player-casting)
    setTimeout(() => {
      const playerCard = document.querySelector('.player-character-card');
      if (playerCard) {
        const castClass = playerElement === '火' ? 'player-casting-fire' : 'player-casting-water';
        playerCard.classList.add('player-casting', castClass);
        setTimeout(() => {
          playerCard.classList.remove('player-casting', 'player-casting-fire', 'player-casting-water');
        }, 550);
      }
    }, 100);

    // 150ms: 3. 飛牌動畫啟動
    setTimeout(() => {
      const cardRect = card.getBoundingClientRect();
      const nodeRect = node.getBoundingClientRect();

      const flyingCard = card.cloneNode(true);
      flyingCard.classList.remove('used', 'card-casting');
      flyingCard.removeAttribute('disabled');
      flyingCard.classList.add('flying-card');

      flyingCard.style.left = `${cardRect.left}px`;
      flyingCard.style.top = `${cardRect.top}px`;
      flyingCard.style.width = `${cardRect.width}px`;
      flyingCard.style.height = `${cardRect.height}px`;

      document.body.appendChild(flyingCard);

      const startX = cardRect.left + cardRect.width / 2;
      const startY = cardRect.top + cardRect.height / 2;
      const endX = nodeRect.left + nodeRect.width / 2;
      const endY = nodeRect.top + nodeRect.height / 2;

      const deltaX = endX - startX;
      const deltaY = endY - startY;

      requestAnimationFrame(() => {
        flyingCard.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0.5) rotate(4deg)`;
        flyingCard.style.opacity = '0.9';
      });

      // 650ms (飛牌歷時 500ms): 抵達節點，觸發五行節點共鳴
      setTimeout(() => {
        if (flyingCard.parentNode) {
          flyingCard.parentNode.removeChild(flyingCard);
        }

        triggerNodeResonanceAndSummon(card, name, position, imageSrc, playerElement, baseDamage, node);
      }, 500);
    }, 150);
  }

  function triggerNodeResonanceAndSummon(card, name, position, imageSrc, playerElement, baseDamage, node) {
    // 650ms: 4. 五行節點共鳴
    node.innerHTML = '';
    node.classList.add('summoning', 'node-resonating');

    const resonatingClass = playerElement === '火' ? 'node-resonating-fire' : 'node-resonating-water';
    node.classList.add(resonatingClass);

    const battleField = document.querySelector('.battle-field');
    if (battleField) {
      battleField.classList.add('battle-field-resonating');
    }

    if (imageSrc) {
      const img = document.createElement('img');
      img.className = 'monster';
      img.src = imageSrc;
      img.alt = name;
      img.onerror = () => {
        node.innerHTML = `<div class="summoned-name">${name}</div>`;
      };
      node.appendChild(img);
    } else {
      const nameDiv = document.createElement('div');
      nameDiv.className = 'summoned-name';
      nameDiv.textContent = name;
      node.appendChild(nameDiv);
    }

    // 850ms: 5. 從節點發射能量束至 Boss
    setTimeout(() => {
      launchEnergyProjectile(node, playerElement, () => {
        // 1200ms: 6. 能量束抵達 Boss，觸發 Boss 命中、扣血與浮字
        executeBossImpactAndDamage(card, name, position, playerElement, baseDamage);
      });
    }, 200);

    // 1100ms: 節點共鳴恢復
    setTimeout(() => {
      node.classList.remove('node-resonating', 'node-resonating-fire', 'node-resonating-water');
      if (battleField) {
        battleField.classList.remove('battle-field-resonating');
      }
    }, 450);

    // 1650ms: 召喚圖片恢復原本文字
    setTimeout(() => {
      node.innerHTML = elementTextMap[position] || '';
      node.classList.remove('summoning');
    }, 1000);
  }

  function launchEnergyProjectile(node, playerElement, onImpactCallback) {
    const nodeRect = node.getBoundingClientRect();
    const bossStage = document.querySelector('.boss-character-stage') || document.querySelector('.enemy-info');

    if (!bossStage) {
      if (onImpactCallback) onImpactCallback();
      return;
    }

    const bossRect = bossStage.getBoundingClientRect();

    const startX = nodeRect.left + nodeRect.width / 2;
    const startY = nodeRect.top + nodeRect.height / 2;
    const endX = bossRect.left + bossRect.width / 2;
    const endY = bossRect.top + bossRect.height / 2;

    const proj = document.createElement('div');
    const projectileClass = playerElement === '火' ? 'element-projectile-fire' : 'element-projectile-water';
    proj.className = `element-projectile ${projectileClass}`;

    proj.style.left = `${startX - 13}px`;
    proj.style.top = `${startY - 13}px`;

    document.body.appendChild(proj);

    const deltaX = endX - startX;
    const deltaY = endY - startY;

    requestAnimationFrame(() => {
      proj.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0.6)`;
      proj.style.opacity = '0.85';
    });

    // 850ms -> 1200ms (能量飛行歷時 350ms) 抵達 Boss
    setTimeout(() => {
      if (proj.parentNode) {
        proj.parentNode.removeChild(proj);
      }
      if (onImpactCallback) {
        onImpactCallback();
      }
    }, 350);
  }

  function executeBossImpactAndDamage(card, name, position, playerElement, baseDamage) {
    // 觸發攻擊音效 (畢方 / 精衛)
    playAttackSfx(name);

    // 計算五行相剋倍率與最終傷害
    const multiplier = calculateElementMultiplier(playerElement, bossElement);
    const damage = Math.round(baseDamage * multiplier);

    // 1200ms: Boss 舞台閃光 (boss-impact-fire / boss-impact-water)
    const bossCard = document.querySelector('.boss-card');
    if (bossCard) {
      const impactClass = playerElement === '火' ? 'boss-impact-fire' : 'boss-impact-water';
      bossCard.classList.remove('boss-impact-fire', 'boss-impact-water');
      void bossCard.offsetWidth;
      bossCard.classList.add(impactClass);

      setTimeout(() => {
        bossCard.classList.remove('boss-impact-fire', 'boss-impact-water');
      }, 350);
    }

    // 扣除 Boss HP 並更新 UI
    bossHp = Math.max(0, bossHp - damage);
    if (enemyHpText) {
      enemyHpText.textContent = `HP ${bossHp} / ${bossMaxHp}`;
    }
    if (enemyHpBar) {
      const percent = Math.max(0, (bossHp / bossMaxHp) * 100);
      enemyHpBar.style.setProperty('--hp-percent', `${percent}%`);
    }

    // 觸發 Boss 受擊震動動畫與浮動傷害數字
    const enemyInfo = document.querySelector('.enemy-info');
    if (enemyInfo) {
      enemyInfo.classList.remove('boss-hit');
      void enemyInfo.offsetWidth;
      enemyInfo.classList.add('boss-hit');

      setTimeout(() => {
        enemyInfo.classList.remove('boss-hit');
      }, 350);

      const floatNum = document.createElement('div');
      floatNum.className = 'floating-damage';
      floatNum.textContent = `-${damage}`;
      enemyInfo.appendChild(floatNum);

      setTimeout(() => {
        if (floatNum.parentNode) {
          floatNum.parentNode.removeChild(floatNum);
        }
      }, 800);
    }

    // 顯示戰鬥訊息與相剋提示
    if (battleMsg) {
      let promptHtml = '';
      if (multiplier === 1.2) {
        promptHtml = '<div style="color: #f1c40f; font-size: 13px; font-weight: bold;">五行相剋！ 傷害 +20%</div>';
      } else if (multiplier === 0.8) {
        promptHtml = '<div style="color: #3498db; font-size: 13px; font-weight: bold;">同屬減傷！ 傷害 -20%</div>';
      }

      battleMsg.innerHTML = `${promptHtml}<div>${name}造成 ${damage} 點傷害！</div>`;

      if (window.battleMsgTimer) clearTimeout(window.battleMsgTimer);
      window.battleMsgTimer = setTimeout(() => {
        if (battleMsg && bossHp > 0) {
          battleMsg.innerHTML = '';
        }
      }, 1500);
    }

    // Boss 死亡判定
    if (bossHp <= 0) {
      document.querySelectorAll('.beast-card').forEach((c) => {
        c.classList.add('used');
        c.setAttribute('disabled', 'true');
      });

      if (enemyInfo && !enemyInfo.classList.contains('boss-dead')) {
        enemyInfo.classList.add('boss-dead');
      }

      const battleBoard = document.querySelector('.battle-board');
      if (battleBoard && !document.querySelector('.victory-banner')) {
        const banner = document.createElement('div');
        banner.className = 'victory-banner';
        banner.innerHTML = `
          <div class="victory-banner-line1">九尾狐已被擊敗</div>
          <div class="victory-banner-line2">第一關完成</div>
        `;
        battleBoard.appendChild(banner);

        setTimeout(() => {
          if (banner.parentNode) {
            banner.parentNode.removeChild(banner);
          }
        }, 2600);
      }

      // 保留原本 2.8 秒 (2800ms) 後才彈出通關 Modal
      setTimeout(() => {
        if (victoryModal) {
          victoryModal.classList.remove('hidden');
        }
      }, 2800);
    }
  }

  // 閱讀卷軸按鈕
  if (readScrollBtn && scrollStory) {
    readScrollBtn.addEventListener('click', () => {
      scrollStory.classList.toggle('hidden');
    });
  }

  // 完成 Demo 按鈕
  if (finishDemoBtn) {
    finishDemoBtn.addEventListener('click', () => {
      const modalContent = victoryModal ? victoryModal.querySelector('.modal-content') : null;
      if (modalContent) {
        modalContent.innerHTML = `
          <h2>山海經 Demo 完成</h2>
          <p class="subtitle">你已完成第一卷：青丘祥瑞</p>
          <div class="reward-list">
            <div class="reward-item">
              <span class="icon">🎴</span>
              <span>獲得異獸卡：九尾狐</span>
            </div>
          </div>
          <p style="margin: 15px 0 20px 0; color: #cbd5e1; font-size: 16px; font-weight: bold;">感謝遊玩</p>
          <div class="modal-actions">
            <button id="restart-btn" class="read-btn" style="background: #3b82f6; color: #ffffff;">重新體驗</button>
          </div>
        `;

        const restartBtn = document.getElementById('restart-btn');
        if (restartBtn) {
          restartBtn.addEventListener('click', () => {
            window.location.reload();
          });
        }
      }
    });
  }
});
