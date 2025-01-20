var moveZeroes = function(nums) {
    let lastNonI = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            nums[lastNonI] = nums[i];
            lastNonI += 1;
        }
    }
    for(let i = lastNonI; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums
};
