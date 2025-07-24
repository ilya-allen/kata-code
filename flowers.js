var canPlaceFlowers = function(flowerbed, n) {
    let newArr = flowerbed;
    let count = 0;
    if(flowerbed.length == 1 && newArr[0] === 0) {
        count++
    }

    if(newArr[0] === 0 && newArr[1] === 0) {
        newArr[0] = 1;
        count++
    }

    if(newArr[newArr.length - 2] === 0 && newArr[newArr.length - 1] === 0) {
        newArr[newArr.length - 1] = 1;
        count++
    }
    for(let i = 1; i < newArr.length; i++) {
        if(newArr[i-1] === 0 && newArr[i+1] === 0 && newArr[i] !== 1) {
            newArr[i] = 1;
            count++
        }
        if(count == n) {
            return true
        }
    }
    if(count >= n) {
        return true
    }
    console.log(count)
    return false;
};
