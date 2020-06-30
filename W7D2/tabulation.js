// In tabulation we create a table(array) and fill it with elements.
// We will complete the table by filling entries from first to last, or "left to right".
// This means that the first entry of the table(first element of the array) 
  // will correspond to the smallest subproblem.
// The final entry of the table(last element of the array) will correspond to the largest problem, 
  // which is also the final answer.


// There are two main features that comprise the Tabulation strategy:

// 1. the function is iterative and not recursive
// 2. the additional data structure used is typically an array, commonly referred to as the table










// Example:

// Once again, we will use the fibonacci example for demonstration

function tabulatedFib(n) {
  // create a blank array with n reserved spots
  let table = new Array(n);

  // seed the first two values
  table[0] = 0;
  table[1] = 1;

  // complete the table by moving from left to right,
  // following the fibonacci pattern
  for (let i = 2; i <= n; i += 1) {
    table[i] = table[i - 1] + table[i - 2];
  }

  return table[n];
}

console.log(tabulatedFib(7));      // => 13



// When we initialize the table and seed the first two values, it will look like this:

//   i	    | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
// ------------------------------------------
// table[i] | 0 | 1 |   |   |   |   |   |   |


// After the loop finishes, the final table will be:

//   i	   | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
// -----------------------------------------
// table[i]| 0 | 1 | 1 | 2 | 3 | 5 | 8 | 13|