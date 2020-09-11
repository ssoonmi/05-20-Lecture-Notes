class Node:
    def __init__(self, value):
        self._value = value
        self._parent = None
        self._children = []

    @property
    def value(self):
        return self._value

    @property
    def parent(self):
        return self._parent

    @property
    def children(self):
        return self._children




    @parent.setter
    def parent(self, node):
        if self._parent is node:
            return
        if self._parent is not None:
            self._parent.remove_child(self)
        self._parent = node
        if node is not None:
            node.add_child(self)

    def add_child(self, node):
        if node not in self._children:
            self._children.append(node)
            node.parent = self

    def remove_child(self, node):
        if node in self._children:
            self._children.remove(node)
            node.parent = None




    def depth_search(self, value):
        if self._value == value:
            return self
        for child in self._children:
            node = child.depth_search(value)
            if node is not None:
                return node
        return None





    def breadth_search(self, value):
        queue = [self]

        while queue:
            node = queue.pop(0)
            if node.value == value:
                return node
            queue.extend(node._children)








    def __str__(self):
        return f"Node<{self._value}>"
