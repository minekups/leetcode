/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  if (nums.length < 4) {
    return [];
  }
  let result = [];
  quickSort(nums, 0, nums.length - 1);
  let lastFirstNum;
  for (let currentIndex = 0; currentIndex < nums.length - 3; currentIndex++) {
    if (lastFirstNum == nums[currentIndex]) {
      continue;
    }
    lastFirstNum = nums[currentIndex];
    let currentTarget = target - lastFirstNum;
    let lastSecondNum;
    for (let index = currentIndex + 1; index < nums.length - 2; index++) {
      if (lastSecondNum == nums[index]) {
        continue;
      }
      lastSecondNum = nums[index];
      let left = index + 1;
      let right = nums.length - 1;
      let lastLeftNum;
      let lastRightNum;
      while (left < right) {
        // if (lastLeftNum == nums[left] && lastRightNum == nums[right]) {
        //     left++;
        //     right--;
        //     continue;
        // }
        // if(lastLeftNum == nums[left]){
        //     left
        // }

        let currentSum = lastSecondNum + nums[left] + nums[right];
        if (currentSum == currentTarget) {
          result.push([nums[currentIndex], nums[index], nums[left], nums[right]]);
          lastLeftNum = nums[left];
          lastRightNum = nums[right];
          left++;
          right--;
        } else {
          if (currentSum < currentTarget) {
            left++;
          } else {
            right--;
          }
        }
        while(lastLeftNum == nums[left]){
          left ++;
        }
        while(lastRightNum == nums[right]){
          right--;
        }
      }
    }
  }
  return result;

};

var quickSort = function (nums, left, right) {
  if (left < 0 || right >= nums.length || left >= right) {
    return nums;
  }
  let l = left;
  let r = right;
  let flag = -1;
  let index = l;
  while (l < r) {
    if (flag < 0) {
      if (nums[r] < nums[l]) {
        mySort(nums, l, r);
        flag *= -1;
        index = r;
      } else {
        r--;
      }
    }
    if (flag > 0) {
      if (nums[r] < nums[l]) {
        mySort(nums, l, r);
        flag *= -1;
        index = l;
      } else {
        l++;
      }
    }
  }
  quickSort(nums, left, index - 1);
  quickSort(nums, index + 1, right);
  return nums;
}

var mySort = function (nums, index_1, index_2) {
  let tmp = nums[index_1];
  nums[index_1] = nums[index_2];
  nums[index_2] = tmp;
  return nums;
}


//---------------------------------
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[][]}
//  */
// var fourSum = function (nums, target) {
//   if (nums.length < 4) {
//     return [];
//   }
//   let result = [];
//   quickSort(nums, 0, nums.length - 1);
//   let lastFirstNum;
//   // let lastSecondNum;
//   for (let currentIndex = 0; currentIndex < nums.length - 4; currentIndex++) {
//     if (lastFirstNum == nums[currentIndex]) {
//       continue;
//     }
//     lastFirstNum = nums[currentIndex];
//     let currentTarget = target - lastFirstNum;
//     let lastSecondNum;
//     for (let index = currentIndex + 1; index < nums.length - 3; index++) {
//       if (lastSecondNum == nums[index]) {
//         continue;
//       }
//       lastSecondNum = nums[index];
//       let left = index + 1;
//       let right = nums.length - 1;
//       let lastLeftNum;
//       let lastRightNum;
//       while (left < right) {
//         if (lastLeftNum == nums[left] && lastRightNum == nums[right]) {
//           left++;
//           right--;
//           continue;
//         }
//         lastLeftNum = nums[left];
//         lastRightNum = nums[right];
//         let currentSum = lastSecondNum + lastLeftNum + lastRightNum;
//         if (currentSum == currentTarget) {
//           result.push([nums[currentIndex], nums[index], nums[left], nums[right]]);
//           left++;
//           right--;
//         } else {
//           if (currentSum < currentTarget) {
//             left++;
//           } else {
//             right--;
//           }
//         }
//       }
//     }
//   }
//   return result;
//
// };
//
// var quickSort = function (nums, left, right) {
//   if (left < 0 || right >= nums.length || left >= right) {
//     return nums;
//   }
//   let l = left;
//   let r = right;
//   let flag = -1;
//   let index = l;
//   while (l < r) {
//     if (flag < 0) {
//       if (nums[r] < nums[l]) {
//         mySort(nums, l, r);
//         flag *= -1;
//         index = r;
//       } else {
//         r--;
//       }
//     }
//     if (flag > 0) {
//       if (nums[r] < nums[l]) {
//         mySort(nums, l, r);
//         flag *= -1;
//         index = l;
//       } else {
//         l++;
//       }
//     }
//   }
//   quickSort(nums, left, index - 1);
//   quickSort(nums, index + 1, right);
//   return nums;
// }
//
// var mySort = function (nums, index_1, index_2) {
//   let tmp = nums[index_1];
//   nums[index_1] = nums[index_2];
//   nums[index_2] = tmp;
//   return nums;
// }
