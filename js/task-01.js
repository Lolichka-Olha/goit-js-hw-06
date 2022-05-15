const itemCategory = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemCategory.length}`);

itemCategory.forEach((item) => {
  const title = item.querySelector("h2");
  const elements = item.querySelectorAll("li");
  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${elements.length}`);
});
