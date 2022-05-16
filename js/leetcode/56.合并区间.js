/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // 根据第一个值进行排序
  intervalSort(intervals, 0, intervals.length - 1);
  console.warn(intervals);
  // end(0) >= end(last),直接输出[intervals[0]]
  if (intervals[0][1] >= intervals[intervals.length - 1][1]) {
    return [intervals[0]];
  }
  // end(0) < end(last)
  let result = [];
  // let currentEnd = intervals[0][1];

  for (let i = 0; i < intervals.length; i++) {
    // let leftEnd = intervals[i][1];
    let start = i;
    let currentEnd = intervals[i][1];
    for (let j = i + 1; j < intervals.length; j++) {
      i = j;
      // 首先找到end(j) > end(i)的一项，如果end(j) < end(i)，直接找下一项
      if (intervals[j][1] < currentEnd) {
        continue;
      } else {
        if (currentEnd < intervals[j][0]) {
          // end(start) < start(j),push
          result.push(intervals[start][0], currentEnd);
          break;
        } else {
          // end(start) >= start(j),更新currentEnd
          currentEnd = intervals[j][1];
        }
      }
    }
  }


  // let end = intervals[0][1];
  // for (let i = 0; i < intervals.length; i++) {
  //   let leftEnd = intervals[i][1];
  //   end = leftEnd;
  //   for (let index = i + 1; index < intervals.length; index++) {
  //     if (leftEnd >= intervals[index][1]) {
  //       continue;
  //     } else {
  //       i = index;
  //       if (leftEnd >= intervals[index][0]) {
  //         end = intervals[index][1];
  //         continue;
  //       } else {
  //         result.push([intervals[i][0], end]);
  //         break;
  //       }
  //     }
  //
  //   }
  // }
  // if (result.length === 0) {
  //   return [[intervals[0][0], end]];
  // }
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
      }

    } else {
      if (intervals[l][0] > intervals[r][0]) {
        mySort(intervals, l, r);
        index = l;
        flag *= -1;
      } else {
        r--;
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
