/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // 中心扩散方式找到回环串
  if (s.length <= 2) {
    if(s[0] == s[1]){
      return s;
    }
    return s[0];
  }
  let maxLength = 0;
  let returnLeft = 0;
  let returnRight = 0;
  // 先找单一中心点的方式
  for (let index = 1; index < s.length; index++) {
    let left = index - 1;
    let right = index + 1;

    // 边界条件： 找到最底端
    while(left >= 0 && right <= s.length) {
      if(s[left] == s[right]){
        if(maxLength < right -left +1){
          maxLength = right -left +1;
          returnLeft = left;
          returnRight = right;
        }
        left -- ;
        right ++;
      } else {
        break;
      }
    }

  }

  // 找中心点为两个点的形式
  for(let index = 1;index < s.length;index ++) {
    // 找到中心点
    if(s[index-1] == s[index]){
      if(maxLength < 2){
        maxLength = 2;
        returnLeft = index -1;
        returnRight = index;
      }
      let left = index -2;
      let right = index +1;
      while(left >= 0 && right <= s.length) {
        if(s[left] == s[right]){
          if(maxLength < right -left +1){
            maxLength = right -left +1;
            returnLeft = left;
            returnRight = right;
          }
          left -- ;
          right ++;
        } else {
          break;
        }
      }
    }
  }
  return s.slice(returnLeft,returnRight+1);

};
