/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let max = "";
    for(let i = 0; i < num.length; i++) {
        if(num[i] == num[i-1] && num[i] == num[i+1]) {
            if(Number(num.slice(i-1, i+2)) > Number(max) || max == "") {
                max = num.slice(i-1, i+2)
            } 
        }
    }
    return max
};
