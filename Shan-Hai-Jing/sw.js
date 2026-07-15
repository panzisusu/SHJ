const CACHE_NAME = "shanhaijing-cache-v25";

const ASSETS_TO_CACHE = [
  "./",
  "index.html",
  "styles.css",
  "app.js",
  "manifest.json",
  "assets/webp/placeholder_beast.webp"
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

// Fetch event: Serve cached assets if available, else fetch and dynamic-cache them
self.addEventListener("fetch", (event) => {
  // Only handle GET requests and local/HTTP origins
  if (event.request.method !== "GET" || !event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).then((networkResponse) => {
        // Cache newly fetched assets dynamically (like beast illustrations)
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Offline fallback for images
        if (event.request.url.match(/\.(png|jpg|jpeg|gif|svg)$/)) {
          return caches.match("assets/webp/placeholder_beast.webp");
        }
      });
    })
  );
});
