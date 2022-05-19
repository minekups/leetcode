/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (m, n, k) {
  // 假设x，count 为比x小的数，通过二分查找，找到比x小的数为k
  let l = 1;
  let r = n * m;
  while (l < r) {
    // debugger;
    let x = ~~((l + r) / 2);
    let count = getCount(x, m, n, k);
    if (count >= k) {
      // count > k ,说明右指针偏大，右指针左移到x
      // * 为什么是x
      r = x;
    } else if (count < k) {
      // * 为什么是x+1
      l = x + 1;
    }
  }
  return l;
};

var getCount = function (x, m, n, k) {
  let count = 0;
  for (let i = 1; i <= m; i++) {
    // 获取每一行比小于等于x的个数；取min是因为x极大时，如3*3的乘法表，x为9时，第一行就3个，而非9/1 9个
    let rowCount = Math.min(~~(x / i), n);
    if (rowCount === 0) {
      return count;
    } else {
      count += rowCount;
      if (count >= k) {
        return count;
      }
    }
  }
  return count;
}
// findKthNumber(3,3,5);
