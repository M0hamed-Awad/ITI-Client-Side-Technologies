// (2).

// Create a simple form that on submit display confirmation message and according
// to user action it will either stop submission from proceeding or it will continue form submission.

let form = document.getElementById("simple_form");

form.addEventListener("submit", function () {
  event.preventDefault();
  let isWantingToContinue = confirm(
    "Are you Sure you want to SUBMIT the Form?"
  );
  if (isWantingToContinue) form.submit();
});

// ====================================================================================================== //

// (3).

// Make your own custom event “custEvent” that fires after 30 seconds if the user has not entered any data.

let duration = 5000;

// 1- Define the Event
let myEvent = new Event("custEvent");

// 2- Activate it
addEventListener("custEvent", function () {
  alert("You didn't enter data for 30 seconds!");
});

// 3- Detect Data Entry
let isDataEntered = false;
let inputChangedHandler = function () {
  isDataEntered = true;
};

const inputFields = document.querySelectorAll("input");

for (let i = 0; i < inputFields.length; i++) {
  inputFields[i].addEventListener("input", inputChangedHandler);
}

// 4- Detect Data Entry For 30 Seconds

let checkForDataEntry = function () {
  // If No Data has been Entered
  if (!isDataEntered) dispatchEvent(myEvent); // Fire the Event
  else isDataEntered = false; // Reset - For the Next 30 sec
  setTimeout(checkForDataEntry, duration); // Repeat
};

setTimeout(checkForDataEntry, duration);
