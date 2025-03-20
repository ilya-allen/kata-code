/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let maxNum = Math.max(...nums); 
    let countArr = new Array(maxNum + 1).fill(0); 
    let prefixSumArr = new Array(maxNum + 1).fill(0);

    // Step 1: Count occurrences of each number
    for (let num of nums) {
        countArr[num]++;
    }

    // Step 2: Compute prefix sum to get count of numbers smaller than current
    for (let i = 1; i <= maxNum; i++) {
        prefixSumArr[i] = prefixSumArr[i - 1] + countArr[i - 1];
    }

    // Step 3: Map results using prefix sum array
    return nums.map(num => prefixSumArr[num]);
};
