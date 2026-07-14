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
        localCoverUrl: `https://netwarm-movie.vercel.app/covers/cover_${raw.ID || index + 1}.jpg`,
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
