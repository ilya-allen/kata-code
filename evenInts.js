/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    let totalNums = 0;
    for(let i = low; i < high + 1; i++) {
        let digArr = (""+i).split("");
        if (digArr.length % 2 == 0) {
            let firstHalf = digArr.splice(0, (digArr.length / 2));
            let secondHalf = digArr.splice((digArr.length / 2) - 1);
            let tot1 = 0;
            let tot2 = 0;
            for(let c = 0; c < firstHalf.length; c++) {
                tot1 += Number(firstHalf[c]);
            }
            for(let c = 0; c < secondHalf.length; c++) {
                tot2 += Number(secondHalf[c]);
            }
            if(tot1 == tot2) {
                totalNums++;
            }
        }
    }

    return totalNums
};
