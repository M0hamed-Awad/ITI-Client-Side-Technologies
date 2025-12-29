// (7).

// Ask the user to enter 3 values where x and y are two numeric values while z is a
// string value. The script should display the following:
// • The range of numbers between x and y depending on the value of z according to the following:
// o If z=”odd” the function will display only the odd values between x and y.
//      x and/or y are included if any is odd.
// o If z=”even” the function will display only the even values between x and y.
//      x and/or y are included if any is even.
// o If z=”no” the function will display all values between x and y. x and y are included.
// o If z=”odd” the function will display only the odd values between x and y.
// o Make sure that the user entered the proper data type for each parameter, if not,
//      inform the user to re-enter the required parameters.
// • The sum of the displayed numbers.
// • Apply a displaying style in console.
// The output will be either descending (if x>y) or ascending order (if x<y)

// Example: If user entered values are 9,15 and answered the question about the even and
//      odd with
// “no” then the output will be: 9,10,11,12,13,14,15 and their sum value that is 84
// If the answer is “odd” then the output will be: 9,11,13,15 and their sum value that is 48
// If the answer is “even” then the output will be: 10,12,14 and their sum value that is 36

let a = 0, b = 0, c = "";

// Validating Input
while (true) {
    a = prompt("Enter the Start Numerical Value", "Start Numerical Value");
    b = prompt("Enter the End Numerical Value", "End Numerical Value");
    c = prompt("Enter the String Value (Odd - Even - No [Range Between])", "String Value").toLowerCase();

    if (isNaN(a) || isNaN(b) || (c !== "odd" && c !== "even" && c !== "no")) {
        alert("Enter a valid numerical values ONLY for a and b, and 'odd'/'even'/'no' for c.");
        continue;
    }

    else {
        a = parseInt(a);
        b = parseInt(b);
        break;
    }
}

// Determine in which order we should print the output
let isAscending = (a < b);

// Odd numbers Between the 2 values (Ascending OR Descending)
if (c === "odd") {
    let oddNumbers = getOddInRange(isAscending, a, b);
    console.log(oddNumbers);
}

// Even numbers Between the 2 values (Ascending OR Descending)
else if (c === "even") {
    let evenNumbers = getEvenInRange(isAscending, a, b);
    console.log(evenNumbers);
}

// All numbers Between the 2 values (Ascending OR Descending)
else {
    let numbersRange = getRange(isAscending, a, b);
    console.log(numbersRange);
}

function getEvenInRange(isAscending, start, end) {
    let evenNumbers = "";

    for (let i = start; (isAscending ? i <= end : i >= end); (isAscending ? i++ : i--))
        // storing the number considering the formatting commas
        if (i % 2 === 0) evenNumbers = (evenNumbers == "") ? evenNumbers + i : evenNumbers + ", " + i;

    return evenNumbers;
}

function getOddInRange(isAscending, start, end) {
    let oddNumbers = "";

    for (let i = start; (isAscending ? i <= end : i >= end); (isAscending ? i++ : i--))
        if (i % 2 !== 0) oddNumbers = (oddNumbers == "") ? oddNumbers + i : oddNumbers + ", " + i;

    return oddNumbers;
}

function getRange(isAscending, start, end) {
    let numbersRange = "";

    for (let i = start; (isAscending ? i <= end : i >= end); (isAscending ? i++ : i--))
        numbersRange = (numbersRange == "") ? numbersRange + i : numbersRange + ", " + i;

    return numbersRange;
}