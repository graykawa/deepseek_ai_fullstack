/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const n = prices.length;
    let minv = prices[0],maxv = 0;
    for(let i = 1;i < n;i++){
        maxv = Math.max(maxv,prices[i] - minv);
        minv = Math.min(minv,prices[i]);
    }
    return maxv;
};