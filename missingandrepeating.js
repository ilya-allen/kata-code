/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let numCount = [];
    let finalNum = [];
    let sum = 0;
    for(let i = 0; i < grid.length; i++) {
        for(let count = 0; count < grid[i].length; count++) {
            if(numCount.includes(grid[i][count])) {
                finalNum.push(grid[i][count])
                numCount.push(grid[i][count])
            } else {
                sum += grid[i][count];
                numCount.push(grid[i][count])
            }
            
        }
    }
    finalNum.push((numCount.length / 2) * (1 + (grid.length * grid.length)) - sum)

    return finalNum
};
