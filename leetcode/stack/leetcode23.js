/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 != 0) return false;
    let stack = []
    for(let i = 0;i < s.length;i++){
        if(s[i] == '(' || s[i] == '[' || s[i] == '{') stack.push(s[i]);
        else
        {
            let v = stack[stack.length - 1];
            if(s[i] == ')' && v == '(')
            {
                stack.pop();
            }else if(s[i] == ']' && v == '[')
            {
                stack.pop();
            }else if(s[i] == '}' && v == '{')
            {
                stack.pop();
            }else
            {
                return false;
            }
        }
    }
    return stack.length == 0 ? true : false;
};