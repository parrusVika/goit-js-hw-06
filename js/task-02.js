const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

for (const ingredient of ingredients) {
  const ingredientLi = document.createElement("li");
  ingredientLi.classList.add('item')
  ingredientLi.textContent = ingredient;
  console.log(ingredientLi);

  // const liEll = document.querySelector('li');
  const ulEll = document.querySelector('ul');
  ulEll.appendChild(ingredientLi)
}
