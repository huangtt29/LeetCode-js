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
    // �����Ͻǿ�ʼ, �Ƚ�target �� matrix[i][j]��ֵ. ���С��target, ����в������д���,  ����i++;
    // �������target, ����в������д���, ����j--. �����߽�������þ��󲻺�target.
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