// Adding elements usiing the appendchild() function

//list.appendChild(newItem); // appendChild must be added inside a parent

// button.addEventListener("click", function () {
//   const newItem = document.createElement("li b");
//   newItem.innerText = prompt("Enter your note");
//   list.appendChild(newItem);
//   newItem.addEventListener("click", deleteItem);
// });

// Changing the CSS using JS

// changing the color of a html tag

// button.addEventListener("click", function () {
//   heading.style.marginLeft = "50px";
// });

// changing multple css propreties

// button.addEventListener("click", function () {
//   heading.style.height = "100px";
// });

// adding a class to change css propreties and make the code cleaner

// addEventListener("keydown", function () {
//   heading.classList.toggle("newclass");
// });

// toggle an event

// button.addEventListener("click", function () {
//   heading.classList.toggle("newclass");
// });

// how to use events and see what key was pressed

// const box = document.querySelector(".box");

// document.addEventListener("click", deleteItem);

// Deleting an item using a function with an event listener:

// function deleteItem(e) {
//   e.target.remove();
// }

// // Example usage to change color

const heading = document.querySelector(".some-text");

const button = document.querySelector("#button");

// document.addEventListener("keydown", function (event) {
//   console.log(event);
//   if (event.keyCode === 81) {
//     alert("You've just pressed the letter Q");
//   }
// });

// Example usage to change color

addEventListener("keydown", function (event) {
  console.log(event);
  if (event.keyCode === 39) {
    heading.classList.toggle("right");
  } else if (event.keyCode === 37) {
    heading.classList.toggle("left");
  }
});
