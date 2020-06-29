# Writing Tests




## File Structure

* Whenever you are running tests with Mocha the important thing to know is that the Mocha CLI will automatically be looking for a directory named `test`.
* The files you want to test will be loaced in the `problems` directory. 
* The created `test` directory's file structure should mirror that of the `problems` directory.
* Each test file should have the word `-spec` appended to the end of the file name. 

Ex:
```
testing-demo
  └──
  problems
    └── myFile.js
  test
    └── myFile-spec.js
```




## Testing Blocks

* describe(string, callback)
  - The `describe` function is an organizational function that accepts a descriptive string and a callback. We'll use the `describe` function to `describe` what we will be testing.
  - The callback handed to the `describe` function will be where we insert our actual tests. 
  - Note: When testing instance methods, it is customary to include "prototype." followed by the method name in the description

* it(string, callback)
  - The `it` function is an organizational function we will use to wrap around each test we write. The `it` function accepts a descriptive string and callback to set up our test.
  - We can insert the actual test we intend to write within the callback handed to the `it` function.
  - Arrange: Getting/creating what we'll need for our test
  - Act: Executing logic to be tested
  - Assert: Testing logic

* context(string, callback)
  - The `context` function has the same functionality as the `describe` block and is used for organizational purposes.
  - We use `context` instead of nesting `describe` blocks.




## Testing Classes with Chai

Setup:
* npm init --y
* npm install chai

```javascript
// set up chai in our test file
const chai = require("chai");
const expect = chai.expect;
```

We will frequently use the expect function inside our `it` blocks. Please use the following resources to find available methods:
Docs: https://www.chaijs.com/api/bdd/
Cheatsheet (right column): https://devhints.io/chai





## Mocha Hooks

We use Mocha Hooks to keep our code DRY.
Mocha Hooks can: 
* do set up prior to running a related group of specs
* do some clean up after running those specs


Types of hooks:
1. `beforeEach` be invoked before each test 
  - Most common hook
2. `before` will be invoked before the block of tests is run
  - 2nd most common hook
3. `after` will be invoked after the block of tests is run
4. `afterEach` will be invoked after each test 


Ex:
```javascript
const chai = require("chai");
const expect = chai.expect;

describe('Hooks demo', () => {
  before(() => {
    console.log('Before hook...');
  });

  beforeEach(() => {
    console.log('Before each hook...');
  });

  afterEach(() => {
    console.log('After each hook...');
  });

  after(() => {
    console.log('After hook...');
  });

  it('Placeholder one', () => {
    expect(true).to.be(true);   // will always pass
  });

  it('Placeholder two', () => {
    expect(true).to.be(true);   // will always pass
  });
});
```

### beforeEach

We typically use `beforeEach` to set up an initial condition for each of our tests. 
We can also define these hooks within nested `describe` or `context` functions. However, it is very helpful to be able to define a `beforeEach` hook in a top-level `describe` function that will run before every test in that block and before every test within nested `describe` or `context` functions.




## Chai Spies

The Chai Spies library provides a lot of added functionality including the ability to determine if a function has been called and how many times that function has been called.


Setup:
npm install chai-spies
```javascript
// set up chai and chai spies in our test file
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);
```

In order to spy on a function we first need to tell Chai which function we'd like to spy on using the `chai.spy.on` method.

Chai checks how many times a function has been invoked using the method chain `expect(func).to.have.been.called.exactly(n)` where `n` is the number of times `func` is expected to be called.




## Testing Errors

We do not want to invoke code which will throw an error. This will interupt our tests and throw an error.

The syntax we use in Chai for testing if an error will be thrown is:

```javascript
  expect(() => myFunc()).to.throw(Error)
```

We pass the expect block a function which when invoked will then invoke the function which will throw the error.

<<<<<<< HEAD
We can expect any Error to be thrown: Error, TypeError, SyntaxError, ReferenceError, etc.
=======
We can expect any Error to be thrown: Error, TypeError, SyntaxError, ReferenceError, etc.
>>>>>>> 7e7b55a09054c5e06d463ac61242e4d329498cd3
