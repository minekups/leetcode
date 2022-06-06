/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let result = 0;
  while(x!=0){
    // result = x%10;
    result = result * 10 + x%10;
    x = ~~(x/10);
    if(result < -2147483648 || result > 2147483647){
      return 0;
    }
  }
  return result;
  // let numStr = x.toString().split('');
  // let left =0
  // let right =numStr.length-1
  // for(let i = 0;i<numStr.length;i++){

  //     if(right>left){
  //         debugger;
  //         let tmp = numStr[right]
  //         numStr[right] =numStr[left]
  //         numStr[left] = tmp
  //         left++
  //         right--
  //     }else{
  //         break
  //     }
  // }
  // let returnStr = '';
  // let strLength = numStr.length;
  // let flag = 1;
  // if(numStr[strLength-1] == '-'){
  //     flag *= -1;
  //     strLength --;
  // }
  // for(let i = 0;i< strLength;i++){
  //     returnStr += numStr[i];
  // }
  // let result = parseInt(returnStr) * flag;
  // if(result < -2147483648 || result > 2147483647){
  //     return 0;
  // }
  // // console.warn(numStr);
  // return parseInt(returnStr) * flag;
};
