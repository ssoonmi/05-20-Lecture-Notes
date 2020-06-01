function foo(first, second, third) {
  console.log('--------'); // 3rd

  console.log(first);
  console.log(second);
  console.log(third);
  console.log('time is up');

  console.log('--------');
  // returns undefined
}

console.log('before setTimeout'); // 1st

const args = ['first argument', 'second argument'];

setTimeout(function (...args) { foo(...args, 'third argument') }, 2000, ...args);

console.log('after setTimeout'); // 2nd