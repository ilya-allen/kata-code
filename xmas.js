function encode(str) {
  let final = str.split("")
  const kys = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  final.forEach(function(curVal, index) {
    if(kys.includes(curVal.toLowerCase())) {
      final[index] = kys.indexOf(curVal.toLowerCase()) + 1
    }
  })
  return final.join("")
}
