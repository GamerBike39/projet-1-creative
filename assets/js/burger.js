const hamburgerToggler = document.querySelector(".hamburger");
const navLinksContainer = document.querySelector(".navlinks-container");
let opaBody = document.querySelector("body");

function toggleNav() {
  hamburgerToggler.classList.toggle("open");

  const ariaToggle =
    hamburgerToggler.getAttribute("aria-expanded") === "true"
      ? "false"
      : "true";
  hamburgerToggler.setAttribute("aria-expanded", ariaToggle);

  navLinksContainer.classList.toggle("open");
}
hamburgerToggler.addEventListener("click", toggleNav);

new ResizeObserver((entries) => {
  if (entries[0].contentRect.width <= 900) {
    navLinksContainer.style.transition = "transform 0.3s ease-out";
    navLinksContainer.style.background = "rgb(28,24,26)";
    navLinksContainer.style.background =
      "linear-gradient(90deg, rgba(28,24,26,1) 0%, rgba(78,70,70,1) 57%, rgba(46,48,52,1) 76%, rgba(113,106,101,1) 100%);";
  } else {
    navLinksContainer.style.transition = "none";
    navLinksContainer.style.background = "";
  }
}).observe(document.body);

let lastScrollTop;
// stock la position;

navbar = document.getElementById("navbar");

window.addEventListener("scroll", function hover() {
  //fonction appelée sur chaque scroll

  let scrollTop = window.pageYOffset;
  //connaitre la position du scroll

  if (scrollTop > lastScrollTop) {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "flex";
  }

  if (scrollTop < lastScrollTop) {
    navbar.style.background = "rgb(28,24,26,70)";
    navbar.style.background = "#1E1E1E";
  } else {
    navbar.style.background = "transparent";
  }

  lastScrollTop = scrollTop; // sauve la dernière position
});

function voirNav(e) {
  console.log("clientX :", e.clientX, "clientY :", e.clientY);
  if ((e.clientY = 90) || e.clientX < 150) {
    navbar.style.display = "flex";
    navbar.style.background = "#1E1E1E";
  }
  if (e.clientY >= 92 && e.clientX >= 200) {
    navbar.style.display = "none";
  }
}

const mouse = window.addEventListener("mousemove", voirNav);
