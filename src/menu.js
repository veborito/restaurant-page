import "./styles.css";
import "./utils.js";
import proteinBowlImage from "../assets/protein-bowl.jpg";
import cookiesImage from "../assets/cookies.jpg";
import { addContent, createParagraph } from "./utils.js";


const dishesInfo = [
  [
    proteinBowlImage, 
    "protein bowl",
    "Extase in front of the most beautiful and colorfull protein bowl in town.",
    "20 CHF",
  ],
  
  [
    cookiesImage,
    "cookies",
    "Beautiful home baked cookies, with chocolate chips and a new addiction.",
    "6 CHF per cookie",
  ],

]

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
  createParagraph(imageAndDesc, price);
  addContent(container, imageAndDesc);

  return container;
}

const menu = () => {
  const content = document.getElementById("content");
  const addedContent = document.createElement("div");
  const menuTitle = document.createElement("h1");

  for (let dish of dishesInfo) {
    const item = createMenuItem(dish[0], dish[1], dish[2], dish[3]);
    addContent(addedContent, item);
  }
  addContent(content, addedContent);
}

export { menu };
