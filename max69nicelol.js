var maximum69Number  = function(num) {
    let numStr = num.toString().split("");
    for(let i = 0; numStr.length > i; i++) {
        if(numStr[i] !== "9") {
            numStr[i] = "9";
            break;
        }
    }
    return Number(numStr.join(""))
};
