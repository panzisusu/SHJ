// Global state variables
let map;
let markerLayer;
let stations = [];
let latestObservations = [];
let selectedStation = null;
let markersMap = {}; // Map of station_id -> Leaflet marker

// Map customization: CartoDB Voyager tiles are perfect for warm dashboards
const TILE_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const TILE_ATTRIB = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

// Initialize the dashboard
document.addEventListener("DOMContentLoaded", () => {
    initMap();
    loadData();
    setupEventListeners();
});

// 1. Initialize Leaflet Map
function initMap() {
    map = L.map('map').setView([23.973875, 120.979821], 7.5); // Center of Taiwan
    
    L.tileLayer(TILE_URL, {
        attribution: TILE_ATTRIB,
        maxZoom: 19
    }).addTo(map);
    
    markerLayer = L.layerGroup().addTo(map);
}

// 2. Load initial stations and latest observation data
async function loadData() {
    try {
        const stationsRes = await fetch("/api/stations");
        const stationsData = await stationsRes.json();
        
        const obsRes = await fetch("/api/current");
        const obsData = await obsRes.json();
        
        if (stationsData.success && obsData.success) {
            stations = stationsData.data;
            latestObservations = obsData.data;
            
            // Populate County Filter Dropdown
            populateCountyFilter(stations);
            
            // Render stations on map
            renderMarkers(stations);
            
            // Update Header Update Time
            if (latestObservations.length > 0) {
                const latestTime = latestObservations[0].time;
                const formattedTime = new Date(latestTime).toLocaleString('zh-TW', { hour12: false });
                document.getElementById("update-time-text").textContent = `資料觀測時間：${formattedTime}`;
            } else {
                document.getElementById("update-time-text").textContent = `資料觀測時間：暫無數據`;
            }
        }

        // Load Typhoon Alert Info
        loadTyphoonInfo();

    } catch (err) {
        console.error("載入資料失敗:", err);
        document.getElementById("station-count-label").textContent = "載入失敗";
    }
}

// Load Typhoon Info
async function loadTyphoonInfo() {
    try {
        const res = await fetch("/api/typhoon");
        const data = await res.json();
        const banner = document.getElementById("typhoon-banner");
        
        if (data.success) {
            // Update modal title, link, and image URL
            const modalTitleEl = document.getElementById("typhoon-modal-title");
            const modalLinkEl = document.getElementById("typhoon-modal-link");
            const imgEl = document.getElementById("typhoon-image");
            
            if (modalTitleEl) {
                modalTitleEl.textContent = data.title || "目前太平洋地區無颱風活動";
            }
            if (modalLinkEl && data.link) {
                modalLinkEl.href = data.link;
            }
            if (imgEl) {
                if (data.has_typhoon && data.image_url) {
                    imgEl.src = data.image_url;
                    imgEl.style.display = "block";
                } else {
                    imgEl.style.display = "none";
                }
            }
            
            // Show top alert banner if active typhoon warning exists
            if (data.has_typhoon) {
                document.getElementById("typhoon-title").textContent = `【颱風警報】${data.title}`;
                banner.classList.remove("hidden");
            } else {
                banner.classList.add("hidden");
            }
        }
    } catch (err) {
        console.error("載入颱風消息失敗:", err);
    }
}

// 3. Populate County selection dropdown
function populateCountyFilter(stationsList) {
    const filter = document.getElementById("county-filter");
    const counties = [...new Set(stationsList.map(s => s.county_name).filter(Boolean))].sort();
    
    // Clear and keep "All"
    filter.innerHTML = '<option value="">全部縣市</option>';
    
    counties.forEach(county => {
        const option = document.createElement("option");
        option.value = county;
        option.textContent = county;
        filter.appendChild(option);
    });
}

