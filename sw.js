const staticCacheName = "cache-nome-do-seu-app";
self.addEventListener("install", function (event) {
  // Registre os recursos que você deseja disponibilizar offline
  this.skipWaiting();
  event.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
      return cache.addAll(["/app/index.js"]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  // Verifique se o recurso está disponível offline

  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== staticCacheName)
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );
});
