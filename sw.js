// Minimal service worker — required by Chrome/Android to treat this as an installable PWA.
// No offline caching logic; it just needs to exist and handle fetch.
self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => self.clients.claim());
self.addEventListener('fetch', () => {}); // pass-through, no caching
