var makeFancyString = function(s) {
    let finalStr = [];
    let prevChar;
    let count = 0;
    for(const str of s) {
        if(prevChar === str) {
            count++
        } else {
            count = 1;
        }

        if(count <= 2) {
            finalStr.push(str)
        }
        prevChar = str;

    }
    return finalStr.join("")
};
