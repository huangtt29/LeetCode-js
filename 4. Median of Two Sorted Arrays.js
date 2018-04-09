var findMedianSortedArrays = function(nums1, nums2) {
    var len=nums1.length+nums2.length;
    if(len%2===1)
    {
        return findKthNumber(0,nums1,0,nums2,(len+1)/2);
    }
    else
    {
        return (findKthNumber(0,nums1,0,nums2,len/2)+findKthNumber(0,nums1,0,nums2,len/2+1))/2;

    }

};
// k从1开始
// 在两个已排序的数组中寻到第k小的数字
// 每次比较当前两个序列中k/2位置的数，抛弃较小的数列
// 直到k===1 或其中一个序列遍历完
var findKthNumber=function (aStart,nums1,bStart,nums2,k) {

    if(aStart >= nums1.length)
    {
        return nums2[bStart+k-1];
    }
    if(bStart>=nums2.length)
    {
        return nums1[aStart+k-1];
    }
    if(k===1) return Math.min(nums1[aStart],nums2[bStart]);


    var aKey=aStart+parseInt(k/2)-1 >= nums1.length?Number.MAX_VALUE:nums1[aStart+parseInt(k/2)-1];
    var bKey=bStart+parseInt(k/2)-1 >= nums2.length?Number.MAX_VALUE:nums2[bStart+parseInt(k/2)-1];

    if(aKey < bKey)
    {
        return findKthNumber(aStart+parseInt(k/2),nums1,bStart,nums2,k-parseInt(k/2));
    }

    return findKthNumber(aStart,nums1,bStart+parseInt(k/2),nums2,k-parseInt(k/2));
};
