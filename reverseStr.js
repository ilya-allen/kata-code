var reverseStr = function(s, k) {
    const strArr = s.split("")
    const finalArr = [];
    let curString = strArr[0];
    if(strArr.length == 1) {
        return curString
    }

    for(let i = 1; i < strArr.length; i++) {
        if(i % (2 * k) === 0) {
            let reverser = curString.slice(0, k);
            reverser = reverser.split("").reverse().join("")
            finalArr.push(reverser)
            finalArr.push(curString.slice(k));
            curString = strArr[i]
        } else {
            curString += strArr[i]
        }

        if(i == strArr.length - 1) {
            let reverser = curString.slice(0, k);
            reverser = reverser.split("").reverse().join("")
            finalArr.push(reverser)
            finalArr.push(curString.slice(k));
            curString = strArr[i]
        }
    }
    return finalArr.join("")
};
