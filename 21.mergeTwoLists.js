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
 *
  将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
  输入：l1 = [1,2,4], l2 = [1,3,4]
  输出：[1,1,2,3,4,4]
  示例 2：

  输入：l1 = [], l2 = []
  输出：[]
  示例 3：

  输入：l1 = [], l2 = [0]
  输出：[0]

 */
var mergeTwoLists = function (l1, l2) {
  // ! 5
  // * 1.递归
  if (l1 === null) {
    return l2;
  } else if (l2 === null) {
    return l1;
  } else if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }

  // * 2.迭代

  const prevHead = new ListNode(-1);
  let prev = prevHead;

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }

    prev = prev.next;
  }

  prev.next = l1 === null ? l2 : l1;
  return prevHead.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

ListNode.prototype.add = function (num) {
  const listNode = new ListNode(num);
  this.next = listNode;
  return listNode;
};

// let l1 = new ListNode(3);
// l1.add(9);
// console.log(l1)

// let l2 = new ListNode(2);
// l1.add(5);
// console.log(l2)
