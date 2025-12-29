// (1).
// Ask the user to enter a message then display it using the different html heading tags (from <h1> to <h6>) using Loops.
// DO NOT write the header element explicitly in your script!

function printHeadings(heading = "Heading") {
    for (let i = 1; i <= 6; i++) {
        document.write("<h" + i + ">" + heading + "</h" + i + ">")
    }
}

let heading = prompt("Enter a Heading Text", "Heading");
printHeadings(heading);


// ========================================================================================================= //