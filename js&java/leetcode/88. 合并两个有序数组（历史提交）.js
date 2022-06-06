/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  if (n === 0) {
    return nums1;
  }
  if (m === 0) {
    for(let i = 0;i < n;i++){
      nums1[i]  = nums2[i];
    }
    return nums1;
  }
  if (nums1[m - 1] <= nums2[0]) {
    for (let i = 0; i < n; i++) {
      nums1[m + i] = nums2[i];
    }
    return nums1;
  }
  let last = nums1.length - 1;
  // 整合nums1;
  for (let i = 0; i < m; i++) {
    nums1[last - i] = nums1[m - i - 1];
  }
  // console.warn(nums1);
  let index_1 = nums1.length - m;
  let index_2 = 0;
  let index = 0;
  while (index_1 < nums1.length && index_2 < nums2.length) {
    if (nums1[index_1] < nums2[index_2]) {
      nums1[index] = nums1[index_1];
      index_1++;
    } else {
      nums1[index] = nums2[index_2];
      index_2++;
    }
    index++;
  }
  // console.warn(nums1);
  if (index_1 >= last) {
    while (index_2 < n) {
      nums1[index] = nums2[index_2];
      index_2++;
      index++;
    }
  }
  return nums1;
};
