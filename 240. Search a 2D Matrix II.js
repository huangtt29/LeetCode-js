/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var row=matrix.length;
    if(row===0) return false;
    var col=matrix[0].length;
    var i=0,j=col-1;
    // 从右上角开始, 比较target 和 matrix[i][j]的值. 如果小于target, 则该行不可能有此数,  所以i++;
    // 如果大于target, 则该列不可能有此数, 所以j--. 遇到边界则表明该矩阵不含target.
    while(i<row && j>=0)
    {
            if(matrix[i][j]>target)
            {
                j--;
            }
            else if(matrix[i][j]<target)
            {
                i++;
            }
            else{
                return true;
            }
        console.log(i,j);
    }
    return false;
};