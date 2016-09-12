(function () {
	'use strict';
	angular
		.module('instagram')
		 .factory('API', function($http) {

		 	function getImage(){
		        var gettingImage = $http({
		          method: 'GET',
		          headers:
		          {
		            X_CSRF_TOKEN: 'malorie',
		          },
		          url: 'http://instagramcloneclass.herokuapp.com/images'
		          });

		        return gettingImage;
   			}

   			function postImage(data){
		        var postingData = $http({
		          method: 'POST',
		          data: data, 
		          headers:
		          {
		            X_CSRF_TOKEN: 'malorie',
		          },
		          url: 'http://instagramcloneclass.herokuapp.com/image/post'
		          });

		        return postingData;
		    }    

		    function singleImage(id){
		        var getSingle = $http({
		          method: 'GET',
		          headers:
		          {
		            X_CSRF_TOKEN: 'malorie',
		          },
		          url: 'http://instagramcloneclass.herokuapp.com/images/'+id
		          });

		        return getSingle;
		    }

		    function likeImage(id){
		        
		        var data = {
		 			imageid: id,
		 		};

		        var likingImage = $http({
		          method: 'POST',
		          data: data, 
		          headers:
		          {
		            X_CSRF_TOKEN: 'malorie',
		          },
		          url: 'http://instagramcloneclass.herokuapp.com/images/vote'
		          });

		        return likingImage;
		    }  



		 	return {
		 		getImage:getImage,
		 		postImage:postImage,
		 		singleImage:singleImage,
		 		likeImage:likeImage,
		 	};

		 
		 });
})();