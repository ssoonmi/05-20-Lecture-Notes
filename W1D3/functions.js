// function declaration syntax
function sayHello1() {
  console.log('hello');
  console.log('bye');
}
// function name is built into the declaration of the function

sayHello1();

console.log('--------');

// function expression syntax
let sayHello2 = function() {
  console.log('hello');
  console.log('bye');
};
// setting a variable to an anonymous function

sayHello2();

console.log('--------');

// first class objects - something you can store in a variable
let name = 'Alvin'
let age = 1000;
let getAvg = function(num1, num2) {
  return (num1 + num2)/2
};



// console.log(getAvg); // will log the function
// console.log(getAvg(3, 4)) // will log the return of the function





// can pass functions around to other variables
let anotherVar = getAvg;
console.log(anotherVar(5, 6));
