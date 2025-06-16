var maximumDifference = function(nums) {
    let maxNum = -1;
    let largeNum = nums[nums.length - 1]
    for(let i = nums.length - 2; i >= 0; i--) {
        if(nums[i] < largeNum) {
            maxNum = Math.max(maxNum, largeNum - nums[i])
        } else if (nums[i] > largeNum) {
            largeNum = nums[i]
        }
    }
    return maxNum
};
