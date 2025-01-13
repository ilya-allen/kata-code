function largestSum(arr){
  let bestPosArr = [];
  let curStack = 0;
  for(let i = 0; i < arr.length; i++) {
    let check = curStack;
    check += arr[i]
    if(check < 0) {
      bestPosArr.push(curStack)
      curStack = 0;
    } else {
      curStack = check;
      if(curStack > bestPosArr[bestPosArr.length - 1] || bestPosArr.length == 0) {
        bestPosArr.push(curStack)
      }
    }
  }
  if(bestPosArr.length > 0) {
    return Math.max(...bestPosArr)
  } else {
    return 0
  }
  
}
