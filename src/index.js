// Les fonctions build acceptent toutes un unique paramètre HTLMElement
// Et elles modifient le innerHTML de cet élément sans rien retourner

import { buildHome } from "./home/home.js";
import { buildMenu } from "./menu/menu.js";
import { buildAbout } from "./about/about.js";

const contentDiv = document.getElementById("content");
const buttons = document.querySelectorAll("button");
const strats = {
  "nav-btn-home": buildHome,
  "nav-btn-menu": buildMenu,
  "nav-btn-about": buildAbout,
};

function emptyDiv(div) {
  div.innerHTML = "";
}

buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    emptyDiv(contentDiv);
    strats[event.target.id](contentDiv);
  });
});
