// (5).
// Memory Game
// Flag to Continue Showing the Images
let isCorrect = false;
// Counter to Displayed Images at the Current Moment - Once it reaches 12 then WE HAVE A WINNER
let numberOfDisplayedImages = 0
// Current and Previous Displayed Images to compare them together to know if they are the same or not
let currentImage, previousImage;
// To determine if the 2 Images are Being Displayed at the same time or Not, to Indicate is this the Correct Choice or Not
let currentImageStatus = 1; // 1 -> Means there is 1 Image displayed right now, 2 -> Means the 2 Same Images are being displayed note (Correct)
// Distribute Images on the Grid ==> Done ==> Next Step (Randomly)
let memoryGameGrid = [[], [], []];

onload = function () {
    shuffleGrid();
};

// Global Moon Image
const moonImage = "../images/Moon.gif";

// Get Images Sources
const images = [
    "../images/Balloons.gif",
    "../images/Bear.gif",
    "../images/Cake.gif",
    "../images/Fish.gif",
    "../images/Owl.gif",
    "../images/Penguin.gif"
];

// Initialize All the Images to "Moon" ====> Done in HTML

// Entry Point to all of the Game Logic
// On Mouse Click replace the "Moon" image to Other Image.  ==> Done
function replaceImage(img, rowIndexInGrid, colIndexInGrid) {
    // If the image is already showing its face OR we clicked the same exact element twice, do nothing.
    if (!img.src.includes("Moon.gif") || img === previousImage) return;
    // 1- Replace the Image
    img.src = images[memoryGameGrid[rowIndexInGrid][colIndexInGrid]];
    // 2- Change the Current Image Status to be 1 - One Image is being Displayed Now
    // currentImageStatus = 1;
    // 3- If the Image Status is equal to 1 - First Image to be Clicked
    if (currentImageStatus == 1) {
        previousImage = currentImage = img  // 3.1- Set the Previous and Current Image to the CLicked Image
        currentImageStatus++; // 3.2- Change the Current Image Status to be 1 - One Image is being Displayed Now
        numberOfDisplayedImages++;
    }
    // 4- Else
    else if (currentImageStatus == 2) {
        currentImage = img;     // 4.1- Set the Current Image to the Coming Image
        // 4.2- Check if the Previous Image is Equal to the Current Image or Not
        isCorrect = (previousImage.src === currentImage.src);
        // 4.4- Else Flip the Image & Reset the Number of Displayed Images Counter
        if (!isCorrect) {
            flipImage(previousImage);
            flipImage(currentImage);
            // flipAllImages();
            numberOfDisplayedImages = 0;
        }
        // 4.3- Pause the Image if it was Equal to the Previous Image
        else { numberOfDisplayedImages++; }
        currentImageStatus = 1;
    }

    // Do we have a WINNER?
    if (numberOfDisplayedImages == 12) {
        alert("Congratulations! You have matched all the images!");
        return; // Exit
    }
}

// Shuffle the Images Grid - Fisher-Yates
function shuffleGrid() {
    // 1. Create a flat list of pairs (0-5)
    let flatGrid = [];
    for (let i = 0; i < images.length; i++) {
        flatGrid.push(i, i); // Insert the Same Value Twice as the Grid will have ONLY 2 Similar Images
    }
    // 2. Fisher-Yates Shuffle
    for (let i = flatGrid.length - 1; i > 0; i--) {
        // 2.1- Pick a random index from 0 to i
        // Math.random() * (i + 1) gives a number between 0 and i.999
        // Math.floor() makes it an integer between 0 and i
        const randomIndex = Math.floor(Math.random() * (i + 1));
        // 2.2- Swap elements [i] and [random]
        flatGrid = swap(flatGrid, i, randomIndex);
        // 2.3- Repeat Re-Shuffling the Unshuffled Zone
    }
    // 3. Store the shuffled 1D array into the Game Grid
    getGridValues(flatGrid);
    console.log(memoryGameGrid); // for testing
}

// Store Gride Values from a Flat List
function getGridValues(list) {
    let counter = 0;
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 4; col++) {
            memoryGameGrid[row][col] = list[counter];
            counter++;
        }
    }
}

// Swap Elements
function swap(arr, indexA, indexB) {
    let temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
    return arr;
}

// Flip a Single Image
function flipImage(img) {
    setTimeout(function () {
        img.src = moonImage;
    }, 1000);
}

// Flip All the Images - If one Answer is Wrong
function flipAllImages() {
    for (let i = 0; i < document.images.length; i++) {
        flipImage(document.images[i])
    }
}

// Restart the Game
function restartGame() {
    // 1- Reset all Global Variables
    isCorrect = false;
    numberOfDisplayedImages = 0
    currentImage = previousImage = null;
    currentImageStatus = 1;
    // 2- Re-Shuffle the Grid
    shuffleGrid();
    // 3- Flip All of the Images
    flipAllImages();
}
// ========================================================================================================= //