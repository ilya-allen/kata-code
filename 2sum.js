/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map1 = new Map();
    for(let i = 0; i < nums.length; i++) {
        let targetNum = target - nums[i]
        if(map1.has(targetNum)) {
            return [i, map1.get(targetNum)]
        }
        map1.set(nums[i], i)
    }
};
