/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {
    let count = 0;
    let prevNum = s[0];
    if(prevNum == 1) {
        count++;
    }
    for(let i = 1; i < s.length; i++) {
        if(prevNum == 1) {
            if(Number(s[i]) == 1) {

            } else {
                prevNum = 0;
            }
        } else {
            if(Number(s[i]) == 1) {
                prevNum = 1
                count++;
            } else {
                prevNum = 0;
            }
        }

    }
    
    return count < 2
};
