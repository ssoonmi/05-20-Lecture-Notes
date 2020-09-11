class Node():
  '''
  '''
  def __init__(self, value):
    self._value = value
    self._left = None
    self._right = None

class BST():
  '''
  '''
  def __init__(self):
    self._root = None

  def insert_value(self, value, current_node=False):
    ''' '''
    # TODO: Implement node value insertion method
    print(f"insert {value} here!")

  # TODO: Implement iterative search method
  def search_iteratively(self, value):
    pass

  # TODO: Implement recursive search method
  def search_recursively(self, value, current_node=False):
    pass


tree = BST()
print(tree._root)                         # None

# 1. Test node value insertion
tree.insert_value(3)
tree.insert_value(10)
tree.insert_value(5)
tree.insert_value(16)
tree.insert_value(1)
tree.insert_value(7)
tree.insert_value(16)
# print(tree._root._value)                  # 10
# print(tree._root._left._value)            # 5
# print(tree._root._right._value)           # 16
# print(tree._root._left._left._value)      # 1
# print(tree._root._left._right._value)     # 7
# print(tree._root._right._right._value)    # 16

# # 2. Test iterative search
# empty_tree = BinarySearchTree(2)
# print(empty_tree.search_iteratively(10))  # False
# print(tree.search_iteratively(10))        # True
# print(tree.search_iteratively(7))         # True
# print(tree.search_iteratively(-1))        # False

# # 3. Test recursive search
# print(empty_tree.search_recursively(10))  # False
# print(tree.search_recursively(10))        # True
# print(tree.search_recursively(7))         # True
# print(tree.search_recursively(-1))        # False
