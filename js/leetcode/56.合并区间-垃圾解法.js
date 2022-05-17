/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if(intervals.length < 2){
    return intervals;
  }
  // 根据第一个值进行排序
  intervalSort(intervals, 0, intervals.length - 1);
  // 整合区间
  intervals = mergeRange(intervals);
  // // end(0) >= end(last),直接输出[intervals[0]] 不可取，如果中间存在一个值 如 [[1,10],[2,11],[3,9]],应输出[[1,11]]而非[[1,10]]
  // if (intervals[0][1] >= intervals[intervals.length - 1][1]) {
  //   return [intervals[0]];
  // }
  // end(0) < end(last)
  let result = [];
  let start = 0;
  while (start < intervals.length) {
    let currentStart = intervals[start][0];
    let currentEnd = intervals[start][1];
    // 当起始位置是最后一个数组时，直接push并退出
    if (start === intervals.length - 1) {
      console.warn(intervals);
      result.push([currentStart, currentEnd]);
      break;
    }
    // 找到end
    for (let index = start + 1; index < intervals.length; index++) {
      // index为最后一个时，push处理，并跳出所有循环
      if (index === intervals.length - 1) {
        if (currentEnd < intervals[index][0]) {
          result.push([currentStart, currentEnd]);
          result.push(intervals[index]);
        } else {
          console.warn(currentEnd);
          console.warn(intervals[index][1]);
          currentEnd = currentEnd > intervals[index][1] ? currentEnd : intervals[index][1];
          result.push([currentStart, currentEnd]);
        }
        // 设置条件跳出最外层循环
        start = intervals.length;
        break;
      } else {
        start = index;
        if (currentEnd < intervals[index][0]) {
          result.push([currentStart, currentEnd]);
          break;
        } else {
          currentEnd = currentEnd > intervals[index][1] ? currentEnd : intervals[index][1];
          if(index === intervals.length -1){
            result.push([currentStart, currentEnd]);
            break;
          }
        }
      }
    }
  }
  return result;

};


var intervalSort = function (intervals, left, right) {
  if (left < 0 || right > intervals.length - 1 || left >= right) {
    return;
  }
  let l = left;
  let r = right;
  let index = l;
  let flag = -1;
  while (l < r) {
    if (flag < 0) {
      if (intervals[l][0] > intervals[r][0]) {
        mySort(intervals, l, r);
        index = r;
        flag *= -1;
      } else {
        l++;
        index = l;
      }

    } else {
      if (intervals[l][0] > intervals[r][0]) {
        mySort(intervals, l, r);
        index = l;
        flag *= -1;
      } else {
        r--;
        index = r;
      }

    }
  }
  intervalSort(intervals, left, index - 1);
  intervalSort(intervals, index + 1, right);
  return intervals;
}

var mySort = function (intervals, l, r) {
  let tmp = intervals[l];
  intervals[l] = intervals[r];
  intervals[r] = tmp;
  return intervals;
}

var mergeRange = function (intervals) {
  // 合并start相等的值的区间
  let newIntervals = [];
  let start = 0;
  while (start < intervals.length) {
    let currentStart = intervals[start][0];
    let currentEnd = intervals[start][1];
    if (start === intervals.length - 1) {
      newIntervals.push([currentStart, currentEnd]);
      break;
    }
    for (let index = start + 1; index < intervals.length; index++) {
      start = index;
      if (intervals[index][0] === currentStart) {
        currentEnd = currentEnd > intervals[index][1] ? currentEnd : intervals[index][1];
        if(index === intervals.length -1){
          newIntervals.push([currentStart, currentEnd]);
          start = intervals.length;
          break;
        }
      } else {
        newIntervals.push([currentStart, currentEnd]);
        break;
      }
    }
  }
  return newIntervals;
}
