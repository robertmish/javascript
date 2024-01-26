// Now lets put everything together

// Selectors

//input
const todoInput = document.querySelector(".todo-input");
//button

const todoButton = document.querySelector(".todo-button");
//todo-list
const todoList = document.querySelector(".todo-list");

// console.log(todoInput, todoButton, todoList);

// Event listeners

todoButton.addEventListener("click", addTodo);

// Functions

function addTodo(e) {
  // prevent form from submiting
  e.preventDefault();

  // Create a todo DIV
  const todoDiv = document.createElement("div");

  todoDiv.classList.add("todo");

  // Create li tag
  const newTodo = document.createElement("li");

  // add a class name to the newTodo li element

  newTodo.classList.add("todo-item");
  console.log(newTodo);

  // append the child inside the parent div "todoDiv";

  todoDiv.appendChild(newTodo);

  // create a completed button

  const trashButton = document.createElement("button");

  trashButton.innerHTML = '<i class="fas fa-trash"></i>';

  //   // add a class list to the completed button

  trashButton.classList.add("complete-btn");

  //   // add a child element into the todo div

  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv);
}
