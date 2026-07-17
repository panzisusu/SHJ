const state = {
    movies: [],
    genres: []
};

const searchInput = document.getElementById("search-input");
const genreSelect = document.getElementById("genre-select");
const scoreSelect = document.getElementById("score-select");
const grid = document.getElementById("movie-grid");
const template = document.getElementById("movie-card-template");
const totalCount = document.getElementById("total-count");
const genreCount = document.getElementById("genre-count");
const topScore = document.getElementById("top-score");

function normalizeMovie(raw, index) {
    return {
        id: raw.ID || String(index + 1),
        title: raw["電影名稱"] || "未命名電影",
        genres: raw["類型"] || "",
        region: raw["地區"] || "",
        duration: raw["片長(分鐘)"] || "",
        releaseDate: raw["上映日期"] || "",
        score: Number.parseFloat(raw["評分"]) || 0,
        localCoverUrl: `./covers/cover_${raw.ID || index + 1}.jpg`,
        coverUrl: raw["封面連結"] || "",
        directors: raw["導演"] || "",
        actors: raw["演員"] || "",
        summary: raw["劇情簡介"] || "",
        detailUrl: raw["詳細頁網址"] || ""
    };
}

function setupFilters() {
    const genres = new Set();
    state.movies.forEach(movie => {
        movie.genres.split(",").map(item => item.trim()).filter(Boolean).forEach(item => genres.add(item));
    });
    state.genres = [...genres].sort((a, b) => a.localeCompare(b, "zh-Hant"));

    state.genres.forEach(genre => {
        const option = document.createElement("option");
        option.value = genre;
        option.textContent = genre;
        genreSelect.appendChild(option);
    });

    genreCount.textContent = state.genres.length;
    topScore.textContent = Math.max(...state.movies.map(movie => movie.score)).toFixed(1);
}

function getFilteredMovies() {
    const keyword = searchInput.value.trim().toLowerCase();
    const genre = genreSelect.value;
    const minScore = Number.parseFloat(scoreSelect.value) || 0;

    return state.movies.filter(movie => {
        const haystack = `${movie.title} ${movie.directors} ${movie.actors} ${movie.summary}`.toLowerCase();
        const matchesKeyword = !keyword || haystack.includes(keyword);
        const matchesGenre = !genre || movie.genres.includes(genre);
        const matchesScore = movie.score >= minScore;
        return matchesKeyword && matchesGenre && matchesScore;
    });
}

function trimText(text, maxLength) {
    if (!text || text.length <= maxLength) {
        return text;
    }
    return `${text.slice(0, maxLength)}...`;
}

function renderMovies() {
    const movies = getFilteredMovies();
    totalCount.textContent = movies.length;
    grid.innerHTML = "";

    if (movies.length === 0) {
        grid.innerHTML = "<p class=\"empty-state\">目前沒有符合條件的電影。</p>";
        return;
    }

    movies.forEach((movie, index) => {
        const card = template.content.firstElementChild.cloneNode(true);
        const poster = card.querySelector(".movie-poster");
        const posterFrame = card.querySelector(".poster-frame");
        let triedRemoteCover = false;

        if (movie.localCoverUrl) {
            poster.src = movie.localCoverUrl;
            poster.alt = `${movie.title} 海報`;
            poster.addEventListener("error", () => {
                if (movie.coverUrl && !triedRemoteCover) {
                    triedRemoteCover = true;
                    poster.src = movie.coverUrl;
                    return;
                }
                posterFrame.classList.add("poster-missing");
            });
        } else {
            posterFrame.classList.add("poster-missing");
        }

        card.querySelector(".movie-rank").textContent = `No. ${index + 1}`;
        card.querySelector(".movie-score").textContent = `★ ${movie.score.toFixed(1)}`;
        card.querySelector("h2").textContent = movie.title;
        card.querySelector(".movie-meta").textContent = `${movie.genres || "未分類"} | ${movie.region || "未知地區"} | ${movie.duration || "未知"} 分鐘`;
        card.querySelector(".movie-people").textContent = `導演：${movie.directors || "未知"} | 上映：${movie.releaseDate || "未知"}`;
        card.querySelector(".movie-summary").textContent = trimText(movie.summary, 150);

        const link = card.querySelector(".detail-link");
        if (movie.detailUrl) {
            link.href = movie.detailUrl;
        } else {
            link.remove();
        }

        grid.appendChild(card);
    });
}

async function init() {
    const response = await fetch("movies_raw.json");
    const rawMovies = await response.json();
    state.movies = rawMovies.map(normalizeMovie).sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
    setupFilters();
    renderMovies();
}

