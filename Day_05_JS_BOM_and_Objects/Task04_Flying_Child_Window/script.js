// (4).
// Create a parent window that opens a flying child window.
// Hint: Start by creating a parent window that opens a child window.
// Child window should always be on top view and moves up and down within boundaries of user screen.
// Parent window should contain a button that stops child window movement.

let childWindow;
let childWindowSize = 200
// Flying Properties
let step = 5;
let xPosition = 0, yPosition = 0;
let xDirection = 1, yDirection = 1;
let intervalId;
let intervalDelay = 50;
let initialDelay = 500; // Fix: To avoid Scattering
// Boundaries
let scWidth = screen.availWidth;
let scHeight = screen.availHeight;

// Open Child Window
function openChildWindow() {
    childWindow = open("child.html", "ChildWindow", "width=" + childWindowSize + ",height=" + childWindowSize);
    childWindow.resizeTo(childWindowSize, childWindowSize);
    // Start moving the child window
    bounceChildWindow()
    // Keep Focusing
    if (childWindow) childWindow.focus();
}

// Start moving the child window
function bounceChildWindow() {
    // moveChildWindowUsingPureSetInterval();
    setTimeout(moveChildWindowUsingSetTimeOutWithSetIntervalBehavior, initialDelay);
}

// Flying using Pure SetInterval
function moveChildWindowUsingPureSetInterval() {
    if (!childWindow || childWindow.closed) return;

    // 1- Get Screen Boundaries (width, height)
    // Already Defined Globally

    // 2- Get Starting Position of Child Window (0, 0) As "xPosition" and "yPosition"
    // Already Defined Globally

    // 3- Determine the Direction (+1 DOWN, -1 UP)
    // Already Defined Globally

    // 4- SetInterval
    setTimeout(function () {
        intervalId = setInterval(startFlight, intervalDelay);
    }, initialDelay); // Fix: 100ms delay - to stop the "scattering"
}

// Flying using SetTimeout with SetInterval Behavior
function moveChildWindowUsingSetTimeOutWithSetIntervalBehavior() {
    if (!childWindow || childWindow.closed) return;

    // 1- Get Screen Boundaries (width, height)
    // Already Defined Globally

    // 2- Get Starting Position of Child Window (0, 0) As "xPosition" and "yPosition"
    // Already Defined Globally

    // 3- Determine the Direction (+1 DOWN, -1 UP)
    // Already Defined Globally

    // 4- SetTimeout
    intervalId = setTimeout(function () {
        startFlight();
        moveChildWindowUsingSetTimeOutWithSetIntervalBehavior();
    }, intervalDelay);
}

let startFlight = function () {
    // 4.1- Update "yPosition" ====> yPosition + (Direction * step)
    yPosition = yPosition + (yDirection * step);
    // 4.2- Update "xPosition" ====> xPosition + (Direction * step)
    xPosition = xPosition + (xDirection * step);
    // 0.0- Fix: Resize Bug
    childWindow.resizeTo(childWindowSize, childWindowSize);
    // 4.3- Move To (xPosition,yPosition)
    childWindow.moveTo(xPosition, yPosition);
    // 4.4- If ("yPosition" exceed [height]) || ("yPosition" <= 0) ===> reverse direction (Direction * -1)
    if (yPosition >= (scHeight - childWindowSize) || yPosition <= 0) yDirection = yDirection * -1;
    // 4.5- If ("xPosition" exceed [height]) || ("xPosition" <= 0) ===> reverse direction (Direction * -1)
    if (xPosition >= (scWidth - childWindowSize) || xPosition <= 0) xDirection = xDirection * -1;
    // 5. repeat from 4.1 to 4.5
};

// 1- Get Screen Boundaries (width, height)
// 2- Get Starting Position of Child Window (0, 0) As "xPosition" and "yPosition"
// 3- Determine the Direction (+1 DOWN, -1 UP)
// 4- SetInterval
// 4.1- Update "yPosition" ====> yPosition + (Direction * 50)
// 4.2- Move To (xPosition,yPosition)
// 4.3- If ("yPosition" exceed [height]) || ("yPosition" <= 0) ===> reverse direction (Direction * -1)
// 5. repeat from 4.1 to 4.3

// Stop Child Window Movement
function stopChildWindow() {
    clearInterval(intervalId);
    // Keep Focusing
    if (childWindow) childWindow.focus();
}