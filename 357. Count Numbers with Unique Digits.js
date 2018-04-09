/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    if(n===0) return 1;
    if(n===1) return 10;
    var res=10,count,num;
    // i是位数，第一位不能为0，所以第一位有9中可能，第二位也有9种（包括0），第三位为8，以此类推
    for(var i=2;i<=n;i++)
    {
        count=9;num=9;
        for(var j=i-1;j>0;j--)
        {
            count=count*(num--);
        }
        res+=count;
    }

    return res;
};