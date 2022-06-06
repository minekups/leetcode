/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;
  let minHeight = 0;
  while (left < right) {
    minHeight = height[left] < height[right] ? height[left] : height[right];
    maxArea = (right - left) * minHeight > maxArea ? (right - left) * minHeight :maxArea;
    if(height[left] < height[right]){
      left ++
    } else {
      right --;
    }
  }
  return maxArea;
};
