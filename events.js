// on click event

// click, scroll, resizing the browser

// add an event listener

// console.log(button);

// button.addEventListener("click", function () {
//   console.log("Button clicked");
// });

// button.addEventListener("click", itemAdded);

// remember this is a one time use function upstairs - that is wwhy we don't give it a name

// if we want to create a function as an event listener

// function itemAdded() {
//   console.log("New item added");
// }

// if we want to create a function as an event listener

// function addItem() {
//   console.log("new item added");
// }

// we can also use the function on event

// button.addEventListener("click", addItem);
const button = document.querySelector("#submit");
const list = document.querySelector("#list");
const items = list.children;

button.addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.innerText = prompt("Enter your note");
  list.appendChild(newItem);
});

// noteText.addEventListener("onchange", function () {
//   console.log(noteText);
// });

// button.addEventListener("click", function () {
//   const newItem = document.createElement("li");
//   newItem.classList.add("newitem");
//   newItem.innerText = "New item added";
//   carlist.appendChild(newItem);
// });

// Getting the input element and displaying it to a paragraph

const txt1 = document.querySelector("#user_input");
const savenote = document.querySelector("#save_note");
const dispBox = document.querySelector("#note_display_box");

function fun1() {
  dispBox.innerHTML = txt1.value;
  const newItem = document.createElement("li");
  newItem.innerText = dispBox.innerHTML;
  list.appendChild(newItem);
}

function sec() {
  dispBox.innerHTML = txt1.value;
  const newItem = document.createEelent("li");
  newItem.innerText = dispBox.innerHTML;
}

savenote.addEventListener("click", fun1);

const title = document.querySelector(".h1tag");

button.addEventListener("click", function () {
  title.classList.toggle("onclick");
});
