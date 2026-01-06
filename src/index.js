import "./styles.css";
import { footer } from "./footer.js"

function sameClassElement(containers, className) {
  for (let container of containers) {
    container.className = className;
  }
}

function createParagraph(container, text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  container.appendChild(paragraph);
}

function addContent(content, element) {
  content.appendChild(element);
}

const content = document.getElementById("content");
const restaurantName = document.createElement("h1");
const description = document.createElement("div");
const openHours = document.createElement("div");
const descriptionText = `
  Hi, we are a family that cooks swiss, cuban dishes.
  We'd love to help you with your corean barbecue! 
  We cook for our clients with pleasure (and difficulty) the finest japanese delicates.
  Our baker is the best in town! Don't miss the opportunity to eat our 
  delicious morning bowls!
`;
restaurantName.textContent = "Carmelle's kitchen";

sameClassElement([description, openHours], "container");
createParagraph(description, descriptionText);

addContent(content, restaurantName);
addContent(content, description);
addContent(content, openHours);


footer();



