# JavaScript Errors



## Our main focus:

* SyntaxError - represents an error in the syntax of the code.
* ReferenceError - represents an error thrown when an invalid reference is made.
* TypeError - represents an error when a variable or parameter is not of a valid type.

## Other types of errors:

* RangeError - representing an error for when a numeric variable or parameter is outside of its valid range.
* InternalError - represents an error in the internal JavaScript engine.
* EvalError - represents an error with the global eval function.
* URIError - represents an error that occurs when encodeURI() or decodeURI() are passed invalid parameters.






## Catching Errors

### try & catch

If we wanted to throw an error without stopping program execution we can use a try...catch block.

Syntax:
```javascript
try {
  // statements that will be attempted to here
} catch (error) {
  // if an error is thrown it will be "caught"
  // allowing the program to continue execution
  // these statements will be run and the program will continue!
}
```


Note:
* We normally use try...catch blocks with functions that might throw an error.
* We can use console.error instead of console.log to make logged errors more noticeable.

Ex:
```javascript
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
```




## Syntax Errors

A SyntaxError is thrown when the JavaScript engine attempts to parse code that does not conform to the syntax of the JavaScript language. 


Ex: When learning the JavaScript language this error is a constant companion for any missing } or misspelled function keywords.

```javascript
  funtion broken () { // Uncaught SyntaxError: Unexpected identifier
    console.log("I'm broke")
  }

  function broken () { // Uncaught SyntaxError: Unexpected identifier
    console.log("I'm broke")
  }} // Uncaught SyntaxError: Unexpected token '}'
```


* Note: One thing to note about Syntax Errors is that many of them can't be caught using try catch blocks.





## Reference Errors

1- "The ReferenceError object represents an error when a non-existent variable is referenced." - MDN

Ex:
```javascript
  function callPuppy() {
    const puppy = "puppy";
    console.log(pupy);
  }

callPuppy(); // ReferenceError: pupy is not defined
```


2- Another common cause for a thrown ReferenceError is attempting to access a variable that is not in scope.

Ex: 
```javascript
  function callPuppy() {
    const puppy = "puppy";
  }

  console.log(puppy); // ReferenceError: puppy is not defined
```




## TypeError

When an operation cannot be performed because the operand is a value of the wrong type.

Ex:
```javascript
  let dog; // Remember unassigned variables are undefined!
  dog(); // TypeError: dog is not a function
```


When you are attempting to modify a value that cannot be changed.

Ex:
```javascript
  const puppy = "puppy";
  puppy = "apple"; // TypeError: Assignment to constant variable.
```




## Custom Errors

we can use the Error constructor to create new Error object instances. We can optionally supply a message, fileName and lineNumber where the error occurred. 

Syntax:
```javascript
new Error([message[, fileName[, lineNumber]]])
```


Note: 
* The Error constructor is also somewhat unique in that you can call it with or without the new keyword and it will return a new Error object:

Ex:
```javascript
const first = Error("I am an error object!");
const second = new Error("I am too an error object!");

console.log(first); // Error: I am an error object!
console.log(second); // Error: I am too an error object!
```