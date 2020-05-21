// Reduce returns an accumulated value and does not mutate the original array
// The first argument is a function that returns the new accumulated value
// The optional second argument is an initial value for the accumuator


let nums = [3, 7, 5, 9, 2];

let sum = nums.reduce(function (acc, num) {
  // console.log(acc);
  return acc + num;
});

// First iteration:   3 + 7;    return 10
// Second iteration:  10 + 5;   return 15
// Third iteration:   15 + 9;   return 24
// Fourth iteration:  24 + 2;   return 26

// console.log(sum);  // --> 26


// -----------------------------------------------

// Here we have an initial value of 100

let sumPlus100 = nums.reduce(function (acc, num) {
  // console.log(acc);
  return acc + num;
}, 100);

// console.log(sumPlus100);  // --> 126


// -----------------------------------------------

// Finding the max value in an array

let max = nums.reduce(function(acc, num) {
  // console.log(acc);
  if (num > acc){
    return num;
  } else {
    return acc;
  }
});

// console.log(max);


// -----------------------------------------------

// In this example we accumulate strings

let words = ["This", "accumulates", "strings"];

let sentence = words.reduce(function (acc, word) {
  return acc + " " + word;
})

console.log(sentence);  // --> "This accumulates strings"