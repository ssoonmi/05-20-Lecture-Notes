// Time Complexity

// How do we measare time complexity?
  // It has been decided that the time complexity 
  // will be determined by the number of procedures 
  // it takes for an alogorithm to solve a problem.



// There are several common and accepted classes of time complexity.
  // In order from "fastest" to "slowest" they are:
  // Constant
  // Logarithmic
  // Linear
  // Log-linear
  // Polynomial
  // Exponential
  // Factorial



// We can represent each of these classes using Big-O notation
  // Constant       ||    O(1)
  // Logarithmic    ||    O(logn)
  // Linear         ||    O(n)
  // Log-linear     ||    O(nlogn)
  // Polynomial     ||    O(n^c), where c is some number: O(n^2), O(n^3), etc.
  // Exponential    ||    O(c^n), where c is some number: O(2^n), O(3^n), etc.
  // Factorial      ||    O(n!)







// Constant

// Constant complexity means that the algorithm takes roughly 
  // the same number of steps for any size input. 
// For example, this means performing the algorithm on a input of size 1 
  // takes the same number of steps as performing it on an input of size 128.



// O(1)
function constant1(n) {
  return n * 2 + 1; // there will always be 2 procedures which occur
}



// O(1)
function constant2(n) {
  for (let i = 1; i <= 100; i++) {  // There will always be 100 procedures which occur
    console.log(i);
  }
}






// Logarithmic

// Logarithmic complexity algorithms will usual display a sense of 
  // continually dividing the size of the input.
// In Logarithmic algorithms we don't have to interact with every element of the input. 


// O(log(n))
function logarithmic1(n) {
  if (n <= 1) return;
  logarithmic1(n / 2);  // We recursively call logarithmic with half the size of n
}

// O(log(n))
function logarithmic2(n) {
  let i = n;
  while (i > 1) {
    i /= 3;   // This loop will continuosly divide i by 3
  }
}







// Linear

// Linear complexity algorithms will access each item of the input "once".


// O(n)
function linear1(n) {
  for (let i = 1; i <= n; i++) {  // we conduct the logic in this loop n times
    console.log(i);
  }
}

// O(n), where n is the length of the array
function linear2(array) {
  for (let i = 0; i < array.length; i++) {  // we conduct the logic in this loop once for each element of the array
    console.log(i);
  }
}

// O(n)
function linear3(n) {
  if (n === 1) return;
  linear3(n - 1);
}







// Log - Linear

// This class is a combination of both linear and logarithmic behavior, so we see features from both classes. 
// Algorithms the exhibit this behavior use both recursion and iteration. 


// O(n * log(n))
function loglinear(n) {
  if (n <= 1) return;

  for (let i = 1; i <= n; i++) {  // we conduct the logic in this loop n times
    console.log(i);
  }

  loglinear(n / 2);  // We recursively call logarithmic with half the size of n
  loglinear(n / 2);  // We recursively call logarithmic with half the size of n
}

// Note: We include the 2nd recursive loglinear call for clearer demonstration purposes.
  // However, even without the the second recursive call this function will still have log-linear time complexity







// Polynomial

// Nested loops are usually the indicator of this complexity class.


// O(n^2)
function quadraticComplexity(n) {
  for (let i = 1; i <= n; i++) {    // we conduct the logic in the outer loop n times
    for (let j = 1; j <= n; j++) {  // for each iteration of the outer loop, we conduct the logic in the inner loop n times
      // my code here
    }    
  }
}


// O(n^3)
function cubicComplexity(n) {
  for (let i = 1; i <= n; i++) {    // we conduct the logic in the outer loop n times
    for (let j = 1; j <= n; j++) {    // for each iteration of the outer loop, we conduct the logic in the first inner loop n times
      for (let k = 1; k <= n; k++) { }    // for each iteration of the first inner loop, we conduct the logic in the second loop n times
    }
  }
}







// Exponential

// A common indicator of this complexity class is recursive code 
  // where there is a constant number of recursive calls in each stack frame.
// Algorithms with this complexity are considered quite slow.



// O(2^n)
function exponential_2nComplexity(n) {
  if (n === 1) return;
  exponential_2nComplexity(n - 1);
  exponential_2nComplexity(n - 1);
}

// O(3^n)
function exponential_3nComplexity(n) {
  if (n === 0) return;
  exponential_3nComplexity(n - 1);
  exponential_3nComplexity(n - 1);
  exponential_3nComplexity(n - 1);
}







// Factorial

// This complexity is typically the largest/worst that we will end up implementing. 
// An indicator of this complexity class is recursive code that has
  // a variable number of recursive calls in each stack frame. 


// O(n!)
function factorialComplexity(n) {
  if (n === 1) return;

  for (let i = 1; i <= n; i++) {
    factorialComplexity(n - 1);
  }
}


