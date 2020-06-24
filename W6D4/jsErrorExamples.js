// Catching errors

function safeDivide(a, b) {
  if (b === 0) {
    throw new Error("cannot divide by zero");
  } else {
    return a / b;
  }
}

try {
  console.log(safeDivide(30, 5)); // prints 6
} catch (error) {
  console.error(error.name + ": " + error.message);
}

console.log("hello"); // prints hello





// Syntax Errors 

// funtion broken() { // Uncaught SyntaxError: Unexpected identifier
//   console.log("I'm broke")
// }

// function broken() { // Uncaught SyntaxError: Unexpected identifier
//   console.log("I'm broke")
// }} // Uncaught SyntaxError: Unexpected token '}'





// Refernce Errors

// function callPuppy() {
//   const puppy = "puppy";
//   console.log(pupy);
// }

// callPuppy(); // ReferenceError: pupy is not defined



// function callPuppy() {
//   const puppy = "puppy";
// }

// console.log(puppy); // ReferenceError: puppy is not defined






// Type Error

// let dog; // Remember unassigned variables are undefined!
// dog(); // TypeError: dog is not a function

// ";
// puppy = "apple"; // TypeError: Assignment to constant variable.






// Custom Errors


// const first = Error("I am an error object!");
// const second = new Error("I am too an error object!");

// console.log(first); // Error: I am an error object!
// console.log(second); // Error: I am too an error object!