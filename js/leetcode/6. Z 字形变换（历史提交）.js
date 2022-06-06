/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  // let myArray = [][];
  let returnStr = '';
  let sidewaysNum = numRows -2;
  // 处理numRows为1或2的情况
  if(sidewaysNum < 0 || s.length <= 1){
    return s;
  } else if(sidewaysNum == 0){
    let returnStr2 = ''
    for(let i = 0,j=1;i<s.length || j<s.length;i+=2,j+=2){

      if(s[i] != undefined){
        returnStr += s[i];
      }
      if(s[j]!=undefined){
        returnStr2 += s[j];
      }
    }
    return returnStr + returnStr2;
  }
  debugger;
  // 处理numRows >= 3的情况
  for(let i = 0;i<numRows;i++){
    let startIndex = i;
    let gap = 2 * (numRows - i -1);
    let anOtherGap = 2 * (i) ;
    let flag = 1;
    let currentGap;
    if(startIndex < s.length){
      returnStr += s[startIndex];
    }
    while(startIndex < s.length){

      if(flag > 0){
        // if(gap >0 && startIndex + gap < s.length){
        //     startIndex += gap;
        //     returnStr += s[startIndex];
        // }
        currentGap = gap;
      } else {
        currentGap = anOtherGap;
      }
      startIndex += currentGap;
      if(currentGap > 0 && startIndex < s.length){
        returnStr += s[startIndex];
      }
      // if(flag < 0){
      //     if(anOtherGap > 0 && startIndex + anOtherGap < s.length){
      //         startIndex += anOtherGap;
      //         returnStr += s[startIndex];
      //     }
      // }
      flag *= -1;
    }
  }
  return returnStr;
};
