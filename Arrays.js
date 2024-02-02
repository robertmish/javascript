// // const listItems = ["Tomatoes", "Potatoes", 15, "Oranges"];

// // remove the last element
// // listItems.pop();

// // // adds a new element

// // listItems.push("lemons");

// // listItems.unshift("first");

// // listItems.filter();

// // Checks the number of items an an array
// // listItems.lenght;

// // // Check the location of an item an array

// // console.log(listItems.indexOf(15));
// // console.log(listItems);

// const numbers = [1, 4, 9, 16, 20, 30, 33];

// // Pass a function to map
// const map1 = numbers.map((x) => x);

// console.log(map1);

// // Expected output: Array [2, 8, 18, 32]

//Primitive data types

// numbers, strings, bolleans, undefined, nulls;

// Refference data types

//arrays, objects

// Example that will not work

const age = 23;
newage = age;

/// But when we use refference data types

const names = ["Robert", "Marko", "Tony", "Zdravko"];

// // What you cannot do is change the whole array

newNames = names;
newNames = [];
console.log(newNames);
