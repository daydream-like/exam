/**
 * reverseList 
 * 将单链表中的每个节点的后继指针指向它的前驱节点即可
 * 当链表为 null 或链表中仅有一个节点时，不需要反转
 */
var reverseList = function (head) {
    var reverseList = function (head) {
        if (!head || !head.next) return head
        var next = head.next
        // 递归反转
        var reverseHead = reverseList(next)
        // 变更指针
        next.next = head
        head.next = null
        return reverseHead
    };
};