[searchInput, genreSelect, scoreSelect].forEach(control => {
    control.addEventListener("input", renderMovies);
    control.addEventListener("change", renderMovies);
});

init().catch(error => {
    console.error("Failed to load movie data:", error);
    grid.innerHTML = "<p class=\"empty-state\">電影資料載入失敗，請稍後再試。</p>";
});

// ==========================================================================
// Client-Side AI Chatbot Logic
// ==========================================================================
(function() {
    const chatbotToggle = document.getElementById("chatbot-toggle");
    const chatbotWindow = document.getElementById("chatbot-window");
    const closeChatbot = document.getElementById("close-chatbot");
    const chatbotInput = document.getElementById("chatbot-input");
    const sendChat = document.getElementById("send-chat");
    const chatbotMessages = document.getElementById("chatbot-messages");
    const keyConfigBtn = document.getElementById("key-config-btn");
    const keyConfigPanel = document.getElementById("key-config-panel");
    const geminiKeyInput = document.getElementById("gemini-key-input");
    const saveKeyBtn = document.getElementById("save-key-btn");

    // Load saved Gemini Key from localStorage
    let geminiApiKey = localStorage.getItem("gemini_api_key") || "";
    if (geminiApiKey) {
        geminiKeyInput.value = geminiApiKey;
    }

    // Toggle chatbot window
    chatbotToggle.addEventListener("click", () => {
        const isHidden = chatbotWindow.style.display === "none";
        chatbotWindow.style.display = isHidden ? "flex" : "none";
        if (isHidden) {
            chatbotInput.focus();
            scrollChatToBottom();
        }
    });

    closeChatbot.addEventListener("click", () => {
        chatbotWindow.style.display = "none";
    });

    // Toggle API key configuration panel
    keyConfigBtn.addEventListener("click", () => {
        const isHidden = keyConfigPanel.style.display === "none";
        keyConfigPanel.style.display = isHidden ? "flex" : "none";
    });

    // Save API key
    saveKeyBtn.addEventListener("click", () => {
        const key = geminiKeyInput.value.trim();
        geminiApiKey = key;
        localStorage.setItem("gemini_api_key", key);
        keyConfigPanel.style.display = "none";
        
        appendMessage("🔑 Gemini API 金鑰設定儲存成功！已啟用 AI 深度對話服務。", "bot-message");
        scrollChatToBottom();
    });

    // Scroll chat area to bottom
    function scrollChatToBottom() {
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Append message bubble helper
    function appendMessage(text, className) {
        const msgDiv = document.createElement("div");
        msgDiv.className = `message ${className}`;
        
        // Format links and bold text in markdown-like syntax
        let formattedText = text
            .replace(/\n/g, "<br>")
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
            .replace(/\*(.*?)\*/g, "<em>$1</em>");
            
        msgDiv.innerHTML = `<p>${formattedText}</p>`;
        chatbotMessages.appendChild(msgDiv);
    }

    // Show typing indicator helper
    function showTypingIndicator() {
        const indicator = document.createElement("div");
        indicator.className = "message bot-message typing-indicator";
        indicator.innerHTML = `
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        `;
        chatbotMessages.appendChild(indicator);
        return indicator;
    }

    // Client-side rule-based chatbot fallback when API key is missing
    function localRuleBasedChatbot(question) {
        question = question.toLowerCase().trim();
        const movies = state.movies;

        if (movies.length === 0) {
            return "🤖 資料載入中，請稍後再試。";
        }

        // 1. Highest score / Best movies
        if (/最好|評分最高|分數最高|評價最高|推薦|高分|最好看/.test(question)) {
            const sorted = [...movies].sort((a, b) => b.score - a.score).slice(0, 5);
            const list = sorted.map((m, i) => `${i + 1}. 🏆 《${m.title}》 (★ ${m.score.toFixed(1)})`).join("\n");
            return "為您推薦評分最高的經典電影：\n" + list;
        }

        // 2. Chinese movies / 華人片
        if (/華人|華語|中文|台灣|香港|中國|內地|國片|華人片/.test(question)) {
            const chineseMovies = movies.filter(m => /中國|香港|台灣|華/.test(m.region));
            if (chineseMovies.length > 0) {
                const list = chineseMovies.slice(0, 8).map(m => `🎬 《${m.title}》 (${m.region}，★ ${m.score.toFixed(1)})`).join("\n");
                return `資料庫中共有 ${chineseMovies.length} 部華語/華人地區電影，推薦以下幾部：\n` + list;
            }
            return "目前資料庫中沒有找到華人地區的電影。";
        }

        // 3. Longest / shortest movie
        if (/最長|時間最長|片長最長|播放最長/.test(question)) {
            const sorted = [...movies].sort((a, b) => (Number(b.duration) || 0) - (Number(a.duration) || 0)).slice(0, 3);
            const list = sorted.map((m, i) => `${i + 1}. ⏳ 《${m.title}》 (${m.duration} 分鐘)`).join("\n");
            return "片長最長的前三名電影是：\n" + list;
        }
        
        if (/最短|時間最短|片長最短|播放最短/.test(question)) {
            const sorted = movies.filter(m => (Number(m.duration) || 0) > 0).sort((a, b) => (Number(a.duration) || 0) - (Number(b.duration) || 0)).slice(0, 3);
            const list = sorted.map((m, i) => `${i + 1}. ⏱️ 《${m.title}》 (${m.duration} 分鐘)`).join("\n");
            return "片長最短的前三名電影是：\n" + list;
        }

        // 4. Search by specific Year
        const yearMatch = question.match(/\b(19\d{2}|20\d{2})\b/);
        if (yearMatch) {
            const year = yearMatch[1];
            const yearMovies = movies.filter(m => m.releaseDate.includes(year));
            if (yearMovies.length > 0) {
                const list = yearMovies.slice(0, 10).map(m => `📅 《${m.title}》 (★ ${m.score.toFixed(1)})`).join("\n");
                let resp = `在 ${year} 年上映的經典電影有：\n` + list;
                if (yearMovies.length > 10) resp += `\n...以及其他 ${yearMovies.length - 10} 部電影。`;
                return resp;
            }
            return `抱歉，目前資料庫中沒有在 ${year} 年上映的電影資訊。`;
        }

        // 5. Search by Genres
        const genres = ["劇情", "愛情", "科幻", "犯罪", "動作", "喜劇", "戰爭", "災難", "古裝", "歷史", "冒險", "奇幻", "懸疑", "驚悚", "動畫", "歌舞", "傳記", "家庭"];
        const matchedGenres = [];
        const genreMapping = {
            "剧情": "劇情", "爱情": "愛情", "动作": "動作", "喜剧": "喜劇", "战争": "戰爭", "灾难": "災難", "冒险": "冒險", "悬疑": "懸疑", "惊悚": "驚悚", "动画": "動畫", "传记": "傳記"
        };
        for (const [s_genre, t_genre] of Object.entries(genreMapping)) {
            if (question.includes(s_genre) || question.includes(t_genre)) {
                matchedGenres.push(t_genre);
            }
        }
        genres.forEach(g => {
            if (question.includes(g) && !matchedGenres.includes(g)) {
                matchedGenres.push(g);
            }
        });
        if (matchedGenres.length > 0) {
            const genreMovies = movies.filter(m => matchedGenres.some(g => m.genres.includes(g)));
            if (genreMovies.length > 0) {
                const list = genreMovies.slice(0, 8).map(m => `🎬 《${m.title}》 (${m.genres}，★ ${m.score.toFixed(1)})`).join("\n");
                return `為您推薦以下 ${matchedGenres.join(", ")} 經典電影：\n` + list;
            }
            return `目前沒有找到屬於 ${matchedGenres.join(", ")} 的電影。`;
        }

        // 6. Specific movie plot / details
        let matchedMovie = null;
        for (const m of movies) {
            const cleanTitle = m.title.split("-")[0].trim().toLowerCase();
            const fullTitle = m.title.toLowerCase();
            if (question.includes(cleanTitle) || question.includes(fullTitle)) {
                matchedMovie = m;
                break;
            }
        }
        if (matchedMovie) {
            return `🎬 **《${matchedMovie.title}》**\n★ 評分：${matchedMovie.score.toFixed(1)} 分\n🎬 導演：${matchedMovie.directors || "未知"}\n👥 主演：${matchedMovie.actors || "未知"}\n\n📖 **劇情大綱**：\n${matchedMovie.summary}`;
        }

        // 7. Search by Actor / Director
        let directorMatches = [];
        let actorMatches = [];
        for (const m of movies) {
            if (m.directors) {
                const dirs = m.directors.split(",").map(d => d.trim().toLowerCase());
                dirs.forEach(d => {
                    if (d && question.includes(d)) directorMatches.push({ title: m.title, score: m.score, name: d });
                });
            }
            if (m.actors) {
                const acts = m.actors.split(",").map(a => a.trim().toLowerCase().replace(/\(.*?\)/g, ""));
                acts.forEach(a => {
                    if (a && a.length >= 2 && question.includes(a)) actorMatches.push({ title: m.title, score: m.score, name: a });
                });
            }
        }
        if (directorMatches.length > 0) {
            const name = directorMatches[0].name.toUpperCase();
            const list = [...new Set(directorMatches.map(item => `• 《${item.title}》 (★ ${item.score.toFixed(1)})`))].join("\n");
            return `🎥 找到了！導演 **${name}** 在資料庫中的經典電影有：\n` + list;
        }
        if (actorMatches.length > 0) {
            const name = actorMatches[0].name.toUpperCase();
            const list = [...new Set(actorMatches.map(item => `• 《${item.title}》 (★ ${item.score.toFixed(1)})`))].join("\n");
            return `👥 找到了！演員 **${name}** 主演的經典電影有：\n` + list;
        }

        // Default response when no rule matched
        return `🤖 您好！我是電影 AI 助手。您可以問我關於這 100 部經典電影的資訊，例如：\n` +
               `- 「評分最高的是哪幾部電影？」\n` +
               `- 「有哪些台灣或香港電影？」\n` +
               `- 「片長最長的電影是哪一部？」\n` +
               `- 「推薦一些經典科幻片/愛情片」\n` +
               `- 「霸王別姬的劇情大綱是什麼？」\n\n` +
               `💡 *提示：您可以點擊右上角的 🔑 按鈕輸入您的 Gemini API Key，即可啟用更強大、能夠深度自然對話的 AI 智慧推薦服務喔！*`;
    }

    // Generate dynamic movie context string to feed to Gemini API
    function getMoviesContext() {
        return state.movies.map(m => ({
            "電影名稱": m.title,
            "評分": m.score,
            "類型": m.genres,
            "地區": m.region,
            "片長(分鐘)": m.duration,
            "上映日期": m.releaseDate,
            "導演": m.directors,
            "演員": m.actors,
            "劇情簡介": m.summary.slice(0, 100) + "..."
        }));
    }

    // Call Gemini API client-side
    async function askGemini(question) {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`;
        const context = JSON.stringify(getMoviesContext(), null, 2);
        
        const systemInstruction = `你是一個專業的電影 AI 助手。你擁有以下 100 部經典電影的資料庫：
${context}

請務必遵守以下規範：
1. 根據這個資料庫 the context 內容回答使用者的問題（如評分、導演、片長、上映時間、演員等）。
2. 如果使用者詢問哪些電影「適合全家觀看」、「適合小孩子」、「適合家長與兒童」等，請根據資料庫中電影的屬性（例如篩選掉過於暴力的犯罪/驚悚片如《這個殺手不太冷》或《肖申克的救贖》，並推薦「動畫」、「冒險」、「奇幻」或溫馨類別的電影，例如《獅子王》、《千與千尋》、《龍貓》等）。
3. 回答時請使用繁體中文（台灣用語），口吻親切、有條理。
4. 如果使用者問到資料庫之外的電影，你可以根據你原本的知識回答，但請說明該電影並不在這 100 部經典電影資料庫中。`;

        const requestBody = {
            contents: [
                {
                    parts: [
                        { text: question }
                    ]
                }
            ],
            systemInstruction: {
                parts: [
                    { text: systemInstruction }
                ]
            }
        };

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            throw new Error(errData.error?.message || `HTTP error ${response.status}`);
        }

        const data = await response.json();
        return data.candidates?.[0]?.content?.parts?.[0]?.text || "🤖 AI 無法回傳有效內容，請重新提問。";
    }

    // Send Message Trigger
    async function sendMessage() {
        const text = chatbotInput.value.trim();
        if (!text) return;

        appendMessage(text, "user-message");
        chatbotInput.value = "";
        
        const typing = showTypingIndicator();
        scrollChatToBottom();

        try {
            let responseText = "";
            if (geminiApiKey) {
                // Call Google Gemini directly via HTTPS
                responseText = await askGemini(text);
            } else {
                // Local rule fallback
                responseText = localRuleBasedChatbot(text);
            }
            typing.remove();
            appendMessage(responseText, "bot-message");
            scrollChatToBottom();
        } catch (error) {
            console.error("Gemini API call failed:", error);
            typing.remove();
            appendMessage(`❌ API 連線異常（${error.message}）。請點擊 🔑 檢查您的 API Key 是否正確，或暫時清除 API Key 以使用本地規則引擎。`, "bot-message");
            scrollChatToBottom();
        }
    }

    // Bind keyboard and click triggers
    sendChat.addEventListener("click", sendMessage);
    chatbotInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    });
})();
