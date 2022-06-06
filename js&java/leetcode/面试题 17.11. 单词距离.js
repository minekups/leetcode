/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var findClosest = function (words, word1, word2) {
  let length = words.length;
  let index_1, index_2;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === word1) {
      index_1 = i;
      if (index_2 && index_1 - index_2 < length) {
        length = index_1 - index_2;
        if (length === 1) {
          return 1;
        }
        // length = Math.abs(index_2 - index_1) < length ? Math.abs(index_2 - index_1) : length;
      }
    } else if (words[i] === word2) {
      index_2 = i;
      if (index_1 && index_2 - index_1 < length) {
        length = index_2 - index_1;
        if (length === 1) {
          return 1;
        }
        // length = Math.abs(index_2 - index_1) < length ? Math.abs(index_2 - index_1) : length;
      }
    }

  }
  return length;
};


// 进阶题做法
/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var findClosest = function (words, word1, word2) {
  let length = words.length;
  let wordsMap = new Map();
  for (let i = 0; i < length; i++) {
    if (wordsMap.get(words[i])) {
      wordsMap.get(words[i]).push(i);
    } else {
      wordsMap.set(words[i], [i]);
    }
  }
  let wordArray_1 = wordsMap.get(word1);
  let wordArray_2 = wordsMap.get(word2);
  if (!wordArray_1 || !wordArray_2) {
    return length;
  }
  let index_1 = 0;
  let index_2 = 0;
  while (index_1 < wordArray_1.length && index_2 < wordArray_2.length) {
    length = Math.abs(wordArray_1[index_1] - wordArray_2[index_2]) < length ?
      Math.abs(wordArray_1[index_1] - wordArray_2[index_2]) : length;
    if (length === 1) {
      return 1;
    }
    if (wordArray_1[index_1] < wordArray_2[index_2]) {
      index_1++;
    } else {
      index_2++;
    }
  }
  return length;
};
var words = ["I", "am", "a", "student", "from", "a", "university", "in", "a", "city"], word1 = "a", word2 = "student";
findClosest(words, word1, word2);
