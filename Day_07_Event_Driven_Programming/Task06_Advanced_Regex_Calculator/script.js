// (6).

// Implement the required functions in an external file to let calculator.html works properly

let answerField = document.getElementById("Answer");
let expression = "";

function EnterNumber(value) {
  answerField.value += value;
  expression = answerField.value;
}

// EnterOperator(this.value)
function EnterOperator(value) {
  answerField.value += value;
  expression = answerField.value;
}

// EnterEqual()
function EnterEqual() {
  expression = answerField.value;
  // Prevent Illegal Expressions
  if (!isExpressionValid(expression)) return;
  // Example: 5+8*2-3/2
  // Perform all the Operations (on the operators length)
  // Consider the Order of Execution
  // Go From Left to Right
  //        ==> First Loop:
  //            Perform (*) and (/)
  expression = executeFirstClassOperations();
  //        ==> Second Loop:
  //            Perform (+) and (-)
  expression = executeSecondClassOperations();
  // TODO: Handle (.8);

  answerField.value = expression;
}

// Validate the Expression
function isExpressionValid(expression) {
  //    - Cannot be anything other than Numbers and Operators (*, /, +, -)
  if (!/^[\d+\-*/\.]+$/.test(expression)) {
    alert("Characters are Invalid");
    return false;
  }
  //    - Cannot Start with an Operator
  else if (/^[*/+]/.test(expression)) {
    alert("Invalid Start of Expression");
    return false;
  }
  //    - Cannot End with and Operator
  else if (/[+\-*/]$/.test(expression)) {
    alert("Invalid End of Expression");
    return false;
  }

  return true;
}

// Perform the First Class Operations
function executeFirstClassOperations() {
  // Example: 5+8.3*2.4-3/2
  let firstClassOperationsRegEx = /(-?\d+(\.\d+)?)([*/])(-?\d+(\.\d+)?)/; // Search For ==> (number) (* or /) (number)
  while (firstClassOperationsRegEx.test(expression)) {
    // Get the First Operation from the Left
    let matchedExpression = expression.match(firstClassOperationsRegEx);

    if (matchedExpression) {
      // Get Operation Result [ (Left Operand), (Operation), (Right Operand) ]
      let operationResult = getOperationResult(matchedExpression);

      result = getResult(
        operationResult[0],
        operationResult[1],
        operationResult[2]
      );
      expression = expression.replace(matchedExpression[0], result);
    }
  }
  return expression;
}

// Perform the Second Class Operations
function executeSecondClassOperations() {
  let secondClassOperationsRegEx = /(-?\d+(\.\d+)?)([+\-])(-?\d+(\.\d+)?)/; // Search For ==> (number) (+ or -) (number)
  while (secondClassOperationsRegEx.test(expression)) {
    // Get the First Operation from the Left
    let matchedExpression = expression.match(secondClassOperationsRegEx);
    if (matchedExpression) {
      // Get Operation Result [ (Left Operand), (Operation), (Right Operand) ]
      let operationResult = getOperationResult(matchedExpression);

      result = getResult(
        operationResult[0],
        operationResult[1],
        operationResult[2]
      );
      expression = expression.replace(matchedExpression[0], result);
    }
  }
  return expression;
}

// Destructure the Matched Expression
function getOperationResult(matchedExpression) {
  let leftOperand = parseFloat(matchedExpression[1]);
  let operation = matchedExpression[3];
  let rightOperand = parseFloat(matchedExpression[4]);

  return [leftOperand, operation, rightOperand];
}

// Perform the Right Operation and Return the Result
function getResult(leftOperand, operation, rightOperand) {
  switch (operation) {
    case "*":
      return leftOperand * rightOperand;
    case "/":
      return leftOperand / rightOperand;
    case "+":
      return leftOperand + rightOperand;
    case "-":
      return leftOperand - rightOperand;
    default:
      return 0;
  }
}

// EnterClear()
function EnterClear() {
  answerField.value = "";
}