// 4. Render markers on the map
function renderMarkers(stationsList) {
    markerLayer.clearLayers();
    markersMap = {};
    
    // Map temperature & rainfall to stations if available
    const obsMap = {};
    latestObservations.forEach(obs => {
        obsMap[obs.station_id] = {
            temp: obs.temperature,
            rain: obs.rain_daily !== null ? obs.rain_daily : obs.rainfall
        };
    });

    stationsList.forEach(station => {
        const obsData = obsMap[station.station_id] || { temp: null, rain: null };
        const temp = obsData.temp;
        const rain = obsData.rain;
        
        const tempDisplay = temp !== null && temp !== undefined ? `${temp}°C` : "--";
        const rainDisplay = rain !== null && rain !== undefined ? `${rain}mm` : "0.0mm";
        
        // Custom circle marker
        // If it's a pure rainfall station (temperature is null), make it a distinct color/border
        const isRainStation = temp === null || temp === undefined;
        
        const marker = L.circleMarker([station.latitude, station.longitude], {
            radius: isRainStation ? 6 : 8,
            fillColor: isRainStation ? "#2563eb" : (temp !== null ? getTempColor(temp) : "#94a3b8"),
            color: isRainStation ? "#93c5fd" : "#ffffff",
            weight: isRainStation ? 1.5 : 1,
            opacity: 0.9,
            fillOpacity: 0.8
        });

        // Popup details on hover/click
        marker.bindPopup(`
            <div style="font-family: sans-serif; font-size: 0.85rem; color: #3c2f2f;">
                <b style="font-size: 1rem; color: #ea580c;">${station.station_name}</b> (${station.station_id})<br>
                ${station.county_name} ${station.town_name || ""}<br>
                氣溫: <b style="color: #dc2626; font-size: 0.95rem;">${tempDisplay}</b><br>
                累積雨量: <b style="color: #2563eb; font-size: 0.95rem;">${rainDisplay}</b><br>
                海拔: ${station.altitude}m ${isRainStation ? '<b style="color:#2563eb;">(獨立雨量站)</b>' : ''}
            </div>
        `);

        // Click event on marker
        marker.on("click", () => {
            selectStation(station);
        });

        markerLayer.addLayer(marker);
        markersMap[station.station_id] = marker;
    });

    document.getElementById("station-count-label").textContent = `共 ${stationsList.length} 個測站`;
}

// Map temperatures to colors for marker visuals
function getTempColor(temp) {
    if (temp >= 35) return "#ef4444"; // Hot red
    if (temp >= 30) return "#f97316"; // Orange
    if (temp >= 25) return "#eab308"; // Yellow
    if (temp >= 20) return "#10b981"; // Green
    if (temp >= 15) return "#3b82f6"; // Blue
    return "#6366f1"; // Indigo
}

// 5. Select and load details for a station
async function selectStation(station) {
    selectedStation = station;
    
    // Hide empty state and show dashboard content
    document.getElementById("no-station-selected").classList.add("hidden");
    document.getElementById("station-dashboard").classList.remove("hidden");
    
    // Hide AI prediction panel until triggered
    document.getElementById("ai-prediction-card").classList.add("hidden");

    // Show station details layout
    toggleStationSpecificViews(true);

    // Populate header info
    document.getElementById("current-station-name").textContent = `${station.station_name} (${station.station_id})`;
    document.getElementById("current-station-meta").textContent = 
        `${station.county_name} ${station.town_name || ""} | 海拔: ${station.altitude}公尺 | 經緯度: ${station.latitude.toFixed(4)}, ${station.longitude.toFixed(4)}`;

    // Get current weather values
    const obs = latestObservations.find(o => o.station_id === station.station_id);
    if (obs) {
        document.getElementById("stat-temp").textContent = obs.temperature !== null ? obs.temperature : "--";
        document.getElementById("stat-humidity").textContent = obs.humidity !== null ? obs.humidity : "--";
        
        // Daily rainfall
        const dailyRain = obs.rain_daily !== null ? obs.rain_daily : (obs.rainfall !== null ? obs.rainfall : "0.0");
        document.getElementById("stat-rain").textContent = dailyRain;
        
        // 1h and 3h rainfall details
        const rain1h = obs.rain_1h !== null ? `${obs.rain_1h} mm` : "--";
        const rain3h = obs.rain_3h !== null ? `${obs.rain_3h} mm` : "--";
        document.getElementById("stat-rain-detail").textContent = `1H: ${rain1h} | 3H: ${rain3h}`;

        document.getElementById("stat-wind").textContent = obs.wind_speed !== null ? obs.wind_speed : "--";
        document.getElementById("stat-wind-dir").textContent = obs.wind_direction !== null ? `風向：${obs.wind_direction}°` : "風向：--";
    } else {
        // Clear stats cards
        ["stat-temp", "stat-humidity", "stat-rain", "stat-wind", "stat-wind-dir"].forEach(id => {
            document.getElementById(id).textContent = "--";
        });
        document.getElementById("stat-rain-detail").textContent = "1H: -- | 3H: --";
    }

    // Load 7-Day weather forecast for this county
    if (station.county_name) {
        loadForecast(station.county_name);
    }

    // Load History charts
    loadCharts(station.station_id);

    // Pan map to marker and open popup
    const marker = markersMap[station.station_id];
    if (marker) {
        map.setView(marker.getLatLng(), 11);
        marker.openPopup();
    }
}

