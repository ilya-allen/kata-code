function longestPalindrome(str) {
  const checkedStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase().split('').sort().join('');
  let finalStr = '';
  let cur = checkedStr[0]
  for(let i = 1; i < checkedStr.length + 1; i++) {
    if(checkedStr[i] == cur[0]) {
      cur += checkedStr[i]; 
    } else {
      if(cur.length % 2 == 0) {
        finalStr += cur
        console.log(cur)
        cur = checkedStr[i]
      } else if (cur.length % 2 !== 0 && cur.length > 2) {
        finalStr += cur.slice(0, cur.length - 1);
        cur = checkedStr[i]
      } else {
        cur = checkedStr[i]
      }
    }
  }
  if(finalStr.length < checkedStr.length) {
    return finalStr.length + 1
  } else {
    return finalStr.length 
  }
}
