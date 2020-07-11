# Week 8 Learning Objectives

## Binary Trees
1. Explain and implement a Binary Tree.
  - Defining characteristics of a Binary Tree:
  - Be comfortable with tree terminology. Define and be able to identify each on a given tree:
    - root: 
    - parent node: 
    - child node: 
    - sibling nodes: 
    - leaf node: 
    - internal node: 
    - path: 
    - subtree: 
  - Be able to apply these terms to general questions:
    - How many parents does a tree with one node have?
    - What's the min/max number of parent and leaf nodes for a tree with 5 total nodes?
    - etc.

2. Identify the three types of tree traversals: pre-order, in-order, and post-order. (This is referring to one category of traversal. What's the other category?)
  - 
  - 
  - 
  - *
  - Given a tree, be able to determine the order of each traversal type:
    ![Number tree]
    - 
    - 
    - 
    - 

3. Explain and implement a Binary Search Tree.
  - Defining characteristics of a Binary Search Tree (How is it different from a generic graph/tree/binary tree?)
  - Be able to follow and implement an `insert` method of a BST.
    - If given a tree and a new value to insert, where would the new node be created?
    - How would you write that insert method?
    ```javascript
    class BST {
      constructor() {
          this.root = null;
      }

      insert() {
        
      }
    }
    ```

## Graphs
1. Know the differences between graphs and trees
- More freedom than a tree; no hierarchy
- Can have cycles
- Can be disconnected
- No parent/child association, instead we have neighbors 
2. What are three ways that we can implement a graph? What are each implementations' advantages or disadvantages?
- Adjacency Matrix
- Adjacency List
- Nodes
3. Given a graph in one of the above implementations, be able to traverse the graph in a breadth-first or depth-first manner.
4. Be able to make conclusions from these traversals
  - Is it possible to get from node A to node B?
  - What is the maximum value in the graph overall? If we start at node A, what is the minimum value we can encounter?
  - etc.

## Network Knowledge
  ### TCP/IP Model (IP Suite)
  1. Given a diagram of the TCP/IP model, be able to label each layer (LITA)
  2. Give a brief description of each layer (What is its major concern and an example)
  3. How does encapsulation apply to the model?

  ### Internet Protocol
  1. What are the main responsibilities of TCP and of IP?
  2. What is a packet and what is its general structure?
  3. What is the first field in a packet and how is it represented in each version of IP?
  4. Know the two special addresses that we discussed and what they represent.

  ### Transport Protocol
  1. What is a port?
  2. What are the two main transport protocols that we discussed? What are the main differences? Give an example use-case for each.

  ### Domain Name System (DNS)
  1. What is a domain?
  2. What is a top-level domain? Subdomain? Know how to parse this information from a URL.
  3. How are domains tracked? How do we know to associate a domain name with a device?
  4. There are several common DNS record types; we discussed five important ones. Be familiar with the letters, what they mean, and the use of each record type.

  ### Network Hardware
  1. Know the three major network hardware types that we discussed.
  2. Be able to describe the function of each device and compare/contrast their uses.

## Assessment Format
- 1 hour 40 minute assessment
- ~20 Multiple Choice
- Spec-based problems
  - Problems based on projects you've done this week
- 1-2 Free response
  - 1-2 sentences about the question

[Number tree]: ./number-tree.png