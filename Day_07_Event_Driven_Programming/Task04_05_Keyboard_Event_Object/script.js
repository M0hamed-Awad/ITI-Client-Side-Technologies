// (4).

// find the difference between the keydown and keypress events when used with: Ctrl, Alt, and Shift keys

addEventListener("keydown", function () {
  console.log("keydown: key=" + event.key);
});

addEventListener("keypress", function () {
  console.warn("keypress: key=" + event.key);
});

// ====================================================================================================== //

// (5).

// Use the JavaScript event object to detect: the physical key pressed, and the character printed on screen
// Bonus: prevent default browser behavior for specific key combinations

let displayArea = document.getElementById("character_pressed");

addEventListener("keydown", function () {
  if (event.key === "f" && event.ctrlKey === true) {
    event.preventDefault();
    console.warn("The combination (Ctrl + " + event.key + ") is Disabled!");
  } else displayArea.innerText = event.key;
});

// ====================================================================================================== //
