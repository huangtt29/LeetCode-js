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
// parent用来保存一层的父节点，children保存这一层的子节点
// parentNode是这一层父节点的值
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