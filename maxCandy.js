function obtainMaxNumber(arr) {
  let newArr = []
  let curArr = arr;
  let hasDuplicate = true;
  while(hasDuplicate == true) {
    newArr = [];
    for(let i = 0; i < curArr.length; i++) {
      if(newArr.includes(curArr[i])) {
        newArr[newArr.indexOf(curArr[i])] *= 2;
      } else {
        newArr.push(curArr[i])
      }
    }
    hasDuplicate = newArr.some((val, i) => newArr.indexOf(val) !== i);
    curArr = newArr;
  }
  
  
  return Math.max(...newArr)
  
  
}
