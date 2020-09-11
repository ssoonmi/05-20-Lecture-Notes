# Python Week 1 - Summary and Learning Objectives

## LOs from Day Zero

### Back To The Beginning

* Use [PEP 8](https://www.python.org/dev/peps/pep-0008/) as a reference for how to write your code
* `print` messages to the console terminal
* Use `#` and `"""` (or `'''`) to write code comments

### Number Data Type

* Explain the most common types of numbers in Python
    * int
    * float
    * complex
* Evaluate arithmetic expressions that include familiar operators and `**`, `//` and `%`
* Predict when an arithmetic expression will throw an error

### String Data Type

* Write strings using the correct syntax
* Use `len()` to obtain a count of the number of characters in a string
* Refer to one or more characters in a string
* Concatenate strings together

### Variables

* Predict when errors will be thrown when using variables and expressions
* Explain the meaning of `None` in Python

  BONUS: Explain duck typing

  BONUS: know what the `NoneType` is

### Boolean Data Type

* Predict the evaluation of expressions that use the boolean operations of `and`, `or` and `not`
* Explain how Python handles non-Boolean objects in conditional statements (Truthy and Falsey)

  BONUS: know that the boolean constants `True` and `False` are actually subclassed `int` values; `True == 1` and `False == 0`

  BONUS: understand how the `__bool__` dunder method adds Truthy/Falsey to user defined classes

### Comparison Operators

* Understand that conditionals in Python return boolean values
* Understand what the operators `>`,`<`, `>=`, `<=`, `==`, and `!=` do

  BONUS: Explain how to short-circuit conditional expressions (See Supplemental LOs for more info on this: Boolean Short Circuit)

### Identity vs. Equality

* Explain the difference between `==` and `is`

  BONUS:
  * Enderstand that the `==` operator compares compatible values, or returns `False`
  * Enderstand that the `is` operator compares object references for the identity of their referenced objects

  BONUS: Understand that the dunder method `__eq__` is used to define how user-defined classes will behave when compared with `==`, and in the absence of this dunder method the `==` comparison uses the `is` comparison.

### If Statements

* Know how to write an `if` statement in Python, and what the `elif` and `else` blocks do.

### While Statements

* Understand the syntax for a Python `while` loop:
```py
while condition:
  do_something()
```
* Understand what `break` and `continue` do in the context of a `while` loop

### Try/Except Statements

* Write a `try` statement to catch and handle exceptions in Python
* Handle different types of errors

  BONUS:

  * Know what the syntax for `try`, `except`, and `finally` blocks are
  * Understand that Exceptions are objects that belong to a class hierarchy
  * Know how to catch and examine an Exception, and how to construct and raise a simple one.

  BONUS: See also W17D4/src/why_does_pythons_for_have_an_else.py for some example code

### pass

* Understand what the Python `pass` statement is for, and when to use it

### Functions

* Describe how to define a function in Python
    * Create a named function with `def`
    * Create an anonymous function with `lamda`
* Demonstrate how to invoke a function
* Write functions which could do some/all of these:
    * Accepts parameters
    * Return a value
    * Return a function

## LOs from Day One

* Labor Day!

## LOs from Day Two

### Formatting Strings

* Generate formatted output using join and format

  BONUS: understand how to generate formatted output

### Getting Input From The Command Line

* Know how to use the `input()` function to get responses from a CLI user

### Scripts Vs. Programs

  BONUS: 

* Explain the difference between scripts and programs (size, mostly)
* Recall common use cases for Python
  * Python can be used to do pretty much any programming task, and is
  * related to our a/A work, A Python _Back End_ can generate a REST or GraphQL API for a _Front End_ application.
  * Python web frameworks (like Flask and Django) can also render HTML, CSS and JavaScript

### Structured Data

* Define _sequence_, _collection_ and _iterable_

  BONUS: Know which built-in classes are _immutable_ and which are _mutable_.

### Built-in Data Types

* Be able to declare a list, tuple, range, dictionary and set in Python

### Built-in Functions

* Use functions with iterables `filter`, `map`, `sorted`, `enumerate`, `zip`
    * ex: Creating a list with `filter` extracting short strings from list `lst`:
        ```py
        lst = ["cat", "at", "a"]
        list(filter(lambda el: len(el) < 3, lst)) 
        # => returns ["at", "a"]
        ```
        * `lambda el: len(el) < 3` is an anonymous function
        * `filter` passes each `el` from `lst` to the anonymous function
        * `filter` returns a generator function that will yield all `el`s that evaluated to True in the `lambda` function
        * `list()` casts the result of the generator function as a list
    * ex: Creating a list with `map` squaring  `num` from `nums`:
        ```py
        nums = [1, 2, 3]
        set(map(lambda num: num ** 2, nums)) 
        # => returns {1, 4, 9}
        ```
        * `lambda num: len(num) < 3` is an anonymous function
        * `map` passes each `num` from `nums` to the anonymous function
        * `map` returns a generator function that will yield `num`s that have been squared from `nums`
        * `set()` casts the result of the generator function as a set
* Analyze iterables using `len`, `max`, `min`, `sum`, `any`, `all`
* Work with sets using operators `&`, `|`, `-`, `^`
* Use the predefined typecasting functions like `int()`, `float()`, `str()`, etc. to perform explicit type conversion.

  BONUS: Know how to find the table at the beginning of Chapter 2 in the _Python Standard Library_ documentation, where there are links to all of the built-in functions.

  BONUS: Work with namespaces using `dir`

### `for` Statements

* Understand the one-and-only syntax for a Python `for` loop:

```py
for item in iterable:
  # do something with the item
  print(item)
```

* Understand what `break` and `continue` do in the context of a `for` loop

  BONUS: know that a `for` loop in Python has an `else` clause

  DOUBLE BONUS: understand why (see W17D4/src/why_does_pythons_for_have_an_else.py)

### More On Functions (and Methods!)

* When ordering arguments within a function or function call, arguments need to occur in a particular order:

  1. Formal positional arguments
  1. `*args`
  1. Keyword arguments with default values
  1. `**kwargs`

* Know that Python keeps track of extra arguments and will provide them to your function using:
    * The parameter that starts with `*` will receive a tuple of values that are the extra positional parameters
    * The parameter that starts with `**` will receive a dictionary of values that are the extra keyword parameters

  BONUS: `*args` and `**kwargs` are often used when wrapping functions or methods.

### Importing in Python

* Define _module_ in Python
* Use import to load a built-in module
* Follow common best practices for importing modules

  *BONUS:* 
    * Know what these three import syntaxes do:

        * `import <module> [as <identifier>]`: imports the `<module>` namespace into _this_ module's namespace, using the `<module>` name or an alternate `<identifier>`.  This import method is generally safe from name collisions, as the imported module's identifiers are referenced as `<module>.<identifier>`

        * `from <module> import <identifier> [as <identifier>] [, <identifier> [as <identifier>]]*` imports one or more names from `<module>` into _this_ module's namespace, using original or alternate names.  This method only imports the identifiers that the code in this module needs to use.

        * `from <module> import *`: imports all names from the `<module>` namespace into _this_ namespace.

            * This import method is generally discouraged, and is only a 'good' idea under _*very specific circumstances*_, because it effectively joins _this_ namespace to the `<module>` namespace.  One practical use-case for this form of import is exploring the imported module's code features (like ORM models) in the REPL.
    * Understand the relationship between _packages_, _modules_ and _submodules_
    * know what a Python _module_ is, and what a _package_ is.
    * Know what the file-system equivalents of these Python concepts are.

### Watching Out For Python 2
BONUS: Know the big things that changed from Python 2 to Python 3:

  * Identify Python 2.7 in code examples found online
  * Understand how to translate print from Python 2.7 to Python 3.8
  * `print` is now a function, was a statement
  * the `str` type is now a unicode string, was an ASCII (8-bit) string
  * all classes are derived from `object`  (also the case in later versions of Python 2)

## LOs from Day Three

### Classes in Python

* How to use the class keyword to define a class
* How to name classes
* How to create instances from classes
* How to initialize classes with the dunder method `__init__()`
* How to declare instance methods for a class
* How to make string representations of classes using dunder methods
    * `__str__()` to generate a human-friendly string representing your class (`<Dog: Fido>`)
    * `__repr__()` to generate string equivalent of the python initializer call (`"Dog(name='Fido')"`)

  BONUS: How to use the dunder class variable `__slots__` to reserve memory for instance variables

### Inheritance in Python

* Use parentheses after the class name to specify the parent class
* Use the super() method to access methods on the parent class

  BONUS: Python supports _multiple inheritance_, so more than one parent class can appear in the class declaration - these should be separated by commas.

### Properties in Python

* You create the getter property by decorating a method with `@property`.
* You create the setter property by decorating a corresponding method with the decorator `@<getter_method_name>.setter`.

  BONUS: You may also define a `deleter` property and a `docstring` for your property if desired - for more information see the [`property()` class documentation](https://docs.python.org/3.8/library/functions.html) linked from the _BUILT-IN-FUNCTIONS_ table at the start of Chapter 2 in the _Python Standard Library_

### List Comprehensions

* Know what a list comprehension is: 
    * `[<map> for <selector> in <iterator> if <filter>]`
        * `<iterator>` provides values to the comprehension (required)
        * `<selector>` initializes the loop variable(s) (required)
        * `<map>` is an expression that may transform the loop variable(s) (required but could be trivial (ex: the first `i` in `[i for i in lst]`))
        * `<filter>` filters on the loop variable(s) (optional)

  BONUS:

    * Know what a comprehension is in general (`set` and `dict`ionary comprehensions as well)
    * Recognize the simple _generator_ syntax (looks like a comprehension in parentheses rather than braces)

## LOs from Day Four

(no new material - study and practice!)

## LOs from Day Five

(no new material - study and practice!)