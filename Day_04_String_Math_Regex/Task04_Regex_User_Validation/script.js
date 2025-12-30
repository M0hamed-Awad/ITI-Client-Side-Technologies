// (4).
// Write a script that reads from the user his info; validates and displays it with a welcoming message with today’s date
// Use coloring format according to user’s choice. The user has to choose either red, green or blue color, take his choice via prompt.

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

// Get Name -> Character (Not a Number)
function getUserName() {
    let username = getStringInput("Enter your name", "Mohamed eg.");
    let usernamePattern = /^[a-zA-z ]+$/;

    let isValid = (username !== null) && usernamePattern.test(username);

    while (!isValid) {
        alert("Enter a Valid Name, Characters Only!");
        username = getStringInput("Enter your name", "Mohamed eg.");
        isValid = (username !== null) && usernamePattern.test(username);
    }

    return username;
}

// Get Phone Number -> Number, Length(8)
function getUserPhoneNumber() {
    let phoneNumber = getStringInput("Enter your Phone Number (8 Digits)", "22354167 eg.");
    let phoneNumberPattern = /^[0-9]{8}$/;

    let isValid = (phoneNumber !== null) && phoneNumberPattern.test(phoneNumber);

    while (!isValid) {
        alert("Enter a Valid Phone Number, Numbers Only with length of 8!");
        phoneNumber = getStringInput("Enter your Phone Number (8 Digits)", "22354167 eg.");
        isValid = (phoneNumber !== null) && phoneNumberPattern.test(phoneNumber);
    }

    return phoneNumber;
}

// Get Mobile Number -> Number, Length(11), Start With (010 | 011 | 012)
function getUserMobileNumber() {
    let mobileNumber = getStringInput("Enter your Mobile Number (11 Digits)", "0115793687 eg.");
    let mobileNumberPattern = /^(01)[0-2][0-9]{8}$/;
    
    let isValid = (mobileNumber !== null) && mobileNumberPattern.test(mobileNumber);

    while (!isValid) {
        alert("Enter a Valid Mobile Number, Numbers Only with length of 11, and starting with 010, 011, or 012!");
        mobileNumber = getStringInput("Enter your Mobile Number (11 Digits)", "0115793687 eg.");
        isValid = (mobileNumber !== null) && mobileNumberPattern.test(mobileNumber);
    }

    return mobileNumber;
}

// Get Email -> Email Formatted
function getUserEmail() {
    let email = getStringInput("Enter your Email", "Anything@Anything.Anything eg.");
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    let isValid = (email !== null) && emailPattern.test(email);

    while (!isValid) {
        alert("Enter a Valid Email, should be formatted like this user@example.com");
        email = getStringInput("Enter your Email", "Anything@Anything.Anything eg.");
        isValid = (email !== null) && emailPattern.test(email);
    }

    return email;
}

// Get a Color
function getColor() {
    let color = getStringInput("Choose a color: red, green, or blue", "blue");

    if (color !== null) color = color.toLowerCase();

    while (color === null || (color !== "red" && color !== "green" && color !== "blue")) {
        alert("Invalid choice! Please type 'red', 'green', or 'blue'.");
        color = getStringInput("Choose a color: red, green, or blue", "blue").toLowerCase();
    }
    return color;
}

//  Main Flow
// Get User Info
let nameInput = getUserName();
let phoneInput = getUserPhoneNumber();
let mobileInput = getUserMobileNumber();
let emailInput = getUserEmail();
// Get Display COlor
let userColor = getColor();
// Get Current Date
let date = new Date();
let formattedDate = date.toLocaleDateString();

// Output
console.log("%c Welcome, " + nameInput + "!", "color: " + userColor + "; font-size: 20px; font-weight: bold;");
console.log("%c ========================================", "color: " + userColor + ";");
console.log("%c Today's Date: " + formattedDate, "color: " + userColor + ";");
console.log("%c Phone Number: " + phoneInput, "color: " + userColor + ";");
console.log("%c Mobile Number: " + mobileInput, "color: " + userColor + ";");
console.log("%c Email Address: " + emailInput, "color: " + userColor + ";");
console.log("%c ========================================", "color: " + userColor + ";");

// ========================================================================================================= //