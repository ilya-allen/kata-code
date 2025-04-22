var twoOutOfThree = function(nums1, nums2, nums3) {
    const countMap = new Map();
    let finalArr = [];
    function pushToCount(arr) {
        const unique = new Set(arr)
        for(let num of unique) {
            countMap.set(num, (countMap.get(num) || 0) + 1);
        }
    }

    pushToCount(nums1);
    pushToCount(nums2);
    pushToCount(nums3);

    for(let [num, count] of countMap.entries()) {
        if(count >= 2) {
            finalArr.push(num)
        }
    }
    return finalArr
};
