// Recursive Functions:
//    A function which calls itself

// Cases:
//    Base Case: What makes the function stop recursing
//    Recursive Case: When our function will keep recursing
//    These are mutually exclusive! 
//    Most often we wil only see one case in our code

// Step:
//    Recursive Step: What causes our function to keep recursing








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











function countUpOrDown(num) {
  if (num === 0) {    //  <-- THIS IS
    return;           //  <-- OUR
  }                   //  <-- BASE CASE

  console.log(num);

  if (num > 0) {              // <-- THIS IS ONE OF OUR RECURSIVE CASES
    countUpOrDown(num - 1);   // <-- THIS IS ONE OF OUR RECURSIVE STEPS
  } else if (num < 0) {       // <-- THIS IS ALSO A RECURSIVE CASE
    countUpOrDown(num + 1);   // <-- THIS IS ALSO A RECURSIVE STEP
  }
}

// countUpOrDown(-10);