/**
 * @param {number[]} stones
 * @return {boolean}
 */
// ʹ����MapǶ��Set
// Map��key��stones��ֵ��value��һ��Set
// Set��װ����վ�����ʯͷ�Ͽ�����Ծ�Ĳ�����������һ����Ծ�Ĳ����������
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
