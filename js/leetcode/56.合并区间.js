/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length < 2) {
    return intervals;
  }
  // 根据第一个值进行排序
  intervalSort(intervals, 0, intervals.length - 1);

  // end(0) < end(last)
  let result = [];
  let start = 0;
  while (start < intervals.length) {
    let currentStart = intervals[start][0];
    let currentEnd = intervals[start][1];
    if (start === intervals.length - 1) {
      result.push([currentStart, currentEnd]);
      return result;
    }

    for (let end = start + 1; end < intervals.length; end++) {
      start = end;
      if (currentEnd < intervals[end][0]) {
        result.push([currentStart, currentEnd]);
        break;
      } else {
        currentEnd = currentEnd > intervals[end][1] ? currentEnd : intervals[end][1];
      }
      if (end === intervals.length - 1) {
        result.push([currentStart, currentEnd]);
        return result;
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
// merge([[1, 3], [2, 6], [8, 10], [15, 18]])
