/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  debugger;
  if( x  < 0){
    return false
  }
  let result = 0;
  let tmp = x;
  while(x!=0){
    result = result * 10 + x%10;
    x = ~~(x/10);
  }
  return result == tmp ? true:false;
};
