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
  console.log(table);

  // seed the first two values
  table[0] = 0;
  table[1] = 1;

  // complete the table by moving from left to right,
  // following the fibonacci pattern
  for (let i = 2; i <= n; i += 1) {
    table[i] = table[i - 1] + table[i - 2];
    console.log(table);
  }

  return table[n];
}

// console.log(tabulatedFib(7));      // => 13



// When we initialize the table and seed the first two values, it will look like this:

//   i	    | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
// ------------------------------------------
// table[i] | 0 | 1 |   |   |   |   |   |   |


// After the loop finishes, the final table will be:

//   i	   | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
// -----------------------------------------
// table[i]| 0 | 1 | 1 | 2 | 3 | 5 | 8 | 13|

// Bonus:

// This is NOT tabulation, but an improvement on the code we just wrote.

function SpaceSavingFib(n) {
  let mostRecentFibs = [0, 1];

  if (n === 0) return mostRecentFibs[0];

  for (let i = 2; i <= n; i++) {
    const [secondLast, last] = mostRecentFibs;
    mostRecentFibs = [last, secondLast + last];
  }

  return mostRecentFibs[1];
}










// Word break

function wordBreak(string, dictionary) { // "gooddog", ["good", "dog"]
  let table = new Array(string.length + 1).fill(false);
  table[0] = true;

  for(let i = 0; i < table.length; i++){ 
    if(table[i] === false) continue;      //table[0] = true, table[4] = true
    console.log(table);
    for(let j = i+1; j < table.length; j++){
      let word = string.slice(i, j);

      if(dictionary.includes(word)) table[j] = true; //table[4], table[8] = true
      console.log(table);
    }
  }

  return table[table.length - 1];
}

const dictionary = ["good", "dog"];
const string = "gooddog";

console.log(wordBreak(string, dictionary));