/**
 * @param {number[]} stones
 * @return {boolean}
 */
// 使用了Map嵌套Set
// Map的key是stones的值，value是一个Set
// Set中装的是站在这块石头上可以跳跃的步数，他由上一次跳跃的步数计算而来
var canCross = function(stones) {
    var map=new Map();
    var arrive,canGet,stonesLen=stones.length;

    for(var i=0;i<stones.length;i++) {
        map.set(stones[i], new Set());
    }
    map.get(0).add(1);
    var isok=false;
    for( i=0;i<stones.length;i++)
    {
        canGet=map.get(stones[i]);
        canGet.forEach(function (step) {
            arrive=step+stones[i];
            if(arrive===stones[stonesLen-1]) isok=true;

            if(map.has(arrive))
            {
                map.get(arrive).add(step);
                map.get(arrive).add(step+1);
                if(step-1>0) map.get(arrive).add(step-1);
            }
        });

    }
    return isok;
};
