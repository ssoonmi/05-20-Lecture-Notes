// Memoization is a design pattern used to reduce the overall number of calculations 
  // that can occur in algorithms that use recursive strategies to solve.
// Memoization will store the results of the sub-problems in some other data structure.
// There are two features that comprise memoization:

// 1. the function is recursive
// 2. the additional data structure used is typically an object(we refer to this as the memo!)











// Example:


// Our fibonacci fucntions have two recursive calls.
// This leads to a time complexity of O(2^n)

function slowFib(n) {
  if (n === 1 || n === 2) return 1;
  return slowFib(n - 1) + slowFib(n - 2);
}

slowFib(6);     // => 8

//                                         f(6)
//                     f(5)                  |                  f(4)
//           f(4)        |         f(3)      |        f(3)       |     f(2)      |
//    f(3)     |  f(2)   |   f(2)   |  f(1)  |   f(2)  |   f(1)  |
// f(2) | f(1) | 






// Many of the recursive function calls are being made multiple times
// If we store these results in an object, 
  // we can reduce the number of recursive calls the function will make.
// This will result in a lower (faster) time complexity.




// Our code without memoization:

// function slowFib(n) {
//   if (n === 1 || n === 2) return 1;
//   return slowFib(n - 1) + slowFib(n - 2);
// }

// slowFib(6);     // => 8


function fastFib(n, memo = {1: 1, 2: 1}) {
  if (n in memo) return memo[n];
  // if (n === 1 || n === 2) return 1;

  memo[n] = fastFib(n - 1, memo) + fastFib(n - 2, memo);
  return memo[n];
}

fastFib(6);     // => 8
fastFib(50);    // => 12586269025



// Before memoization

//                                         f(6)
//                     f(5)                  |                  f(4)
//           f(4)        |         f(3)      |        f(3)       |     f(2)      |
//    f(3)     |  f(2)   |   f(2)   |  f(1)  |   f(2)  |   f(1)  |
// f(2) | f(1) | 



// Now, our function calls will look like this:

//                                         f(6)
//                     f(5)                  |           f(4) <= retrieve stored answer
//           f(4)        |         f(3)   <= retrieve stored answer
//    f(3)     |  f(2)   |
// f(2) | f(1) | 



// In slowFib, the number of procedures is about 2^n, giving a time complexity of O(2^n)
// In fastFib, the number of procedures is 1+2(n-2) = 2n-3, giving a time complexity of O(n)