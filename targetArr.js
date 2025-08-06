var createTargetArray = function(nums, index) {
    let finalArr = [];
    for (let i = 0; i < nums.length; i++) {
        finalArr.splice(index[i], 0, nums[i]); // ✅ this line replaces the Map logic
    }
    return finalArr;

};
