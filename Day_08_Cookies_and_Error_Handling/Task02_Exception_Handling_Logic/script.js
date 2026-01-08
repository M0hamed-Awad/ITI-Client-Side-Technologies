// (2.1).

// Create a function that accepts only 2 parameters and throw exception if number of parameters
// either less than or exceeds 2 parameters

function test2Parameters(firstParam, secondParam) {
  if (arguments.length !== 2) {
    throw Error("The number of Parameters must be EXACTLY 2!");
  }

  console.log(
    "Legal.\nFirst Parameter Value: " +
      firstParam +
      "\nSecond Parameter: " +
      secondParam
  );
}

// ====================================================================================================== //

// (2.2).

// Create an adding function that adds n numbers only.
// Throw exception if the user passed any data type other than “number”
// or called your function without passing any parameters.

function add() {
  if (arguments.length === 0)
    throw Error("You MUST pass at least one Parameter to the Function");

  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === "number" && !isNaN(arguments[i]))
      sum += arguments[i];
    else
      throw TypeError(
        "This Function only Accept Numbers!\nParameter at index " +
          i +
          " is not a valid number!"
      );
  }
  return sum;
}
