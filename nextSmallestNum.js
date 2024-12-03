function nextSmaller(n) {
  const arr = Array.from(String(n), Number);
  let maxIndex;
  let temp = 0;
  let changeIndex = -1;
  // finds the change point index
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < temp) {
      changeIndex = i - 1;
      break;
    } else {
      temp = arr[i]
    }
  }
  console.log(changeIndex, arr)
  
}
