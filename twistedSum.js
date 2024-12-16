function twistedSum(n) {
  let total = 0;
  for(let i = 0; i < n + 1; i++) {
    let arr = String(i).split("")
    for(let count = arr.length; count > 0; count--) {
      total += Number(arr[count - 1])
    }
  }
  
  return total
}
