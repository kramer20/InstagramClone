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

        vm.likeImage= function(image){
        var like = API.likeImage(image._id);
          
        like.then(function(response){
        console.log(response);
        image.likes ++;
            
          });

        }


       }); 

})();