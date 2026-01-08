// Use your functions to create the required cookies,

// Note:
// • Do not use <form> tag in the registration page.
// • Replace the registration page with the profile page using location object

let registerBtn = document.getElementById("registerBtn");
registerBtn.addEventListener("click", function () {
  saveUserCookies();
  location.replace("../pages/profile.html");
});

function saveUserCookies() {
  // Cookie Expiry Date
  let expiryDate = new Date();
  expiryDate.setMonth(expiryDate.getMonth() + 1);
  // Get User Info
  let userName = document.getElementById("userName").value.trim();
  let age = document.getElementById("age").value;
  let favColor = document.getElementById("favColor").value;
  let gender = document.getElementById("male").checked ? "Male" : "Female";
  // Form the Cookie Name and Value from the User Info
  let userIdCookieValue = userName + gender.charAt(0) + favColor + age;
  setCookie("userID", userIdCookieValue, expiryDate);
  setCookie("userName", userName, expiryDate);
  setCookie("age", age, expiryDate);
  setCookie("favColor", favColor, expiryDate);
  setCookie("gender", gender, expiryDate);
  setCookie("numberOfVisits", "0", expiryDate);
}
