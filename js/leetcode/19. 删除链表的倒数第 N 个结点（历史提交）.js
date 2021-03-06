/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let first = head;
  let second = head;
  let temp;
  for(let i = 0;i<n;i++){
    first = first.next;
  }
  if(first == null){
    return head.next;
  }
  while(first != null){
    temp = second;
    first = first.next;
    second = second.next;
  }
  temp.next = second.next;
  return head;
};
