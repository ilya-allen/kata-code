function tripledouble(num1, num2) {
  let check = [];
  const arr1 = num1.toString().split('').map(Number);
  const arr2 = num2.toString().split('').map(Number);
  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i - 1] == arr1[i] && arr1[i] == arr1[i + 1]) {
      check.push(arr1[i])
    }
  }
  
  if(check !== 's') {
    for(let count = 0; count < check.length; count++) {
      for(let i = 0; i < arr2.length + 1; i++) {
        if(arr2[i - 1] == arr2[i] && arr2[i] == check[count]) {
          return 1
        }
      }  
    }
    
  } else {
    return 0
  }
  return 0
}
