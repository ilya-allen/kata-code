var maxSubArray = function(nums) {
    let maxNum = -Infinity;
    let curSum = 0;
    for(let i = 0; i < nums.length; i++) {
        curSum += nums[i]
        if(curSum > maxNum) {
            maxNum = curSum;
        }
        if(curSum < 0) {
            curSum = 0;
        }
    }
    return maxNum

};
