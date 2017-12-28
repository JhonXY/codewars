function order(words) {
  var wordsArr = words.split(' ')
  var indexArr = wordsArr.map((ele) => {
    ele = ele.replace(/[^0-9]/ig, "")
    return ele = parseInt(ele)
  })
  var newArr = []
  wordsArr.forEach((ele, index) => {
    newArr[indexArr[index]] = ele
  })
  newArr.shift()
  var fin = newArr.join(' ')
  return fin
}

function order(words) {
  return words.split(' ').sort(function (a, b) {
    return a.match(/\d/) - b.match(/\d/);
  }).join(' ');
}    