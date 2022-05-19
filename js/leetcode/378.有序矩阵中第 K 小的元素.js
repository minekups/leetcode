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
    let result;
    while (l < r) {
      x = ~~((l + r) / 2);
      result = getResult(matrix, x);
      let count = result.count;
      if (count >= k) {
        r = x;
      } else {
        l = x + 1;
      }
    }
    // 找到近似值x，x满足 x >= target
    let indexArray = result.indexArray;
    let distance = matrix[matrix.length - 1][matrix.length - 1];
    let index = 1;
    let target = x;
    for (let i = indexArray[0]; i < matrix.length && index < indexArray.length; i++) {
      let currentNum = matrix[i][indexArray[index++]];
      if (currentNum - x < distance) {
        if (currentNum - x === 0) {
          return x;
        } else {
          distance = currentNum - x;
          target = currentNum;
        }
      }
    }
    return target;
  }
};

var getResult = function (matrix, x) {
  let count = 0;
  let indexArray = new Array();
  debugger;
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] > x) {
      return count;
    } else {
      if (matrix[i][matrix.length - 1] <= x) {
        count += matrix.length;
        indexArray[0] = i + 1;
      } else if (matrix[i][0] <= x && matrix[i][matrix.length - 1] >= x) {
        // 遍历找到有多少个数小于等于该数
        for (let j = 0; j < matrix.length; j++) {
          if (matrix[i][j] > x) {
            indexArray.push(j);
            count += j;
            break;
          }
        }
      }
    }
  }
  console.warn(count);
  return {
    count: count,
    indexArray: indexArray
  };
}
var matrix = [[1, 5, 9], [10, 11, 13], [12, 13, 15]];
var k = 8;
// kthSmallest(matrix, k);
