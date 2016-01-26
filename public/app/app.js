var app = angular.module('PetApp', ['ngRoute', 'PetCtrls', 'likeView']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider){
	$routeProvider.when('/', {
		templateUrl: 'app/views/airplanes.html',
		controller: 'HomeCtrl'
	}).when('/airplanes/new', {
    templateUrl: 'app/views/newAirplane.html',
    controller: 'NewAirplaneCtrl'
  }).when('/airplanes/:id', {
    templateUrl: 'app/views/airplaneShow.html',
    controller: 'AirplaneShowCtrl'
  }).otherwise({
		templateUrl: 'app/views/404.html'
	});

	$locationProvider.html5Mode(true);
}]);