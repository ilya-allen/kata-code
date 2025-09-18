var balancedStringSplit = function(s) {
    let total = 0;
    let count = 0;
    if(s[0] == 'R') {
        count++;
    } else {
        count = -1;
    }
    for(let i = 1; i < s.length; i++) {
        if(s[i] == 'R') {
            count++
        } else {
            count--;
        }
        if(count == 0) {
            total++;
        }
    }
    return total
};
