// (5).
// Write a code snippet that counts the number of values that are multiples of 3 and 5 within a specified range,
// based on two input values. The code should also display these values and their total sum.

// Example: If user entered values are 1,10 the output will be
// Number multiple of 3: 3,6,9 Number multiple of 5: 5,10 total sum is 33


function getMultiplesOf5And3(start, end) {
    let multiplesOf5 = "", multiplesOf3 = "";
    let totalSum = 0;
    for (let i = start; i <= end; i++) {
        if (i % 3 == 0) { totalSum += i; multiplesOf3 = (multiplesOf3 == "") ? multiplesOf3 + i : multiplesOf3 + ", " + i; }
        if (i % 5 == 0) { totalSum += i; multiplesOf5 = (multiplesOf5 == "") ? multiplesOf5 + i : multiplesOf5 + ", " + i; }
    }

    console.log("Numbers multiple of 3: " + multiplesOf3 + ".");
    console.log("Numbers multiple of 5: " + multiplesOf5 + ".");
    console.log("Total sum is: " + totalSum);
}

let start = parseInt(prompt("Enter the Start Value", "Start Value"));
let end = parseInt(prompt("Enter the End Value", "End Value"));

getMultiplesOf5And3(start, end);

// ========================================================================================================= //