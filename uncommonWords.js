/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    const arr1 = s1.split(" ");
    const arr2 = s2.split(" ");
    const obj = {};
    let finalArr = [];

    for(let i = 0; i < arr1.length; i++) {
        if(Object.hasOwn(obj, arr1[i])) {
            obj[arr1[i]] += 1;
        } else {
           obj[arr1[i]] = 1; 
        }
        
    }
    
    for(let i = 0; i < arr2.length; i++) {
        if(Object.hasOwn(obj, arr2[i])) {
            obj[arr2[i]] += 1;
        } else {
           obj[arr2[i]] = 1; 
        }
        
    }

    for (const [key, value] of Object.entries(obj)) {
        if(value == 1) {
            finalArr.push(key)
        }
    }

    return finalArr
};
