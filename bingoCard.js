function getCard() {
  let finalArr = [];
  const numArr = ['B', 'I', 'N', 'G', 'O'];
  const rangeArr = [[1, 15], [16, 30], [31, 45], [46, 60], [61, 75]]
  for(let i = 0; i < 5; i++) {
    if(i !== 2) {
      for(let count = 0; count < 5; count++) {
        let doesInclude = true;
        while(doesInclude == true) {
          let checkNum = (`${numArr[i]}${Math.floor(Math.random() * (rangeArr[i][1] - rangeArr[i][0])) + rangeArr[i][0]}`);  
          if(finalArr.includes(checkNum) == false) {
            finalArr.push(checkNum)
            doesInclude = false;
          }
        }
      }
    } else {
      for(let count = 0; count < 4; count++) {
        let doesInclude = true;
        while(doesInclude) {
          let checkNum = (`${numArr[i]}${Math.floor(Math.random() * (rangeArr[i][1] - rangeArr[i][0])) + rangeArr[i][0]}`);  
          if(finalArr.includes(checkNum) == false) {
            finalArr.push(checkNum)
            doesInclude = false;
          }
        }      
      }
    }
  }
  return finalArr
}
