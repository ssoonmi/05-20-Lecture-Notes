// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/


// Given preorder and inorder traversal of a tree, construct the binary tree.

// Note:
// You may assume that duplicates do not exist in the tree.

// For example, given

// preorder = [3,9,20,15,7]
// inorder = [9,3,15,20,7]
// Return the following binary tree:

//     3
//    / \
//   9  20
//     /  \
//    15   7



const { TreeNode } = require('./tree_node.js');


function buildTree(preorder, inorder) {
    if (preorder.length == 0 && inorder.length == 0) return null;

    let root = new TreeNode(preorder[0]);
    let rootIdx = inorder.indexOf(preorder[0]);

    let leftInorder = inorder.slice(0, rootIdx);
    let rightInorder = inorder.slice(rootIdx + 1);

    let leftPreorder = preorder.filter(val => leftInorder.includes(val));
    let rightPreorder = preorder.filter(val => rightInorder.includes(val));

    console.log(`preorder: ${preorder}`);
    console.log(`inorder: ${inorder}`);
    console.log(`leftInorder: ${leftInorder}`);
    console.log(`rightInorder: ${rightInorder}`);
    console.log(`leftPreorder: ${leftPreorder}`);
    console.log(`rightPreorder: ${rightPreorder}`);
    console.log(`\n--------------\n`)

    root.left = buildTree(leftPreorder, leftInorder);
    root.right = buildTree(rightPreorder, rightInorder);

    return root;
}
 

const preorder = [3,9,20,15,7];
const inorder = [9,3,15,20,7];

buildTree(preorder, inorder);