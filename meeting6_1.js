var num1 = Math.floor(Math.random()*10);
var num2 = Math.floor(Math.random()*10);
var operators = ['x', '+','-',':']
var random = Math.floor(Math.random() * 4);
var choosenOperator = operators[random]

console.log('num 1 : ' + num1);
console.log('num 2 : ' + num2);
console.log('operator ke- ' + random);

switch(choosenOperator){
    case 'x' :
        total = num1 * num2;
        console.log(total)
        break;
    case '+' :
        total = num1 + num2;
    console.log(total)
        break;
    case '-':
        total = num1 - num2;
        console.log(total)
        break;
    case ':' :
        total = num1 / num2;
        console.log(total)
        break;
}