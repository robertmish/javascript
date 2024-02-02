// Higher order function

// function sayHello(){
//     console.log("Say hello");
//     newFunction();
// }

// //

// const newfunction = newFunction(){

// console.log("Lower order function");

// }

// For each

// const cars = ["Volvo", "Mercedes", "Toyota"];

// const carItems = cars.forEach(function (mycar) {
//   console.log(car);
// });

// const books = ["Title 1", "Title 2", "Title 3"];

// Map

// const newbooks = books.map(function (book) {
//   console.log(book);
// });

// // Selectors
// const searchBtn = document.querySelector(".search_btn");
// const userInput = document.querySelector(".user_input");
// const listing = document.querySelector(".listing");
// const results = document.querySelector(".results");

// for (let number = 0; number < 1; number++) {
//   searchBtn.addEventListener("click", searchFn);
// }

// function searchFn(e) {
//   e.preventDefault();
//   const finedJob = jobs.filter(function (job) {
//     return job.includes(userInput.value);
//   });

//   searchShow = JSON.stringify(finedJob);

//   const liElement = document.createElement("li");

//   liElement.classList.add("li_item");

//   liElement.innerText = JSON.parse(searchShow);

//   listing.appendChild(liElement);
//   //attach final Todo

//   results.appendChild(liElement);
// }

// // FIlter - We use filter to filter out only multiple items that meet a conditions

// const shortSearch = jobs.filter(function (video) {
//   return video.includes("videos");
// });

// const games = [
//   { title: "basics", rating: 7 },
//   { title: "Dota2", rating: 7 },
//   { title: "League of Ledgends", rating: 9 },
//   { title: "Call of Duty", rating: 10 },
//   { title: "GTA", rating: 10 },
// ];

// console.log(games[0].title);

// // Find (finds wants to first check for a condition)
// // This only works with an array
// // we use this when we want to return only 1 specific item from an array
// const searchTutorial = cars.find(function (car) {
// return car.includes("Mercedes");
// });

// // How else we can use the .includes() function to do fun stuff

// console.log(searchTutorial);

// Every - returns values that are true

// const checkRating = games.every(function (game) {
//   return game.rating > 8;
// });

// // // // Some - returns values that are true

// const someRating = games.some(function (game) {
//   // return true of false values
//   return game.rating > 8;
// });

// With a callback function

// const newJobs = jobs.map(function (job) {
//   if (job.length < 20) {
//     return job;
//   } else {
//     return "nope";
//   }
// });

// Ternary operators

// How to shorten a callback function

// const shortnewJobs = jobs.map(function (job) {
//   return job.length < 10 ? job : "nope";
// });

// console.log(shortnewJobs);

// Arrow functions

// const arrowFunction = jobs.map((job) => {
//   return job.length < 10 ? job : "nope";
// });

// console.log(arrowFunction);

// Even simpler way of writing functions and if/else conditions

// const arrowFunctionSingle = jobs.map((job) => {
//   console.log(job);
// });

// // If we have only a single parameter than we don't need the parentesis

// const arrowFunctionSingle2 = jobs.map((job) => job.toUpperCase);
// console.log(arrowFunctionSingle2);

// // Sorting strings

const jobs = [
  "marketing manager",
  "marketing specialist",
  " react developer",
  " .net developer",
  " driver",
  " web developer",
  " construction worker",
  " bank clerk",
  " web designer",
];

// const ratings = [84, 1, 5, 10, 15, 30, 45];

// ratings.sort();
// // // Sorting ratings

// sortedRatings = ratings.sort(function (a, b) {
//   return a - b;
// });

// //

// console.log(sortedRatings);
