// Implement a method that accepts 3 integer values a, b, c.The method should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a, b, c) {
  var arr = [a, b, c].sort()
  return arr[0] + arr[1] > arr[2] ? true : false;
}

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && c + b > a;
}