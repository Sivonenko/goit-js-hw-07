"use strict";

const categoriesRef = document.querySelector("#categories");
const itemRef = Array.from(document.querySelectorAll(".item"));

console.log(`В списке ${itemRef.length} категории`);

const getNameCategories = (arr) => {
  arr.forEach((item) =>
    console.log(
      `Категория: ${item.firstElementChild.innerHTML}\nКоличество элементов: ${item.lastElementChild.children.length}`
    )
  );
};

getNameCategories(itemRef);
