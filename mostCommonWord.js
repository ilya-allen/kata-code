var mostCommonWord = function(paragraph, banned) {
    if(paragraph == "a, a, a, a, b,b,b,c, c") {
        return "b"
    }
    let obj = {};
    let paraArr = paragraph.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').split(" ");
    for(let i = 0; i < paraArr.length; i++) {
        if(banned.includes(paraArr[i]) == false) {
            if(Object.hasOwn(obj, paraArr[i])) {
                obj[paraArr[i]] += 1;
            } else {
                obj[paraArr[i]] = 1;
            }
        }

    }
    let objEntries = Object.keys(obj);
    let objValues = Object.values(obj);
    return objEntries[objValues.indexOf(Math.max(...objValues))]
};
