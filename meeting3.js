// Steve is playing a game, his current score is 1858. In that game, Steve will get 50XP every time his score is multiplied by 500.

// Try to make a program that calculates how many more scores Steves's need to collect to get the next XP!
// Use the mod operators and variables, then find your way to get the results you want.

let currentScore = 1858;
let pointsNeeded = 500 - (currentScore % 500);
console.log('Steve needs ' + pointsNeeded + ' more points to get the next level.')