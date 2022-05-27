/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head = new ListNode(0, null);
  let currentNode = head;
  let lastNum = 0;
  let cNode;
  while (l1 || l2) {
    if (l1 && l2) {
      let node = new ListNode((l1.val + l2.val + lastNum) % 10, null);
      lastNum = ~~((l1.val + l2.val + lastNum) / 10);
      l1 = l1.next;
      l2 = l2.next;
      currentNode.next = node;
      currentNode = node;
    } else {
      if (l1) {

      } else {

      }
      // if(!cNode){
      //   if(l1){
      //     cNode = l1;
      //   } else {
      //     cNode = l2;
      //   }
      // }
      // if(lastNum < 1){
      //   currentNode.next = cNode;
      //   break;
      // } else {
      //   let node = new ListNode((cNode.val + 1)%10,null);
      //   lastNum = ~~((cNode.val + 1)/10);
      //   cNode = cNode.next;
      //   currentNode.next = node;
      //   currentNode = node;
      // }
    }
    // else if (l1) {
    //   if (lastNum < 1) {
    //     currentNode.next = l1;
    //     break;
    //   } else {
    //     let node = new ListNode((l1.val + lastNum) % 10, null);
    //     lastNum = ~~((l1.val + lastNum) / 10);
    //     l1 = l1.next;
    //     currentNode.next = node;
    //     currentNode = node;
    //   }
    // } else if (l2) {
    //   if (lastNum < 1) {
    //     currentNode.next = l2;
    //     break;
    //   } else {
    //     let node = new ListNode((l2.val + lastNum) % 10, null);
    //     lastNum = ~~((l2.val + lastNum) / 10);
    //     l2 = l2.next;
    //     currentNode.next = node;
    //     currentNode = node;
    //   }
    // }
  }
  return head.next;
};

// var getNode = function (l1,l2,num){
//
//   if(l1 === null && l2 === null){
//     return ;
//   }
//   // l1.val =
//
//   return new ListNode((l1.val + l2.val)%10,l1.next,~~((l1.val + l2.val)/10));
// }
