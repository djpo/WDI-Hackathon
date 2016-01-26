var app = angular.module('PetApp', ['ngRoute', 'LostCtrls', 'FoundCtrls']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider){
	$routeProvider.when('/', {
		templateUrl: 'app/views/home.html'
	}).when('/lost', {
		templateUrl: 'app/views/lost.html',
		controller: 'LostCtrl'
	}).when('/lost/new', {
    templateUrl: 'app/views/newLost.html',
    controller: 'NewLostCtrl'
  }).when('/lost/:id', {
    templateUrl: 'app/views/lostShow.html',
    controller: 'LostShowCtrl'
  }).when('/found', {
		templateUrl: 'app/views/found.html',
		controller: 'FoundCtrl'
	}).when('/found/new', {
    templateUrl: 'app/views/newFound.html',
    controller: 'NewFoundCtrl'
  }).when('/found/:id', {
    templateUrl: 'app/views/foundShow.html',
    controller: 'FoundShowCtrl'
  }).otherwise({
		templateUrl: 'app/views/404.html'
	});

	$locationProvider.html5Mode(true);
}]);