// (7).

// update form.html file in the demo folder sand ensure that
// displayVal(this), eraserFun(), clearFun() are working properly
// Allow Multiple Selection

let displayArea = document.getElementById("txt1");

function displayVal(inputField) {
  displayArea.value += inputField.value.trim();
}

function eraseVal() {
  displayArea.value = displayArea.value.slice(0, displayArea.value.length - 1);
}

function clearField() {
  displayArea.value = "";
}

let displayBtn = document.getElementById("displayBtn");
let displayedOptionsTextArea = document.getElementById("displayedOptions");

displayBtn.addEventListener("click", function(){
  let menu = document.getElementById("menu");
  let selectedOptions = []
  let options = menu.options
  for (let i = 0; i < options.length; i++) {
    if(options[i].selected) selectedOptions.push(options[i].value);
  }
  displayedOptionsTextArea.value = selectedOptions.join(" ");
});