// 1. To know how to get elements from the html using the querySelector

// 2. We can use event listeners not only on button press but also on:

// click // when a button is clicked
// keydown // for specific keyboard buttons
// mouseover //
// formsubmit //
// onscroll // When the user scrolls the page

const button = document.querySelector("#submit");

const list = document.querySelector("#todo-list");
const items = list.children;

const nameInput = document.querySelector(".name_input");

button.addEventListener("click", function (e) {
  e.preventDefault();
  // here we are creating the element
  const newItem = document.createElement("li");

  //here we are adding a class to it
  newItem.classList.add("item");

  //Here we are adding the text that increases the numher
  newItem.innerText = nameInput.value;
  // here
  list.appendChild(newItem);
  newItem.addEventListener("click", deleteItem);
});

for (item of items) {
  item.addEventListener("click", deleteItem);
}

// stop propagation - because when using e or event as a parametar, it may select the whole parent element

function deleteItem(e) {
  e.stopPropagation();
  e.target.remove();
}
