import "./styles.css";
import { addContent, addMultipleContent } from "./utils.js";

const contact = () => {
  const content = document.getElementById("content");
  const addedContent = document.createElement("div");
  const email = document.createElement("p");
  const phone = document.createElement("p");
  const location = document.createElement("p");

  email.textContent = "Email: carmelleresto@tuconnais.com";
  phone.textContent = "Phone: 0800 900 300 2023";
  location.textContent = "Location: Bratislava";

  addMultipleContent(addedContent, [email, phone, location]);
  addContent(content, addedContent);
}

export { contact };
