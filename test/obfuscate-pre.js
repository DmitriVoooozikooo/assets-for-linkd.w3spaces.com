let elementValues = {};

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function updateElements() {
  const elements = document.querySelectorAll('body .c');

  elements.forEach(element => {
    let elementType = 0;
    switch (element.tagName.toLowerCase()) {
      case 'h1':
        elementType = 1;
        break;
      case 'h2':
        elementType = 2;
        break;
      case 'h3':
        elementType = 3;
        break;
      case 'h4':
        elementType = 4;
        break;
      case 'h5':
        elementType = 5;
        break;
      case 'h6':
        elementType = 6;
        break;
      case 'p':
        elementType = 7;
        break;
      case 'pre':
        elementType = 8;
        break;
      case 'a':
        elementType = 9;
        break;
    }

    if (!elementValues[element]) {
      elementValues[element] = { value: elementType };
    }

    element.innerHTML = elementValues[element].value;
    element.style.color = getRandomColor();
    elementValues[element].value++;
  });
}

setInterval(updateElements, 1000);
setInterval(() => {
  updateElements();
}, 1);
