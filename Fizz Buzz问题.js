/**
 * @param n: An integer
 * @return: A list of strings.
 */
const fizzBuzz = function (n) {
  var results = [];
  for (var i = 1; i <= n; ++i) {
    if (i % 3 === 0 && i % 5 === 0) {
      results.push("fizz buzz")
    } else if (i % 3 === 0) {
      results.push("fizz")
    } else if (i % 5 === 0) {
      results.push("buzz")
    } else {
      results.push(i + "")
    }
  }
  return results;
}
