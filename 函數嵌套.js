function zero(a) { return a ? a(0) : 0 }
function one(a) { return a ? a(1) : 1 }
function two(a) { return a ? a(2) : 2 }
function three(a) { return a ? a(3) : 3 }
function four(a) { return a ? a(4) : 4 }
function five(a) { return a ? a(5) : 5 }
function six(a) { return a ? a(6) : 6 }
function seven(a) { return a ? a(7) : 7 }
function eight(a) { return a ? a(8) : 8 }
function nine(a) { return a ? a(9) : 9 }

function plus(a){
  return function(b){
    return a+b
  }
}

function minus(a) {
  return function (b) {
    return b-a
  }
}
function times(a) {
  return function (b) {
    return a * b
  }
}
function dividedBy(a) {
  return function (b) {
    return b/a
  }
}

var n = function (digit) {
  return function (op) {
    return op ? op(digit) : digit;
  }
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) { return function (l) { return l + r; }; }
function minus(r) { return function (l) { return l - r; }; }
function times(r) { return function (l) { return l * r; }; }
function dividedBy(r) { return function (l) { return l / r; }; }