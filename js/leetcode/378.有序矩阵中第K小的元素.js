// https://zhuanlan.zhihu.com/p/474968401
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  if (matrix.length < 2 && k === 1) {
    return matrix[0][0];
  } else {
    let l = matrix[0][0];
    let r = matrix[matrix.length - 1][matrix.length - 1];
    let x = 0;
    while (l < r) {
      debugger;
      x = l + ((r - l) >> 1);
      let count = getCount(matrix, x);
      if (count >= k) {
        r = x;// *** 重要，左闭右开，所以r可以直接取x
      } else if (count < k) {
        l = x + 1;// *** 重要，左闭又开，l需要加1防止死循环
      }
      console.warn(l);
    }
    return l;// 为什么返回l就行，是因为最后收敛到l ***
  }
};

var getCount = function (matrix, x) {
  let count = 0;
  // debugger;
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] > x) {
      return count;
    } else {
      if (matrix[i][matrix.length - 1] <= x) {
        count += matrix.length;
      } else if (matrix[i][0] <= x && matrix[i][matrix.length - 1] >= x) {
        // 遍历找到有多少个数小于等于该数
        for (let j = 0; j < matrix.length; j++) {
          if (matrix[i][j] > x) {
            count += j;
            break;
          }
        }
      }
    }
  }
  return count;
}
// var matrix = [[1, 5, 9], [10, 11, 13], [12, 13, 15]];
// var k = 8;
// var matrix = [[-5, -4], [-5, -4]];
// var k = 2;
// var matrix = [[1, 2], [1, 3]];
// var k = 3;
var matrix = [[1, 3, 5], [6, 7, 12], [11, 14, 14]];
var k = 2;
// kthSmallest(matrix,k);
