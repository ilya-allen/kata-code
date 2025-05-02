var findMaxConsecutiveOnes = function(nums) {
    let maxZeros = 0;
    let curZeros = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 1) {
            curZeros++;
        } else {
            maxZeros = Math.max(maxZeros, curZeros)
            curZeros = 0;
        }
    }
    maxZeros = Math.max(maxZeros, curZeros)
    return maxZeros
};
