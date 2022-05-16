var quickSort = function (nums, left, right) {
  // 边界条件
  if (left < 0 || right > nums.length - 1 || left >= right) {
    return;
  }
  let l = left;
  let r = right;
  let index = l;// 起始位置
  let flag = -1;// 指针左移、又移 标志，-1为index在l指针，右移
  while (l < r) {
    if (flag < 0) {
      if (nums[l] > nums[r]) {
        mySort(nums, l, r);
        index = r;
        flag *= -1;
      } else {
        // 此处else不可去掉，否则会l++ 或r--后，有某个值未比较就跳出循环
        l++;
      }

    } else {
      if (nums[l] > nums[r]) {
        mySort(nums, l, r);
        index = l;
        flag *= -1;
      } else {
        // 此处else不可去掉，否则会l++ 或r--后，有某个值未比较就跳出循环
        r--;
      }
    }
  }
  quickSort(nums, left, index - 1);
  quickSort(nums, index + 1, right);
  return nums;
}

var mySort = function (nums, left, right) {
  let tmp = nums[left];
  nums[left] = nums[right];
  nums[right] = tmp;
  return nums;
}
