self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};

  event.waitUntil(
    self.registration.showNotification(
      data.title || 'Transporte Rachi',
      {
        body: data.body || 'Tenés una nueva notificación',
        icon: '/Transporte-rachi/icon-192.png',
        badge: '/Transporte-rachi/icon-192.png'
      }
    )
  );
});
