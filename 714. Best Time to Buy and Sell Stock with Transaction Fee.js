/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {

    // sell�����������й�Ʊ�����󣬲������һֻ��Ʊ������Ϊ0
    var sell=0;
    // own���������Ʊ�����������һֻ��Ʊ������Ϊ-prices[0]
    var own=-prices[0];
    var tem;
    for(var i=1;i<prices.length;i++)
    {
        tem=own;
        // �����Ʊ��ǰ���ǲ����й�Ʊ��������һ�ο϶���������Ʊ������һ��������Ʊ������ȥ���Ʊ
        own=Math.max(own,sell-prices[i]);
        // ������Ʊ��ǰ���ǳ��й�Ʊ����������һ�������Ʊ��������Ϲ�Ʊ�ļ۸��ȥ������
        sell=Math.max(sell,own+prices[i]-fee)
    }
    // ��ÿֻ��Ʊ��ִ�����������Ķ���,�����������ж��Ƿ�Ҫ����ִ��
    return Math.max(own,sell)
};