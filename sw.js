// Increment this VERSION to force clients to update
const VERSION = 'v3';
const CACHE_NAME = `bulldozer-cache-${VERSION}`;
const ASSETS = [
  '/',
  '/index.html',
  '/favicon.png',
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => key !== CACHE_NAME && caches.delete(key)));
      await self.clients.claim();
    })()
  );
});

// Strategy:
// - HTML (navigation): network-first to pick up new builds, fallback to cache when offline
// - JS/CSS: stale-while-revalidate
// - Images/others: cache-first with fallback
self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Bypass cross-origin API calls if needed (let browser handle caching)
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request));
    return;
  }

  const dest = request.destination;
  if (dest === 'script' || dest === 'style') {
    event.respondWith(staleWhileRevalidate(request));
    return;
  }

  if (dest === 'image' || dest === 'font') {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Default to stale-while-revalidate
  event.respondWith(staleWhileRevalidate(request));
});

async function networkFirst(request) {
  try {
    const response = await fetch(request, { cache: 'no-store' });
    const cache = await caches.open(CACHE_NAME);
    cache.put(request, response.clone());
    return response;
  } catch (err) {
    const cached = await caches.match(request);
    return cached || caches.match('/index.html');
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  const networkPromise = fetch(request).then((response) => {
    cache.put(request, response.clone());
    return response;
  }).catch(() => undefined);
  return cached || networkPromise || fetch(request);
}

async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  cache.put(request, response.clone());
  return response;
}

// Allow app to trigger an update check
self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') self.skipWaiting();
});


