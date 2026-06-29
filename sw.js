const CACHE_NAME = 'livezon-pwa-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // ئەگەر لە کاشدا هەبوو پێشانی بدە، ئەگەرنا لە ئینتەرنێتەوە بیهێنە
        return response || fetch(event.request);
      })
  );
});
