var majorityElement = function(nums) {
    let obj = {};
    for(let i = 0; i < nums.length; i++) {
        if(Object.hasOwn(obj, nums[i])) {
            obj[nums[i]] += 1;
        } else {
            obj[nums[i]] = 1;
        }
    }
    let vals = Object.values(obj)
    let maxNum = Math.max(...vals)    
    return Number(Object.keys(obj)[Object.values(obj).indexOf(maxNum)])
};
