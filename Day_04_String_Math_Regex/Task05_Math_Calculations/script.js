// (5).

// Enter the value of a circle’s radius in order to calculate its area
// Enter another value to calculate its square root and alert the result
// Enter an angle to calculate its cos value then display the output in the console.

// Get the Radius
function getValidNumberInput(msg = "Enter a String", defaultMsg = "String Value") {
    let inputValue = prompt(msg, defaultMsg);
    let inputNumericalValue = parseFloat(inputValue);

    // Validate Float Input
    while (isNaN(inputNumericalValue) || inputValue === null || inputNumericalValue <= 0) {
        alert("Invalid input! Please enter a valid numerical value ( > 0).");
        inputValue = prompt(msg, defaultMsg);
        inputNumericalValue = parseFloat(inputValue);
    }

    return inputNumericalValue;
}

// Calculate Area
function getCircleArea(radius = 0.0) {
    let area = Math.PI * Math.pow(radius, 2);
    return area;
}

// Calculate Square Root
function getSquareRoot(value) {
    let result = Math.sqrt(value);
    return result
}

// Alert Value
function alertValue(value, msg) {
    alert(msg + value);
}

// Get Angle
function getAngleInRadians(angleInDegrees) {
    let angleInRadians = angleInDegrees * (Math.PI / 180);
    return angleInRadians;
}

// Calculate Cosin
function getCos(angleInRadians) {
    let cosValue = Math.cos(angleInRadians);
    return cosValue;
}

//  Main Flow
let radius = getValidNumberInput("Enter the value of a circle’s radius in to calculate its area", "15");
let area = getCircleArea(radius);
alertValue(area.toFixed(3), "Total area of the circle is ")

let sqrInput = getValidNumberInput("Enter another value to calculate its square root", "25");
let sqrResult = getSquareRoot(sqrInput);
alertValue(sqrResult.toFixed(2), "The square root of " + sqrInput + " is ")

let angleDegrees = getValidNumberInput("Enter an angle to calculate its cos value", "60");
let radians = getAngleInRadians(angleDegrees);
let cosResult = getCos(radians);

console.log("%c The Cosine of " + angleDegrees + " is " + cosResult.toFixed(4), "color: blue; font-weight: bold;");

// ========================================================================================================= //