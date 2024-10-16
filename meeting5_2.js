function determinePlayerPosition(x,y) {
  if (x > 0 && y > 0) {
    console.log('the player is on the top right');
  } else if (x > 0 && y < 0) {
    console.log('the player is on the bottom right');
  } else if (x < 0 && y > 0) {
    console.log('the player is on the top left');
  } else if (x < 0 && y < 0) {
    console.log('the player is on the bottom left');
  } else if (x == 0 && y == 0) {
    console.log('the player is on the origin');
  }
}


function checkGameOver(life, time) {
  if (life <= 0 || time <= 0) {
    console.log('Game Over!');
  } else {
    console.log('Keep Playing!');
  }
}

// test case
let x = 5;
let y = -5
determinePlayerPosition(x, y);

// test case 2
let life = 0;
let time = 0;
checkGameOver(life, time);