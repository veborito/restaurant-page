
const links = [
  "https://unsplash.com/fr/@edgarraw",
  "https://unsplash.com/fr/@picoftasty",
  "https://unsplash.com/fr/@pwign",
]

function createLinks(links, parent) {
  for (let link of links) {
    const newLink = document.createElement("a");
    let artist_id = link.split('/').at(-1);
    newLink.textContent = artist_id + " ";
    newLink.href = link;
    parent.appendChild(newLink);
  }
}

const footer = () => {
  const body = document.querySelector("body");
  const footer = document.createElement("footer");
  const unsplashCredit = document.createElement("p");

  
  unsplashCredit.textContent = "Images from ";
  createLinks(links, unsplashCredit);
  footer.appendChild(unsplashCredit);
  body.appendChild(footer);
}

export { footer };
