// class Solution {
//   public static String reverseVowels(String s) {
//     //定义元音串
//     String vowels = "aeiouAEIOU";
//
//     //定义char数组 -> 用于双指针交换char
//     char[] chars = new char[s.length()];
//     for (int i = 0; i < s.length(); i++) {
//       chars[i] = s.charAt(i);
//     }
//
//     //双指针，分别从头尾遍历，当都获取到元音时，交换char
//     int start = 0;
//     int end = s.length() - 1;
//     while (start < end) {
//       //判断是否为元音
//       while (-1 == vowels.indexOf(s.charAt(start)) && start < end) {
//         start++;
//       }
//       while (-1 == vowels.indexOf(s.charAt(end)) && start < end) {
//         end--;
//       }
//       //交换char
//       char temp = chars[start];
//       chars[start] = chars[end];
//       chars[end] = temp;
//       //重要！交换完成后，需要把头指针向后移动一位，尾指针向前移动一位，防止死循环
//       start++;
//       end--;
//     }
//
//     StringBuffer retureString = new StringBuffer();
//     for(int i = 0;i<s.length();i++){
//       retureString.append(chars[i]);
//     }
//     return retureString.toString();
//   }
// }
