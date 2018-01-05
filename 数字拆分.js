function digital_root(n){
  var arr = String(n).split('')
  var sum = 0
  arr.forEach((ele)=>{
    ele= +ele
    sum+=ele
  })
  if(String(sum).length>1){
    digital_root(sum)
  } else{
    return sum
  }
}