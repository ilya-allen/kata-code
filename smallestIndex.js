var smallestIndex = function(nums) {
    for(let c = 0; c < nums.length; c++) {
        let curNum = nums[c].toString().split("")
        let numSum = 0;
        for(let i = 0; i < curNum.length; i++) {
            numSum += Number(curNum[i]);
            console.log(numSum)
        }
        if(numSum == c) {
            return c
        }
    }
    return -1
};
