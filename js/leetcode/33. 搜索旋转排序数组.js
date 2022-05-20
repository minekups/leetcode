/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let result = {
    index: -1
  }
  binarySearch(nums, target, 0, nums.length - 1, result);
  return result.index;
};

var binarySearch = function (nums, target, left, right, result) {
  if (left > right || result.index !== -1) {
    return;
  }
  if (nums[left] > nums[right]) {
    // 找到非递增的区间，将区域二分
    let mid = left + ((right - left) >> 1);
    binarySearch(nums, target, left, mid, result);
    binarySearch(nums, target, mid + 1, right, result);
  } else {
    // 剪枝，不在区间内没必要进行二分查找
    if (nums[left] <= target && nums[right] >= target) {
      let l = left;
      let r = right;
      while (l <= r) {
        let mid = l + ((r - l) >> 1);
        if (nums[mid] === target) {
          result.index = mid;
          break;
        } else if (nums[mid] > target) {
          r = mid - 1;
        } else {
          l = mid + 1;
        }
      }
    }
  }
}
// search ([4,5,6,7,0,1,2],0)
