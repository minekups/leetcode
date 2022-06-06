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
var addTwoNumbers = function(l1, l2) {

  function getResult(l1,l2,res){
    if(l1 == null && l2 == null && res ==0){
      return null;
    }

    if(l1 != null){
      res += l1.val;
      l1 = l1.next;
    }
    if(l2 != null){
      res += l2.val;
      l2 = l2.next;
    }

    return new ListNode(res%10,getResult(l1,l2,parseInt(res/10)));
  }

  return getResult(l1,l2,0);

};
