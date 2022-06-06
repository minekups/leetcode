// 15.三数之和

var quickSort = function (array, left, right) {
    let l = left
    let r = right
    let flag = 0;
    let index = l;
    while (left < right) {
        if (flag == 0) {
            if (array[right] < array[left]) {
                mySwap(array, left, right);
                flag = 1;
                index = right;
            } else {
                right--;
            }
        }
        if (flag == 1) {
            if (array[right] < array[left]) {
                mySwap(array, left, right);
                flag = 0;
                index = left;
            } else {
                left++;
            }
        }
    }

    if (left > l) {
        quickSort(array, l, index - 1);
    }
    if (left + 1 < r) {
        quickSort(array, index + 1, r)
    }
    return array;
}

var mySwap = function (array, left, right) {
    let tmp = array[left];
    array[left] = array[right];
    array[right] = tmp;
    return array;
}

// var myArray = [30, 40, 60, 10, 20, 50]

// var myArray = [-1, 0, 1, 2, -1, -4]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    // 对数组排序
    quickSort(nums, 0, nums.length - 1);
    let lastNum = null;
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] > 0){
            return result;
        }
        debugger;
        if (lastNum == nums[i]) {
            continue;
        }
        let lastLeft;
        let lastRight;

        // 左右指针遍历符合条件的情况
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            // 防止重复push，再次获得相同的数时，跳过
            if (nums[left] == lastLeft) {
                left++;
                continue;
            }
            if (nums[right] == lastRight) {
                right--;
                continue;
            }
            let sum = nums[i] + nums[left] + nums[right];
            if (sum == 0) {
                result.push([nums[i], nums[left], nums[right]]);
                lastLeft = nums[left];
                lastRight = nums[right];
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
        lastNum = nums[i];
    }
    return result;
}