// Load 7-Day Weather Forecast
async function loadForecast(countyName) {
    const container = document.getElementById("forecast-container");
    document.getElementById("forecast-county-label").textContent = countyName;
    container.innerHTML = '<div style="padding: 1rem; width: 100%; text-align: center; color: var(--text-secondary);"><i class="fa-solid fa-spinner fa-spin"></i> 載入預報中...</div>';
    
    try {
        const res = await fetch(`/api/forecast/${encodeURIComponent(countyName)}`);
        const result = await res.json();
        
        if (result.success && result.forecast.length > 0) {
            container.innerHTML = "";
            result.forecast.forEach(item => {
                const itemEl = document.createElement("div");
                itemEl.className = "forecast-item";
                
                // Map weather type to FontAwesome icons
                let iconHtml = '<i class="fa-solid fa-cloud forecast-icon cloudy"></i>';
                let iconClass = 'cloudy';
                if (item.weather_type === 'sunny') {
                    iconHtml = '<i class="fa-solid fa-sun forecast-icon sunny"></i>';
                    iconClass = 'sunny';
                } else if (item.weather_type === 'sunny-cloudy') {
                    iconHtml = '<i class="fa-solid fa-cloud-sun forecast-icon sunny"></i>';
                    iconClass = 'sunny';
                } else if (item.weather_type === 'rainy') {
                    iconHtml = '<i class="fa-solid fa-cloud-showers-heavy forecast-icon rainy"></i>';
                    iconClass = 'rainy';
                } else if (item.weather_type === 'thunderstorm') {
                    iconHtml = '<i class="fa-solid fa-cloud-bolt forecast-icon thunder"></i>';
                    iconClass = 'thunder';
                }

                // Date formatting (2026-07-07 18:00 -> 07/07 18:00)
                const rawTime = item.time;
                let displayTime = rawTime;
                if (rawTime.length >= 16) {
                    displayTime = rawTime.substring(5, 16);
                }
                
                itemEl.innerHTML = `
                    <span class="forecast-time">${displayTime}</span>
                    ${iconHtml}
                    <span class="forecast-wx" title="${item.wx_desc}">${item.wx_desc}</span>
                    <span class="forecast-temp">${item.min_t}°~${item.max_t}°</span>
                    <span class="forecast-pop"><i class="fa-solid fa-umbrella"></i> ${item.pop}%</span>
                `;
                container.appendChild(itemEl);
            });
        } else {
            container.innerHTML = '<div style="padding: 1rem; width: 100%; text-align: center; color: var(--text-secondary);">暫無該縣市的預報數據。</div>';
        }
    } catch (err) {
        console.error("載入預報失敗:", err);
        container.innerHTML = '<div style="padding: 1rem; width: 100%; text-align: center; color: var(--text-secondary);">載入預報失敗。</div>';
    }
}

