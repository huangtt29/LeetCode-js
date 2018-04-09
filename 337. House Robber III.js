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
var rob = function(root) {
    let ans=dfs(root);
    return Math.max(ans[0],ans[1])
};
var dfs=function (root) {
    if(!root) return [0,0];
    var left=dfs(root.left);
    var right=dfs(root.right);
    var ans=[0,0];
    // ans[0]����ýڵ㲻ȡ,ans[1]����ýڵ�ȡ
    // ����ڵ㲻ȡ����ô�ӽڵ��ȡ�ɲ�ȡ
    ans[0]=Math.max(left[0],left[1])+Math.max(right[0],right[1]);
      // ����ڵ�ȡ����ô�ӽڵ㲻��ȡ
    ans[1]=left[0]+right[0]+root.val;
    return ans;
};