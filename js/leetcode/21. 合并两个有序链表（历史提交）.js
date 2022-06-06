/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let first = list1;
  let second = list2;
  let head = new ListNode("start", null);
  let currentNode = head;
  while (first != null || second != null) {
    if (first != null && second != null) {
      let node;
      if (first.val < second.val) {
        node = new ListNode(first.val, null);
        first = first.next;
      } else {
        node = new ListNode(second.val, null);
        second = second.next;
      }
      currentNode.next = node;
      currentNode = currentNode.next;
    } else {
      if(first != null) {
        currentNode.next = first;
      } else {
        currentNode.next = second;
      }
      break;
    }
  }
  return head.next;
};
