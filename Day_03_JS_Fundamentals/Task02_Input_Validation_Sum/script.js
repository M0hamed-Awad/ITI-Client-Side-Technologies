// (2).
// Write a script that takes from the user n values and returns their sum,
// stop receiving values from user when he enters 0 or sum exceeds 100,
// check that the entered data is numeric and inform the user with the total sum of the entered values in console.


function getSum() {
    let sum = 0;
    while (true) {
        let input = prompt("Enter a Number [0 to Stop]", "x");

        if (input == 0 || input == null) break;

        if (isFinite(input) && !(isNaN(parseInt(input)))) {
            sum += parseInt(input);
        }
        else {
            alert("Enter a valid number, Numerical Values ONLY!");
            continue;
        }

        if (sum > 100) break;
    }

    return sum;
}

console.log("The Sum is: " + getSum());

// ========================================================================================================= //