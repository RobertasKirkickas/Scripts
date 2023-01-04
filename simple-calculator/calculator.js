// Program: Simple Calculator

// '4' Functions add, subtract, multiply and divide

const addition = (num1, num2) => num1 + num2; // add numbers

const subtract = (num1, num2) => num1 - num2; // subtract numbers

const multiply = (num1, num2) => num1 * num2; // multiply numbers

const divide = (num1, num2) => num1 / num2; // divide numbers


let firstNum = parseInt(prompt(`Please input your first number:`));
let secondNum = parseInt(prompt(`Please input your second number:`));
let question = parseInt(prompt(`What operation you would like to do? (Enter the number)
                             1. Add
                             2. Subtract
                             3. Multiply
                             4. Divide `));

// Add numbers
if (question == 1) {
    console.log(firstNum + ` + ` + secondNum + ` = ` + addition(firstNum, secondNum));
}

// Subtract numbers
if (question == 2) {
    console.log(firstNum + ` - ` + secondNum + ` = ` + subtract(firstNum, secondNum));
}

// Multiply numbers
if (question == 3) {
    console.log(firstNum + ` * ` + secondNum + ` = ` + multiply(firstNum, secondNum));
}

// Divide numbers
if (question == 4) {
    console.log(firstNum + ` / ` + secondNum + ` = ` + divide(firstNum, secondNum));
}