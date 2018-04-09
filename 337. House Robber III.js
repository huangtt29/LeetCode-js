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
    // ans[0]代表该节点不取,ans[1]代表该节点取
    // 这个节点不取，那么子节点可取可不取
    ans[0]=Math.max(left[0],left[1])+Math.max(right[0],right[1]);
      // 这个节点取，那么子节点不能取
    ans[1]=left[0]+right[0]+root.val;
    return ans;
};