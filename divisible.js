var differenceOfSums = function(n, m) {
    let num1 = 0;
    let num2 = 0;
    for(let i = 1; i < n + 1; i++) {
        if(i % m == 0) {
            num1 += i;
        } else {
            num2 += i;
        }
    }
    return num2 - num1
};
