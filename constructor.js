//Structure
function a(a,b) {
  this.a = a;
  this.b = b;
}

a.prototype.alpha = function(){
  return this.a;
}

var aA = new a('a','b');
console.log(aA.alpha());//'a';

