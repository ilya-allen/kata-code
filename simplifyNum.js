function simplify(number){
  let numString = (String(number)).split("");
  let finalString = [];
  for(let i = 0; i < numString.length - 1; i++) {
    if(numString[i] !== '0') {
      let count = 10 ** (numString.length - 1 - i);
      finalString.push(`${numString[i]}*${count}`);
    }
  }
  if(numString[numString.length - 1] !== '0') {
    finalString.push(numString[numString.length - 1])
  }
  return finalString.join("+")
}
