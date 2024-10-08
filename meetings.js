function meeting(s) {
  let unsortedArr = [];
  s.split(';').forEach(function(curVal) {
    let fixedVal = curVal.toLowerCase();
    let pusher = [fixedVal.slice(fixedVal.indexOf(':')+ 1), fixedVal.slice(0, fixedVal.indexOf(':'))]
    unsortedArr.push(pusher)
  })
  unsortedArr = unsortedArr.sort()
  unsortedArr.forEach(function(curVal, index) {
    unsortedArr[index] = `(${curVal[0].toUpperCase()}, ${curVal[1].toUpperCase()})`
  })
  return unsortedArr.join("")

}
