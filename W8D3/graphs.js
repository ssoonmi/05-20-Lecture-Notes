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













// Recursive case given a node

function depthFirst(node, visited = new Set()) {
  if (visited.has(node.val)) return;

  console.log(node.val);
  visited.add(node.val);
  node.neighbors.forEach(neighbor => depthFirst(neighbor, visited));
}


depthFirst(f);







// Recursive case given an adjacency list


let graph = {
  'a': ['b', 'c', 'e'],
  'b': [],
  'c': ['b', 'd'],
  'd': [],
  'e': ['a'],
  'f': ['e'],
};




// function depthFirst(graph, node, visited = new Set()) {
//   // if this node has already been visited, then return early
//   if (visited.has(node)) return;

//   // otherwise it hasn't yet been visited,
//   // so print it's val and mark it as visited.
//   console.log(node);
//   visited.add(node);

//   // then explore each of its neighbors
//   graph[node].forEach(neighbor => {
//     depthFirst(graph, neighbor, visited);
//   });
// }

// depthFirst(graph, 'f')