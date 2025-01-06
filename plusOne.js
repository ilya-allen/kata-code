/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let sum = Number(digits.join("")) + 1;
    return sum.toString().split('').map(el=>parseInt(el));
};
