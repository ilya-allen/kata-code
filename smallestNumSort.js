var smallestNumber = function(num) {
    if (num === 0) return 0; // Edge case

    let isNegative = num < 0;
    let digits = Math.abs(num).toString().split('');

    if (isNegative) {
        // Sort in descending order for negative numbers
        let count = new Array(10).fill(0);
        for (let digit of digits) count[digit]++;
        
        let result = "-";
        for (let i = 9; i >= 0; i--) result += i.toString().repeat(count[i]);
        return parseInt(result, 10);
    } else {
        // Sort in ascending order for positive numbers
        let count = new Array(10).fill(0);
        for (let digit of digits) count[digit]++;
        
        let result = "";
        for (let i = 1; i < 10; i++) {
            if (count[i] > 0) {
                result += i;
                count[i]--;
                break;
            }
        }
        for (let i = 0; i < 10; i++) result += i.toString().repeat(count[i]);
        return parseInt(result, 10);
    }
};
