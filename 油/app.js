// 2026 風險油品事件查詢系統 - Light Parchment & Ink-Wash Core Logic
document.addEventListener('DOMContentLoaded', () => {
  let appData = {
    version: "1150716",
    total_records: 0,
    county_stats: {},
    records: [],
    products_db: []
  };

  let currentState = {
    selectedCounty: 'ALL',
    searchKeyword: '',
    currentPage: 1,
    pageSize: 24,
    filteredRecords: []
  };

  // Elements
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');
  const countySelect = document.getElementById('countySelect');
  const searchInput = document.getElementById('searchInput');
  const resetBtn = document.getElementById('resetBtn');
  const popularTags = document.querySelectorAll('.tag-item');
  const businessCardsGrid = document.getElementById('businessCardsGrid');
  const resultsCount = document.getElementById('resultsCount');
  const prevPageBtn = document.getElementById('prevPageBtn');
  const nextPageBtn = document.getElementById('nextPageBtn');
  const pageInfo = document.getElementById('pageInfo');
  
  // Lot Checker Elements
  const lotInput = document.getElementById('lotInput');
  const lotCheckBtn = document.getElementById('lotCheckBtn');
  const lotResultBox = document.getElementById('lotResultBox');
  const productsDbGrid = document.getElementById('productsDbGrid');
  
  // County Visual Container
  const countyBarsContainer = document.getElementById('countyBarsContainer');

  // Fetch Data
  async function loadData() {
    try {
      const response = await fetch('cleaned_data.json');
      if (!response.ok) throw new Error('Data fetch failed');
      appData = await response.json();
      
      initApp();
    } catch (err) {
      console.error('Data loading error:', err);
      if (businessCardsGrid) {
        businessCardsGrid.innerHTML = `
          <div style="grid-column: 1/-1; text-align: center; color: var(--vermilion); padding: 40px;">
            ⚠️ cleaned_data.json 載入失敗。
          </div>
        `;
      }
    }
  }

  function initApp() {
    updateStatsDisplay();
    populateCountyDropdown();
    renderProductsDb();
    renderCountyBars();
    
    applyFilters();
    setupEventListeners();
  }

  function updateStatsDisplay() {
    const totalRecordsEl = document.getElementById('statTotalRecords');
    const totalCountiesEl = document.getElementById('statTotalCounties');
    const totalBusinessesEl = document.getElementById('statTotalBusinesses');
    const dataVersionEl = document.getElementById('statDataVersion');

    if (totalRecordsEl) totalRecordsEl.textContent = appData.total_records.toLocaleString();
    if (totalCountiesEl) totalCountiesEl.textContent = Object.keys(appData.county_stats).length;
    if (totalBusinessesEl) totalBusinessesEl.textContent = "1,324+";
    if (dataVersionEl) dataVersionEl.textContent = appData.version;
  }

  function populateCountyDropdown() {
    if (!countySelect) return;
    const sortedCounties = Object.keys(appData.county_stats).sort((a, b) => {
      return appData.county_stats[b] - appData.county_stats[a];
    });

    countySelect.innerHTML = '<option value="ALL">📍 全台灣 縣市選單 (全部)</option>';
    sortedCounties.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c;
      opt.textContent = `${c} (${appData.county_stats[c]} 筆)`;
      countySelect.appendChild(opt);
    });
  }

  function setupEventListeners() {
    // Tab switching
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanels.forEach(p => p.classList.remove('active'));
        
        btn.classList.add('active');
        const targetPanel = document.getElementById(targetTab);
        if (targetPanel) targetPanel.classList.add('active');
      });
    });

    // County Select
    if (countySelect) {
      countySelect.addEventListener('change', (e) => {
        currentState.selectedCounty = e.target.value;
        currentState.currentPage = 1;
        applyFilters();
      });
    }

    // Search Input
    if (searchInput) {
      let debounceTimer;
      searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          currentState.searchKeyword = e.target.value.trim().toLowerCase();
          currentState.currentPage = 1;
          applyFilters();
        }, 200);
      });
    }

    // Reset Button
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        currentState.selectedCounty = 'ALL';
        currentState.searchKeyword = '';
        currentState.currentPage = 1;
        if (countySelect) countySelect.value = 'ALL';
        if (searchInput) searchInput.value = '';
        applyFilters();
      });
    }

    // Popular tags
    popularTags.forEach(tag => {
      tag.addEventListener('click', () => {
        const keyword = tag.getAttribute('data-tag');
        if (searchInput) searchInput.value = keyword;
        currentState.searchKeyword = keyword.toLowerCase();
        currentState.currentPage = 1;
        
        const searchTabBtn = document.querySelector('[data-tab="tab-search"]');
        if (searchTabBtn) searchTabBtn.click();
        
        applyFilters();
      });
    });

    // Pagination
    if (prevPageBtn) {
      prevPageBtn.addEventListener('click', () => {
        if (currentState.currentPage > 1) {
          currentState.currentPage--;
          renderBusinessGrid();
        }
      });
    }

    if (nextPageBtn) {
      nextPageBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(currentState.filteredRecords.length / currentState.pageSize);
        if (currentState.currentPage < totalPages) {
          currentState.currentPage++;
          renderBusinessGrid();
        }
      });
    }

    // Lot Checker Button
    if (lotCheckBtn && lotInput) {
      lotCheckBtn.addEventListener('click', () => runLotCheck());
      lotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') runLotCheck();
      });
    }
  }

  function applyFilters() {
    let results = appData.records;

    if (currentState.selectedCounty !== 'ALL') {
      results = results.filter(r => r.county === currentState.selectedCounty);
    }

    if (currentState.searchKeyword) {
      const kw = currentState.searchKeyword;
      results = results.filter(r => {
        return (
          r.raw.toLowerCase().includes(kw) ||
          r.county.toLowerCase().includes(kw) ||
          r.line.toLowerCase().includes(kw)
        );
      });
    }

    currentState.filteredRecords = results;
    renderBusinessGrid();
  }

  function renderBusinessGrid() {
    if (!businessCardsGrid) return;

    const total = currentState.filteredRecords.length;
    if (resultsCount) resultsCount.textContent = total.toLocaleString();

    if (total === 0) {
      businessCardsGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-secondary);">
          <div style="font-size: 3rem; margin-bottom: 12px;">🔍</div>
          <h3 style="font-family: var(--font-serif); color: var(--text-primary); font-size: 1.2rem;">查無符合條件的下架業者記錄</h3>
          <p style="margin-top: 6px;">請嘗試更換搜尋關鍵字，或切換至全台灣縣市選單。</p>
        </div>
      `;
      if (pageInfo) pageInfo.textContent = '第 0 / 0 頁';
      if (prevPageBtn) prevPageBtn.disabled = true;
      if (nextPageBtn) nextPageBtn.disabled = true;
      return;
    }

    const totalPages = Math.ceil(total / currentState.pageSize);
    if (currentState.currentPage > totalPages) currentState.currentPage = totalPages;
    if (currentState.currentPage < 1) currentState.currentPage = 1;

    const startIdx = (currentState.currentPage - 1) * currentState.pageSize;
    const pageRecords = currentState.filteredRecords.slice(startIdx, startIdx + currentState.pageSize);

    let html = '';
    pageRecords.forEach(item => {
      html += `
        <div class="business-card">
          <div class="card-top">
            <span class="county-badge">📍 ${item.county}</span>
            <span class="seq-tag">序號 #${item.seq}</span>
          </div>
          <div class="card-title">${escapeHtml(extractBusinessName(item.raw))}</div>
          <div class="card-raw">
            <strong style="color: var(--gold-dark);">公告細節：</strong>${highlightKeyword(item.raw, currentState.searchKeyword)}
          </div>
          <div class="status-badge-recall">
            ⚠️ 衛福部公告強制下架產品
          </div>
        </div>
      `;
    });

    businessCardsGrid.innerHTML = html;

    if (pageInfo) pageInfo.textContent = `第 ${currentState.currentPage} / ${totalPages} 頁`;
    if (prevPageBtn) prevPageBtn.disabled = (currentState.currentPage === 1);
    if (nextPageBtn) nextPageBtn.disabled = (currentState.currentPage === totalPages);
  }

  function extractBusinessName(rawText) {
    const parts = rawText.trim().split(/\s+/);
    if (parts.length > 0) {
      return parts[0];
    }
    return rawText;
  }

  function highlightKeyword(text, keyword) {
    if (!keyword) return escapeHtml(text);
    const escapedText = escapeHtml(text);
    const escapedKw = escapeHtml(keyword);
    const regex = new RegExp(`(${escapedKw})`, 'gi');
    return escapedText.replace(regex, '<mark style="background: rgba(140,107,18,0.25); color: var(--vermilion); padding: 0 4px; border-radius: 3px; font-weight: bold;">$1</mark>');
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function runLotCheck() {
    if (!lotInput || !lotResultBox) return;
    const query = lotInput.value.trim().toLowerCase();
    
    if (!query) {
      lotResultBox.className = 'result-verdict warning';
      lotResultBox.style.display = 'block';
      lotResultBox.innerHTML = `⚠️ 請輸入您家中油品瓶身的「批號」或「產品名稱」進行比對。`;
      return;
    }

    let matchedProducts = [];
    appData.products_db.forEach(prod => {
      const matchName = prod.name.toLowerCase().includes(query);
      const matchBrand = prod.brand.toLowerCase().includes(query);
      const matchBatches = prod.batches.some(b => b.toLowerCase().includes(query));
      if (matchName || matchBrand || matchBatches) {
        matchedProducts.push(prod);
      }
    });

    let matchedRecordsCount = appData.records.filter(r => r.raw.toLowerCase().includes(query)).length;

    if (matchedProducts.length > 0 || matchedRecordsCount > 0) {
      lotResultBox.className = 'result-verdict warning';
      lotResultBox.style.display = 'block';
      
      let prodDetails = matchedProducts.map(p => `
        <li style="margin-top: 6px;">
          <strong>[${p.brand}] ${p.name}</strong> — 涉案批號：<code>${p.batches.join(', ')}</code>
        </li>
      `).join('');

      lotResultBox.innerHTML = `
        <h4 style="font-family: var(--font-serif); font-size: 1.15rem; color: var(--vermilion); display: flex; align-items: center; gap: 8px;">
          🚨 警告！比對到強制下架油品 / 批號
        </h4>
        <p style="margin-top: 8px; font-size: 0.95rem;">
          您查詢的關鍵字 <strong>「${escapeHtml(query)}」</strong> 已出現在衛生福利部食藥署的強制下架清單中。
        </p>
        ${matchedProducts.length > 0 ? `<ul style="margin: 12px 0 12px 20px;">${prodDetails}</ul>` : ''}
        ${matchedRecordsCount > 0 ? `<p style="font-size: 0.9rem; color: var(--gold-dark);">受影響下游業者銷售記錄：全台共有 <strong>${matchedRecordsCount}</strong> 筆相關門市紀錄。</p>` : ''}
        <div style="margin-top: 14px; padding-top: 10px; border-top: 1px dashed rgba(158, 42, 43, 0.3); font-size: 0.85rem; color: var(--vermilion);">
          💡 處置建議：請立即停止食用，憑發票至原購買通路辦理退換貨，或撥打 <strong>1919 食安專線</strong>。
        </div>
      `;
    } else {
      lotResultBox.className = 'result-verdict safe';
      lotResultBox.style.display = 'block';
      lotResultBox.innerHTML = `
        <h4 style="font-family: var(--font-serif); font-size: 1.15rem; color: #065f46; display: flex; align-items: center; gap: 8px;">
          ✅ 未在食藥署 1150716 下架清單中比對到此批號
        </h4>
        <p style="margin-top: 8px; font-size: 0.95rem;">
          關鍵字 <strong>「${escapeHtml(query)}」</strong> 目前未包含於本次中聯油脂受波及之強制下架油品清單中。
        </p>
        <p style="font-size: 0.85rem; color: #047857; margin-top: 8px;">
          註：請確認瓶身標籤字串輸入完整（例如中聯：<code>315-1150404</code> 或福壽批號 <code>BL200426D</code>）。
        </p>
      `;
    }
  }

  function renderProductsDb() {
    if (!productsDbGrid) return;
    let html = '';
    appData.products_db.forEach(prod => {
      const batchPills = prod.batches.map(b => `<span class="batch-pill">${b}</span>`).join('');
      html += `
        <div class="product-card">
          <div class="product-brand">${prod.brand} • ${prod.type}</div>
          <div class="product-name">${prod.name}</div>
          <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 10px;">${prod.description}</div>
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted); margin-bottom: 4px;">涉案批號/標示號：</div>
          <div class="batch-list">${batchPills}</div>
        </div>
      `;
    });
    productsDbGrid.innerHTML = html;
  }

  function renderCountyBars() {
    if (!countyBarsContainer) return;
    const sortedCounties = Object.keys(appData.county_stats).sort((a, b) => {
      return appData.county_stats[b] - appData.county_stats[a];
    });

    const maxCount = appData.county_stats[sortedCounties[0]] || 1;

    let html = '';
    sortedCounties.forEach(c => {
      const cnt = appData.county_stats[c];
      const pct = Math.max(5, Math.round((cnt / maxCount) * 100));
      html += `
        <div class="county-bar-row" data-county="${c}">
          <div class="county-name">${c}</div>
          <div class="bar-track">
            <div class="bar-fill" style="width: ${pct}%;"></div>
          </div>
          <div class="county-count">${cnt.toLocaleString()} 筆</div>
        </div>
      `;
    });

    countyBarsContainer.innerHTML = html;

    document.querySelectorAll('.county-bar-row').forEach(row => {
      row.addEventListener('click', () => {
        const cName = row.getAttribute('data-county');
        if (countySelect) countySelect.value = cName;
        currentState.selectedCounty = cName;
        currentState.currentPage = 1;
        applyFilters();

        const searchTabBtn = document.querySelector('[data-tab="tab-search"]');
        if (searchTabBtn) searchTabBtn.click();
      });
    });
  }

  loadData();
});
