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
// һֱ����ڵ�push��ջֱ��null��Ȼ�󵯳��õ��ýڵ�ֵ�������ҽڵ�����ͬ����
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