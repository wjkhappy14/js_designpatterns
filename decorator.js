//Structure 
function aA () {
  this.a = function() { return 'a'; }
}

function describeA ( anA ) {
  var aa = anA.a();

  anA.a = function () {
    return 'An "' + aa + '" is the first alphabet in English and the most important one.'
  }
}

var anA = new aA();
describeA( anA );
var output = describeA.a();
console.log(output); //'An a is the first alphabet in English and the most important one.'

