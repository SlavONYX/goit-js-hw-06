const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const item = [];
const list = document.querySelector("#ingredients");

ingredients.map(ingredient => {
  const elem = document.createElement("li");
    elem.textContent = ingredient;
elem.classList.add("item");

item.push(elem);
list.append(elem);
});

