/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    nums.sort((a, b) => a - b);  // Sort nums in ascending order
    let minAvg = Infinity;
    let n = nums.length;

    for (let i = 0; i < n / 2; i++) {
        let avg = (nums[i] + nums[n - 1 - i]) / 2;
        minAvg = Math.min(minAvg, avg);
    }

    return minAvg;
};
