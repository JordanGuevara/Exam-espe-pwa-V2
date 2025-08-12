const CACHE_NAME = 'espe-pwa-cache-v1';

const guardadoESPE = [
  './',
  './index.html',
  './css/app.css',
  './js/app.js',
  // Añade aquí tus imágenes principales
  './assets/img/software.webp',
  './assets/img/información.webp',
  './assets/img/agropecuaria.webp',

];

// Evento install: cachear los recursos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(guardadoESPE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; 
        }
        return fetch(event.request) 
          .then(fetchResponse => {
            return caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, fetchResponse.clone()); 
              return fetchResponse;
            });
          });
      }).catch(() => {
        if (event.request.destination === 'document') {
          return caches.match('./index.html');
        }
      })
  );
});
