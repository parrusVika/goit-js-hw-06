function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function createBoxes(amount) {
  const divEll = document.createElement("div");
  divEll.classList.add('div-item');
  divEll.width = 30;
  divEll.higth = 30;

}
const boxesEll = document.querySelector('#boxes');
boxesEll.append(divEll)