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

export { sameClassElement, createParagraph, addContent }