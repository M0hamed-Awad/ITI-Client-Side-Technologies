// (1).
// Write a script that shows a “typing message” appearing in a new child window.
// The new window should close after few seconds of displaying your message.

let childWindow;
let childWindowSize = 250

let delay = 50;

let pageMessage = "Your message will be displayed character by character.\n" +
    "A few seconds after the message is complete, the window will close automatically ...";
let displayArea;

let charactersIterator = 0;
let wordsIterator = 0;



// Open Child Window
function openChildWindow() {
    childWindow = open("child.html", "ChildWindow", "width=" + childWindowSize + ",height=" + childWindowSize);
    childWindow.resizeTo(childWindowSize * 3, childWindowSize);
    childWindow.onload = function () {
        childWindow.focus() // Focus
        displayArea = childWindow.document.getElementById("displayArea"); // Get the HTML Element -- displayArea (Global)
        displayMessage(pageMessage); // Display the Message
    };
}

// Display the Whole Message
function displayMessage() {
    // 1- Get the Message Words
    let messageWords = pageMessage.split(" ");
    // 2- Stop Writing if you have Finished the Message
    if (wordsIterator < messageWords.length) displayWord(messageWords[wordsIterator]); // 2.1- Display Message Word
    // 3- If the Message is Finished
    else closeWindow()  // 3.1- Close the Window

}

// Display Word Character By Character
function displayWord(word) {
    // Display the Word Characters in the HTML Element
    displayWordCharacters(word);
}

// Display Word Characters
function displayWordCharacters(word) {
    // 1- Stop Writing if you have Finished the Word
    if (charactersIterator < word.length) setTimeout(function () { displayCharacter(word) }, delay);
    // 2- If the Characters are Finished - The Word have been Written
    else {
        displayArea.innerText += " ";   // 2.1- Handle the Spaces Between Words
        charactersIterator = 0;     // 2.2- Reset the Characters Iterator
        wordsIterator++;    // 2.3- Increase the Words Iterator for the Next Word
        displayMessage();   // 2.4- Repeat - Write the Rest of the Words
    }
}

// Display Single Character
let displayCharacter = function (word) {
    displayArea.innerText += word[charactersIterator]; // 1- Write the Current Character
    charactersIterator++;   // 2- Increase the Characters Iterator
    displayWordCharacters(word);    // 3- Repeat
}

// Close Child Window
function closeWindow() {
    setTimeout(function () {
        childWindow.close()
    }, 2000);
}