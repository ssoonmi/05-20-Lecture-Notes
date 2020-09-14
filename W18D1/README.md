# `pip`, `virtualenv`, `pipenv`, and Testing

## Local Packages and Modules

No difference between distinguishing relative vs. absolute path (will always choose the relative if there is a conflict)

To run a package as a module

```
python -m package_name
```

To run a package as a script (DON'T DO THIS! FOR DEMONSTRATION PURPOSES ONLY)

```
python package_name
```

Play around with running the following packages:
- [another_package]
- [my_package]

## Python command-line tools

| Python tool | similar Node.js equivalent  |
| ---         | ---                         |
| pyenv       | nvm                         |
| pip         | npm --global                |
| virtualenv  | nvm + node_modules          |
| pipenv      | npm + nvm                   |
| Pipfile     | package.json                |

## `pipenv`

- `pipenv` is a Python virtual environment manager
- manages packages and their versions in a project
- manages Python version in a project (npm does not specify Node.js versions and does not manage it nor does it enforce a node version)
- uses `virtualenv` to create the virtual environment (`virtualenv` is a lower level virtual environment manager than `pipenv`)

### Create a `pipenv` virtual environment 

1. To see which version of python you have

   ```
   pyenv versions
   ```

2. Create the virtual environment using `pipenv`
   - If the python version you want to use is the default python version:

     ```
     pipenv install
     ```
   - If the python version you want to use is **not** the default python version:
     ```
     pipenv install --python "$PYENV_ROOT/versions/3.8.1/bin/python"
     ```
     Replace `3.8.1` with whatever version you want to use
- This creates a `Pipfile`, `Pipfile.lock`, and `.venv` in your directory.
   - In `Pipfile`, can specify full Python version if you replace `python_version` with `python_full_version`
   - `Pipfile` holds the dependencies and dev dependencies of your virtual environment
   - `Pipfile.lock` holds the versions of the dependences and the sub-dependencies
   - `.venv` folder holds the code for those dependencies (similar to `node_modules` for Node.js)

### Package installation

Install dependencies in your `pipenv` virtual environment

```
pipenv install <package-name>
```

Install dev dependencies

```
pipenv install --dev <package-name>
```

**Do not use `pip install` unless you want to install globally now!**

To uninstall dependencies

```
pipenv uninstall <package-name>
```

### `pipenv` Shell and Commands

To access the `pipenv` virtual environment's shell

```
pipenv shell
```

To exit the shell, run `exit` or Ctrl + D for Windows or Cmd + D for MacOS

To run commands in a `pipenv` virtual environment, you can do several things:
   1. Run commands when OUTSIDE the `pipenv` virtual environment shell
   ```
   pipenv run <command>
   ```
   2. Run commands when INSIDE the `pipenv` virtual environment shell
   ```
   <command>
   ```

## Testing with `unittest`

[`unittest` docs]

### What is `unittest`?

- `unittest` is a testing-suite package, just like how `mocha` is a testing-suite package built for Node.js
- Comes with Python version 3 so no need to install it
- `unittest` names are in camelCase because it was ported from Node.js

### Using `unittest`

1. Create a folder called `test` in your project
1. Make sure to have a `__init__.py` in the test folder
1. Create a test file **file names should start or end with `test`** in the test folder
1. import `unittest` at the top of a test file
1. Create a class that inherits from `unittest.TestCase`
1. Create methods on that class where each method is going to be a single test **method names need to start with `test_`**
1. Inside those methods, use methods inherited from `unittest.TestCase` to assert certain behavior from the code run by an imported file
1. Run command `python -m unittest` in the project folder

```py
import unittest
from file_name import class_to_test


class Tests(unittest.TestCase):
    def test_first(self):
        self.assertEqual(class_to_test.two(), 2)
```

[Code example of using `unittest`]

## Testing with `pytest`

[`pytest` docs]

### What is `pytest`?

- `pytest` is the most widely used testing suite for Python
- Does **not** come with Python so need to install the package
- Can run `unittest` in `pytest` as well

### Using `pytest`

1. Install `pytest`: `pipenv install pytest`
1. Create a folder called `test` in your project
1. Make sure to have a `__init__.py` in the test folder
1. Create a test file **file names should start or end with `test`** in the test folder
1. Create functions each function is going to be a single test **function names need to start with `test_`**
1. Inside those functions, use the `assert` keyword before an expression that should evaluate to `True` to allow the test to pass, or `False` to make the test fail
1. Run command `pytest` OR `python -m pytest` in the `pipenv` shell

```py
def test_first():
    assert 3 == 3


def test_first():
    assert 1 != 2
```

Can also skip tests by importing `pytest` into the test file

```py
import pytest


@pytest.mark.skip() # skips test_first
def test_first():
    assert 3 == 3

def test_second():
    if True:
        pytest.skip() # skips the test
    assert 1 != 2 # does not run
```

[Code example of using `pytest`]


[`unittest` docs]: https://docs.python.org/3/library/unittest.html
[`pytest` docs]: https://docs.pytest.org/en/reorganize-docs/index.html
[another_package]: ./another_package
[my_package]: ./my_package
[Code example of using `unittest`]: ./unittest-package
[Code example of using `pytest`]: ./pytest-package