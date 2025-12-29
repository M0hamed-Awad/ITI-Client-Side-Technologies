// (6).

// Write a code snippet that takes a number of rows as input and prints a pattern of stars.
// Each row should contain a number of stars equal to the row number.

function printPyramid(rowCount) {
    for (let i = 0; i < rowCount; i++) {
        let rowStars = "";

        for (let j = 0; j <= i; j++) { rowStars = rowStars + "* "; }

        console.log(rowStars);
        console.log("\n");
    }
}

let numberOfRows = parseInt(prompt("Enter the Number of Rows", "#Rows"));
printPyramid(numberOfRows);

// ========================================================================================================= //