/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function(first, second) {
  if(first === second){
    return true;
  }
  if(Math.abs(first.length - second.length) < 2){
    let index_1 = 0;
    let index_2 = 0;
    let count = 0;
    if(first.length === second.length){
      // 替换字符
      while(index_1 < first.length){
        if(first[index_1] !== second[index_2]){
          count++;
          if(count >1){
            return false;
          }
        }
        index_1 ++;
        index_2 ++;
      }
    } else {
      // 插入或删除1个字符
      while(index_1 < first.length){
        if(first[index_1] !== second[index_2]){
          count++;
          // 第二次进来时，要直接return，不要判断字符长度
          if(count >1){
            return false;
          }
          // 插入
          if(first.length < second.length){
            index_2 ++;
            continue;
          } else {
            // 删除
            index_1 ++ ;
            continue;
          }
        }
        index_1 ++;
        index_2 ++;
      }
    }
  } else {
    return false;
  }
  return true;
};
