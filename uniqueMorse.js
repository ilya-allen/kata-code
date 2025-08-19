/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morseLetters = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const morseArr = [];
    for(const word of words) {
        let curWord = ""
        for(let i = 0; i < word.length; i++) {
            curWord += morseLetters[alphabet.indexOf(word[i])]
        }
        morseArr.push(curWord);
    }
    const newSet = new Set([...morseArr]);
    return newSet.size;

};
