(function() {
    'use strict';
    angular
        .module('instagram', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider) {

	  	$urlRouterProvider.otherwise("/");

	  	$stateProvider
	    .state('home', {
      	url: '/',
      	views: {
      		'main': {
		        templateUrl: '../views/home.html',
		        controller: 'MainController',
		        controllerAs: 'controller'
		      },
		       'navleft': {
		        templateUrl: '../views/partials/navleft.html',
		      },
		      'navright': {
		        templateUrl: '../views/partials/navright.html',
		      },
		  },
		 })  
	    .state('detail', {
      	url: '/detail/:imageid',
      	views: {
      		'main': {
		        templateUrl: '../views/detail.html',
		        controller: 'DetailController',
		        controllerAs: 'controller'
		      },
		       'navleft': {
		        templateUrl: '../views/partials/navleft.html',
		      },
		      'navright': {
		        templateUrl: '../views/partials/navright.html',
		      },
		  },
		 })  
	    .state('add', {
      	url: '/add',
      	views: {
      		'main': {
		        templateUrl: '../views/add.html',
		        controller: 'AddController',
		        controllerAs: 'controller'
		      },
		       'navleft': {
		        templateUrl: '../views/partials/navleft.html',
		      },
		      'navright': {
		        templateUrl: '../views/partials/navright.html',
		      },
		  },
	    });

	});
})();


