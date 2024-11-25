var searchInsert = function(nums, target) {
    let arr = nums
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == target) {
            return i
        } else if (arr[i] > target) {
            return i
        } else if (i == arr.length - 1) {
            return i + 1
        }
    }
};
