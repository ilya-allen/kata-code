function peteTalk(speech,ok){
  let checker;
  if(ok) {
    checker = ok.join('|').toLowerCase().split('|');
  }
  let speechArr = speech.split(" ");
  let capNeeded = true;
  let affected = false;
  const regex = /[?!.]/;
  const nonAl = /[:;,]/;
  for(let i = 0; i < speechArr.length; i++) {
    let checkVal = speechArr[i]
    speechArr[i] = speechArr[i].toLowerCase();
    if(capNeeded) {
      speechArr[i] = String(speechArr[i]).charAt(0).toUpperCase() + String(speechArr[i]).slice(1);
      capNeeded = false;
      affected = true;
    }
    
    if(speechArr[i].match(regex) || speechArr[i].match(nonAl)) {
      checkVal = checkVal.slice(0, checkVal.length - 1);
    }
    
    if(!checker?.includes(checkVal.toLowerCase()) && speechArr[i].length > 2) {
      let testArr = []
      let curVal = speechArr[i]
      if(i > 0 && affected == false) {
        curVal = curVal.toLowerCase()
      }
      let curValLength = curVal.length;
      // Check for special characters
      if(regex.test(curVal) && nonAl.test(curVal) == false) {
        testArr.push(''.padEnd(speechArr[i].length - 3, '*'))
        testArr.push(curVal[curValLength - 2])
        testArr.push(curVal[curValLength - 1])
        capNeeded = true;
      } else if (nonAl.test(curVal)) {
        testArr.push(''.padEnd(speechArr[i].length - 3, '*'))
        testArr.push(curVal[curValLength - 2])
        testArr.push(curVal[curValLength - 1])
      } else {
        testArr.push(''.padEnd(speechArr[i].length - 2, '*'))
        testArr.push(curVal[curValLength - 1])
      }
      testArr.unshift(curVal[0])
      speechArr[i] = testArr.join('')
    } else {
      let curVal = speechArr[i]
      if(regex.test(curVal)) {
        capNeeded = true;
      }
    }
    
    affected = false;
  }
  return speechArr.join(' ')
}
