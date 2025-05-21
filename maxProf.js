var maxProfit = function(prices) {
    let sellI = prices.length - 1;
    let prof = 0;
    for(let buyI = prices.length - 1; buyI >= 0; buyI--) {
        let buyVal = prices[buyI];
        let sellVal = prices[sellI];

        if(buyVal - sellVal >= 0) {
            sellI = buyI
        } else {
            let price = sellVal - buyVal;
            prof = Math.max(prof, price)
        }
    }
    return prof
};
