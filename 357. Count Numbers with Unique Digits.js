/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    if(n===0) return 1;
    if(n===1) return 10;
    var res=10,count,num;
    // i��λ������һλ����Ϊ0�����Ե�һλ��9�п��ܣ��ڶ�λҲ��9�֣�����0��������λΪ8���Դ�����
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