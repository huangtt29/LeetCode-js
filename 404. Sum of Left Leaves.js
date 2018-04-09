/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    var sum=0;

    if(root===null) return 0;

    if(root.left)
    {
            // 判断root.left是否是叶子节点=>左叶子节点
        if(root.left.left===null && root.left.right===null)
        {
            sum+=root.left.val;
        }
        else {
                sum+=sumOfLeftLeaves(root.left);
            }
    }
    if(root.right)
    {
        sum+=sumOfLeftLeaves(root.right);
    }

    return sum;
};

