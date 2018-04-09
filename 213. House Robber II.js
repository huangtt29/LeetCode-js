/**
 * @param {number[]} nums
 * @return {number}
 */
// 由于第一个房子和最后一个房子相连
// 所以他们不能同时取
// 将第一个房子和最后一个房子分别刨去，求最大值
var rob = function(nums) {
    var len=nums.length;
    if(len===0) return 0;
    if(len===1) return nums[0];
    return Math.max(getMax(nums.slice(1)),getMax(nums.slice(0,len-1)));
};

function getMax(nums) {
    var len=nums.length;
    var res=[];
    res[0]=nums[0];
    res[1]=Math.max(nums[1],nums[0]);
    for(var i=2;i<len;i++)
    {
        res[i]=Math.max(res[i-2]+nums[i],res[i-1]);
    }
    return res[nums.length-1];
}