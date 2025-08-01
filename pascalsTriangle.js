/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let rowArr = [];
    for(let row = 0; row < numRows; row++) {
        let curArr = [];
        for (let i = 0; i <= row; i++) {
            if (i === 0 || i === row) {
                curArr.push(1);
            } else {
                curArr.push(rowArr[row - 1][i - 1] + rowArr[row - 1][i]);
            }
        }
        rowArr.push(curArr)
    }

    return rowArr
};
