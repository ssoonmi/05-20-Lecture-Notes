// return true if prime number, else false
// making sure every prime number from 2 to that number - 1 is not 
// divisible into that number

// function isPrime(num) {
//   let prime = 2;
//   while (prime < num) {
//     if (num % prime === 0) {
//       return false;
//     }
//     prime++;
//   }
//   return true;
// }

// const testCases = [2,3,4,5,6,13,100];

// testCases.forEach(function(num) {
//   console.log(num, isPrime(num));
// });

// console.log(isPrime(2)); // true
// console.log(isPrime(3)); // true
// console.log(isPrime(4)); // true
// console.log(isPrime(5)); // true
// console.log(isPrime(13)); // true
// console.log(isPrime(25)); // false





// 2D Arrays

const outerArr = [
  ['a0el0', 'a0el0'],
  ['a1el0'],
  ['a2el0', 'a2el1', 'a2el2']
];

// console.log(outerArr[1]); // ['a1el0'];
// console.log(outerArr[1][0]); // ['a1el0'];


// // a2el1
// console.log(outerArr[2][1]);

// innerArr = outerArr[i]
// element = innerArr[j] || outerArr[i][j]

// for (let i = 0; i < outerArr.length; i++) {
//   const innerArr = outerArr[i];
//   for (let j = 0; j < innerArr.length; j++) {
//     // const element = innerArr[j];
//     const element = outerArr[i][j];
//     console.log(element);
//   }
// }

// console.log('------------');

// outerArr.forEach(function(innerArr, i) {
//   innerArr.forEach(function(num, j) {
//     console.log(num, i, j);
//   });
// });

// Define a function that takes in a 2D array of numbers and returns the total 
// sum of all elements in the array

function sumElements(outerArr) {
  const outerSum = outerArr.reduce(function(outerAcc, innerArr) {
    const innerSum = innerArr.reduce(function(innerAcc, num) {
      // for every element in a 2D array
      return innerAcc + num;
    });
    // for every inner array in a 2D array
    return outerAcc + innerSum + 10;
  }, 0);
  return outerSum;
}

const numbers = [
  [1,2,3],
  [4],
  [5]
]; 

console.log(sumElements(numbers)); // 15