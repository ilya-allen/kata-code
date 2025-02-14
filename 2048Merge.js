
function merge(line) {
  let arr = line
  let arrL = line.length
  function moveArr(val) {
    arr = arr.filter(function(curVal) {
      return curVal > 0
    })
    
    for(let i = arr.length; i < arrL; i++) {
      arr.push(0)
    }
  }
  
  moveArr(line)
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == 0) {
      moveArr(arr)
    }
    
    if(arr[i] == arr[i + 1]) {
      arr[i] *= 2;
      arr[i + 1] = 0;
    } 
  }
  console.log(arr)
  return arr
  
};
