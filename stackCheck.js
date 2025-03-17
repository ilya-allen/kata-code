var divideArray = function(nums) {
    let stackArr = [];
    for(let i = 0; i < nums.length; i++) {
        if(stackArr.includes(nums[i])) {
            stackArr[stackArr.indexOf(nums[i])] = '';
        } else {
            stackArr.push(nums[i])
        }
    }
    for(let i = 0; i < stackArr.length; i++) {
        if(stackArr[i] !== '') {
            return false;
        }
    }
    return true
};
