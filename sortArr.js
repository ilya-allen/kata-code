var check = function(nums) {
    const uniqueChars = [...new Set(nums)];
    if(uniqueChars.length == 1) {
        return true
    }
    let rotPoint = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > nums[i + 1]) {
            rotPoint++;
            noDupes = true;
        }
    }
    if(nums[nums.length - 1] > nums[0]) {
        rotPoint++;
        noDupes = true;
    }

    if(rotPoint !== 1) {
        return false
    } else {
        return true
    }
};
