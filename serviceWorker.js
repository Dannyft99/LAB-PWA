const staticDelMeals = "delicious-meals-static";
const DinamicDelMeals = "delicious-meals-dinamic";
const assets = [
  "/LAB-PWA/",
  "/LAB-PWA/index.html",
  "/LAB-PWA/css/style.css",
  "/LAB-PWA/js/app.js",
  "/LAB-PWA/img/alas1.jpg",
  "/LAB-PWA/img/hamburguesa1.jpg",
  "/LAB-PWA/img/jugos1.jpg",
  "/LAB-PWA/img/tacos1.jpg",
  "/LAB-PWA/img/batidos1.jpg",
  "/LAB-PWA/img/cerveza1.jpg",
  "/LAB-PWA/img/coctel1.jpg",
  "/LAB-PWA/img/hamburguesa2.jpg",
  "/LAB-PWA/img/salchi1.jpg"
];

self.addEventListener("install", installEvent => {
  console.log('Instalando!');
  installEvent.waitUntil(
    caches.open(staticDelMeals).then(cache => {
      console.log('Instalacion completada!');
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent =>{
  var request = fetchEvent.request;
  fetchEvent.respondWith(
    fetch(fetchEvent.request)
    .then(async function(res){
      const cache = await caches.open(DinamicDelMeals);
      cache.put(fetchEvent.request.url, res.clone());
      return res;
    })
    .catch(function(err){
      return caches.match(fetchEvent.request);
    })
  );
});


/*self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.open(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  );
});*/
