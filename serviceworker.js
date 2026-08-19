const CACHE = "haushaltsplan-v1";
const ASSETS = ["./", "./index.html", "./manifest.json"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  // Firestore/Firebase-Anfragen immer live aus dem Netz holen, nicht cachen
  if (e.request.url.includes("googleapis.com") || e.request.url.includes("gstatic.com/firebasejs")) return;
  e.respondWith(
    caches.match(e.request).then((cached) => cached || fetch(e.request))
  );
});
