const listItem = document.querySelectorAll(".item");
console.log(`Number of categories: `, listItem.length);

listItem.forEach((item) => {
  const itemtext = item.querySelector("h2");
  const itemNumber = item.querySelectorAll(`li`).length;

  console.log(`Category: ${itemtext.textContent}`);
  console.log(`Elements: `, itemNumber);
});

