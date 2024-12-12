/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
    for(let i = 0; i < k; i++) {
        let index = gifts.indexOf(Math.max(...gifts));
        let sqr = Math.floor(Math.sqrt(gifts[index]));
        gifts[index] = sqr;
        
    }
    const final = gifts.reduce(function(total, cur) {
        return total + cur
    })

    return final
};
