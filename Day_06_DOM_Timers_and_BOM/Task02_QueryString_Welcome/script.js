// (2).

// Make your own welcoming page of a registration form to
// • display a greeting message for the user by his name and title, then
// • show a display of his info (address, gender, email, mobile) and
// • display a recommendation to use chrome browser if he is using another browser (Bonus)
// Hints:
// • You should build a registration form to send the entire required info from the user and let the action is getting the welcoming page.
// i.e. The welcoming page is the page that should be displayed after registration.
// • The registration form should contain fields for name, email, password, job title, mobile, gender, and address.
// • Read the required info from the query string.

onload = function () {
    displayUserInfo();
    recommendChromeBrowser();
};

// Get User Info - From the Query String
function getUserInfo() {
    let userInfo = location.search.split("&"); // 1- Get Query String
    userInfo[0] = userInfo[0].slice(1);  // 2- remove the "?" at the start
    return userInfo;
}

// Fill User Info Object - Key Value Pairs
function getUserInfoObject(userInfo) {
    let userInfoObj = {};

    // Start Converting the Query String (User Info) into Object (Key-Value Pair)
    for (let i = 0; i < userInfo.length; i++) {
        let keyValuePair = userInfo[i].split("=");
        userInfoObj[keyValuePair[0]] = keyValuePair[1];
    }

    return userInfoObj
}

// Normalize the User Info Data in the User Info Object - (from %40 to @, from + to space)
function normalizeUserInfo(userInfoObj) {
    for (let key in userInfoObj) {
        if (!(key === "password")) { // Skip Normalizing for the "password" property
            userInfoObj[key] = userInfoObj[key].replace(/\+/g, " ").replace(/%40/g, "@");
        }
    }

    return userInfoObj;
}

// Display User Info in HTML tags
function displayInHTML(userInfoObj) {
    for (let key in userInfoObj) {
        if (!(key === "password")) { // Skip the "password" property, as there is no place in the page for it
            document.getElementById(key).innerText = userInfoObj[key];
        }
    }
    
    document.querySelector("h1 span").innerText = userInfoObj.username; // For Displaying the Welcome Message
    document.querySelector("h2").innerText = userInfoObj.jobTitle;  // For Displaying the Job Title
}

// show a display of his info
function displayUserInfo() {
    // 1- Get User Info from the Query String
    let userInfo = getUserInfo();
    // 2- Convert Query String to Object - Key Value Pair Format
    let userInfoObj = getUserInfoObject(userInfo);
    // 3- Fix the "Spaces" and "@"s in the [email - username - address - job title]
    userInfoObj = normalizeUserInfo(userInfoObj);
    // 4-Display in HTML
    displayInHTML(userInfoObj);
}

// Get Browser Type
function getBrowserType() {
    return navigator.userAgent;
    // Something Like: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0'
}

// Check if the Browser is Chrome or Not
function isChrome(UAString) {
    return UAString.includes("Chrome") && !UAString.includes("Edg"); // Just to Test it on Edge
}

// Show a Chrome Browser Recommendation
function recommendChromeBrowser() {
    // 1- Get Browser Type
    if (!isChrome(getBrowserType())) { // 2- Check if the Browser Type is Chrome or Not
        alert("For better experience, we recommend you to use Google Chrome browser."); // 3- Display the Recommendation
    }
}

