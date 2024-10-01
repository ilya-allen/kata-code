function countRepeats(str) {
  let count = 0;
  str.split("").forEach(function(curVal, index) {
    if (curVal == str[index - 1]) {
      count++;
    } 
  })

  return count;
}
