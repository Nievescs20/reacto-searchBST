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

function searchBST(root, val) {
  if (root == null) {
    return null;
  }

  if (root.val === val) {
    return root;
  }
  if (val < root.val) {
    return searchBST(root.left, val);
  }
  if (val > root.val) {
    return searchBST(root.right, val);
  }
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

console.log(searchBST(test, 2));
console.log(searchBST(test, 5));
