/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const finalArr = [];
    for (let i = left; i <= right; i++) {
        let str = String(i);
        let canReturn = true;

        for (let x = 0; x < str.length; x++) {
            let digit = Number(str[x]);
            if (digit === 0 || i % digit !== 0) {
                canReturn = false;
                break; // stop checking further digits
            }
        }

        if (canReturn) {
            finalArr.push(i);
        }
    }
    return finalArr
};
