function isValidWalk(walk) {
  var len = walk.length
  if(len != 10){
    return false;
  } else {
    var n=[],s=[],w=[],e=[]
    walk.forEach((item)=>{
      switch(true){
        case item === 'n':
          n.push(1);
          break;
        case item === 's':
          s.push(1);
          break;
        case item === 'w':
          w.push(1);
          break;
        case item === 'e':
          e.push(1);
          break;
      }
    })
  }
  if(n.length === s.length&&w.length === e.length){
    return true
  } else {
    return false
  }
}


function isValidWalk(walk) {
  var dx = 0
  var dy = 0
  var dt = walk.length

  for (var i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n': dy--; break
      case 's': dy++; break
      case 'w': dx--; break
      case 'e': dx++; break
    }
  }

  return dt === 10 && dx === 0 && dy === 0
}