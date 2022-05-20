// 方法一：左闭右闭 特点： ①r = nums.length ②l <= r ③r = mid -1
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let n = nums.length;
  let l = 0;
  let r = n - 1;
  while (l <= r) {
    let mid = l + ((r - l) >> 1);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
};

// 方法二：左闭右开 特点： ①r = nums.length -1  ②l < r ③r = mid
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let n = nums.length;
  let l = 0;
  let r = n;
  while (l < r) {
    let mid = l + ((r - l) >> 1);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return -1;
};
