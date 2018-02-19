/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 一直将左节点push进栈直到null，然后弹出得到该节点值，对其右节点做相同操作
var inorderTraversal = function(root) {
    var stack =[],cur=root,res=[];
   
    while(stack.length!==0 || cur!==null)
    {
       if(cur!==null)
        {
            stack.push(cur);
            cur=cur.left;
        }
        else
        {
            cur=stack.pop();
            res.push(cur.val);
            cur=cur.right;
        }
    }
    return res;
};