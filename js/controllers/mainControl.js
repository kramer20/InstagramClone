(function() {
    'use strict';
    
    angular
    .module('instagram')
    .controller('MainController', function(API,$timeout) {
       var vm = this;

       var oldPosts = API.getImage();

         oldPosts.then(function(results){
         		var images = results.data.images;

         		var images = images.reverse();

         		vm.images = images;
         });

        vm.likeImage= function(image){

          var like = API.likeImage(image._id);
          
          like.then(function(response){
          console.log(response);
          image.likes ++;
          image.showClick = true;

          $timeout(function(){
            image.showClick = false;

          },400);
            
          });

        };

      });

})();