/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var isnegative=x<0?-1:1;
    x=Math.abs(x);
    while(x%10===0 && x!==0)
    {
        x=parseInt(x/10);
       
    }
    var res=0;
    
    while(x!==0)
    {
        res=res*10+(x%10);
        x=parseInt(x/10);
    }
    if (res >= 2147483648) {
        return 0;
    }
    return res*isnegative;
};