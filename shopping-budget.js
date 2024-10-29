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
    let person = key;
    let money = Number(budget[person])
    for (let i = 0; i < value.length; i++) {
      let inc = value[i].slice(value[i].length - 4, value[i].length - 1)
      for (const [ky, val] of Object.entries(itemPrice)) {
        if(ky.includes(inc)) {
          money -= Number(val) * Number(value[i].slice(0, 1))
        }
      }
      finalArr.push([person, `$${money}`, value.join(", ")])
    }
    
    
    
  }
  console.log(finalArr)
  console.log(itemPrice, budget, bought)
  return finalArr
}
