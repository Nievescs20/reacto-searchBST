/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function searchBSTRecursive(root, val) {
  if (root == null) {
    return null;
  }

  if (root.val === val) {
    return root;
  }
  if (val < root.val) {
    return searchBSTRecursive(root.left, val);
  }
  if (val > root.val) {
    return searchBSTRecursive(root.right, val);
  }
}

function searchBSTBFS(root, val) {
  const queue = [root];

  while (queue.length > 0) {
    const currentNode = queue.shift();

    if (currentNode.val === val) {
      return currentNode;
    }

    if (currentNode.left !== null) {
      queue.push(currentNode.left);
    }

    if (currentNode.right !== null) {
      queue.push(currentNode.right);
    }
  }

  return null;
}

const test = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1, null, null), new TreeNode(3, null, null)),
  new TreeNode(7, null, null)
);

test2 = new TreeNode(
  5,
  new TreeNode(3, null, null),
  new TreeNode(8, null, null)
);

console.log("Recursion", searchBSTRecursive(test, 2));
console.log("Recursion", searchBSTRecursive(test, 5));
console.log("BFS", searchBSTBFS(test, 2));
console.log("BFS", searchBSTBFS(test, 5));
