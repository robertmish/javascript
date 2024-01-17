const access = false;

// true or false

// if (access) {
//   console.log("You have access");
// } else {
//   console.log("Sorry you don't have access");
// }

// greater than

// minAge = 18;

// if (minAge > 18) {
//   console.log("You have access");
// } else {
//   console.log("You are very young");
// }

// smaller than
// if (10 < 20) {
//   console.log("True");
// }

// equal to using ==

// age1 = 18;
// age2 = "18";

// if (age1 == age2) {

// }

// avoid equal to string using ==

// and - checks if 2 values are equal

// && means AND

// if (age >= 18 && bank > 20) {
//   console.log("You have access");
// }

// OR - checks if 1 of the values is true

// if (age > 19 || bank < 200) {
//   console.log("You have access because you have more than 20 dollars");
// }

// checks 2 values but with else if

// const bank = 200;
// const age = 18;

// if (age >= 18) {
//   console.log("You have access");
// } else if (bank < 400) {
//   console.log("You have enough money");
// } else {
//   console.log("You have nor the age nor enough money");
// }

// Initiating a function

// Initiating function inside a function

// Can't run a variable outside a function

// function greet() {

// // Gets the name of the user and stores it inside a variable
//   const name = prompt("What is your name");

// //Checks the age of the user and checks if he/she is older or equal to 18 of age
//   function checkAge() {
//     const age = prompt("What is your age");
//     if (age >= 18) {
//       console.log("You have full access");
//     }
//   }

//   checkAge();

//   console.log("Hello there, " + name);
// }

// greet();

// The value that you pass inside a function is called argument

// function biggerNumber(nb1, nb2) {
//   if (nb1 > nb2) {
//     console.log(nb1);
//   } else {
//     console.log(nb2);
//   }
// }

// biggerNumber(33, 10);

// // You can also pass in a variable as an argument

// function userInfo(name) {
//   let name = prompt("What is your name");
//   userInfo(name);
// }

// JavaScript offers premade functions inside objects

// const maxNumber = Math.max(22, 87);

// Make a mini function that takes 2 arguments

function findBiggerNumber(nr1, nr2) {
  if (nr1 > nr2) {
    return nr1;
  } else {
    return nr2;
  }
}

findBiggerNumber(22, 11);

// if you only add 1 parametar where 2 are expected it will give you "NaN"

// to solve this you must add a default value on the arguments - this way nothing erros out

// function findBiggerNumber(nr1 = 0, nr2 = 0) {
//   if (nr1 > nr2) {
//     return nr1 * 50;
//   } else {
//     return nr2 * 100;
//   }
// }
