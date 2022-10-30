
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor())
const btn = document.querySelector('.change-color');
btn.addEventListener('click', chengeColor);
function chengeColor(color) {
  document.body.style.background = getRandomHexColor();
}
const color = () => {
  const bodyColor = getRandomHexColor()
  spanTextRef.textContent = bodyColor;
  document.body.setAttribute('style', `background-color: ${color}`)
}
// const color = getRandomHexColor()
// document.body.setAttribute('style', `background-color: ${color}`)

