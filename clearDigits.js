var clearDigits = function(s) {
    let stackDig = [];
    let str = s.split("")
    for(let i = 0; i < s.length; i++) {
        if(isNaN(str[i]) == true) {
            stackDig.push(i)
        } else {
            str[i] = ''
            str[stackDig[stackDig.length - 1]] = ''
            stackDig.pop();
        }
    }
    return str.join("")
};
