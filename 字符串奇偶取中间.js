function getMiddle(s) {
  //   var str = s.substring(0, s.length-2)
  var str = s
  var len = str.length
  if (len % 2 === 0) {
    return str.substring(len / 2 - 1, len / 2 + 1)
  } else {
    var location = Math.ceil(len / 2)
    return str.substring(location - 1, location)
  }
}

function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

function getMiddle(s) {
  var middle = s.length / 2;
  return (s.length % 2)
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1);
}

// 10%3 // 1  10/3  // 3.333
// %是取余数， /就是直接除
// 1.丢弃小数部分, 保留整数部分
//   parseInt(5 / 2)
// 2.向上取整, 有小数就整数部分加1
//   Math.ceil(5 / 2)
// 3, 四舍五入.
//   Math.round(5 / 2)
// 4, 向下取整
//   Math.floor(5 / 2)