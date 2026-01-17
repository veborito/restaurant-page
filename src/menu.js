import "./styles.css";
import "./utils.js";
import { addContent, addMultipleContent, createParagraph } from "./utils.js";

function createMenuItem(imagePath, imageDescription,text, price) {
  const container = document.createElement("div");
  const imageAndDesc = document.createElement("div");
  const image = new Image(100, 100);
  
  container.className = "menu-item";

  image.src = imagePath;
  image.alt = imageDescription;

  createParagraph(imageAndDesc, text);
  createParagraph(container, price);

  addContent(imageAndDesc, image);
  addContent(container, imageAndDesc);

  return container;
}

const menu = () => {
  const content = document.getElementById("content");
  const addedContent = document.createElement("div");
  const menuTitle = document.createElement("h1");

  const item = createMenuItem("./assets/protein-bowl.jpg", "protein bowl","Extase in front of the most beautiful and colorfull protein bowl in town", "20 CHF");

  addContent(addedContent, item);
  addContent(content, addedContent);
}

export { menu };
