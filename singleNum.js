var singleNumber = function(nums) {
    let obj = {}
    nums.forEach(function(curVal) {
        if(Object.hasOwn(obj, curVal)) {
            obj[curVal] += 1;
        } else {
            obj[curVal] = 1;
        }
    })
    return Number(Object.keys(obj)[Object.values(obj).indexOf(1)])

};
