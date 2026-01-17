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

function addMultipleContent(content, elements) {
  for (let item of elements) {
    addContent(content, item);
  }
}

export { sameClassElement, createParagraph, addContent, addMultipleContent }
