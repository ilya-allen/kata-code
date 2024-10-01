function hasPermission(db,cat) {
  let permObj = {}
  db.forEach(function(curVal) {
    let indexOf_ = curVal.indexOf('_')
    console.log(curVal.slice(0, indexOf_), curVal.slice(indexOf_ + 1, curVal.length), ' first tezt', cat, db)
    permObj[curVal.slice(0, indexOf_)] = curVal.slice(indexOf_ + 1, curVal.length)
  })
  
  console.log(permObj, cat)
  if (permObj.hasOwnProperty(cat)) {
    console.log('specific')
    if(permObj[cat] == 'allow') {
      return true
    } else {
      return false
    } 
  } else if (permObj.hasOwnProperty('*')) {
    console.log('all')
    if(permObj['*'] == 'allow') {
      return true
    } else {
      return false
    }
  } else {
    console.log('all else')
    return false
  }


}
