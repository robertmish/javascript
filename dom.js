// //  THE OLD WAY
//  // 1:

const firstway = document.getElementById('idname');
const firstwayplural = document.getElementsById('idname');

// // 2:
const secondwayfirst = document.getElementByTagName("tagname");
const secondway = document.getElementsByTagName("tagname");

// // 3:

// const third = document.getElementByClassName("nameofclass");

// // 4: Plural

const fourth = document.getElementsByClassName("");

// //  THE NEW WAY

const newway = document.querySelector(".classname");
const newwayid = document.querySelector("#classname");

const newway22 = document.querySelectorAll(".classname");
const newwayid33 = document.querySelectorAll("#classname");

// // Selecting the all H2 using tag name (holds an array of elements/nodes)

// const headers = document.getElementsByTagName("li");

// console.log(headers.length);
// console.log(headers);

// accessing a specific item from the array of elements

// console.log(headers[1].innerHTML);

// // Accessing the inner text inside elements

// console.log(headers[1].innerHTML);

// // Selecting the H2 using tag name

// const header = document.getElementById("hello");

// console.log(header);

// // This will only find the first element on the page with the #id of "hello"!!!

// console.log(header);

// // Accessing by ClassName

// const list = document.getElementsByClassName("item");

// console.log(list.length);

// // counting the number of items in the array

// Newer method for selecting is the querySelector

// // The advantige of the query selector is that we can use CSS selectors in here!!! (BIG ADVANTIGE)

// const queryheader = document.querySelector("hello");
// console.log(queryheader);

// // this will only return the first h2 element

// // If we want to select all the h2 elements that we use the following

// const queryheaderall = document.querySelectorAll("h2");

// // Selecting the first item from a list

// const querylist = document.querySelector(".item");

// // If we want all

// const entirequerylist = document.querySelectorAll(".item");

// // If you want to select only the h2 headers with the class of item

// const itemh2 = document.querySelector("p.item");
// console.log(itemh2.innerHTML);

// // Important to remember!!!

// document.getElementById("hello"); // This return an HTML collection

// const items22 = document.querySelector("item"); // This return a nodelist

// Let's see the difference

// const htmlCollection = document.getElementsByClassName("item");
// const nodeCollection = document.querySelector(".fruits");

// console.log(htmlCollection, nodeCollection);

// // Selecting children elements with empty space and text

// console.log(htmlCollection);

// // If i only need the children elements

// console.log(nodeCollection.children);

// // Lets try looping through node elements

const nodeitems = document.querySelectorAll(".item");
// console.log(nodeitems);

// for (item of nodeitems) {
//   console.log(item.innerHTML);
// }

// if you want to loop the text inside the classes:

for (item of nodeitems) {
  console.log(item.innerHTML);
}



// Big difference is that with nodelist you can use forEach to loop over them and for HTML collection you cannot

// remember the forEach is the array method to loop through items

// const collection = document.getElementsByClassName(".item");

// collection.forEach(function (newitem) {
//   console.log(newitem);
// });

// // Pushing an item into a parent element (the #list parent)

// // 1. Doing with html collection ->

const newhtmlCollection = document.getElementsByClassName("item");

const todoList = document.getElementById("list");

const newItem = document.createElement("li");
const newp = document.createElement("p");
newp.innerHTML = "New paragraph added";

newItem.classList.add("item");

newItem.innerText = "New item added";

// //add a class list

// // now we must select the parent

todoList.appendChild(newItem);
todoList.appendChild(newp);
// // 2. Doing with nodelist ->
