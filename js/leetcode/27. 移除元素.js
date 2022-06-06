/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let index = 0;
  let end = nums.length - 1;
  // 此处一定要是 <= ,防止nums长度为1时，如 nums = [1],val = 1,不进入判断导致无法正确remove
  while (index <= end) {
    debugger;
    if (nums[index] === val) {
      while (end > index && nums[end] === val) {
        end--;
      }
      nums[index] = nums[end];
      end--;
    }
    index++;
  }
  return end + 1;
};
var nums = [3, 2, 2, 3], val = 3;
// removeElement(nums,val);
