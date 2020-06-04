// Recursive Functions:
//    A function that calls itself

// Cases:
//    Base Case: What makes the function stop recursing
//    Recursive Case: When our function will keep recursing
//    These are mutually exclusive! 
//    Many times we will only see one case in our code

// Step:
//    Recursive Step: What causes our function to keep recursing
//    Where we recursively invoke our function








function countDown(num) {
  if (num === 0) {    // <-- THIS IS
    return;           // <-- OUR
  }                   // <-- BASE CASE

  // If we don't meet our base case (i.e. num !== 0), that means we meet our
  // recursive case, and we run the code below
  console.log(num);
  countDown(num - 1); // <-- THIS IS OUR RECURSIVE STEP
}

// countDown(-10);







// Written below is a function countUpOrDown(num) that will log all numbers from 
//    that number to zero. This function can accept both positive and negative numbers.


function countUpOrDown(num) {
  if( num === 0){
    return;
  }

  console.log(num);

  if(num > 0){
    countUpOrDown(num - 1);
  } else {
    countUpOrDown(num + 1);
  }
}

countUpOrDown(10);