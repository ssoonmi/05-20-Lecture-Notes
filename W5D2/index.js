// classes are really useful because they allow us to have DRY'er code without
// repeating methods or syntax for similar objects

// const fluffy = {
//   name: 'Fluffy',
//   age: 4
// };

// const digby = {
//   name: 'Digby',
//   age: 6
// };

// can import the index.js file in any folder with just the folder name
const { Cat, Animal, hello } = require('./classes');
// const { hello } = require('./classes/index');
console.log(hello);

// importing using require keyword and relative path to this file
const Animal = require('./classes/animal')

// importing using object destructuring
const { Cat } = require('./classes/cat');


console.log(Cat);
const fluffy = new Cat("Fluffy", 4, 'orange');
console.log(fluffy.getAge());


// Monkey-patching the string class
// Instance method
String.prototype.split = function() {
  return this + '!';
};
// Static method
String.convertToInt = function(string) {
  return Math.round(Number(string));
};

const str = 'hello';
// => str + '1' => 'hello!'
console.log(str.split()) // => 'hello!';

console.log(String.convertToInt('1.2'));