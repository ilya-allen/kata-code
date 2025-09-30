/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let count = 0;
    for(let i = 1; i < nums.length; i++) {
        let prevNum = nums[i - 1]

        if(prevNum - nums[i] >= 0) {
            count += ((prevNum + 1) - nums[i]);
            nums[i] = prevNum + 1;
        }
    }
    return count;
};
