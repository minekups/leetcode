/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  let negative = 1;
  let result = 0;
  let isNumStart = 0;
  let tmp = 0;
  let sign = 0;
  // 去除首尾空格
  s = s.trim();
  for(let i = 0;i<s.length;i++){
    let ascllCode = s[i].charCodeAt();
    // 没有读取到正负号和数字之前，进行判断
    if(!sign && !isNumStart){
      // 读到正负号
      if(ascllCode == 43){
        sign = 1;
        negative = 1;
        continue;
      } else if(ascllCode == 45){
        sign = 1;
        negative = -1;
        continue;
      }
    }
    // 如果读取到数字
    if(ascllCode > 47 && ascllCode<58){
      result = result*10 + ~~s[i];
      tmp = negative * result
      if(tmp > 2147483647 || tmp < -2147483648){
        return tmp > 0 ? 2147483647 : -2147483648;
      }
      isNumStart = 1;
    } else {
      // 如果没有已读取到正负号或者数字后重新读到非数字的串，直接返回
      return negative * result;
    }
  }
  return negative * result;
};
