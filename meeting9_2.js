let randomNumber = '';
let expectedNumber = 5;

while (randomNumber !== expectedNumber) {
  randomNumber = Math.floor(Math.random() * 11);
  console.log(randomNumber);
}

console.log('Program stopped. The random number is: ' + randomNumber);