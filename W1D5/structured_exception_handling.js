// // Things that will not throw errors in JS even though it looks like it should

let array = [];
console.log(array[1000]); // undefined

console.log(5 / 0); // Infinity
console.log(-5 / 0); // -Infinity















// Situation that DOES throw an error

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(i, array[i]);
  }
}

printArray(null); // throws an error














// try, catch

function printArray(array) {
  try {
    for (let i = 0; i < array.length; i++) {
      console.log(i, array[i]);
    }
  } catch (e) {
    console.log('an error has occured');
  }
  console.log('I always run');
}

printArray(null); // prints 'an error has occured' and 'I always run'

console.log('---------');

printArray(['Hello', 'programmers']); // prints array and 'I always run'

// Does not exit code, but prints 'an error has occured' when an error is thrown











// `throw`ing an error

/* 

Want to make a function for adding strings, but we want to make sure the inputs
are strings.

We can add two strings with the '+' operator, but that operator can be used for
adding arrays together, or numbers together. 

We want to ensure that the inputs are strings.

*/


function addStrings(str1, str2) {
  console.log('started adding strings');
  
  try {
    ensureString(str1);
    ensureString(str2);
    // throw new Error('what is up');
  } catch (e) {
    console.log('Warning: inputs may not be strings.');
  }
  
  return str1 + str2;
}

function ensureString(str) {
  if (typeof str !== 'string') {
    throw new Error(str + ' needs to be a string');
  }
}

// ensureString(3);

console.log(addStrings(3, 'world'));


