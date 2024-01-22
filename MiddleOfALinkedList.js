class ListNode(){
    constructor(){
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function findTheMiddle(head){
    let slow = head;
    let fast = head; 
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
