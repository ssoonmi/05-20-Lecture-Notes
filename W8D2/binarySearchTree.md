# Binary Search Tree


## What is a Binary Search Tree?

A Binary Search Tree is a Binary Tree structured in such a way so it's very efficient to locate data within the Tree. A Binary Search Tree is a sorted data structure.


In addition to being a Binary Tree, a Binary Search Tree must also have the following properties:
* Given any node of the tree, the values in the left subtree must all be strictly less than the given node's value.
* The values in the right subtree must all be greater than or equal to the given node's value


### Recursive Definition

* The left subtree contains values less than the root
* AND the right subtree contains values greater than or equal to the root
* AND the left subtree is a Binary Search Tree
* AND the right subtree is a Binary Search Tree


## Binary Search Tree Traversal

To easily obtain all values of a Binary Search Trees in ascending order, we ALWAYS traverse a Binary Search TRee in a post-order Depth-First manner.


## Typical Methods on a Binary Search Tree

* Add
* Remove
* Has?

### Add

To add a new value, a new value will be inserted as a leaf (or the root node if it's the first node). If the new node is less than the current node, it will be inserted to the left. If the new node is greater than the current node, it will be inserted to the right. We continue this pattern until the new node will be inserted as a leaf.

### Remove

A node with two children:
* We find the leftmost grandchild of the removed node's immediate right child.

A node with one child:
* The remove node's child and its subtree take the place of the removed node (we shift the subtree upwards).