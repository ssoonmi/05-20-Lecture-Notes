// Pirmitive Data Types are immutable
  // The locations of these values cannot be changed in memory
  // When we reassign the value of a primitive data type
    // the variable will point to where the new primitive value
    // is separately stored in memory

// Reference Data Types are mutable
  // The values these variables point to in memory can be changed


  // Primitive Data Types:
  
  // Boolean
  // Null
  // Undefined
  // Number
  // String
  
  // Reference Data Types:
  
  // Object
  // Array
    // NOTE: Arrays are a type of Object!







// ------------------------------------------------

// Setting variables equal to each other and memory.

  // If we set variables holding primitive data types equal to each other
  // and then change one of those variables, the other variable will
  //  remain unchanged.

  // If we set variables holding reference data types equal to each other
  // and then change one of those variables, both variables will change.




// Primitive example:

let prim1 = 'old value';
let prim2 = prim1;

// console.log('\n --- Primitive --- \n \nBefore the change: \n');
// console.log(prim1);
// console.log(prim2);

// reassign prim1
prim1 = 'new value';

// console.log('\n \nAfter the change: \n');
// console.log(prim1);
// console.log(prim2);









//  Reference example:

let ref1 = ['old value'];
let ref2 = ref1;

console.log('\n \n \n --- Reference --- \n \nBefore the change: \n');
console.log(ref1);
console.log(ref2);

// mutating ref1
ref1.push('new value');

// Reassignment shown below creates a new array 
  // rather than mutating the array.
  // This would not change the value in ref2
// ref1 = ['new value'];

console.log('\n \nAfter the change: \n');
console.log(ref1);
console.log(ref2);
console.log('\n');