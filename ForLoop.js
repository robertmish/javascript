// for loop

// You can stop the loop using break;
// Continue the loop using continue;

// for (let number = 0; number < 101; number++) {
//   //run  some code
//   console.log(number);
//   if (number === 10) {
//     console.log("You've reached 10");
//     break;
//   }
// }

// printing from array

// const names = ["robert", "john", "marko", "maria"];

// for (let number = 0; number < names.length; number++) {
//   //run  some code
//   console.log(number);
// }

// looping all of the items in an array

// const names = ["robert", "john", "marko", "maria"];

// for (let number = 0; number < names.length; number++) {
//   //run  some code
//   console.log(names[number]);
// }

// Better way to use loops - doesn't work with Internet explorer

// const names = ["robert", "john", "marko", "maria", 15, false, "kevin"];

// for (singlename of names) {
//   console.log(singlename);
// }

// If you want to access the index of an item in an array you have to change the

// const names = ["robert", "john", "marko", "maria"];

// for (singlename of names) {
//   console.log(singlename);
// }

// you can break; if its a loop but can't break if its inside a function

// const names = ["robert", "john", "marko", "maria"];

// for (singlename of names) {
//   console.log(singlename);
// }

// }

// For each loop is specificly for arrays

// const names = ["robert", "john", "marko", "maria", "x", "hey", "new"];

// names.forEach(function (name, index) {
//   console.log(name, index);
// });

// you can add multiple parametas, for example the order and location

// const names = ["robert", "john", "marko", "maria"];

// names.forEach(function (name, index) {
//   console.log(name, index);
// });

// for each is about 25% slower than for loop

// Looping from an object

// console.log(user.name);

// This only access the key - NOT THE VALUE

// for (let x in user) {
//   console.log(x);
// }

// To return the values you must

// const user = {
//   name: "robert",
//   status: "married",
//   town: "Skopje",
//   age: 33,
//   access: true,
// };

// for (let x in user) {
//   console.log(
//     "The user's name is " + user.name + " And his age is " + user.age
//   );
// }
// console.log(Math.floor(Math.random() * 11));

// Guess game

function guessGame() {
  let randomNr = Math.floor(Math.random() * 11);
  let guess;

  do {
    guess = prompt("Guess a number between 1 and 10");

    console.log(guess, randomNr);

    if (randomNr > guess) {
      console.log("You guessed too low");
    } else if (randomNr < guess) {
      console.log("You guessed too high");
    }
  } while (guess != randomNr);
  {
    console.log("You won");
  }
}

guessGame();
