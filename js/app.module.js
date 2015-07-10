var app = angular.module('farm-to-fork',['ngRoute'])
.config(function($routeProvider){
	$routeProvider
		.when('/', {templateUrl: '/views/landing/landing.view.html'})
		.when('/landing', {templateUrl: '/views/landing/landing.view.html'})
		.when('/locations', {templateUrl: '/views/locations/locations.view.html'})
		.otherwise({templateUrl: '/views/landing/landing.view.html'});
});
