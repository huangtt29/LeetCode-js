/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {

    // sell代表卖出持有股票的利润，不买入第一只股票的利润为0
    var sell=0;
    // own代表买入股票的利润，买入第一只股票的利润为-prices[0]
    var own=-prices[0];
    var tem;
    for(var i=1;i<prices.length;i++)
    {
        tem=own;
        // 买入股票的前提是不持有股票，所以上一次肯定是卖出股票，用上一次卖出股票的利润去买股票
        own=Math.max(own,sell-prices[i]);
        // 卖出股票的前提是持有股票，所以用上一次买入股票的利润加上股票的价格减去手续费
        sell=Math.max(sell,own+prices[i]-fee)
    }
    // 对每只股票都执行买入卖出的动作,根据利润来判断是否要真正执行
    return Math.max(own,sell)
};