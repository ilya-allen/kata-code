/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
    let prevNumber = nums[0]
    let lengthNeed = nums.length;
    let count = 0;
    for(let i = 0; i < lengthNeed; i++) {
        if (nums[i] >= nums[i + 1]) {
            count++;
            if (count > 1) return false;

            // Check if removing nums[i] works, or removing nums[i+1] works
            if (i > 0 && nums[i - 1] >= nums[i + 1]) {
                if (i + 2 < nums.length && nums[i] >= nums[i + 2]) {
                    return false;
                }
            }
        }
    }
    return count < 2
    
};
