/**
 * @param {string} s
 * @return {string}
 */
// dp解法
var longestPalindrome = function(s) {
    var dp=[],len=s.length,maxlen=1,start=0;
    
    for(var i=0;i<len;i++)
    {
        dp.push(new Array(len));
        dp[i][i]=true;
    }
    
    for(var j=1;j<len;j++)
    {
        for( i=0;i<j;i++)
        {
            if(s.charAt(i) === s.charAt(j) &&(dp[i+1][j-1]||j-i===1))
            {
                dp[i][j]=true;
                if(dp[i][j]&&(j-i+1 > maxlen))
                {
                    maxlen=j-i+1;
                    start=i;
                }
                
            }

            
        }
    }
    console.log(start);
    return s.substr(start,maxlen);
};



/**
 * @param {string} s
 * @return {string}
 */
// 寻找中心点,向外寻找回文
var longestPalindrome = function(s) {
    var len=s.length,maxlen=0,s1,s2,res;
    for(var i=0;i<len;i++)
    {
        s1=checkPalindrome(s,i,i);
        s2=checkPalindrome(s,i,i+1);
        if(s1.length>maxlen)
        {
            maxlen=s1.length;
            res=s1;
        }
        if(s2.length>maxlen)
        {
            maxlen=s2.length;
            res=s2;
        }
       
    }
   
    return res;
   
};
var checkPalindrome=function(s,low,high)
{
    while(low>=0&&high<s.length&&s[low]===s[high])
    { 
      
        low--;high++;
    }
    
    return s.substring(low+1,high);
};