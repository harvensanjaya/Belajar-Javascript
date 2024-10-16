function checkNumber(number) {
  let result = '';
  if (number < 0) {
    result = 'negative';
  } else if (number > 0) {
    result = 'positive';
  } else {
    result = 'not negative or positive';
  }

  return console.log(result);
}

function checkEligibility(age) {
  let result = '';
  if (age >= 17) {
    result = 'Eligible for a driver\'s license';
  } else {
    result = 'Not eligible for a driver\'s licese';
  }
  return console.log(result);
}

function determineGrade(grade) {
  let result = '';
  if (grade > 90) {
    result = 'grade A';
  } else if (grade > 75) {
    result = 'grade B';
  } else if (grade > 60) {
    result = 'grade C';
  } else {
    result = 'grade D';
  }
  return console.log(result);
}

function calculateTotalPayment(tPayment, isMember) {
  let result = '';
  if (isMember) {
    tPayment -= tPayment * 0.1;
    console.log('Discount applied: 10%');
  } else {
    console.log('No discounts applied');
  }
  console.log('Total payment: ' + tPayment);
}

function welcomingMessage(role){
  if(role == 'Knight') {
    console.log('Welcome, Knight the hero!');
  } else if (role == 'Wizard') {
    console.log( 'Welcome, Wizard the witch!')
  } else {
    console.log('Unknown player');
  }
}


checkNumber(-40);
checkNumber(50);
checkNumber(0);

checkEligibility(8);
checkEligibility(17);
checkEligibility(20);

determineGrade(65);
determineGrade(82);
determineGrade(95);

let totalPayment = 200000;
let member = true;
calculateTotalPayment(totalPayment,member);

let chooosenPlayer = 'Wizard';
welcomingMessage(chooosenPlayer);