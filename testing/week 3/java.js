//create object user
let user = {
    name: "Israel",
    age: 25,

    sayHi() { //shorthand for adding a method
        console.log(user.name); //calls the method by name
        console.log(this.age); //calls the method by reference.
    }
};

//add a method to the user object
user.doMath = function() {
    let num1 = 5;
    let num2 = 9;
    return num1 + num2;
}


user.sayHi(); //use shorthand method
console.log(user.random); //object method that doesn't exist returns a "undefined"

let checkAge = 'age' in user; // store age checking in variable named checkAge

console.log("Check if user has an age " + checkAge); // This will work
console.log("Check if user has an age " + 'age' in user); // unintended resuilts what actually happens is it will check the entire string from "check if...age"


delete user.age; // this will work with functions and propterties.

console.log('I have removed my age ' + user.age);

console.log(Math.ceil(Math.sqrt(3))); //math object inside a math object