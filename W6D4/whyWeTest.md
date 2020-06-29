# Testing Philosophy



# Why do we test?

* To make sure the code works
* Increase flexibility & reduce fear of refactoring our code
* Make collaboration easier
* Produce documentation for our code



## TDD (Test Driven Develpoment)

TDD is one way for developers to ensure that the code written by every member of their team is testable and modular. Some of the reasons why TDD include:

* Writing tests before code ensures that the code written works.
* Only the required code is written. This can reduce un-needed functionality.
* TDD helps enforce code modularity. A TDD developer is forced to think about their application in small, testable chunks.
* It creates etter understanding of what the code should be doing. Writing tests for a piece of code ensures that the developer writing that code knows what the piece of code is trying to achieve.


### Red-Green-Refactor

The Test-driven development workflow can be broken down intro three simple steps. Red, Green, Refactor:

1. Red:
  - Write the tests and watch them fail (a failing test is red). It's important to ensure the tests initially fail so that you don't have false positives.
2. Green:
  - Write the minimum amount of code to ensure the tests pass (a passing test will be green).
3. Refactor: 
  - Refactor the code you just wrote. Your job is not over when the tests pass! One of the most important things you do as a software developer is to ensure the code you write is easy to maintain and read.




# What do we test?

When you're trying to figure out what you should be testing, ask yourself, "What is (or will be) the public interface of the module or class I'm writing?" That is, what are the functions that the outside world will have access to and rely on?

### The Testing Pyramid

* Unit Tests
  - The smallest unit of testing - used to test the smallest pieces of your application in isolation to ensure each piece works before you attempt to put those pieces together. Each unit test should focus on testing one thing. These are generally the fastest tests to write and run.

* Integration Tests
  - Integration tests are the next level up, they will test the interactions between two pieces of your application. Integration tests will ensure the units you've written work coherently together.

* End-to-End Tests
  - End-to-end tests are the highest level of testing - these will test the whole of your application. End-to-end tests are the closest automated tests come to testing the an actual user experience of your application. These are generally the slowest tests to write and run.



## Mocha

Mocha is a JavaScript testing framework that specializes in running tests and presenting them in an organized user friendly way. 

### DSL (Domain Specific Language)

When writing tests with Mocha we will be using Mocha's DSL (Domain Specific Language). A Domain Specific Language refers to a computer language specialized for a particular purpose - in Mocha's case the DSL has been engineered for providing structure for writing tests.

