// (3).

// Photo gallery with Next, Previous, and Slideshow.
// • The next button goes to the next pic and stops when reaching the last image
// • Previous goes back to the previous image and stops when reaching the first image
// • The slideshow button will circulate, i.e. when reaches the last image it should
//      continue displaying starting from the first image
// • The stop button will stop slideshow behavior.
// • Let the delay between every two images last 2 seconds

let images = [
    "../images/1.jpg",
    "../images/2.jpg",
    "../images/3.jpg",
    "../images/4.jpg",
    "../images/5.jpg",
    "../images/6.jpg",
]

let imagesIterator = 0;
let intervalId = null;

// Display Next Image
function nextImage() {
    // Only Go To the Next Image IF it's NOT the Last Image Already
    if (imagesIterator < images.length - 1) {
        document.getElementById("slider").src = images[++imagesIterator]
    }
}

// Display Previous Image
function previousImage() {
    // Only Go To the Previous Image IF it's NOT the First Image Already
    if (imagesIterator > 0) {
        document.getElementById("slider").src = images[--imagesIterator]
    }
}

// Display SlideShowImages - Circular
function nextSlideshowImage() {
    // 1- If we reach the END then reset the Images Iterator
    if (imagesIterator == images.length - 1) imagesIterator = -1;
    // 2- And Then Display the First Image
    document.getElementById("slider").src = images[++imagesIterator]
}

// Start Images Slideshow - with SetTimeout
function slideshow() {
    // Start a Timer ONLY IF there is NO Timers Already have been Created Yet
    if (intervalId === null) intervalId = setTimeout(runSlideshow, 1500);
}

// Run Slideshow - To Enable the Looping without Multiple Timers in the Same Time
function runSlideshow() {
    nextSlideshowImage();   // 1- Show the Next Image to be Displayed
    intervalId = setTimeout(runSlideshow, 1500); // 2- Repeat
}

// Slideshow but with SetInterval
function slideshowInterval() {
    // Start a Timer ONLY IF there is NO Timers Already have been Created Yet
    if (intervalId === null) intervalId = setInterval(nextSlideshowImage, 1500);
}

// Stop the SlideShow
function stopSlideshow() {
    clearInterval(intervalId);
    intervalId = null;
}


