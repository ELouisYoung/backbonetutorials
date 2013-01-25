// Filename: app.js
define([
  'sillythings',
  'jquery',
  'underscore',
  'backbone',
  'router', // Request router.js
], function(sillythings, $, _, Backbone, AppRouter){
  var initr = function(){
    // Pass in our Router module and call it's initialize function
    AppRouter.initialize();
  };

  console.log(sillythings.varxported);
  return {
    initialize: initr
  };
});
