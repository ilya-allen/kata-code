let splitNum = function (num) {
    num = num.toString().split('').sort((a, b) => a - b);
    let num1 = '', num2 = '';

    for (let i = 0; i < num.length; i++) {
        if (i % 2) num1 += num[i];
        else num2 += num[i];
    }

    return Number(num1) + Number(num2);
}
