// (1).
// Fill an array (n numerical values) from the user, the n is determined by the user. 
// Use sort method to sort the array’s values in descending and ascending orders Display the output in the console.
// Display the output in the console.

// Get Array Size From User
function getArraySize() {
    let arraySize = prompt("Enter Array Size ( > 0)", "5");
    arraySize = validateInputAsInt(arraySize, "Enter Array Size ( > 0)", "5")
    return arraySize
}

// Validation of Int Input
function validateInputAsInt(input, msg, defaultMsg) {
    input = Number(input)

    while (!input || input <= 0) {
        alert("Enter Valid Array Size value, it's must be greater than 0!");
        input = prompt(msg, defaultMsg);
    }

    return input;
}

// Fill Array From User
function fillArray(arraySize) {
    let array = [];
    for (let i = 0; i < arraySize; i++) {
        let userInput = prompt("Enter the element number " + (i + 1) + ": ", (i + 1));
        userInput = validateInputAsInt(userInput, "Enter element number " + (i + 1), i + 1)
        array.push(userInput);
    }
    return array;
}

// Sort the Array in Ascending Order
function sortAscending(array = []) {
    array.sort(function (a, b) { return a - b; })
    return array
}

// Sort the Array in Descending Order
function sortDescending(array = []) {
    array.sort(function (a, b) { return b - a; })
    return array
}

// Display the Output
function displayResults(array) {
    console.log("%c --- Array Sorting Results ---", "color: orange; font-weight: bold;");
    console.log("Original Array: " + array.join(", "));
    console.log("Ascending Order: " + sortAscending(array).join(", "));
    console.log("Descending Order: " + sortDescending(array).join(", "));
}

// Main Flow

let size = getArraySize();
let userValues = fillArray(size);

displayResults(userValues);