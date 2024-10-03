function persistence(num) {
  let notSmaller = true
  let total = num;
  let count = 0;
  while (notSmaller) {
    let multi = String(total).split("")
    let check = Number(multi[0]);
    console.log(multi)
    for(let i = 1; i < multi.length; i++) {
      check = check * Number(multi[i])
    }
      
    
    
    if (check < total && multi.length !== 1) {
      total = check
      count++
    } else {
      notSmaller = false
    }
  }
  return count
}
