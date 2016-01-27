var lostServices = angular.module('LostServices', ['ngResource']);
var foundServices = angular.module('FoundServices', ['ngResource']);

lostServices.factory('Lost', ['$resource', function ($resource){
	return $resource('http://localhost:3000/api/lost/:id');
}]);

foundServices.factory('Found', ['$resource', function ($resource){
	return $resource('http://localhost:3000/api/found/:id');
}]);