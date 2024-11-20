/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stackArr = [];
    let obj = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    let loopArr = s.split("");
    for (let i = 0; i < loopArr.length; i++) {
        if(Object.hasOwn(obj, loopArr[i])) {
            if(stackArr[stackArr.length - 1] == obj[loopArr[i]] && s.length > 1) {
                stackArr.pop();
            } else {
                return false 
            }
        } else {
            stackArr.push(loopArr[i])
        }
    }
    return stackArr.length == 0
};
