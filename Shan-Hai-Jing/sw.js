const CACHE_NAME = "shanhaijing-cache-v69";

const ASSETS_TO_CACHE = [
  "./",
  "index.html",
  "game.html",
  "game-premium.html",
  "game-legacy.html",
  "styles.css",
  "database.js",
  "app.js",
  "card-game.js",
  "manifest.json",
  "assets/webp/placeholder_beast.webp",
  "assets/webp/shj_cover_v3.webp",
  "assets/layout_a_capture.png",
  "assets/layout_b_capture.png",
  "assets/layout_c_capture.png",
  "assets/layout_sketch_capture.png"
];

// Install Service Worker and cache core assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate Service Worker and clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event: Network-first for HTML pages so latest code applies instantly; cache-first for assets
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || !event.request.url.startsWith(self.location.origin)) {
    return;
  }

  const isHtmlRequest = event.request.headers.get("accept")?.includes("text/html") || event.request.url.endsWith(".html");

  if (isHtmlRequest) {
    event.respondWith(
      fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));
        }
        return networkResponse;
      }).catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        if (event.request.url.match(/\.(png|jpg|jpeg|gif|svg|webp)$/)) {
          return caches.match("assets/webp/placeholder_beast.webp");
        }
      });
    })
  );
});
