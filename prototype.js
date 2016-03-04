//Structure
var obj = {
  name: "My object's name.", 
  objFunc: function () {
    console.log( "Yay! A function!" );
  }
};
// Use Object.create to instantiate a new obj
var newObj = Object.create( obj );
 
// Now we can see that one is a prototype of the other
console.log( newObj.name );