// 6. Query and render historical charts using Plotly
async function loadCharts(stationId) {
    try {
        const res = await fetch(`/api/history/${stationId}`);
        const result = await res.json();
        
        if (result.success && result.data.length > 0) {
            const data = result.data;
            const times = data.map(d => new Date(d.time).toLocaleString('zh-TW', { hour12: false }));
            const temps = data.map(d => d.temperature);
            const hums = data.map(d => d.humidity);
            const winds = data.map(d => d.wind_speed);
            const rains = data.map(d => d.rain_daily !== null ? d.rain_daily : d.rainfall);

            // Chart Theme configs
            const layoutConfig = {
                paper_bgcolor: 'rgba(0,0,0,0)',
                plot_bgcolor: 'rgba(0,0,0,0)',
                font: { color: '#7c726c', family: 'Outfit, Noto Sans TC, sans-serif' },
                margin: { t: 40, b: 40, l: 50, r: 50 },
                xaxis: { 
                    gridcolor: 'rgba(124, 114, 108, 0.08)',
                    linecolor: 'rgba(124, 114, 108, 0.15)'
                },
                legend: { orientation: 'h', y: -0.2 }
            };

            // Chart 1: Temperature & Humidity
            const traceTemp = {
                x: times,
                y: temps,
                name: '氣溫 (°C)',
                type: 'scatter',
                mode: 'lines+markers',
                line: { color: '#dc2626', width: 2.5 },
                marker: { size: 6 }
            };

            const traceHum = {
                x: times,
                y: hums,
                name: '相對濕度 (%)',
                type: 'scatter',
                mode: 'lines+markers',
                yaxis: 'y2',
                line: { color: '#0891b2', width: 2.5 },
                marker: { size: 6 }
            };

            const layout1 = {
                ...layoutConfig,
                title: { text: '氣溫 & 相對濕度變化趨勢', font: { size: 14, color: '#451a03' } },
                yaxis: { 
                    title: '氣溫 (°C)',
                    gridcolor: 'rgba(124, 114, 108, 0.08)',
                    linecolor: 'rgba(124, 114, 108, 0.15)'
                },
                yaxis2: {
                    title: '相對濕度 (%)',
                    overlaying: 'y',
                    side: 'right',
                    range: [0, 100],
                    showgrid: false,
                    linecolor: 'rgba(124, 114, 108, 0.15)'
                }
            };

            Plotly.newPlot('temp-humidity-chart', [traceTemp, traceHum], layout1, { responsive: true, displayModeBar: false });

            // Chart 2: Rainfall & Wind Speed
            const traceRain = {
                x: times,
                y: rains,
                name: '累積降雨量 (mm)',
                type: 'bar',
                marker: { color: 'rgba(37, 99, 235, 0.6)' }
            };

            const traceWind = {
                x: times,
                y: winds,
                name: '風速 (m/s)',
                type: 'scatter',
                mode: 'lines+markers',
                yaxis: 'y2',
                line: { color: '#059669', width: 2 },
                marker: { size: 5 }
            };

            const layout2 = {
                ...layoutConfig,
                title: { text: '降雨量 & 風速變化趨勢', font: { size: 14, color: '#451a03' } },
                yaxis: { 
                    title: '降雨量 (mm)',
                    gridcolor: 'rgba(124, 114, 108, 0.08)',
                    linecolor: 'rgba(124, 114, 108, 0.15)'
                },
                yaxis2: {
                    title: '風速 (m/s)',
                    overlaying: 'y',
                    side: 'right',
                    showgrid: false,
                    linecolor: 'rgba(124, 114, 108, 0.15)'
                }
            };

            Plotly.newPlot('rain-wind-chart', [traceRain, traceWind], layout2, { responsive: true, displayModeBar: false });

        }
    } catch (err) {
        console.error("載入歷史圖表失敗:", err);
    }
}

// 7. Event listeners configuration
function setupEventListeners() {
    // County Filter Dropdown
    document.getElementById("county-filter").addEventListener("change", (e) => {
        applyFilters();
    });

    // Search Station input
    document.getElementById("station-search").addEventListener("input", (e) => {
        applyFilters();
    });

    // Trigger API Data Update button
    document.getElementById("btn-update").addEventListener("click", async () => {
        const btn = document.getElementById("btn-update");
        btn.disabled = true;
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> 正在更新資料...';
        
        try {
            const res = await fetch("/api/update", { method: "POST" });
            const result = await res.json();
            if (result.success) {
                alert("資料更新已在背景啟動！系統將於數秒後重新載入。");
                setTimeout(() => {
                    loadData();
                    btn.disabled = false;
                    btn.innerHTML = '<i class="fa-solid fa-arrows-rotate"></i> 更新觀測資料';
                }, 6000); // 6s wait for obs + rain + forecast + typhoon news
            }
        } catch (err) {
            console.error("觸發更新資料失敗:", err);
            btn.disabled = false;
            btn.innerHTML = '<i class="fa-solid fa-arrows-rotate"></i> 更新觀測資料';
            alert("更新資料請求失敗。");
        }
    });

    // AI Prediction trigger
    document.getElementById("btn-predict").addEventListener("click", async () => {
        if (!selectedStation) return;
        const panel = document.getElementById("ai-prediction-card");
        
        if (!panel.classList.contains("hidden")) {
            panel.classList.add("hidden");
            return;
        }

        try {
            const res = await fetch(`/api/predict/${selectedStation.station_id}`);
            const result = await res.json();
            if (result.success) {
                const pred = result.prediction;
                document.getElementById("ai-pred-temp").textContent = `${pred.temperature} °C`;
                document.getElementById("ai-pred-humidity").textContent = `${pred.humidity} %`;
                document.getElementById("ai-pred-rain").textContent = `${pred.rainfall} mm`;
                document.getElementById("ai-pred-wind").textContent = `${pred.wind_speed} m/s`;
                
                panel.classList.remove("hidden");
                panel.scrollIntoView({ behavior: "smooth" });
            }
        } catch (err) {
            console.error("AI 預估載入失敗:", err);
            alert("預估載入失敗。");
        }
    });

    // Close AI panel button
    document.getElementById("btn-close-ai").addEventListener("click", () => {
        document.getElementById("ai-prediction-card").classList.add("hidden");
    });

    // Typhoon Banner click (Open CWA Warning page directly)
    document.getElementById("btn-show-typhoon").addEventListener("click", () => {
        window.open("https://www.cwa.gov.tw/V8/C/P/Typhoon/TY_NEWS.html", "_blank");
    });

    // Close Typhoon Banner
    document.getElementById("btn-close-typhoon").addEventListener("click", () => {
        document.getElementById("typhoon-banner").classList.add("hidden");
    });

    // Header Typhoon details button click (Open CWA Warning page directly)
    const btnTyphoon = document.getElementById("btn-typhoon");
    if (btnTyphoon) {
        btnTyphoon.addEventListener("click", () => {
            window.open("https://www.cwa.gov.tw/V8/C/P/Typhoon/TY_NEWS.html", "_blank");
        });
    }

    // County Forecast button click
    const btnCountyForecast = document.getElementById("btn-county-forecast");
    if (btnCountyForecast) {
        btnCountyForecast.addEventListener("click", () => {
            const select = document.getElementById("county-filter");
            let countyVal = select.value.trim();
            if (!countyVal) {
                // If no county selected, select the first valid county (index 1)
                if (select.options.length > 1) {
                    select.selectedIndex = 1;
                    countyVal = select.value;
                    applyFilters(); // Filter map markers to match
                } else {
                    alert("請先載入縣市資料！");
                    return;
                }
            }
            showCountyForecastOnly(countyVal);
        });
    }
}

