// The Object Type
// POJO- Plain Old JavaScript Object
  // An unordered collection of key-value pairs

// Keys are strings and must be unique
// Keys point to values
// Values can be anything!
// Objects are unordered, order is not guaranteed!




// -------------------------------------------------------

// Initializing an empty object
// Initializing an object with multiple key-value pairs.

let emptyObject = {};

let instructorObject = {
  g: 'Gordon',
  s: 'Soon-Mi',
  a: 'Angela'
};

// console.log(emptyObject);
// console.log('\n------------ \n');
// console.log(instructorObject);







// ----------------------------------------------

// Adding key-value pairs to an object.

// To dynamically set keys using variables, we must use bracket notation
let key = 'j';
instructorObject[key] = 'Justin';

// We can only use dot notation if we know EXACTLY what a key will be.
// Dot notation can be more readable for other programmers looking
  // at your code.
instructorObject.r = 'Rose';

// Cannot do this:
// let rKey = 'r';
// instructorObject.rKey = 'Rose';







console.log('\ninstructorObject: \n');
console.log(instructorObject);
console.log('\n--------- \n \nValue under "g" key: \n');
console.log(instructorObject['g']);
console.log('\n--------- \n \nValue under "s" key: \n');
console.log(instructorObject.s);
console.log('\n--------- \n \nValue under "a" key: \n');
console.log(instructorObject.a);
console.log('\n--------- \n \nValue under "j" key: \n');
console.log(instructorObject['j']);
console.log('\n--------- \n \nValue under "r" key: \n');
console.log(instructorObject['r']);
console.log('\n---------');