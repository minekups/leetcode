/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;
  let index1 = 0;
  let index2 = 0;
  let count = 0;


  let flag; //判断中位数是在哪个数组上
  debugger;
  while(count < (n+m)/2 && index1 < m && index2 < n){
    if(nums1[index1] < nums2[index2]){
      index1++;
      flag = 1;
    } else {
      index2++;
      flag = 2;
    }
    count++;
  }
  // nums2 被遍历结束且仍未找到中位数
  if(count < (n+m)/2 && index1 < m){
    // 数量为偶数的情况
    if((n+m)%2 == 0){
      return (nums1[(n+m)/2-n-1] + nums1[(n+m)/2-n])/2;
    }
    return nums1[Math.floor((n+m)/2)-n];
  } else if (count < (n+m)/2 && index2 < n){
    // 数量为偶数的情况
    if((n+m)%2 == 0){
      return (nums2[(n+m)/2-m-1] + nums2[(n+m)/2-m])/2;
    }
    return nums2[Math.floor((n+m)/2)-m];
  }
  let result1 = flag == 1 ? nums1[index1-1] : nums2[index2-1];
  if((n+m)%2 == 0){
    if(index1 == m){
      result2 = nums2[index2];
    } else if(index2 == n){
      result2 = nums1[index1];
    } else {
      result2 = nums1[index1] < nums2[index2] ? nums1[index1] : nums2[index2];
    }
    return (result2 + result1)/2
  }
  return result1;


  // let allNums = [];
  // while(index1 < m && index2 < n){
  //     if(nums1[index1] < nums2[index2]){
  //         allNums.push(nums1[index1++]);
  //     } else {
  //         allNums.push(nums2[index2++]);
  //     }
  // }
  // while(index1 < m){
  //     allNums.push(nums1[index1++]);
  // }
  // while(index2 < n){
  //     allNums.push(nums2[index2++]);
  // }

  // if((n+m)%2 == 0){
  //     return (allNums[(n+m)/2-1] + allNums[(n+m)/2])/2
  // }
  // return allNums[parseInt((n+m)/2)];

};