// 8. Combine Search input and County selector to filter markers
function applyFilters() {
    const countyVal = document.getElementById("county-filter").value.trim().toLowerCase();
    const searchVal = document.getElementById("station-search").value.trim().toLowerCase();
    
    const filtered = stations.filter(station => {
        const matchesCounty = !countyVal || station.county_name.toLowerCase() === countyVal;
        const matchesSearch = !searchVal || 
            station.station_name.toLowerCase().includes(searchVal) ||
            station.station_id.toLowerCase().includes(searchVal) ||
            station.county_name.toLowerCase().includes(searchVal) ||
            (station.town_name && station.town_name.toLowerCase().includes(searchVal));
            
        return matchesCounty && matchesSearch;
    });

    renderMarkers(filtered);
    
    if (filtered.length > 0) {
        const group = L.featureGroup(filtered.map(s => markersMap[s.station_id]).filter(Boolean));
        map.fitBounds(group.getBounds().pad(0.1));
    }
}

// 9. Helper to show/hide station-specific UI elements in the right panel
function toggleStationSpecificViews(show) {
    const statsGrid = document.querySelector(".stats-grid");
    const aiPredictBtn = document.getElementById("btn-predict");
    const chartsCard = document.querySelector(".charts-card");
    const aiPredictionCard = document.getElementById("ai-prediction-card");
    
    if (show) {
        if (statsGrid) statsGrid.classList.remove("hidden");
        if (aiPredictBtn) aiPredictBtn.classList.remove("hidden");
        if (chartsCard) chartsCard.classList.remove("hidden");
    } else {
        if (statsGrid) statsGrid.classList.add("hidden");
        if (aiPredictBtn) aiPredictBtn.classList.add("hidden");
        if (chartsCard) chartsCard.classList.add("hidden");
        if (aiPredictionCard) aiPredictionCard.classList.add("hidden");
    }
}

// 10. Display only the 7-day county forecast in the right panel
async function showCountyForecastOnly(countyName) {
    selectedStation = null; // Clear active station selection
    
    // Hide empty state and show dashboard content
    document.getElementById("no-station-selected").classList.add("hidden");
    document.getElementById("station-dashboard").classList.remove("hidden");
    
    // Hide all station-specific modules
    toggleStationSpecificViews(false);
    
    // Update headers to display county forecast info
    document.getElementById("current-station-name").textContent = `${countyName} 一週天氣預報`;
    document.getElementById("current-station-meta").textContent = 
        `中央氣象署官方預報資料 | 7 天未來天氣趨勢預測`;
        
    // Fetch and render the 7-day county forecast
    loadForecast(countyName);
}
