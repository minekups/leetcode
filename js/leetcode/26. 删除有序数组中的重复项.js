/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  let first = 0;
  let second = 0;
  let currentNum;
  while (first < nums.length) {
    if (nums[first] !== currentNum) {
      currentNum = nums[first];
      if (first !== second) {
        nums[second] = currentNum;
      }
      second++;
    }
    first++;
  }
  return second;
};
