//Structure and example
var commandPattern = (function(){
  var commandSet = {
    doSomething: function(arg1, arg2) {
      return "This is argument 1 "+ arg1 + "and this is arg 2 "+ arg2;
    },
    doSomethingElse: function(arg3) {
      return "This is arg 3 "+arg3;
    },
    executeCommands: function(name) {
      return commandSet[name] && commandSet[name].apply( commandSet, [].slice.call(arguments, 1) );
    }
  }
  return commandSet;
  
})();

commandPattern.executeCommands( "doSomethingElse", "Ferrari", "14523" );
commandPattern.executeCommands( "doSomething", "Ford Mondeo", "54323" );
