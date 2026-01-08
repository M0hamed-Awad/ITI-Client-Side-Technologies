// display a greeting message to your visitor with displaying an image as his profile pic referring to his gender,
// and inform him with his number of visits to the site.
// Display user name and number of visits with font color according to his choices.

onload = function () {
  let visitsCount = 1;
  // Update the User Visits Count
  if (hasCookie("numberOfVisits"))
    visitsCount = parseInt(getCookie("numberOfVisits")) + 1;
};

// Update the Expiry Date
let expiryDate = new Date();
expiryDate.setMonth(expiryDate.getMonth() + 1);
// Update the Cookie with the Visits Count
setCookie("numberOfVisits", visitsCount.toString(), expiryDate);
if (hasCookie("userName") && hasCookie("gender") && hasCookie("favColor")) {
  // Get the needed Cookies Values to use them later
  let uName = getCookie("userName");
  let uGender = getCookie("gender");
  let uColor = getCookie("favColor");

  // Update HTML Based on User Info
  // Show the User Name
  let userNameElement = document.getElementById("userName");
  if (userNameElement) {
    userNameElement.textContent = uName;
    userNameElement.style.fontWeight = "bold";
    userNameElement.style.color = uColor;
  }
  // Show the User Visits Count
  let userNumberOfVisits = document.getElementById("visitCount");
  if (userNumberOfVisits) {
    userNumberOfVisits.textContent = visitsCount;
    userNumberOfVisits.style.color = uColor;
  }
  // Show the User Gender
  let userGenderImage = document.getElementById("userGenderImg");
  if (userGenderImage)
    userGenderImage.src =
      uGender === "Male" ? "../images/1.jpg" : "../images/2.jpg";
}
