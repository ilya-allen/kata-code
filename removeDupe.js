var removeDuplicates = function(nums) {
    let swapI = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== nums[i + 1]) {
            nums[swapI] = nums[i];
            swapI++;
        }        
    }
    return swapI
};
