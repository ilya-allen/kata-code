function shiftedDiff(first,second){
  let checkArr = second.split("");
  if(first == second) {
    return 0;
  }
  for(let i = 0; i < first.length; i++) {
    let switcher = checkArr[0];
    checkArr.shift();
    checkArr.push(switcher)
    let final = checkArr.join("")
    if(final == first) {
      return i + 1;
    }
  }
  return -1
  
}
