/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
//ֱ��ģ�⣬����ͬ�еĴ��������У��������
var convert = function(s, numRows) {
    if(numRows===1) return s;
    
    var rows=new Array(numRows);
    for(var i=0;i<numRows;i++)
    {
        rows[i]="";
    }
    
    var row=0;
    var dir=1;;
    for(i=0;i<s.length;i++)
    {
       
        rows[row]+=s[i];
        row+=dir;
        if(row>=numRows)
        {
           dir=-1;
           row=numRows-2;
        }
        
        if(row<0)
        {
            dir=1;
            row=1;
        }
       
      
    }
    var res="";
    for(i=0;i<numRows;i++)
    {
        res+=rows[i];
    }
    return res;
};
