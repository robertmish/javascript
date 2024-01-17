// A funtion store propreties or keys and the ones on the right are called values

const user = {
  name: "Robert",
  age: 34,
  access: true,
  greet: function () {
    console.log("Hello there!");
  },
};

// Methods: functions inside an object

// How to access data from objects
// console.log(user.greet());

console.log("User's name is " + user.name + " and his age is " + user.age);

// Before javaascript gets loaded, a big objects called window gets created

// if we type typeof window - you will see that is an object
