const {TreeNode} = require('./tree_node');

// In inOrder traversal,
// First we check the left child (or subtree),
// Then we check the node itself,
// Then we check the right child (or subtree)

// When debugging our code, we should console.log() any relevant or changing values

function inOrderArray(root) {
  console.log(root);
  if (!root) return [];

  return [ 
    ...inOrderArray(root.left), 
    root.val, 
    ...inOrderArray(root.right) 
  ];
}



// In postOrder, the last thing we check is the node itself.
// First, we must check all of its children (or subtrees).

// When debugging our code, we should console.log() any relevant or changing values

function postOrderArray(root) {
  if (!root){
    return [];
  } else {
    console.log(root.val); 
  };

  return [
    ...postOrderArray(root.left),
    ...postOrderArray(root.right),
    root.val,
  ];
}

// In order to test, I will use the examples from the test file

let root = new TreeNode("a");
let b = new TreeNode("b");
let c = new TreeNode("c");
let d = new TreeNode("d");

root.left = b;
root.right = c;
b.left = d;

// We must invoke our functions to run them in node

// Before running our file in node, we should predict the ouput 
  // along with what will be printed to the console

// inOrderArray(root);

postOrderArray(root);






module.exports = {
    inOrderArray,
    postOrderArray
};