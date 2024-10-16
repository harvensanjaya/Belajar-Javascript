let questions = ['What is the capital of France?', 'Which country is known as \'The Land of The Rising Sun\'?','In which country is the Great Wall located?','Which country has the largest population in the world?','What is the official language of Indonesia?'];

let anwsers = ['Paris', 'Japan', 'China', 'India', 'Indonesia'];

let counter = 0;
let score = 0;

do {
  let playerAnwser = prompt(questions[counter]);
  if (playerAnwser.toLowerCase() === anwsers[counter].toLowerCase()) {
    score += 20;
    alert(`Correct! You\'ve earned 20 points.`);
  } else {
    alert(`Incorrect! The answer is: ${anwsers[counter]}`);
  }
  counter++;
} while (counter < questions.length)

console.log(`Your final score is: ${score}`);