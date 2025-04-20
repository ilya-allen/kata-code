var repeatedNTimes = function(nums) {
    let numArr = [];
    for(let i = 0; i < nums.length; i++) {
        if(numArr.includes(nums[i])) {
            return nums[i]
        } else {
            numArr.push(nums[i])
        }
    }
};
