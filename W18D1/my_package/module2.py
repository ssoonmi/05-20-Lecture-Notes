print("Running my_package/module1.py as", __name__)

from .subpackage.module2 import value as module2_value
print("Imported .subpackage.module2 with value", module2_value)

value = "my_package/module.py"
