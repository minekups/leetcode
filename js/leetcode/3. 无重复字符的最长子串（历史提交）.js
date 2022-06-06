/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let currentS = '';
  let index = 0;
  let MaxLength = 0;
  for(let lastIndex = 0;lastIndex < s.length;lastIndex ++){
    index = currentS.indexOf(s[lastIndex]);
    if(-1<index){
      let currentLength = currentS.length;
      MaxLength = MaxLength < currentLength ? currentLength : MaxLength;
      currentS = currentS.slice(index+1);
    }
    currentS += s[lastIndex];
  }
  return MaxLength > currentS.length ? MaxLength:currentS.length;
};
