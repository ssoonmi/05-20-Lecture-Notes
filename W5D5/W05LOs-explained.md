# Week 5 Learning Objectives

## NPM

0. Explain the purpose of the `package.json` file and `node_modules` directory.

    - `package.json` specifies which packages we want to use within the app as well as semantic versioning ranges to say what versions of that app are acceptable

    - `package-lock.json` specifies the exact version of the package that we have installed in our `node_modules` directory, where we got that package from, and dependencies of that package
    
    - `node_modules` is a directory that contains all of the actual code for packages that we have added to our project

1. Given multiple choices, identify the difference between npm's `package.json` and `package-lock.json` files.

    - exact version of each package installed and where it was downloaded from
      - `package-lock.json`

    - range of acceptable versions for each dependency
      - `package.json`

    - automatically created or updated when `npm init` is run
      - `package.json`

    - automatically created or updated when `npm install` is run
      - `package-lock.json`

    - should be manually edited to set required versions of packages
      - `package.json`

2. Use `npm --version` to check what version is currently installed and use npm to update itself to the latest version.

    - `npm -v`
    - `npm install -g npm@latest`
      - `-g` tells us to add as a global package
      - `@latest` says to install the latest version

3. Use `npm init` to create a new package and npm install to add a package as a dependency. Then use require to import the module and utilize it in a JavaScript file.

    - `npm init` creates our package.json
    - `npm install moment` adds the moment package as a dependency
    - `const moment = require('moment');` imports the module into our code so that we can use the moment variable and call any methods on it that exist in the module;
      - `moment.().format('dddd');` for example
    
    - We can also install a dependency as a dev dependency:
      - `npm install --save-dev nodemon` adds the nodemon package as a dev dependency

4. Given an existing GitHub repository, clone the repo and use npm to install it's dependencies.

    - `git clone <repo-url>`
    - cd into repo
    - `npm install`

## JavaScript Classes
1. Define a constructor function using ES5 syntax.

  ```javascript
  function Book(title, series, author) {
    this.title = title;
    this.series = series;
    this.author = author;
  }
  ```

2. Define a method on the `prototype` of a `constructor` function.

  ```javascript
  Book.prototype.getInformation = function () {
    if (this.series) {
      return `${this.title} (${this.series})`;
    } else {
      return this.title;
    }
  }
  ```

3. Declare a class using ES6 syntax.

  ```javascript
  class Book {
    constructor(title, series, author) {
      this.title = title;
      this.series = series;
      this.author = author;
    }
  }
  ```

4. Define an instance method on a class (ES6).

  ```javascript
  class Book {
    // constructor

    getInformation() {
      if (this.series) {
        return `${this.title} (${this.series})`;
      } else {
        return this.title;
      }
    }
  }
  ```

5. Define a static method on a class (ES6).

  ```javascript
  class Book {
    // constructor

    static getUniqueAuthors(...books) {
      let authors = [];
      books.forEach(book => {
        if (!authors.includes(book.author)) {
          authors.push(book.author)
        }
      })
      return authors;
    }
  }
  ```

6. Instantiate an instance of a class using the `new` keyword.

  ```javascript
  const theGrapesOfWrath = new Book('The Grapes of Wrath', null, 'John Steinbeck');
  ```

7. Implement inheritance using the ES6 extends syntax for an ES6 class.

  ```javascript
  class Book extends CatalogItem {
    // Book code
  }
  ```

8. Utilize the `super` keyword in a child class to inherit from a parent class.

  ```javascript
  class CatalogItem {
    constructor(title, series) {
      this.title = title;
      this.series = series;
    }

    getInformation() {
      if (this.series) {
        return `${this.title} (${this.series})`;
      } else {
        return this.title;
      }
    }
  }

  class Book extends CatalogItem {
    constructor(title, series, author) {
      super(title, series);
      this.author = author;
    }
  }

  class Movie extends CatalogItem {
    constructor(title, series, director) {
      super(title, series);
      this.director = director;
    }

    // extending the functionality of the parent's getInformation()
    getInformation() {
      let result = super.getInformation();
      if (this.director) {
        result += ` [directed by ${this.director}]`;
      }
      return result;
    }
  }
  
  ```

