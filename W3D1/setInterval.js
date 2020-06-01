let count = 0;

const foo = function (first, second) {
  console.log('--------');
  
  console.log(first);
  console.log(second);
  console.log('time is up');
  count++;
  if (count === 2) {
    clearInterval(fooInterval);
  }
}


console.log('before setInterval');
// foo();

const fooInterval = setInterval(foo, 2000, 'first argument', 'second argument');
// console.log('setInterval result', fooInterval);

console.log('after setInterval');










// function intervalCountdown(count, delay, cb, ...args) {
//   const interval = setInterval(function () {
//     // HAS ACCESS to `cb`, `count`, or `delay` variables
//     console.log('time is up');
    
//     cb(...args); // hello
    
//     count--;
//     if (count === 0) {
//       clearInterval(interval);
//     }
//   }, delay);
// }

// intervalCountdown(3, 500, function (...args) {
//   console.log(args);
//   console.log('hello');
//   // DOES NOT HAVE ACCESS to `cb`, `count`, or `delay` variables
// }, 'first', 'second');

// closures
  // callback function to setInterval closes over `cb`, `count` and `delay` variables 
