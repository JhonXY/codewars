function getstar(a) {
  var str = ''
  for (var i = 0; i < a; i++) {
    str = str.concat('*')
  }
  return str
}

function getblock(a) {
  var str = ''
  for (var i = 0; i < a; i++) {
    str = str.concat(' ')
  }
  return str
}

function diamond(n) {
  if (n < 3) {
    return null
  } else if (n % 2 === 0) {
    return null
  } else {
    var sum = parseInt(n / 2)
    var middle = getstar(n)
    var shape = middle
    for (var i = 1; i <= sum; i++) {
      shape = getblock(i) + getstar(n - i * 2) + '\n' + shape + '\n' + getblock(i) + getstar(n - i * 2)
    }
    return shape + '\n'
  }
}


// 短小精悍
function diamond(n) {
  if (n % 2 == 0 || n < 1) return null
  var x = 0, add, diam = line(x, n);
  while ((x += 2) < n) {
    add = line(x / 2, n - x);
    diam = add + diam + add;
  }
  return diam;
}//z.

function repeat(str, x) { return Array(x + 1).join(str); }
function line(spaces, stars) { return repeat(" ", spaces) + repeat("*", stars) + "\n"; }