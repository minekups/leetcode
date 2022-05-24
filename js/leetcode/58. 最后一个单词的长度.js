/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let index = s.length - 1;
  let length = 0;
  while (index >= 0) {
    if (s[index] === ' ') {
      index--;
    } else {
      break;
    }
  }
  while (index >= 0) {
    if (s[index] !== ' ') {
      length++;
      index--;
    } else {
      return length;
    }
  }
  return length;
};
