const easterEggs = document.querySelector("#loader");
const opac = document.querySelector("#home");

setTimeout(() => {
  easterEggs.style.display = "none";
}, 2000);
setTimeout(() => {
  opac.style.opacity = "1";
}, 2300);
