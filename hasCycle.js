/**
 * 判断一个单链表是否有环
 * 
 */
// 给每个已遍历过的节点加标志位，遍历链表，当出现下一个节点已被标志时，则证明单链表有环
function hasCycle(head) {
    while (head) {
        if (head.flag) {
            return true;
        }
        head.flag = true;
        head = head.next
    }
    return false;
}

// 设置快慢两个指针，遍历单链表，快指针一次走两步，慢指针一次走一步，
// 如果单链表中存在环，则快慢指针终会指向同一个节点，否则直到快指针指向 null 时，快慢指针都不可能相遇

function hasCycle2(head) {
    if (!head || !head.next) {
        return false;
    }
    let fast = head.next.next;
    let slow = head;
    while (fast !== slow) {
        if (!fast || !fast.next) {
            return false;
        }
        fast = fast.next.next;
        slow = slow.next;
    }
    return true;
}
