var makeEqual = function(words) {
    let wordsArr = words.join("").split("")
    const map = new Map();
    for(const val of wordsArr) {
        if(map.has(val)) {
            map.set(val, map.get(val) + 1);
        } else {
           map.set(val, 1) 
        }
    }
    for (const val of map.values()) {
        if (val % words.length !== 0) {
            return false;
        }
    }
    return true
};
