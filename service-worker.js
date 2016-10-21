
var CACHE_NAME = 'tic-tac-toe-offline-v1';

var urlsToCache = [
    '/index.html',
    '/style.css',
    '/tic-tac-toe.js',
    '/register-service-worker.js',
    '/service-worker.js'
];

self.addEventListener('install', function(event) {
    console.info("installing service worker");

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.info("cache opened");

                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('activate', function(event) {
    console.info("service worker activated");
});

self.addEventListener('fetch', function(event) {
    console.info("fetching");

    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response) {
                    console.info("cache hit");
                    return response;
                }

                return fetch(event.request);
            })
    );
});