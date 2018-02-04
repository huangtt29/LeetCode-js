/**
 * @param {string} s
 * @return {number}
 */
// map记录字符最新出现的下标
// last记录子串开始的下标
var lengthOfLongestSubstring = function(s) {
    var map=new Map(),maxlen=0,len=0;
    var last=0;
    for(var i=0;i<s.length;i++)
    {
        if(map.has(s[i]))
        {
            last=Math.max(map.get(s[i])+1,last);
            len=i-last+1;
        }
        else
        {
            len++;
            
        }
        map.set(s[i],i);
        if(len>maxlen) maxlen=len;
    }
    return maxlen;
    
};
