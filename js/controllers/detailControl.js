(function() {
    'use strict';
    
    angular
    .module('instagram')
    .controller('DetailController', function(API,$stateParams) {
       var vm = this;
      
     	var singlePost = API.singleImage($stateParams.imageid);

     	singlePost.then(function(results){
     		vm.detail = results.data;
     	})

       }); 

})();