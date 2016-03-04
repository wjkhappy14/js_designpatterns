//Structure and Example
var mixins = {
  get: function(){
    console.log( "get this item" );
  },
  set: function(){
    console.log( "set this item" );
  },
  delete: function(){
    console.log( "delete it right away!" );
  }
};
 
// Another skeleton constructor
function aConstructor(){
  this.thatIsAllFolks = function(){ 
    console.log('Nope! I refuse to do anything anymore!!!')
  };
}
 
// Extend both constructors with our Mixin
jQuery.extend( aConstructor.prototype, mixins );
 
// Create a new instance of carAnimator
var myMixinConstructor = new aConstructor();

myMixinConstructor.get(); //get this item
myMixinConstructor.thatIsAllFolks(); //Nope! I refuse to do anything anymore!!!
