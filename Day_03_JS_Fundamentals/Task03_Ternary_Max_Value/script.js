// (3).
// Using ternery operator, write a script that accepts 2 numbers from the user and display the maximum value of the entered data.

function getMax(firstNumber, secondNumber) {
    let max = (firstNumber > secondNumber) ? firstNumber : secondNumber;
    return max;
}

let firstNumber = parseInt(prompt("Enter the First Number", "First Number"));
let secondNumber = parseInt(prompt("Enter the Second Number", "Second Number"));

let max = getMax(firstNumber, secondNumber);

console.log("The maximum number is: " + max);

// ========================================================================================================= //