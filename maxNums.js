var maximumCount = function(nums) {
    if(Number(nums.join("")) == 0) {
        return 0
    }
    if(nums.length == 1) {
        return 1
    }
    let maxArr = [];
    let count = 0;
    let pushed = false;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < 0) {
            count++;
        }

        if (nums[i] > 0) {
            if(pushed == false) {
                maxArr.push(count);
                pushed = true;
            }
            maxArr.push(nums.length - count)
            break;
        } else if (nums[i] == 0 && pushed == false) {
            maxArr.push(count);
            pushed = true;
            count++;
        } else if (nums[i] == 0 && pushed == true) {
            count++;
        }
    }

    if(pushed == false) {
        maxArr.push(count);
    }
    return Math.max(...maxArr)
};
