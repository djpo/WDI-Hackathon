var lostServices = angular.module('LostServices', ['ngResource']);
var foundServices = angular.module('FoundServices', ['ngResource']);

lostServices.factory('Lost', ['$resource', function ($resource){
	// return $resource('http://localhost:3000/api/lost/:id');
	return $resource('http://localhost:3000/api/lost/');
}]);

foundServices.factory('Found', ['$resource', function ($resource){
	return $resource('http://localhost:3000/api/found/:id');
}]);