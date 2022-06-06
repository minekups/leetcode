/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  let result = {
    result: true
  }
  checkSameTree(p, q, result);
  return result.result;
};

var checkSameTree = function (p, q, result) {
  if (result.result === false || (p === null && q === null)) {
    return;
  }
  if ((p === null && q !== null) || (p !== null && q === null) || p.val !== q.val) {
    result.result = false;
    return;
  }
  checkSameTree(p.left, q.left, result);
  checkSameTree(p.right, q.right, result);
}
