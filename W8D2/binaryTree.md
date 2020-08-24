# Binary Trees


## What is a Tree?

A Tree is an Abstract Data Type used in computer science and mathematics. We use trees to store hierarchical data.

Examples include:
* File Structures
* The DOM


## The Rules of Trees

A Tree is a Graph that does not contain any cycles. In computer science, a tree contains a special node from which every other node is accessible; we call this special node the "root"


In all trees:
* There is only one root node
* Each child can have at most one parent
* There can be any number of leaf nodes
* The height of the tree is determined by the minimum number of nodes (inclusive) needed to travel from the root to its most distant leaf.
* There are no cycles (loops)


What makes a Binary Tree special from other Trees:
* Each parent has at most 2 children.
* We differentaite the left and right node. The vast majority of the time the order of the child nodes matter.


What is an N-ary tree?
* Each parent has at most N children, where N is some integer.


## Tree Traversal

### Breadth First

If we traverse the tree one level at a time, from left to right, this is referred to as Breadth First.

### Depth First

If we go down one path, with post-order traversal it is typical to travel all the way down to the left-most leaf node, then check its sibling nodes before checking its parent. In pre-order traversal, we check each node as we go down the path. This is referred to a Depth First.

## Typical Methods on a Binary Tree

* Insert child of
* Remove
* Has?
* Get subtree of