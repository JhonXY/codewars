function array_diff(a, b){
  var newArr = []
  b.forEach(i => {
    newArr = a.filter((ele) => {
      return ele != i
    })
  });
}