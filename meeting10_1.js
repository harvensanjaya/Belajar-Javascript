// Step 1: Input operator, first number, and second number, i use prompt() for get input from user
let operator = prompt("Input operator (+, -, *, /): ");

// parseFloat for convert any input to float number
let firstNumber = parseFloat(prompt("Enter the first number: "));
let secondNumber = parseFloat(prompt("Enter the second number: "));

let result;

// Step 2: Check if the inputs are numbers, isNaN (is Not-a-Number?) is a function to check if the input is a number or not 
if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert("Please enter valid numbers."); // alert is method show some text, not in the console but at the browser;
} else {
    // Step 3: Perform the operation based on the operator
    switch (operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            if (secondNumber !== 0) {
                result = firstNumber / secondNumber;
            } else {
                alert("Cannot divide by zero.");
                result = "undefined";
            }
            break;
        default:
            alert("No operator selected");
            result = "undefined";
    }

    // Step 4: Display the result in the console
    if (result !== "undefined") {
        console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`);
    } else {
        console.log(result);
    }
}