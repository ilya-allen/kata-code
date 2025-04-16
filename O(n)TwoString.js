var checkAlmostEquivalent = function(word1, word2) {
    let obj1 = {};
    let obj2 = {};
    const wordArr1 = word1
    const wordArr2 = word2

    const set1 = new Set(wordArr1);
    const set2 = new Set(wordArr2);
    for(let i = 0; i < wordArr1.length; i++) {
        if(Object.hasOwn(obj1, wordArr1[i])) {
            obj1[wordArr1[i]] += 1;
        } else {
            obj1[wordArr1[i]] = 1;
        }
        if (!set2.has(wordArr1[i])) {
            obj2[wordArr1[i]] = 0;
        }

        if(Object.hasOwn(obj2, wordArr2[i])) {
            obj2[wordArr2[i]] += 1;
        } else {
            obj2[wordArr2[i]] = 1;
        }

        if (!set1.has(wordArr2[i])) {
            obj1[wordArr2[i]] = 0;
        }
    }
   
    const keysCheck1 = Object.keys(obj1);
    for(let i = 0; i < keysCheck1.length; i++) {
      if(Math.abs(obj1[keysCheck1[i]] - obj2[keysCheck1[i]]) > 3) {
        return false
      }
    }

    return true;
};
