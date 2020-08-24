// Implementing a Graph in Code



// Similar to when working with other ADTs, we can crate a node class
// This class can have a property which will store all the nodes
  // which this instance should hold reference to.

class GraphNode {
  constructor(val) {
    this.val = val;
    this.neighbors = [];
  }
}

let a = new GraphNode('a');
let b = new GraphNode('b');
let c = new GraphNode('c');
let d = new GraphNode('d');
let e = new GraphNode('e');
let f = new GraphNode('f');
a.neighbors = [b, c, e];
c.neighbors = [b, d];
e.neighbors = [a];
f.neighbors = [e];






// Adjacency Matrix

// The implementation above is considered rather clunky.
// We have no easy way to refer to the entire graph.
// Recall that there is no root to act as the definite starting point (unlike with Trees).
// How can we pass this graph to a function?



// One of the solutions is to create an Adjacency Matrix, a grid utilizing a 2D array.
// Matrix implementation allows us to refer to the entire graph by simply referring to the 2D array.

// The row index corresponds to the source of an edge.
// The column index will correspond to its destination. 
// A value of true will mean that there does exist an edge from source to destination,
  // ie, the source node should hold reference to destination node.




let matrix = [
/*  Destinations =>     A/0     B/1     C/2     D/3     E/4     F/5   */
/*  ----------------------------------------------------------------- */
/*             | A/0 */[true,   true,   true,   false,  true,   false],
/*             | B/1 */[false,  true,   false,  false,  false,  false],
/* Sources =>  | C/2 */[false,  true,   true,   true,   false,  false],
/*             | D/3 */[false,  false,  false,  true,   false,  false],
/*             | E/4 */[true,   false,  false,  false,  true,   false],
/*             | F/5 */[false,  false,  false,  false,  true,   true]
];



// Disadvantage: 
//  An adjacency matrix requires a lot of space.
//  To represent a graph of n nodes, we must allocate n^2 space for the 2D array.
//  If there are few edges in graph we will have to use n2 space, 
    // even though the array will only contain a few true elements.







  
// Adjacency List

// We use an object where keys represent the node labels.
// The values associated with the keys will be an array containing all 
// adjacent nodes,
  // ie, the nodes which this instance (represented by a key) 
  // should hold reference to.

// An adjacency list is easy to implement and allows us to refer to the 
  // entire graph by simply referencing the object. 
// The space required for an adjacency list is the number of edges in 
  // the graph.


let adjList = {
  'a': ['b', 'c', 'e'],
  'b': [],
  'c': ['b', 'd'],
  'd': [],
  'e': ['a'],
  'f': ['e'],
};









// Recursive case given a node

function depthFirstNode(node, visited = new Set()) {
  // We utilize a Set for our memo instead of a regular object
  // A Set is like an object where the keys have no values
  if (visited.has(node.val)) return;

  console.log(node.val);
  visited.add(node.val);
  node.neighbors.forEach(neighbor => depthFirstNode(neighbor, visited));
}

// We invoke this with an instance of the graph node class
// depthFirstNode(f);


// depthFirstNode(node, visited);   // 1st frame,   node.val = 'f', visited = {'f'}
// depthFirstNode(node, visited);   // 2nd frame,   node.val = 'e', visited = {'f', 'e'}
// depthFirstNode(node, visited);   // 3rd frame,   node.val = 'a', visited = {'f', 'e', 'a'}
// depthFirstNode(node, visited);   // 4th frame,   node.val = 'b', visited = {'f', 'e', 'a', 'b'}, popped off stack
// depthFirstNode(node, visited);   // 5th frame,   node.val = 'c', visited = {'f', 'e', 'a', 'b', 'c'}
// depthFirstNode(node, visited);   // 6th frame,   node.val = 'd', visited = {'f', 'e', 'a', 'b', 'c', 'd'}, popped off stack
// 5th frame,     node.val = 'c'     returns undefined,     popped off the stack
// 4th frame,     node.val = 'e'     vistied.has(node.val) = true,    returns undefined,     popped off the stack
// 3rd frame,     node.val = 'a'     returns undefined,     popped off the stack
// 2nd frame,     node.val = 'e'     returns undefined,     popped off the stack
// 1st frame,     node.val = 'f'     returns undefined,     popped off the stack
// Final return value: undefined














// Recursive case given an adjacency list

// let adjList = {
//   'a': ['b', 'c', 'e'],
//   'b': [],
//   'c': ['b', 'd'],
//   'd': [],
//   'e': ['a'],
//   'f': ['e'],
// };

function depthFirstAdj(graph, node, visited = new Set()) {
  // if this node has already been visited, then return early
  if (visited.has(node)) return;

  // otherwise it hasn't yet been visited,
  // so print it's val and mark it as visited.
  console.log(node);
  visited.add(node);

  // then explore each of its neighbors
  graph[node].forEach(neighbor => {
    depthFirstAdj(graph, neighbor, visited);
  });
}

// // We invoke this with the adjacency list and a key from the list.
// depthFirstAdj(adjList, 'f');
// console.log(`\n----------\n`);
// depthFirstAdj(adjList, 'a');

// We see that when we invoke this function with 'a' we are not able to access the 'f' node





function completeDepthFirst(graph) {
  let visited = new Set ();
  for (let node in graph) {
    _depthFirstRecur(node, graph, visited)
  }
}

function _depthFirstRecur(node, graph, visited) {
  // if this node has already been visited, then return early
  if (visited.has(node)) return;

  // otherwise it hasn't yet been visited,
  // so print it's val and mark it as visited.
  console.log(node);
  visited.add(node);

  // then explore each of its neighbors
  graph[node].forEach(neighbor => {
    _depthFirstRecur(neighbor, graph, visited);
  });
}

// We invoke this with the adjacency list and a key from the list.
completeDepthFirst(adjList, 'f');
console.log(`\n----------\n`);
completeDepthFirst(adjList, 'a');