// define([], function(){
//   var varx = 'a string'

//   return {
//     varxported: varx
//   }
// });
//
// no function or dependencies needed if I only need values
define({
  varxported: function(){return 'astring'}.call()
});
