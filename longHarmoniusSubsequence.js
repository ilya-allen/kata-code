var findLHS = function(nums) {
    let numMap = new Map();
    let diff = [];
    for(const num of nums) {
        if (numMap.get(num)) {
            numMap.set(num, numMap.get(num) + 1);
        } else {
            numMap.set(num, 1);
        }
    }
    let maxLength = 0;
    numMap.forEach((values, keys) => {
        if(numMap.has(keys + 1)) {
            maxLength = Math.max(numMap.get(keys) + numMap.get(keys + 1), maxLength)
        }
    });
    return maxLength
};
