const container = document.querySelector(".container");
const images = [
  { name: "Alas", image: "img/alas1.jpg" },
  { name: "Hamburguesa", image: "img/hamburguesa1.jpg" },
  { name: "Jugo", image: "img/jugos1.jpg" }
];

const showImages = () => {
    let output = ""
    images.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Ver</a>
                </div>
                `)
    );
    container.innerHTML = output;
  }
  
  document.addEventListener("DOMContentLoaded", showImages);

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("./serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err));
    });
  }