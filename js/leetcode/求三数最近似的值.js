var quickSort = function (nums, left, right) {
    if (left >= right - 1) {
        return nums;
    }
    let l = left;
    let r = right;
    let flag = -1;
    let index = l;// index 不能等于0 ，而应该等于left
    while (left < right) {
        if (nums[left] > nums[right]) {
            mySwap(nums, left, right);
            index = flag < 0 ? right : left;
            flag *= -1;
        }
        if (flag > 0) {
            left++;
        } else {
            right--;
        }
    }
    quickSort(nums, l, index - 1);
    quickSort(nums, index + 1, r);
    return nums;
}

var mySwap = function (nums, left, right) {
    let temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
    return nums;
}

var treeNumsTarget = function (nums, target) {
    if (nums.length < 3 || nums == null) {
        return null;
    }
    quickSort(nums, 0, nums.length - 1);
    if (nums[0] >= target || nums.length == 3) {
        return nums[0] + nums[1] + nums[2];
    }
    if (nums[nums.length - 1] <= target) {
        return nums[nums.length - 1] + nums[nums.length - 2] + nums[nums.length - 3];
    }
    let distance = Number.MAX_VALUE;
    let lastNum;
    let sum;
    for (let i = 0; i < nums.length - 2; i++) {
        if (lastNum == nums[i]) {
            continue;
        }
        let l = i + 1;
        let r = nums.length - 1;
        let lastL;
        let lastR;
        while (l < r) {
            if (nums[l] == lastL) {
                l++;
                continue;
            }
            if (nums[r] == lastR) {
                r--;
                continue;
            }
            let tmp = nums[i] + nums[l] + nums[r];
            let tmpDistance = tmp - target;
            if (tmpDistance == 0) {
                return target;
            } else {
                lastL = l;
                lastR = r;
                if (tmpDistance < 0) {
                    l++;
                } else {
                    r--;
                }
                if (Math.abs(tmpDistance) < distance) {
                    sum = tmp;
                    distance = Math.abs(tmpDistance);
                }
            }
        }
    }
    return sum;
}

var nums = [-1, 2, 1, -4];
var target = 1;