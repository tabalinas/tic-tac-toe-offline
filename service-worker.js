
var CACHE_NAME = 'tic-tac-toe-offline-v1';

var urlsToCache = [
    '/tic-tac-toe-offline/index.html',
    '/tic-tac-toe-offline/style.css',
    '/tic-tac-toe-offline/tic-tac-toe.js',
    '/tic-tac-toe-offline/register-service-worker.js',
    '/tic-tac-toe-offline/service-worker.js'
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