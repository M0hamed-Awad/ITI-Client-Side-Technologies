// (2).

// Write a script to determine whether the entered string is palindrome or not. Request the string to be entered via prompt,
// ask the user whether to consider case sensitivity of the entered string or not via confirm, handle both cases in your script
// i.e. RADAR NOON MOOM are palindrome. Note: raDaR is not a palindrome if user requested considering case of entered string,
// it will be palindrome if user requested ignoring case sensitivity.

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

// Case Sensitive Check
function checkCaseSensitive(msg = "Do want the operation to be Case Sensitive or Not?") {
    let isCaseSensitive = confirm(msg);
    return isCaseSensitive;
}

// Check Palindrome
function checkPalindrome(inputString = "", isCaseSensitive = false) {
    let targetString = isCaseSensitive ? inputString : inputString.toLowerCase();

    let isPalindrome = true;
    let iterator = 0;
    while (isPalindrome && iterator < targetString.length / 2) {
        // if current character == the corresponding character in the other side --> palindrome and continue
        if (!(targetString[iterator] === targetString[targetString.length - 1 - iterator])) isPalindrome = false;
        iterator++;
    }

    return isPalindrome;
}

// Main Flow

// Ask the user for Input String
let inputString = getStringInput();
// Ask the user if he want it to be Case Sensitive or Not
let isCaseSensitive = checkCaseSensitive();
// Get number of Occurrences
let isPalindrome = checkPalindrome(inputString, isCaseSensitive);

console.log("The string [" + inputString + "] is " + (isPalindrome ? "Palindrome" : "Not Palindrome") + ".");