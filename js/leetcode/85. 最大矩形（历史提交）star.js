/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  if (matrix.length == 0) return 0;

  let res = 0;
  let heights = new Array(matrix[0].length + 1).fill(0); // 开辟空间多添一项0 避免原高度最后一直递增 无法有机会计算
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {  //每一层 高度会有变化：可能继续增1， 可能直接归零
      if(matrix[row][col] == '1' ) heights[col] += 1;
      else heights[col] = 0;
    }// 求出每一层的 heights[] 然后传给84题的函数\U0001f447
    res = Math.max(res, largestRectangleArea(heights)); // 每一层 更新一下最大矩形面积
  }
  return res;
};

let largestRectangleArea = arr => { // 84题 单调递增栈解法
  let stack = [], max = 0;
  for (let [i, val] of arr.entries()) {
    while (stack.length && val < arr[stack.slice(-1)]) {//非单调递增不可入栈 先处理
      let h = arr[stack.pop()];
      let w = stack.length > 0 ? i - stack.slice(-1) - 1 : i;
      max = Math.max(max, h * w); // 更新一下max
    }
    stack.push(i);//注意栈中存放的是下标，弹出的时候才可计算出宽度
  }
  return max;
}
