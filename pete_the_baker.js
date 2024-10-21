function cakes(recipe, available) {
  const amountNeeded = recipe
  const amount = available
  let final = [];
  for(const property in amountNeeded) {
    console.log(property, amountNeeded[property], amount[property])
    final.push(Math.trunc(amount[property] / Math.trunc(amountNeeded[property])))
  }
  final = final.sort(function(a, b){return a-b})
  if (final[0] > 0) {
    return final[0]
  } else {
    return 0
  }
}
