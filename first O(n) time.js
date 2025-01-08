/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let arrMax = [];
    let part1;
    let part2;
    let counter = 0;
    let totalMax = 0;
    let splitPoint;
    if(s.length > 2) {
        for(let i = 0; i < s.length; i++) {
            if(s[i] == '0') {
                counter += 1;
            } else {
                counter -= 1;
            }
            arrMax.push(counter)
        }
        splitPoint =  arrMax.indexOf(Math.max(...arrMax))
        if(splitPoint == arrMax.length - 1) {
            part1 = s.slice(0, splitPoint)
            part2 = s.slice(splitPoint)
        } else {
            part1 = s.slice(0, splitPoint + 1)
            part2 = s.slice(splitPoint + 1)
        }
        
    } else {
        part1 = s[0]
        part2 = s[1]
    }
    

    for(let i = 0; i < part1.length; i++) {
        if(part1[i] == '0') {
            totalMax++;
        }
    }

    for(let i = 0; i < part2.length; i++) {
        if(part2[i] == '1') {
            totalMax++;
        }
    }
    return totalMax
    
};
