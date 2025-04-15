var minimumOperations = function(nums) {
    const newSet = new Set(nums);
    if(newSet.size == nums.length) {
        return 0;
    }
    let minIndex = nums.length - 1;
    let checkArr = [nums[nums.length - 1]]
    for(let i = nums.length - 2; i >= 0; i--) {
        if(checkArr.includes(nums[i]) && i == nums.length - 2) {
            break;
        } else if (checkArr.includes(nums[i])) {
            break;
        } else {
            checkArr.push(nums[i])
            minIndex--;
        }
    }
    if(Math.ceil((minIndex) / 3) == 0) {
        return 1
    } else {
        return Math.ceil((minIndex) / 3)
    }

};
