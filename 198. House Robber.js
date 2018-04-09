/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var len=nums.length;
    if(len===0) return 0;
    if(len===1) return nums[0];
    var res=[];
    res[0]=nums[0];
    res[1]=Math.max(nums[1],nums[0]);
    for(var i=2;i<len;i++)
    {
        res[i]=Math.max(res[i-2]+nums[i],res[i-1]);
    }
    return res[nums.length-1];
};