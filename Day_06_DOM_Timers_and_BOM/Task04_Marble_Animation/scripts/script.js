// (4).
// Create an animation on the page that makes an orange marble move to the next location in the line every second.
// Allow the user to stop the animation by placing the cursor on any marble.
// The animation will restart again once the user removes the cursor from that marble.
// Add your own interesting feature to the script that tinkers with the speed or location of images

let images;
let currentIndex = -1;
let intervalId;
let animationSpeed = 1000;

onload = function () {
  images = document.images;
  // Start Animation
  startMarblesAnimation();
};

// Change to ON
function marbleOn(index) {
  if (images[index]) images[index].src = "../images/marble_on.jpg";
}
// Change to OFF
function marbleOff(index) {
  if (images[index]) images[index].src = "../images/marble_off.jpg";
}

// Start Loading Animation
function startMarblesAnimation() {
  // Clearing the Interval Before Starting a New One
  clearTimeout(intervalId); // BUG FIX, if removed the animation will get faster each time the user puts the mouse and
  //  removes it from the marble

  intervalId = setTimeout(function () {
    marblesLoadingAnimation(); // 1- On & Off the Marbles that are on their turn
    if (currentIndex === 0) animationSpeed = (animationSpeed === 1000) ? 300 : 1000; // 2- Change speed after full cycle
    startMarblesAnimation(); // 3- Repeat
  }, animationSpeed);
}

// Marbles ON-OFF
let marblesLoadingAnimation = function () {
  // 1. Move 1 Position - Increase the Current Index ===> With Circular Functionality
  currentIndex = (currentIndex + 1) % images.length;
  // 2. Turn ON Marble at the Current Index
  marbleOn(currentIndex);
  // 3. Turn OFF the Previous Marble
  marbleOff(currentIndex == 0 ? images.length - 1 : currentIndex - 1);
};

// Stop Loading Animation
function stopMarblesAnimation(marble) {
  // Stop Animation ONLY IF the Mouse Hover on the Currently Active Marble
  if (marble.src === images[currentIndex].currentSrc) {
    clearTimeout(intervalId);
  }
}