9. Utilize `module.exports` and `require` to import and export functions and class from one file to another.

    - In this first example, we are exporting a single item from each file. We are assigning that item to module.exports directly.

  ```javascript
  // catalog-item.js

  class CatalogItem {
    // CatalogItem code
  }

  module.exports = CatalogItem
  ```

  ```javascript
  // book.js

  const CatalogItem = require('./catalog-item');

  class Book extends CatalogItem {
    // Book code
  }

  module.exports = Book
  ```

    - In this next example, we are exporting a multiple items from a file. We are assigning an object to module.exports that contains each item we are exporting. When we import from this file, we can either import the whole object, or destructure right in our import

  ```javascript
  // classes.js

  class CatalogItem {
    // CatalogItem code
  }

  class Book extends CatalogItem {
    // Book code
  }

  class Movie extends CatalogItem {
    // Movie code
  }

  module.exports = { Book, Movie}
  ```

  ```javascript
  // index.js

  const classes = require('./classes');
  const Movie = classes.Movie;
  const Book = classes.Book;

  // Or, destructuring in the import statment:
  // const { Movie, Book } = require('./classes');

  const theGrapesOfWrath = new Book('The Grapes of Wrath', null, 'John Steinbeck');
  const aNewHope = new Movie('Episode 4: A New Hope', 'Star Wars', 'George Lucas');
  ```


## Object-Oriented Programming
1. The three pillars of object-oriented programming

    - `Encapsulation`:
      - Puts the behavior and data together behind methods that hide the specific implementation.
      - Code that uses these methods doesn't need to worry about the details.
      - e.g. `game.getTokenAt(col, row)` function in the Connect 4 Project
    - `Inheritance`:
      - JavaScript supports a type of inheritance known as implementation inheritance through a mechanism known as `Prototypal Inheritance`.
        - Implementation inheritance: data and methods defined on a parent class are available on objects created from classes that inherit from those parent classes.
        - Prototypal inheritance: JavaScript uses prototype objects to make its implementation inheritance actually work.
      - The `this` property references the object that the call originally came from.
    - `Polymorphism`:
      - The ability to treat an object `as if it were an instance of one of its parent classes`.
      - We can use the methods of a parent class on an object of a child class.

2. The SOLID principles

    - S: Single-Responsibility Principle (IMPORTANT)
      - A class/function/module should do one thing and do it well.
      - A class/function/module should have only one reason to change.
    - O: `Open-Close` Principle (less applicable)
      - A class is open for extension and closed for modification.
      - Creating new functionality can happen in child classes and not the original class.
      - **Know this if not all the other principles!**
    - L: Liskov Substitution Principle (IMPORTANT)
      - You can substitute child class objects for parent class objects and not cause errors.
      - The methods that you override in child classes must match the intent of the methods found on the parent classes.
    - I: Interface Segregation Principle (less applicable)
      - Method names should be grouped together into granular collections called "interfaces".
    - D: Dependency Inversion Principle (less applicable)
      - Functionality that your class depends on should be provided as parameters to methods rather than using new in the class to create a new instance.

3. How to apply the Law of Demeter

    - A method of an object can only invoke the methods (or use the properties) of the following kinds of objects:
      - Methods on the object itself
      - Any of the objects passed in as parameters to the method
      - And object created in the method
      - Any values stored in the instance variables of the object
      - Any values stored in global variables
    - Changing the implementation of a class should not require a change in another class.
    - **Don't use more than one dot (not counting the one after "this")**
      - e.g. not doing `game.getTokenAt(col, row)` in Connect 4 project
    - When to ignore the Law of Demeter:
      - Working with objects that come from code you didn't create
        ```javascript
          document
            .getElementById('that-link')
            .addEventListener('click', e => e.preventDefault());
        ```
      - Visualizations of our program (UI has to know about the structure of our data)

## Assessment Format

- Multiple Choice x10
- Online Coding Environment x2
- VSCode Questions
  - Be able to clone a repo using git
  - Four .js files that you'll have to code in
  - Pass the mocha specs for each file (17 specs total)
  - We will use CommonJS/Node.js for requiring/exporting files
    - We will use `module.exports = ClassName`, `module.exports = { ClassName }`, or `exports.ClassName = ClassName` for exporting. Know the differences and how to use each.
    - We will use `const ClassName = require('./file/path')` or `const { ClassName } = require('./file/path')` for importing. Know the differences and how to use each.
  - ES Modules import/export syntax (like what is used in Connect Four) is important for you to know moving forward in the curriculum; it is what allows us to import files in a browser environment. However, you will not be writing it on the assessment as we will only be running specs in a Node environment, where CommonJS is still the default.
    - Fun fact: ES Modules are an experimental feature in Node. Maybe one day they'll take over as the default! :fingers-crossed: