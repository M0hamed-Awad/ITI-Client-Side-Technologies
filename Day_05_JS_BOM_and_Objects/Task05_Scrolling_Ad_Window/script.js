// (5).
// Create a parent a window that opens a scrollable advertising child window.

let childWindow;
let childWindowSize = 200
let intervalId;

// Open Child Window
function openChildWindow() {
    childWindow = open("child.html", "ChildWindow", "width=" + childWindowSize + ",height=" + childWindowSize);
    childWindow.resizeTo(childWindowSize, childWindowSize);
    childWindow.moveTo(childWindowSize, childWindowSize)
    // Start moving the child window
    scrollChildWindow()
    // Keep Focusing
    if (childWindow) childWindow.focus();
}

// Start Scrolling the Child Window - SetInterval
// function scrollChildWindow() {
//     intervalId = setInterval(scrollToBottom, 5);
// }

// Scroll to the Bottom - SetTimeout with SetInterval Behavior
function scrollChildWindow() {
    intervalId = setTimeout(function () {
        scrollToBottom();
        scrollChildWindow();
    }, 5);
}

// Scroll to the Bottom
function scrollToBottom() {
    childWindow.scrollBy({
        top: 3,
        behavior: "smooth"
    });
}

// ========================================================================================================= //