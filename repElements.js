var replaceElements = function(arr) {
    let max = -1;
    for(let i = arr.length - 1; i >= 0; i--) {
        let temp = arr[i]
        arr[i] = max;
        if(temp > max) {
            max = temp
        }
    }
    return arr
};
