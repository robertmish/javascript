// Higher order function

// For each

const cars = ["Volvo", "Mercedes", "Toyota"];

const carItems = cars.forEach(function (car) {
  return car;
});

const videos = ["Car videos", "funny videos", "scary videos"];

// Map
const newVideos = videos.map(function (upvideo) {
  return upvideo.toUpperCase;
});

// FIlter - We use filter to filter out only multiple items that meet a conditions

const shortSearch = videos.filter(function (video) {
  return video.length < 10;
});

const games = [
  { title: "basics", rating: 7 },
  { title: "Dota2", rating: 7 },
  { title: "League of Ledgends", rating: 9 },
  { title: "Call of Duty", rating: 10 },
  { title: "GTA", rating: 10 },
];

console.log(games[0].title);

// Find (finds wants to first check for a condition)
// This only works with an array
// we use this when we want to return only 1 specific item from an array
const searchTutorial = cars.find(function (car) {
  return car.includes("Mercedes");
});

// How else we can use the .includes() function to do fun stuff

console.log(searchTutorial);

// Every - returns values that are true

const checkRating = games.every(function (game) {
  return game.rating > 8;
});

// Some - returns values that are true

const someRating = games.some(function (game) {
  // return true of false values
  return game.rating > 8;
});
