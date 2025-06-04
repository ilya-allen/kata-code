var maximumBags = function(capacity, rocks, additionalRocks) {
    let maxNum = 0;
    for(let i = 0; i < capacity.length; i++) {
        capacity[i] = capacity[i] - rocks[i]
        if(capacity[i] == 0) {
            maxNum++
            capacity[i] = Infinity;
        }
    }
    capacity = capacity.sort((a, b) => a - b)
    for(let i = 0; i < capacity.length; i++) { 
        if(additionalRocks >= capacity[i] && capacity[i] !== Infinity) {
            additionalRocks -= capacity[i];
            maxNum++;
        } else {
            return maxNum
        }
        
    }

    return maxNum
};
