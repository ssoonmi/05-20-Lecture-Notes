'''
namespaces_and_docstrings.py - Python Example #000

*** the module ***

The Python documentation defines a 'module' as:
  "An object that serves as an organizational unit of Python code."

* Practically speaking, a 'module' is the same thing as a file.

*** multiline comments ***

There are *no* multiline comments in Python.  What there are - what
*this* is - are muliline strings.  Python has two ways to represent
"ordinary" strings, the same two as JavaScript - "double-quoted" and
'single-quoted'.  Python also has two ways to represent multiline strings,
using either three double quotes - """ some long text expression possibly
spanning several lines """ - or three single quotes, as is the case for
this extended string itself.

*** docstrings ***

Python is a language that is proud to take one cool features that
first appeared in other languages.  One of the coolest one - 'docstrings'
- were inspired by a similar feature in Java.  Any namespace can have a
block of information attached to it by including a triple-quoted string
as te first (unnamed) expression in the namespace.

So - this triple-quoted string is the docstring for this module

If you open the Python interpreter in the same folder as this file
and execute:

  `python3 -c "import namespaces_and_docstrings as nads; help(nads)"

You will see all of the docstrings in this module displayed as documentation

for more information on docstrings in Python, see [PEP 257]
(https://www.python.org/dev/peps/pep-0257/)
'''

# functions are introduced with the keyword 'def'; this is a comment
def function_zero():
  '''
  This is the docstring for function_zero.  Typically you will explain
  what the parameters are and what side-effects or returned values to
  expect.  There are guidelines
  on how to provide formal documentation - but also this is a great
  place to note what your function is going to do.

  Notice that the body of the function is indented a set number of
  spaces.  Python does not use curly braces to group blocks of code;
  instead, blocks are indented.  Don't worry, you'll like it soon
  enough!

  '''

# the class keyword instroduces a class definition.  There will
# be a lot more to say about classes later - but as in JS, a class
# is essentially a user-defined type.
class ClassZero():
  '''
  this is the docstring for ClassZero.  Typically you would use
  this space to describe ClassZero - what it is for, how it is
  constructed, any notable methods, etc.
  '''

  # a def keyword within a class is used to declare a method
  # a method is like a function, except that it is bound to
  # the class it is defined in.  The most common form of a method
  # is an instance method - these always have a first parameter
  # that provides the object's context - by convention in Python this
  # parameter is called 'self':
  def __init__(self):
    '''
    this is the docstring for ClassZero's __init__ method - it is
    roughly analogous to a constructor method in ES6 JS.  If you
    want to make any noted about how an instance will be initialized
    this is the place to do it.
    '''

  def method_zero(self):
    ''' this is another instance method with a short docstring '''

if __name__ == '__main__':
  '''
  this unnamed string looks like a docstring, but it isn't -
  the reason is, this block of code introduced by the if statement
  above isn't a "named" block.  It won't appear in the help() for
  this module.
  '''
  print("Welcome to Python!!!")
