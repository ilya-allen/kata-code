/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums == null || nums.length === 0) { 
        return 0; 
    } 
    let numSet = new Set(nums)
    let countArr = [];
    for(let temp of numSet) {
        let count = 1;
        if(!numSet.has(temp - 1)) {
            while(numSet.has(temp + count)) {
                count++;
            }
        }
        countArr.push(count);
    }
    return Math.max(...countArr)
};
