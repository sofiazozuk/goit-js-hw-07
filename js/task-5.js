const body = document.body;
const spanColor = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
changeColorButton.addEventListener('click', () => {
  const newColor = getRandomHexColor();
body.style.backgroundColor = newColor;
spanColor.textContent = newColor;
});