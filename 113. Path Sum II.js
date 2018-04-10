/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
// ���������������дӸ��ڵ㵽Ҷ�ڵ��·��
var pathSum = function(root, sum) {
    let result=[];
    var getPathSum=function (result,root,sum,currentArray) {
        if(root===null) return 0;
        currentArray.push(root.val);
        sum-=root.val;
        if(sum===0 && root.left===null && root.right===null)
        {
            result.push(currentArray);

        }
        else {
            // Array.concat()����һ��������¸���
            getPathSum(result,root.left,sum,currentArray.concat());
            getPathSum(result,root.right,sum,currentArray.concat());
        }
    };
    getPathSum(result,root,sum,[]);
    return result;
};