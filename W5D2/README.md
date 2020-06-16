# Classes

- Classes are like blueprints for objects that we want created
- An instance of a class is like an object created from the class blueprint
- Each instance has a different state from the next instance

## Defining a Class
- The name of the class
  - TitleCase
- Constructor function:
  - Used to initialize an object
  - Used to communicate required data to initialize an object
- Instance variables:
  - The state of the thing or created object
  - `this.camelCaseName` to get and set the value
- Instance methods: 
  - how the world interacts with the thing or created object
  - camelCase
  - Types of instance methods:
    - Accessors: get some data from the object
    - Mutators: changes the state of the data

## ES6 Class Syntax

[ES6 Class]

### Inheritance

We can make a child class of another class, parent class, by using the `extend` keyword

```javascript
class Cat extends Animal {

}
```

## ES5 Class Syntax

[ES5 Class]

## Importing and Exporting Modules

[Importing and Exporting Demo]

### Importing built-in Node modules or npm-installed modules

- can just specifiy in the `require` function the string of the module name

```javascript
const mocha = require('mocha');
```

### Exporting modules from your own code

- set `module.exports` to whatever you want to export from the file
- **OR** use `exports` dot notation to export a specific key in an object from a file

```javascript
class Person {
  // ...
}
const hello = 'hello';
module.exports = {
  Person,
  hello
};
```

is the same as:

```javascript
exports.Person = class Person {
  // ...
};
exports.hello = 'hello';
```

### Importing modules from your own code

- need to specify the relative path in a string passed into the `require` function (don't need to append the `.js` file extension)

```javascript
const tax = require('../util/tax'); // will look into the util folder for tax.js
```

- can destructure objects when importing if you are importing an object:

in the file `../util/people.js`:
```javascript
class Person {
  // ...
}
const hello = 'hello';
module.exports = {
  Person,
  hello
};
```

can import `Person` into `./index.js` by:
```javascript
const { Person } = require('../util/people.js');
```

## JavaScript Classes Learning Objectives

1. Define a constructor function using ES5 syntax.
2. Define a method on the prototype of a constructor function using ES5 syntax.
3. Declare a class using ES6 (ES2015) syntax.
4. Define an instance method on a class (ES6).
5. Define a `static` method on a class (ES6).
6. Instantiate an instance of a class using the `new` keyword.
7. Implement inheritance using the ES6 extends syntax for an ES6 class.
8. Utilize the `super` keyword in a child class to inherit from a parent class.
9. Utilize `module.exports` and `require` to import and export functions and class from one file to another.

[ES5 Class]: ./es5_classes.js
[ES6 Class]: ./es6_classes.js
[Importing and Exporting Demo]: ./index.js