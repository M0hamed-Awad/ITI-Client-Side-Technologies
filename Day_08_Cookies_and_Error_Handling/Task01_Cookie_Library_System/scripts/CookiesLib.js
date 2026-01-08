// (1).

// Make your own .js file that should have the following functions:
// • getCookie(cookieName):
//      o Retrieves a cookie value based on a cookie name.
function getCookie(cookieName) {
  // Validate the Type of Parameters
  if (typeof cookieName !== "string")
    throw new TypeError("Name and must be strings.");
  // Validate the Number of Parameters
  if (arguments.length !== 1)
    throw Error("The function must take exactly 1 parameter (Cookie Name).");
  // Check if the Cookies have a Cookie with that Name or not
  if (!hasCookie(cookieName))
    throw Error("There is no Cookie with this Name: " + cookieName + "!");
  // Else Find the Target Cookie Value from all the Cookies
  let cookies = allCookieList();
  return cookies[cookieName];
}

// • setCookie(cookieName,cookieValue[,expiryDate]):
//      o Sets a cookie based on a cookie name, cookie value, and expiration date.
function setCookie(cookieName, cookieValue, expiryDate) {
  // Validate the Type of Parameters
  if (typeof cookieName !== "string" || typeof cookieValue !== "string")
    throw new TypeError("Name and Value must be strings.");
  // Validate the Number of Parameters
  if (arguments.length > 3 || arguments.length < 2)
    throw Error(
      "'setCookie' must take 2 parameter at least (Cookie Name - Cookie Value), or 3 parameters at max (Cookie Name - Cookie Value - Expiry Date)."
    );
  // Check if there is a Passed Expiry Date or Not
  let isPersistent = !!expiryDate; // ==> If YES --> Persistent Cookie | ==> If NO --> Session Cookie
  let cookieString = cookieName + "=" + encodeURIComponent(cookieValue);
  if (isPersistent) {
    // Validate the "Expiry Date" Type
    if (!(expiryDate instanceof Date))
      throw new TypeError("Expiry Date must be a Date object.");
    cookieString += ";expires=" + expiryDate.toGMTString();
  }
  // Create or Update the Cookie
  document.cookie = cookieString;
}

// • deleteCookie(cookieName):
//      o Deletes a cookie based on a cookie name.
function deleteCookie(cookieName) {
  // Validate the Type of Parameters
  if (typeof cookieName !== "string")
    throw new TypeError("Name and must be strings.");
  // Validate the Number of Parameters
  if (arguments.length !== 1)
    throw Error("The function must take 1 parameter (Cookie Name).");
  // Check if Cookie Exist First
  if (!hasCookie(cookieName))
    throw Error("There is no Cookie with this Name: " + cookieName + "!");
  // Set the Expiry Date to Past () to Delete the Cookie
  document.cookie = cookieName + "=; expires=Thu, 27 Mar 2003 00:00:00 UTC";
}

// • allCookieList():
//      o returns a list of all stored cookies.
function allCookieList() {
  let allCookiesObj = {};
  // If No Cookies ==> Return
  if (document.cookie === "") return allCookiesObj;
  // Else get the Cookies (Key-Value) Pairs
  let parts = document.cookie.split("; ");
  // Loop Through All Cookies and store them in the "allCookiesObj"
  for (let i = 0; i < parts.length; i++) {
    let name = parts[i].split("=")[0];
    let value = parts[i].split("=")[1];
    allCookiesObj[name] = decodeURIComponent(value);
  }
  return allCookiesObj;
}

// • hasCookie(cookieName):
//      o Check whether a cookie exists or not.
function hasCookie(cookieName) {
  // Validate the Type of Parameters
  if (typeof cookieName !== "string")
    throw new TypeError("Name and must be strings.");
  // Validate the Number of Parameters
  if (arguments.length !== 1)
    throw Error("The function must take exactly 1 parameter (Cookie Name).");
  let cookies = allCookieList();
  return cookies.hasOwnProperty(cookieName);
}

// • Handle any possible wrong call of all implemented function by firing error message.

// e.g. there should be an error message if getCookie was called without passing
// any parameter or the required single parameter is not a string type.

// ====================================================================================================== //
