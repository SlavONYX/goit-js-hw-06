const catalogItem = document.querySelectorAll(".item");
console.log(`Number of categories: `, catalogItem.length);

listItem.forEach((item) => {
  const itemtext = item.querySelector("h2");
  const itemNumber = item.querySelectorAll(`li`).length;

  console.log(`Category: ${itemtext.textContent}`);
  console.log(`Elements: `, itemNumber);
});

