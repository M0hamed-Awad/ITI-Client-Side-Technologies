// (3).

// Build your own function that takes a single string argument and returns the largest word in the string.
// If there are two or more words that are the same length, return the first word from the string with that length.
// e.g. if Input is: "this is a javascript string demo"
// Output will be: javascript

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

// Get the Largest Word
function getLargestWordInString(inputString = "") {
    if (!inputString) return ""; // falsy

    let words = inputString.split(" ");
    let largestWord = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length > largestWord.length) largestWord = words[i];
    }

    return largestWord;
}

// Main Flow
let inputString = getStringInput("Enter a sentence to find the longest word:");
let largestWord = getLargestWordInString(inputString);

console.log("The largest word is: " + largestWord);

// ========================================================================================================= //