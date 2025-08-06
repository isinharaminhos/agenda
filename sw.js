const CACHE_NAME = 'pwa-task-list-v1';
const urlsToCache = [
    '/agenda/',
    '/agenda/index.html',
    '/agenda/style.css',
    '/agenda/manifest.json',
    '/agenda/icons/imagem1.png',
    '/agenda/icons/imagem2.png'
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
                return response || fetch(event.request);
            })
    );
});


