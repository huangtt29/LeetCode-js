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
        // circleValue������������������ֵ�����ֵ�ǲ��ܴ��ݵģ�ֻ�����������ֵ�Ƚ�
        var circleValue=root.val+(leftValue>0?leftValue:0)+(rightValue>0?rightValue:0);
        // crossToParentValue�Ǹ������������нϴ��ֵ��ϳɵ�ֵ�����ֵ���Ա�����
        var crossToParentValue=Math.max(root.val,root.val+Math.max(leftValue,rightValue));
        
        maxValue=Math.max(maxValue,circleValue,crossToParentValue);
        
        return crossToParentValue;
    };
    getMaxPath(root);
    return maxValue;
};
