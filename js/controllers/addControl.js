(function() {
    'use strict';
    
    angular
    .module('instagram')
    .controller('AddController', function(API) {
       var vm = this;

       vm.submit = function(){
       	var createPost = API.postImage(vm.form);

       	createPost.then(function(response){
       		console.log(response);
          vm.form = "";
       	})
       }
      
    });
})();
