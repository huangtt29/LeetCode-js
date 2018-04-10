/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// parent��������һ��ĸ��ڵ㣬children������һ����ӽڵ�
// parentNode����һ�㸸�ڵ��ֵ
var levelOrder = function(root) {
    if(root === null)  return [];
    var result=[],children=[];
    var parent=[],parentValue=[];
    parent.push(root);
    while(parent.length!==0)
    {
        parentValue=[];
        result.push(parentValue);
        for( node of parent)
        {
            if(node.left !== null) children.push(node.left);
            if(node.right!== null) children.push(node.right);
            parentValue.push(node.val);
        }

        parent=children;
        children=[];
    }
    return result;

};