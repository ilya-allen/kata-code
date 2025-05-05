var numEquivDominoPairs = function(dominoes) {
    let map = new Map();
    let count = 0;
    for (let i = 0; i < dominoes.length; i++) {
        let [x, y] = dominoes[i];
        let key = `${Math.min(x, y)}#${Math.max(x, y)}`;
        if(map.has(key)) {
            map.set(key, map.get(key) + 1)
        } else {
            map.set(key, 1)
        }
    }
    for(const val of map.values()) {
        if(val > 1) {
            count += (val * (val - 1)) / 2
        }
    }
    return count
};
