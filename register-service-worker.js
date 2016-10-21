
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js', {
        scope: '/tic-tac-toe-offline/'
    }).then(function(sw) {
        console.info("service worker registered");
    }).catch(function() {
        console.error("service worker registration failed");
    });
}