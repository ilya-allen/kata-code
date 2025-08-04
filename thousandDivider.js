/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    let iLoop = String(n);
    let finalArr = [];
    let counter = 0;
    for(let i = iLoop.length - 1; i >= 0; i--) {
        if(counter % 3 == 0) {
            finalArr.push('.')
        }
        finalArr.push(iLoop[i])
        counter++;
        
    }
    if (finalArr[0] == '.') {
        finalArr.shift();
    }
    return finalArr.reverse().join("");

};
