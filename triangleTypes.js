var triangleType = function(nums) {
    let arr = nums;
    let a = arr[0];
    let b = arr[1];
    let c = arr[2];

    if (a + b > c && a + c > b && b + c > a) {
        
    } else {
        return "none"
    }
    
    const numsSet = new Set([...nums])

    if(numsSet.size == 3) {
        return "scalene"
    } else if (numsSet.size == 2) {
        return "isosceles"
    } else if (numsSet.size == 1) {
        return "equilateral"
    } 
};
