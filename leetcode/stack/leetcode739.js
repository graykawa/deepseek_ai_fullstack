/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const n = temperatures.length;
    const stack = [];
    const res = new Array(n);
    res.fill(0);
    for(let i = 0;i < n;i++){
        while(stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]){
            v = stack.pop();
            res[v] = i - v;
        }
        stack.push(i);
    }
    return res;
};