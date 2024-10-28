function shoppingCalculation(input) {
  let finalArr = [];
  let itemPrice = {}
  let budget = {};
  let bought = {}
  
  for(let i = 0; i < input.length; i++) {
    let curArr;
    
    if(input[i].includes('is')) {
      curArr = input[i].split(" ");
      itemPrice[curArr[0]] = curArr[2].slice(1, curArr[2].length - 1)
    } else if(input[i].includes('has')) {
      curArr = input[i].split(" ");
      budget[curArr[0]] = curArr[2].slice(1, curArr[2].length - 1)
    } else if(input[i].includes('buys')) {
      curArr = input[i].split(" ");
      if(Object.hasOwn(bought, curArr[0])) {
        bought[curArr[0]].push(curArr[2] + " " + curArr[3].slice(0, curArr[3].length - 1))
      } else {
        bought[curArr[0]] = [curArr[2] + " " + curArr[3].slice(0, curArr[3].length - 1)]
      }
      
    }
    
  }
  for (const [key, value] of Object.entries(bought)) {
    let money = budget[key]
    let curArr = []
    let inc = value.slice(value.length - 4, value.length - 1)
    curArr.push(key)
    for(const [ky, val] of Object.entries(itemPrice)) {
      if(key.includes(inc)) {
        money
      }
    }
    
  }
  console.log(finalArr)
  console.log(itemPrice, budget, bought)
}
