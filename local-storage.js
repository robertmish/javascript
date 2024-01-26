// Local storage allows you to save things aftrer refreshihg the browser

//the only thing we can past to local storage are strings

localStorage.setItem("name", "robert");
// localStorage.removeItem("name");

// localStorage.clear();

// we can only pass the key and the data

// const username = localStorage.setItem("username", "iuser");
// const userpass = localStorage.setItem("password", "12345");

// localStorage.setItem("note", "take me to the movies");

// // SESSION STORAGE

// sessionStorage.setItem("todo-list", "session to do note");

// sessionStorage.setItem("sessionNote", "Take me to Mexico");

// Difference between the two?

// Local storage saves the data even if you turn off the browser

// Session storate gets deleted if you turn of the browser

// Every time we close the browser, the session gets lost

// To delete local storage

// localStorage.clear();
// sessionStorage.clear();
// // if I want to add a new "todo" - it replaces the old with the new one
// localStorage.setItem("user", "robert");
// localStorage.setItem("todo", "new item");

// // if I want to add multiple things (to do's) we have to add strng looking arrays or objects
// because you can not add an array to local storage

// Getting stuff from local storage

// const user = localStorage.getItem("user");
// console.log(user);

// How to add an array

// const userInput = document.querySelector(".name_input");
// const button = document.querySelector("#submit");

// button.addEventListener("click", function () {
//   localStorage.setItem("user_input", userInput.value);
// });

// localStorage.setItem("todos", todoList);

// as you can see it passed it as a string
// const retrivedItems = localStorage.getItem("todos");

// console.log(retrivedItems);

const todoList = ["wash dishes", "clean the house", "do homework"];

// THE SOLUTION

localStorage.setItem("todos", JSON.stringify(todoList));
const retrivedSolution = JSON.parse(localStorage.getItem("todos"));
console.log(retrivedSolution);

// So remember!!!

// When you save an array you JSON.stringify it
// When you retrieve it, JSON.parse it into an array

// Do the same for objects

const todoObject = {
  todo1: "note1",
  todo2: "note2",
  todo3: "note3",
};

localStorage.setItem("todoObject", JSON.stringify(todoObject));
const retriveObject = JSON.parse(localStorage.getItem("todoObject"));
console.log(retriveObject);

// What is JSON?

// A sintax for serializing object and arrays
// we use it when we retrieve information from an API, u bcause it ususlly comes back in a JSON format
