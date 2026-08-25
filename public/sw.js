// Fluxplay IPTV PWA Service Worker
const CACHE_NAME = 'fluxplay-v1.0.1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/app-icon.jpg',
  '/favicon.jpg',
  '/pwa-icon-192.png',
  '/pwa-icon-512.png',
  '/pwa-maskable-192.png',
  '/pwa-maskable-512.png',
  '/fluxplay-01.jpg',
  '/fluxplay-02.jpg',
  '/fluxplay-03.jpg',
  '/fluxplay-04.jpg',
  '/fluxplay-05.jpg',
  '/fluxplay-06.jpg',
  '/fluxplay-07.jpg',
  '/fluxplay-08.jpg',
  '/fluxplay-cover.jpg'
];

// Install Event: pre-cache critical shell assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('PWA Pre-cache partial failure:', err);
      });
    }).then(() => self.skipWaiting())
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

// Fetch Event: Stale-While-Revalidate for local assets, Network-First for dynamic navigation
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Ignore non-http schemes (e.g., chrome-extension)
  if (!url.protocol.startsWith('http')) return;

  // For navigation requests, try network first, fallback to cached index.html
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response.ok) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
          }
          return response;
        })
        .catch(async () => {
          const cachedResponse = await caches.match(event.request);
          if (cachedResponse) return cachedResponse;
          const fallback = await caches.match('/index.html');
          return fallback || new Response('Offline', { status: 503, statusText: 'Offline' });
        })
    );
    return;
  }

  // For static assets (images, fonts, scripts): Cache First / Stale While Revalidate
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});
