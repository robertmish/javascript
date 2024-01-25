const mainTitle = document.querySelector("#tagnew");
const button = document.querySelector("#change-color");

const list = document.querySelector("#todo-list");
const items = list.children;

deletebtn = document.querySelector("#todo-list b");

// button.addEventListener("click", function (event) {
//   console.log(event);
//   mainTitle.classList.toggle("newcolor");
// });

// button.addEventListener("click", function () {
//   mainTitle.style.color.toggle = "red";
//   mainTitle.style.fontSize = "50px";
// });

button.addEventListener("click", function () {
  const newItem = document.createElement("li b");
  newItem.innerText = prompt("Enter your note");
  list.appendChild(newItem);
  newItem.addEventListener("click", deleteItem);
});

//Cleaner way of changing css attributing by assing a new class

// button.addEventListener("click", function () {
//   mainTitle.classList.toggle("newcolor");
// });

// Getting the keycode of event

addEventListener("keydown", function (event) {
  console.log(event);
  if (event.keyCode === 32) {
    mainTitle.classList.toggle("newcolor");
  }
});

for (item of items) {
  item.addEventListener("click", deleteItem);
}

function deleteItem(e) {
  e.target.remove();
}
