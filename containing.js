var findWordsContaining = function(words, x) {
    let finalArr = [];
    for(let i = 0; i < words.length; i++) {
        if(words[i].includes(x)) {
            finalArr.push(i)
        }
    }
    return finalArr
};
