/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var maximum = function(a, b) {
  // return (Math.abs(a-b) + a+b)/2

  // >> 为向右移位（带符号），正数右移31为为0，负数右移31位为 -1
  let k = (a-b)>>31;
  let result1 = (k+1)*a + !(k+1)*b;
  // >>>表示无符号右移，也叫逻辑右移，即若该数为正，则高位补0，而若该数为负数，则右移后高位同样补0。
  // 按二进制形式把所有的数字向右移动对应的位数，低位移出（舍弃），高位的空位补零。
  // 对于正数来说和带符号右移相同，对于负数来说不同。其他结构和>>相似。
  // 如 -1 >>> 31 ,得到为1而非-1
  // ^ 为按位异或， 相同为0 ，不同为1
  let def = (a>>>31) ^ (b>>>31)
  let result2 = ((a>>31) + 1) *a + ((b>>31) +1)*b
  return !def * result1 + def * result2
};
