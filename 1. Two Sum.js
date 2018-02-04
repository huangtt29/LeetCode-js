/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hash={};
    for(var i=0;i<nums.length;i++)
    {
        if( typeof hash[nums[i]] !='undefined')
        {
            return [i,hash[nums[i]]];
        }

        hash[target-nums[i]]=i;
    }
};