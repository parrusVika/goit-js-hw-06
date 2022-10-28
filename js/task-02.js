const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const items = document.querySelectorAll('#ingredients');
const ul = document.querySelector('ul');
const arr = [];
for (let i = 0; i < ingredients.length; i += 1) {
  const li = document.createElement('li');
  li.classList.add('item')
  li.textContent = ingredients[i];
  arr.push(li)
}
ul.append(...arr);

