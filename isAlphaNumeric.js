function alphanumeric(string){
  let RegEx = /^[a-z0-9]+$/i; 
  let valid = RegEx.test(string);
  return valid
}
