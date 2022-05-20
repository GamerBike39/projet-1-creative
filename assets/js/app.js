const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burgerMenu");
const easterEggs = document.querySelector(".title2");
const scroll = (window.location.hash = "awesome");

function toggleMenu() {
  burger.addEventListener("click", () => {
    burger.classList.toggle("showMenu");
  });
}
toggleMenu();

// EasterEggs title

function ahah() {
  easterEggs.addEventListener("click", () => {
    easterEggs.classList.toggle("animate__hinge");
  });
}
ahah();
