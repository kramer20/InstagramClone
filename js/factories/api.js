(function () {
	'use strict';
	angular
		.module('instagram')
		 .factory('API', function($http) {

		 	function getImage(){
		        var ajaxRequest = $http({
		          method: 'GET',
		          headers:
		          {
		            X_CSRF_TOKEN: 'malorie',
		          },
		          url: 'http://instagramcloneclass.herokuapp.com/images'
		          });

		        return ajaxRequest;
   			}
		 	return {
		 		getImage:getImage,
		 	}

		 
		 });
})();