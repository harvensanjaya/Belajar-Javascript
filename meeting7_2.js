const hoursSpent = [2, 2, 3, 3, 1, 4, 5];
const timeLimit = 2;
let totalTime = 0;
let exceededCount = 0;

for (let i = 0; i < hoursSpent.length; i++) {
  totalTime += hoursSpent[i];
  if(hoursSpent[i] > timeLimit) {
    exceededCount++;
  }
}

console.log('Total time spent playing games: ' + totalTime + ' hours');
console.log('Number of games exceeded the time limit: ' + exceededCount);