/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let numMap = new Map();
  // 遍历同时，放入map，可完成O(n)复杂度
  for (let i = 0; i < nums.length; i++) {
    debugger;
    let expect = target - nums[i];
    // 注意判断是不是undefined,否则下标为0的无法正常返回
    if (numMap.get(expect) !== undefined) {
      return [numMap.get(expect), i];
    } else {
      numMap.set(nums[i], i);
    }
  }
};
twoSum([2,7,11,15],9)
