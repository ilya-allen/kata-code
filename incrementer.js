function incrementString (strng) {
  let nums;
  let str;
  let lngth;
  if (isNaN(strng) == false) {
    nums = strng
    lngth = nums.length
    nums = +nums + 1
    nums = String(nums).padStart(lngth, '0')
    return nums
  }
  for(let i = strng.length - 1; i > -1; i--) {
    console.log(Number(strng[i]))
    if(isNaN(strng[i])) {
      nums = strng.slice(i + 1, strng.length)
      str = strng.slice(0, i + 1)
      lngth = nums.length
      nums = +nums + 1
      nums = String(nums).padStart(lngth, '0')
      str = str + nums
      break;
    }
  }
  return str
  
}
