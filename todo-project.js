// Now lets put everything together

// Selectors

//input
const todoInput = document.querySelector(".todo-input");
//button

const todoButton = document.querySelector(".todo-button");
//todo-list
const todoList = document.querySelector(".todo-list");

// filter option

// const filterOption = document.querySelector(".filter-todo");

// Event listeners

todoButton.addEventListener("click", addTodo);

todoList.addEventListener("click", deleteCheck);

// filterOption.addEventListener("change", filterTodo);

// Functions

function addTodo(e) {
  // prevent form from submiting
  e.preventDefault();

  const isEmpty = (str) => !str.trim().length;

  if (isEmpty(todoInput.value)) {
    alert("Must enter a task");
  } else {
    // Create a todo DIV
    const todoDiv = document.createElement("div");

    todoDiv.classList.add("todo");

    // Create li tag
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    // add a class name to the newTodo li element

    newTodo.classList.add("todo-item");
    console.log(newTodo);

    // append the child inside the parent div "todoDiv";

    todoDiv.appendChild(newTodo);

    // Create a marked button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // create a completed button

    const trashButton = document.createElement("button");

    trashButton.innerHTML = '<i class="fas fa-trash"></i>';

    //   // add a class list to the completed button

    trashButton.classList.add("trash-btn");

    //   // add a child element into the todo div

    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);

    // Clear the todo input
    todoInput.value = "";
  }
}

// The function that delets the todo

function deleteCheck(e) {
  e.preventDefault();

  const item = e.target;

  console.log(item);

  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
  }

  // checkmark

  if (item.classList[0] === "complete-btn") {
    item.classList.toggle("completed");
  }
}

//  filter function

// function filterTodo(e) {
//   const todos = todoList.childNodes;
//   console.log(todos);

//   todos.forEach(function (todo) {
//     switch (e.target.value) {
//       case "all":
//         todo.style.display = "flex";
//         break;
//       case "completed":
//         if (todo.classList.contains("completed")) {
//           todo.style.display = "flex";
//         } else {
//           todo.style.display = "none";
//         }
//         break;
//       case "uncompleted":
//         if (!todo.classList.contains("uncompleted")) {
//           todo.style.display = "flex";
//         } else {
//           todo.style.display = "none";
//         }
//     }
//   });
// }
