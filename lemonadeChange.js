/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let five = 0;
    let ten = 0;
    if(bills.length == 1) return false
    for(const bill of bills) {
        if(five < 0 || 0 > ten) return false;
        if(bill == 5) {
            five++;
        } else if (bill == 10) {
            five--;
            ten++;
        } else {
            if(ten > 0 && five > 0) {
                ten--;
                five--;
            } else if (five > 2){
                five -= 3;
            } else {
                return false;
            }
        }
    }
    return true;
};
