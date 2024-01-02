const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = Number(input.value);
  
  if (isValidAmount(amount)) {
    const boxes = new Array(amount).fill('').map(createBox);
    boxesContainer.append(...boxes);
    input.value = '';
  } else {
    alert('Please enter a valid number between 1 and 100.');
  }
}
function createBox(_, index) {
  const box = document.createElement('div');
  box.style.width = `${30 + index * 10}px`;
  box.style.height = `${30 + index * 10}px`;
  box.style.backgroundColor = getRandomHexColor();
  return box;
}
function isValidAmount(amount) {
  return Number.isInteger(amount) && amount >= 1 && amount <= 100;
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
