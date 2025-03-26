/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    if(s.length !== goal.length) {
        return false;
    } 
    if(s == goal) {
        const setCheck = new Set(s.split(""));
        return setCheck.size < s.length;
    } else {
        let diffCount = [];
        for(let i = 0; i < s.length; i++) {
            if(s[i] !== goal[i]) {
                diffCount.push([s[i], goal[i]])
            }
        }
        return diffCount.length === 2 && diffCount[0].join("") == diffCount[1].reverse().join("")
    }

};
