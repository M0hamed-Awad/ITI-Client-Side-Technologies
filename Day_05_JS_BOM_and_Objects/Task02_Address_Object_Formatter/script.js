// (2).

// Write a function called showAddr that accepts an address object with the following properties:
// street, buildingNum, and city. It should return the complete address of the user with the registered date.
// Example: if the addrObj={street:”abc st.”,buildingNum:15,city:”xyz”},
// calling showAddr(addrObj) will return “15 abc st., xyz city registered in 15/10/2024”.

// Show Address Information Function
function showAddr(addrObj) {
    let currentDate = new Date()
    let registerDate = currentDate.getDate() + "/" + (currentDate.getMonth() + 1) + "/" + currentDate.getFullYear()

    console.log(addrObj.buildingNum + " " + addrObj.street + ", " + addrObj.city + " city registered in " + registerDate)
}

// Example Address Object
let addressObj = {
    street: "Smart st.",
    buildingNum: 23,
    city: "Giza"
};

// Main Flow
console.log(showAddr(addressObj));