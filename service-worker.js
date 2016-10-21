
var CACHE_NAME = 'tic-tac-toe-offline-v1';

var urlsToCache = [
    '/',
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
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                console.log("request:", event.request);

                if (response) {
                    console.info("cache hit");
                    return response;
                }

                console.info("fetching");
                return fetch(event.request);
            })
    );
});