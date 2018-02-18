/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// dp,dp[i][j] 代表s[i]和p[j]相匹配。
// 构建二维数组通过遍历存储s和p的匹配关系，横坐标代表s，纵坐标代表p
var isMatch = function(s, p) {
    var dp=[],slen=s.length,plen=p.length;
    for(var i=0;i<slen+1;i++)
    {
        dp.push(new Array(plen+1));
        for(var j=0;j<plen+1;j++)
        {
            dp[i][j]=false;
        }
    }
   
    dp[0][0]=true;
    for(i=1;i<slen+1;i++)
        dp[i][0]=false;
    
     // p[0.., j - 3, j - 2, j - 1] matches empty iff p[j - 1] is '*' and p[0..j - 3] matches empty
    for(j=1;j<plen+1;j++)
        dp[0][j]= j > 1 && '*' == p[j - 1] && dp[0][j - 2];
    
    for(i=1;i<slen+1;i++)
    {
        for(j=1;j<plen+1;j++)
        {
            if(p[j-1]!=='*')
            {
                dp[i][j]=(s[i-1]===p[j-1] || p[j-1]==='.') && dp[i-1][j-1];
            }
            else
            {
                dp[i][j]=dp[i][j-2] || (s[i - 1] == p[j - 2] || '.' == p[j - 2]) && dp[i - 1][j];
            }
        }
    }
    
    return dp[slen][plen];
};