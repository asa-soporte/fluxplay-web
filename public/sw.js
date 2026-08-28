// Fluxplay IPTV PWA Service Worker
const CACHE_NAME = 'fluxplay-web-v3.1.0';
const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './app-icon.jpg',
  './favicon.png',
  './pwa-icon-192.png',
  './pwa-icon-512.png',
  './pwa-maskable-192.png',
  './pwa-maskable-512.png',
  './icon-192.png',
  './icon-512.png',
  './icon-1024.png',
  './screenshot-wide.jpg',
  './screenshot-mobile.jpg',
  './fluxplay-01.jpg',
  './fluxplay-02.jpg',
  './fluxplay-03.jpg',
  './fluxplay-04.jpg',
  './fluxplay-05.jpg',
  './fluxplay-06.jpg',
  './fluxplay-07.jpg',
  './fluxplay-08.jpg',
  './fluxplay-09.jpg',
  './fluxplay-010.jpg',
  './fluxplay-cover.jpg'
];

// Install Event: pre-cache critical shell assets
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('PWA Pre-cache note:', err);
      });
    })
  );
});

// Activate Event: clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Stale-while-revalidate for local assets, Network First for HTML navigation
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Ignore non-GET requests & dev/Vite assets
  if (
    event.request.method !== 'GET' ||
    url.pathname.includes('/@vite') ||
    url.pathname.includes('/@fs') ||
    url.pathname.includes('/@react-refresh')
  ) {
    return;
  }

  // Navigation requests (HTML)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(event.request);
          if (cached) return cached;
          return caches.match('/index.html');
        })
    );
    return;
  }

  // Same-origin static assets
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          // Revalidate in background
          fetch(event.request)
            .then((networkResponse) => {
              if (networkResponse && networkResponse.status === 200) {
                caches.open(CACHE_NAME).then((cache) => cache.put(event.request, networkResponse));
              }
            })
            .catch(() => {});
          return cachedResponse;
        }

        return fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              const clone = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
            }
            return networkResponse;
          })
          .catch(() => caches.match('/favicon.png'));
      })
    );
  }
});
