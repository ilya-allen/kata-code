var isSameAfterReversals = function(num) {
    const word = num.toString()
    if(word[word.length - 1] == '0' && word.length > 1) {
        return false
    } else {
        return true
    }
};
