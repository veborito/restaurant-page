import "./styles.css";

const body = document.querySelector("body");
const footer = document.createElement("footer");
const unsplashCredit = document.createElement("p");
const link = document.createElement("a");

link.textContent = "@edgarraw";
link.href = "https://unsplash.com/fr/@edgarraw"
unsplashCredit.textContent = "Background from:";
unsplashCredit.appendChild(link);
footer.appendChild(unsplashCredit);
body.appendChild(footer);

