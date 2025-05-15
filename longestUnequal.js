var getLongestSubsequence = function(words, groups) {
    let prev = groups[0]
    let finalArr = [words[0]];

    for(let i = 1; i < words.length; i++) {
        if(groups[i] !== prev) {
            prev = groups[i];
            finalArr.push(words[i])
        }
    }
    return finalArr

};
