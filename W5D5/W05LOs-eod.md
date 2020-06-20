# Week 5 Learning Objectives

## NPM
  0. Explain the purpose of the package.json file and node_modules directory.

  1. Given multiple choices, identify the difference between npm's package.json and package-lock.json files.

  2. Use npm --version to check what version is currently installed and use npm to update itself to the latest version.

  3. Use npm init to create a new package and npm install to add a package as a dependency. Then use require to import the module and utilize it in a JavaScript file.

  4. Given an existing GitHub repository, clone the repo and use npm to install it's dependencies.
    
## JavaScript Classes
  1. Define a constructor function using ES5 syntax.
  
  2. Define a instance method on the `prototype` of a constructor function.
  2. Define a static method on the `prototype` of a constructor function.

  ```javascript
  function Book() { // constructor function ES5 (looks exactly like a regular function)

  }

  Book.prototype.read = function() { // instance method

  }

  Book.readAllBooks = function() { // static method

  }
  ```

  3. Declare a `class` using ES6 syntax.

  ```javascript
  class Book {
    constructor() {

    }

    read() {

    }
    
    static readAllBooks() {

    }
  }
  Book.prototype.anotherRead = function() { // instance method

  }

  const objectKeys = Object.keys;
  ```

  4. Define an `instance method` on a class (ES6).
  
  5. Define a `static method` on a class (ES6).
  
  6. Instantiate an instance of a class using the `new` keyword.

  ```javascript
  const book = new Book(); // constructor-style function
  ```
  
  7. Implement inheritance using the ES6 `extends` syntax for an ES6 class.

  ```javascript
  class Book {
    constructor(name, author) {

    }

    read() {
      
    }
  }

  class Magazine extends Book {

    flipThrough() {

    }

    read() {
      // overwriting Book's read method
    }
  }

  const mag = new Magazine();
  mag.read();

  const book = new Book();
  book.flipThrough();
  ```
  
  8. Utilize the `super` keyword in a child class to inherit from a parent class.
  
  9. Utilize `module.exports` and `require` to import and export functions and class from one file to another.


  ```javascript
  class Book {

  }

  class Magazine {

  }

  const obj = {
    Book,
    Magazine
  }
  // module.exports = obj;
  module.exports = Book;
  ```

  ```javascript
  const Book = require('./file');
  new Book()
  ```

## Object-Oriented Programming
  1. What are the three pillars of object-oriented programming? What is each pillar's definition?
  
  2. The SOLID principles
    - What does each letter stand for?
    - We talked about the S and L in more depth; know how to apply them and what they mean for us in JavaScript
  
  3. How to apply the Law of Demeter
  

## Assessment Format
  - Multiple Choice x10
  - Online Coding Environment x2
  - VSCode Questions
    - Four .js files that you'll have to code in
    - Pass the mocha specs for each file (17 specs total)
    - We will use CommonJS for requiring/exporting files
      - We will use `module.exports = ClassName`, `module.exports = { ClassName }`, or `exports.ClassName = ClassName` for exporting. Know the differences and how to use each.
      - We will use `const ClassName = require('./file/path')` or `const { ClassName } = require('./file/path')` for importing. Know the differences and how to use each.
    - ES Modules import/export syntax (like what is used in Connect Four) is important for you to know moving forward in the curriculum; it is what allows us to import files in a browser environment. However, you will not be writing it on the assessment as we will only be running specs in a Node environment, where CommonJS is still the default.
      - Fun fact: ES Modules are an experimental feature in Node. Maybe one day they'll take over as the default! :fingers-crossed: