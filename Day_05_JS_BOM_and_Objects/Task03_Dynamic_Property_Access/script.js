// (3).

// Write a function called dispVal that takes an object with two properties and a string as arguments.
// It should return the value of the property with key equal to the value of the string
// Example: if obj={nm:”ali”,age:10} then calling dispVal(obj,”age”) will return “10 years old”

// Display Key Value Function
function dispVal(dummyObj, key) {
    return dummyObj[key];
}

// Example Address Object
let dummyObj = {
    name: "Ali",
    age: 23,
};

// Main Flow
console.log(
    "Welcome " + dispVal(dummyObj, "name") + "!\n" +
    "You are " + dispVal(dummyObj, "age") + " years old."
);