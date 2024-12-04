/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    let result = [intervals[0]];

    for(let interval of intervals) {
        let el1 = result[result.length - 1][1]
        let s1 = interval[0]
        let el2 = interval[1]
        
        if (el1 >= s1) {
            result[result.length - 1][1] = Math.max(el1, el2);
        } else {
            result.push(interval)
        }
    }
    return result
};
