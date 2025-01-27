function pigLatin(string){
  string=string.toLowerCase();
  if (string.search(/[^a-z]/)!=-1) return null;
  pos=string.search(/[aeiou]/)
  if (pos==-1) return string+"ay";
  if (pos==0) return string+"way";
  else return string.slice(pos,string.length)+string.slice(0,pos)+"ay";
}
