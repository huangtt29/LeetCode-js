/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    var headNode=new ListNode(-1);
    var l3=headNode;
    var index=l3;
    var carry=0;
    while(l1||l2)
    {
        var res=0;
        if(l1!==null&&l2!==null)
        {
            res=l1.val+l2.val+carry;
            l1=l1.next;
            l2=l2.next;
        }
        else if(l1!==null&&l2===null)
        {
            res=carry+l1.val;
            l1=l1.next;
        }
        else if(l1===null&&l2!==null)
        {
            res=carry+l2.val;
            l2=l2.next;
        }
        
        if(res>=10)
        {
            carry=1;
            res=res-10;
        }
        else carry=0;
        
        var node=new ListNode(res);
        node.next=null;
        
        index.next=node;
        index=node;
        
    }
    
    if(carry)
    {
        var node=new ListNode(carry);
        node.next=null;
        
        index.next=node;
        index=node;
    }
    
    return l3.next;
    
};