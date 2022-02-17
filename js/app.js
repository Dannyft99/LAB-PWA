const container = document.querySelector(".container");
const images = [
  { name: "Alas", image: "img/alas1.jpg" },
  { name: "Hamburguesa", image: "img/hamburguesa1.jpg" },
  { name: "Jugo", image: "img/jugos1.jpg" },
  { name: "Tacos", image: "img/tacos1.jpg" },
  { name: "Batidos", image: "img/batidos1.jpg" },
  { name: "Cerveza", image: "img/cerveza1.jpg" },
  { name: "Coctel", image: "img/coctel1.jpg" },
  { name: "Hamburguesa", image: "img/hamburguesa2.jpg" },
  { name: "Salchipapa", image: "img/salchi1.jpg" },
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
        .then(res => console.log("service worker registrado"))
        .catch(err => console.log("service worker no registrado", err));
    });
  }

cohort = await document.interestCohort();
url = new URL("https://ads.example/getCreative");
url.searchParams.append("cohort", cohort);
creative = await fetch(url);
