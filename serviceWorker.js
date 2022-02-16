const staticDelMeals = "delicious-meals-site";
const assets = [
  "/LAB-PWA/",
  "/LAB-PWA/index.html",
  "/LAB-PWA/css/style.css",
  "/LAB-PWA/js/app.js",
  "/LAB-PWA/img/alas1.jpg",
  "/LAB-PWA/img/hamburguesa1.jpg",
  "/LAB-PWA/img/jugos1.jpg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDelMeals).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  );
});
