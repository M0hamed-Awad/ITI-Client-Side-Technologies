// (1).
// Write a script that accepts a string from user through prompt and count the number of a specific character that the
// user will define in another prompt. Ask the user whether to consider difference between letter cases
// or not then display the number of letter appearance.

// Get the String
function getStringInput(msg = "Enter a String", defaultMsg = "String Value") {
    let inputString = prompt(msg, defaultMsg);
    inputString = validateStringInput(inputString, msg, defaultMsg);
    return inputString;
}

// Validate String Input
function validateStringInput(stringInput, msg, defaultMsg) {
    while (!stringInput) {
        alert("Enter Valid String value, it's length must be greater than 0!");
        stringInput = prompt(msg, defaultMsg);
    }

    return stringInput;
}

// Get the Char
function getCharInput() {
    let inputChar = prompt("Enter a Character [Only 1 Character]", "X");

    while (!inputChar || inputChar.length != 1) {
        alert("Enter ONLY a SINGLE Character!");
        inputChar = prompt("Enter a Character [Only 1 Character]", "X");
    }

    return inputChar;
}

// Check for Case Sensitive
function checkCaseSensitive(msg = "Do want the operation to be Case Sensitive or Not?") {
    let isCaseSensitive = confirm(msg);
    return isCaseSensitive;
}

// Get number of Occurrences or specific character
function getNumberOfOccurrences(stringValue = "", charValue = "", isCaseSensitive = false) {
    let count = 0;

    let targetString = isCaseSensitive ? stringValue : stringValue.toLowerCase();
    let targetChar = isCaseSensitive ? charValue : charValue.toLowerCase();

    for (let i = 0; i < targetString.length; i++) {
        if (targetString[i] === targetChar) count++;
    }

    return count;
}

// Main Flow

// Ask the user for Input String
let inputString = getStringInput("Enter the String you want to search in.");
// Ask the user for the Input Char
let inputChar = getCharInput()
// Ask the user if he want it to be Case Sensitive or Not
let isCaseSensitive = checkCaseSensitive();
// Get number of Occurrences
let numberOfOccurrences = getNumberOfOccurrences(inputString, inputChar, isCaseSensitive);

console.log("Number of Occurrences of the Character [" + inputChar + "] in the String [" + inputString + "] is: " + numberOfOccurrences + ".");

// ========================================================================================================= //