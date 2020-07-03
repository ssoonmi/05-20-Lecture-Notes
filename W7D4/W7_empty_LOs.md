# Week 7 Learning Objectives

## Big-O
1. Order the common complexity classes according to their growth rate
  - 
  - 
  - 
  - 
  - 
  - 
  - 

2. Identify the complexity classes of common sort methods
  | Sort Name | Time Complexity    | Space Complexity  |
  |:--------- |:------------------ |:----------------- |
  | bubble    | O(__)              | O(_)              |
  | selection | O(__)              | O(_)              |
  | insertion | O(__)              | O(_)              |
  | merge     | O(__)              | O(_)              |
  | quick     | O(__)              | O(_)              |

3. Identify complexity classes of code
```javascript
function example1(n) {
  for (let i = 1; i <= 20; i++) {
    console.log(i);
  }
}

function example2(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      console.log(`${i}, ${j}`);
    }
  }
}

function example3(n) {
  console.log(n);
  if (n === 1) return;
  example3(n - 1);
  example3(n - 1);
}
```

## Memoization and Tabulation
1. Apply memoization to recursive problems to make them less than polynomial time.
```javascript
function fib(n) {
  if (n === 1 || n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

function fibMemo() {}
```

2. Apply tabulation to iterative problems to make them less than polynomial time.
```javascript
function fib(n) {
  if (n === 1 || n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

function fibTab() {}
```

## Sorting Algorithms
1. Explain the complexity of and write a function that performs bubble sort on an array of numbers.
  - Time Complexity: O(__)
  - Space Complexity: O(__)
  - Code:
  ```javascript
  function bubbleSort(array) {

  }
  ```
2. Explain the complexity of and write a function that performs selection sort on an array of numbers.
  - Time Complexity: O(__)
  - Space Complexity: O(__)
  - Code:
  ```javascript
  function selectionSort(array) {
    
  }
  ```
3. Explain the complexity of and write a function that performs insertion sort on an array of numbers.
  - Time Complexity: O(__)
  - Space Complexity: O(__)
  - Code:
  ```javascript
  function insertionSort(array) {
    
  }
  ```
4. Explain the complexity of and write a function that performs merge sort on an array of numbers.
  - Time Complexity: O(__)
  - Space Complexity: O(__)
  - Code:
  ```javascript
  function mergeSort(array) {
    
  }
  ```
5. Explain the complexity of and write a function that performs quick sort on an array of numbers.
  - Time Complexity: O(__)
  - Space Complexity: O(__)
  - Code:
  ```javascript
  function quickSort(array) {
    
  }
  ```
6. Explain the complexity of and write a function that performs a binary search on a sorted array of numbers.
  - Time Complexity: O(__)
  - Space Complexity: O(__)
  - Code:
  ```javascript
  function bindarySearch(array) {
    
  }
  ```

## Lists, Stacks, and Queues
1. Explain and implement a Linked List.
  - What properties does an instance of a linked list track?
  - What methods does a linked list need to implement?
  - What are the time complexities for these methods?
  - What's the difference between a Singly Linked List and a Doubly Linked List? How would the difference impact the properties and the methods that we implement?
  - Practice creating both types. Use Thursday's project as an example/guide.

2. Explain and implement a Stack.
  - Define LIFO and ADT and how it relates
  - What methods does a stack need to implement?
  - What are the time complexities for these methods?
  - Know how to implement a stack using both a node class as well as just an array instance variable. Use Thursday's project as an example/guide for your usage of a Node. How would this change if we just wanted to keep an array instance variable on our Stack instead?

3. Explain and implement a Queue.
  - Define FIFO and ADT and how it relates
  - What methods does a queue need to implement?
  - What are the time complexities for these methods?
  - Know how to implement a queue using both a node class as well as just an array instance variable. Use Thursday's project as an example/guide for your usage of a Node. How would this change if we just wanted to keep an array instance variable on our Queue instead?

## GitHub (not going to be on the assessment)
1. You will be able to participate in the social aspects of GitHub by starring repositories, following other developers, and reviewing your followers

2. You will be able to use Markdown to write code snippets in your README files

3. You will craft your GitHub profile and contribute throughout the course by keeping your "gardens green"

4. You will be able to identify the basics of a good Wiki entries for proposals and minimum viable products

5. You will be able to identify the basics of a good project README that includes technologies at the top, images, descriptions and code snippets

# Format of Assessment
- You will have 2 hours to complete the assessment
- The assessment has two major sections
  1. ~20 Multiple Choice Questions
  2. VS Code Questions
    - 4 different problems in total
    - ~20 specs to pass spread across all problems