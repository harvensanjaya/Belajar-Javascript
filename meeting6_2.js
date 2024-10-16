// condition ? action if true : action if false

let score = Math.floor(Math.random()*200); // score 1 - 200

var level = score > 100 ? 'level 2' : 'level 1';

console.log("Random Score: " + score);
console.log("Current Level: " + level);