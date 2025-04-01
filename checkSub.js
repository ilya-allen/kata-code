var isSubstringPresent = function(s) {
    const loopArr = s.split("");
    for(let i = 0; i < loopArr.length - 1; i++) {
        let strTest = [loopArr[i], loopArr[i + 1]]
        if(s.includes(strTest.reverse().join(""))) {
            return true
        }
    }

    return false;
};
