var containsDuplicate = function(nums) {
    const bunda = new Set([...nums]);
    if(bunda.size < nums.length) {
        return true
    } else {
        return false
    }
};
