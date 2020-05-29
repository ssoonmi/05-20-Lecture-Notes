// Write a function called dynamicIsDivisble(divisor) 
// that will take in a divisor (number) and return a function. 
// The returned function will accept a number and
// return a boolean value stating whether the number 
// is divisible by the divisor.

// return anonymous function
function dynamicIsDivisble(divisor){
    return function(number){
        return number % divisor === 0;
    }
}

// return arrow function
function dynamicIsDivisble2(divisor) {
    return number => number % divisor === 0;
}

// The above functions do the same thing!
// Arrow functions are a type of anonymous function.
// Here, we use implicit return for our one line arrow function

// divisibleBy5 is the returned function
const divisibleBy5 = dynamicIsDivisble(5);

// dynamicIsDivisble closes over the divisor parameter!
// Even though the return function is invoked later, 
// it still has access to the divisor variable!

// We finally get the number pararmeter when we invoke 
// the return function.
console.log(divisibleBy5(15)); // true
console.log(divisibleBy5(13)); // false

