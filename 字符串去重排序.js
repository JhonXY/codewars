function longest(s1, s2) {
  function newString(str){
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
      if (newStr.search(str[i]) == -1) // 通过search是否为-1判断新字符串中是否有该字符
        newStr += str[i];
    }
    newStr = newStr.split('').sort().join('') // 字符串排序先拆分成数组
    return newStr;
  }
  if(s1 === s2){
    s1 = newString(s1)
    return s1
  } else {
    var strT = s1 += s2
    strT = newString(strT)
    return strT
  }
}

// 新写法
const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('')