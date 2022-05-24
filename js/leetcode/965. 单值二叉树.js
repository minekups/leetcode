/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  let rootNum = root.val;
  let result = {
    result: true
  }
  checkUnivalTree(root, result, rootNum);
  return result.result;
};

var checkUnivalTree = function (root, result, rootNum) {
  if (result.result === false) {
    return;
  }
  if (root.val !== rootNum) {
    result.result = false;
    return;
  }
  if (root.left !== null) {
    checkUnivalTree(root.left, result, rootNum);
  }

  if (root.right !== null) {
    checkUnivalTree(root.right, result, rootNum);
  }
}
