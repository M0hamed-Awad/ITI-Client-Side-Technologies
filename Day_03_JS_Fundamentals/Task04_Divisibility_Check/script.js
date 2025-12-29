// (4).
// Ask the user to enter three numerical values x, y and z.
// The script should check if x is divisible by y only or z only or both y and z.

function isDivisible(x, y, z) {
    if ((x % y == 0) && (x % z == 0)) // Both
        console.log(x + " is Divisible by Both " + y + " and " + z + ".");

    else if (x % y == 0) // Only "y"
        console.log(x + " is Divisible by " + y + " Only.");

    else if (x % z == 0) // Only "z"
        console.log(x + " is Divisible by " + z + " Only.");

    else // Neither
        console.log(x + " is Neither Divisible by " + y + " nor " + z + ".");
}

let x = 0, y = 0, z = 0;

while (true) {
    x = prompt("Enter the Divisible Test Value", "Divisible Value");
    y = prompt("Enter the First Numerical Value", "First Numerical Value");
    z = prompt("Enter the Second Numerical Value", "Second Numerical Value");

    if (isNaN(x) || isNaN(y) || isNaN(z)) {
        alert("Enter a valid numerical values ONLY!");
        continue;
    }

    else break;
}

isDivisible(x, y, z);


// ========================================================================================================= //