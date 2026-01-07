import "./styles.css";
import { footer } from "./footer.js";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";

const content = document.getElementById("content");

function addButtonPage(button, func) {
  button.addEventListener("click", () => {
    content.textContent = "";
    func();
  })
}

const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const contactBtn = document.getElementById("contact");

const btnPageList = [
  [homeBtn, home],
  [menuBtn, menu],
  [contactBtn, contact],
]

for (let [btn, func] of btnPageList) {
  addButtonPage(btn, func);
}

home();
footer();