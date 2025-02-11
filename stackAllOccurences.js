var removeOccurrences = function(s, part) {
    let strStack = [];
    for(let i = 0; i < s.length; i++) {
        strStack.push(s[i]);
        if(strStack.length >= part.length) {
            if(strStack.slice(strStack.length - part.length).join("") == part) {
                for(let c = part.length; c !== 0; c--) {
                    strStack.pop();
                }
            }
            
        }
    }
    return strStack.join("")
};
