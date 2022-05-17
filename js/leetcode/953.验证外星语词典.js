/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  let orderMap = new Map()
  for (let i = 0; i < order.length; i++) {
    orderMap.set(order[i], i);
  }
  for (let i = 0; i < words.length - 1; i++) {
    if (!compareWords(words[i], words[i + 1], orderMap)) {
      return false;
    }
  }
  return true;
};

var compareWords = function (first, second, orderMap) {
  // 加上该判断变慢了，未知原因
  // if(first === second){
  //   return true;
  // }
  let index = 0;
  while (index < first.length && index < second.length) {
    if (orderMap.get(first[index]) < orderMap.get(second[index])) {
      return true;
    } else if (orderMap.get(first[index]) === orderMap.get(second[index])) {
      index++;
    } else {
      return false;
    }
  }
  // 如果前面的字符都相同，但是second的字符小于first字符，则说明非字典序
  if (second.length < first.length) {
    return false;
  }
  return true;
}
