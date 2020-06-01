// Example of Synchronous Code

// function foo() {
//   console.log('two');
// }

// console.log('one');
// foo(); // synchronous
// console.log('three');

// // output: 
//   // one
//   // two
//   // three


// console.log('----------------------');








// Example of Asynchronous code

console.log('start');

// asynchronous
setTimeout(function() {
  console.log('time is up');
  console.log('let\'s get back to work!'); // synchronous with 'time is up'
}, 3000);

console.log('end'); // synchronous with 'start'
