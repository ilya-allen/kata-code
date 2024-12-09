function findNumber(array) {
  let checkArr = new Array(array.length + 1).fill('val')
  array.forEach(function(curVal) {
    checkArr[curVal - 1] = 's'
  })
  return checkArr.indexOf('val') + 1
}
