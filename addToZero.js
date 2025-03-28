/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let arr = [];
    let sum = n;
    let pushNeeded = false;
    if(n % 2 !== 0) {
        sum -= 1;
        pushNeeded = true;
    }

    for(let i = sum / 2; i > 0; i--) {
        arr.push(i, -1 * i);
    }

    if(pushNeeded) {
        arr.push(0);
    }

    return arr;
};
