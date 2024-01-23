// on click event

// click, scroll, resizing the browser

// add an event listener

const button = document.querySelector("#submit");

// console.log(button);

// button.addEventListener("click", function () {
//   console.log("Button clicked");
// });

button.addEventListener("click", itemAdded);

// remember this is a one time use function upstairs - that is wwhy we don't give it a name

// if we want to create a function as an event listener

function itemAdded() {
  console.log("New item added");
}

// if we want to create a function as an event listener

// function addItem() {
//   console.log("new item added");
// }

// we can also use the function on event

// button.addEventListener("click", addItem);

// const button = document.querySelector("#submit");

const list = document.querySelector("#list");
const items = list.children;
const noteText = document.querySelector("#textinput");

// noteText.addEventListener("onchange", function () {
//   console.log(noteText);
// });

// button.addEventListener("click", function () {
//   const newItem = document.createElement("li");
//   newItem.classList.add("newitem");
//   newItem.innerText = "New item added";
//   carlist.appendChild(newItem);
// });

button.addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.innerText = prompt("Enter your note");
  list.appendChild(newItem);
  alert("New note added");
});
