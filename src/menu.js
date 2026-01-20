import "./styles.css";
import "./utils.js";
import proteinBowlImage from "../assets/protein-bowl.jpg"
import { addContent, addMultipleContent, createParagraph } from "./utils.js";

function createMenuItem(imagePath, imageDescription,text, price) {
  const container = document.createElement("div");
  const imageAndDesc = document.createElement("div");
  const image = document.createElement("img");
  
  container.className = "menu-item";

  image.className = "menu-img";
  image.src = imagePath;
  image.alt = imageDescription;

  createParagraph(imageAndDesc, text);
  addContent(imageAndDesc, image);
  addContent(container, imageAndDesc);
  createParagraph(container, price);

  return container;
}

const menu = () => {
  const content = document.getElementById("content");
  const addedContent = document.createElement("div");
  const menuTitle = document.createElement("h1");

  const item = createMenuItem(proteinBowlImage, "protein bowl","Extase in front of the most beautiful and colorfull protein bowl in town", "20 CHF");

  addContent(addedContent, item);
  addContent(content, addedContent);
}

export { menu };
