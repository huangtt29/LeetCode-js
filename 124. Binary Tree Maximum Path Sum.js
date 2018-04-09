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
var maxPathSum = function(root) {
    var maxValue=Number.NEGATIVE_INFINITY;
    var getMaxPath=function(root)
    {
        if(root === null ) return 0;

        var leftValue=getMaxPath(root.left);
        var rightValue=getMaxPath(root.right);
        // circleValue包括根和左右子树的值，这个值是不能传递的，只能用来和最大值比较
        var circleValue=root.val+(leftValue>0?leftValue:0)+(rightValue>0?rightValue:0);
        // crossToParentValue是跟和左右子树中较大的值组合成的值，这个值可以被传递
        var crossToParentValue=Math.max(root.val,root.val+Math.max(leftValue,rightValue));
        
        maxValue=Math.max(maxValue,circleValue,crossToParentValue);
        
        return crossToParentValue;
    };
    getMaxPath(root);
    return maxValue;
};
