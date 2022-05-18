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
  while (l <= r) {
    let count = 0;
    let x = ~~(l + r) / 2;
    for (let i = 1; i <= m; i++) {
      // 如3*3的乘法表，x为9时，第一行就3个，而非9/1 9个
      count += Math.min(~~(x / i),n);
    }
    if (count > k) {
      // count > k ,说明右指针偏大，右指针左移到x
      r = x;
    } else if (count < k) {
      l = x;
    } else {
      return x;
    }
  }
  return l;
};
