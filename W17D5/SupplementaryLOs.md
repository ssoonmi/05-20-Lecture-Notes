## Summary Review Materials

### Boolean Short-Circuit

Understand the simple and complete forms of the common Python idiom that uses the boolean short curcuit to effectively provide a ternery operator:
```py
# simple form, result is y if x is truthy, else z - works if y is always truthy
result = x and y or z

# 'safe' form, protected against y being falsey
result = (x and [y] or [z])[0]
```


### The `pass` keyword

Because Python's code blocks are noted by indentation, an empty code block is a problem for the language parser.  The solution is to use the place-holder keyword, `pass`:
```python
def i_am_definitely_going_to_code_something_here_later(*args, **kwargs):
  pass

# without the pass keyword the class statement below would trigger an IndentationError
class SomeClass(SomeParent):
  '''a docstring''' # a docstring serves the same purpose as 'pass' ...

# ... so this comment and the statement below will not raise an IndentationError
x = 10
```

BONUS: There is another Python "do nothing" construct, the elipsis (`...`)  According to the docs, the elipsis is a even more generic placeholder than `pass`, so you can use it in the same way as `pass` if you think it looks cool - but other developers may be confused.

### Classes in Python

"Understand what a `class` in Python is" : a class in Python is a user-defined datatype.  The functions associated with a class are called _methods_, and are distinguished from regular functions by having a first parameter that provides context, conventionally (always) named `self`.  (user-defined) Classes are by convention named with `TitleCase`; class attributes are named using `snake_case`.  Many built-in classes have lowercase names, like `range` and `property`  The commonality is that an instance of a class is *always* created by invoking the class name itself: `x = MyClass(...)` or `y = property(...)` or `for i in range(...)`.

Most of the magic of Python is conjured via the use of various "dunder" (for double-underscore) features of classes.  The most interesting ones for immediate gratification are:

#### dunder methods (a few common ones)

* `__init__`: this method initializes a new instance of a class (an object).  This method roughly corresponds to a `constructor` method in JavaScript.
* `__str__`: this method defines how the object can be represented as a string.
* `__repr__`: this method also defines how an object can be rendered as a string - by convention, `__str__` returns a human-friendly representation of the object, whereas `__repr__` returns (ideally) a string that if executed by the Python interpreter would recreate the object.
* `__eq__`: this method determines how the `==` operator will compare an object of the class to some other object - due to duck typing, `other` might or might not be "the same type" as `self`.
NOTE: If this operator is not defined and your class is not derived from a class with defined equivalence symantics, `==` invokes `is` and returns object identity.

#### dunder attributes (a few common ones)

* `__dict__`: every object (and classes _are_objects!) has a `__dict__` attribute that contains all of the regular instance variables, whether they are data (attributes) or code (methods).
* `__slots__`: this class variable (which should be a list of strings) can be used to instruct the interpreter to pre-allocate space for the corresponding attribute names when the object is created.  Practially, this is mostly of interest to systems that are making a lot of objects at the same time.
* `__class__`: yes, the class of an object is availble as an attribute.  Classes have `__name__` attributes, so to get the name of an object's class as a string, reference `obj.__class__.__name__`

#### More on Classes

Methods are declared using the `def` keyword, similar to regular functions.  The only difference is that a method is embedded in a class, and the first parameter should always be `self`.

EXCEPTION: methods decorated with `@classmethod` or `@staticmethod` _decorators_ have different rules regarding their expected parameters - the first parameter to a class method is the class itself (usually styled as `cls` or `klass`, since `class` is a Python keyword), while a static method does not constrain its parameter list.

A Python _*decorator*_ is an inline function that is introduced with an at-sign (`@`) and that immediately preceeds a function or method in code.  A decorator is like a closure, in that it wraps a function object and modifies its behavior.

The decorator introduced with this week's material is `@property`, which constructs a property object (instance of the `property` class) and assigns it to the same name as the method that immediately follows the decorator.  A property defined in this way consists of a (required) `getter` method, and optional `setter`, `deleter` methods and docstring attribute.  Properties allow you to read, write and remove "virtual" attributes of your object in a syntactically simple way, as if they were regular instance attributes.

Python classes have no "private" or "protected" member variables, same as JavaScript.  The convention in Python code is to name implementation methods and attributes with a leading underscore, like `_count = 0` and `def _increment_counter(self):`.  You will generally not read, write or call these non-public members. (but they can be inspected!)

## Structured Exception Handling in Python

One of the things that sets Python apart from other languages is the aggressive use of the built in structured exception handling mechanism (SEH).  SEH in Python depends on a hierarchy of classes derived from `BaseException`, and the syntax of the `try` block, which must include at least one `except` block, and may include a `finally` block.

Developers are free to derive their own classes of exceptions, generally inheriting from the `Exception` class.  A custom exception can be initialized and raised via the `raise` statement.

For an example of exception handling, see W17D4/src/why_does_pythons_for_have_an_else.py
