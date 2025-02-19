var maxAscendingSum = function(nums) {
    let count = nums[0];
    let final = 0;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] > nums[i - 1]) {
            count += nums[i];
        } else {
            if(count > final) {
                final = count;
            }
            count = nums[i]
        }
    }
    if(count > final) {
        final = count;
    }
    return final
};
