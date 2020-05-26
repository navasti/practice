
// Adding element
const addElement = (e, node, text, attribute, value) => {
  e.preventDefault();
  const element = document.createElement(node);
  if (text) {
    const textContent = document.createTextNode(text);
    element.appendChild(textContent);
  };
  if (attribute) {
    element.setAttribute(attribute, value);
  };
  document.querySelector('.content').appendChild(element);
  const inputs = document.querySelectorAll('.form--add input');
  inputs.forEach(input => input.value = "");
};

// Searching for element
const searchElements = (e, element) => {
  e.preventDefault();
  const infoElement = document.querySelector('.result');
  const elements = [...document.querySelectorAll(element)];
  if (elements.length > 0) {
    infoElement.innerHTML = `<p class="result__info">${elements.length} ${element} elements found</p>`;
    showInfo(elements, infoElement);
  } else {
    infoElement.innerHTML = `<p class="result__info">Haven't found any of ${element} elements</p>`;
    return;
  };
};

const showInfo = (elements, info) => { console.log(elements), console.log(info) };

// forms
const addForm = document.querySelector('.form--add');
const searchForm = document.querySelector('.form--search');

// listenners
addForm.addEventListener('submit', e => addElement(
  e,
  addForm.elements.node.value,
  addForm.elements.text.value,
  addForm.elements.attribute.value,
  addForm.elements.value.value
));
searchForm.addEventListener('submit', e => searchElements(
  e,
  searchForm.elements['searcher'].value)
);