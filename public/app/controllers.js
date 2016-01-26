var lostCtrls = angular.module('LostCtrls', ['LostServices', 'ngAnimate']);
var foundCtrls = angular.module('FoundCtrls', ['FoundServices', 'ngAnimate']);

lostCtrls.controller('LostCtrl', ['$scope', '$routeParams', 'Lost', function ($scope, $routeParams, Lost){
  $scope.showContainer = true;
	$scope.lost = [];
	$scope.search = {};
  $scope.searchBy = '$';
	Lost.query(function success (data){
		$scope.lost = data;
 	 		$scope.removeItem = function() {
   			$scope.lost.splice($scope.lost.length-1, 1);
  			};
  			$scope.toggleContainer = function() {
    		$scope.showContainer = !$scope.showContainer;
  		}
		console.log(data);
	}, function error (data){
		console.log(data)
	});
}])
.controller('LostShowCtrl', ['$scope', '$routeParams', 'Lost', function ($scope, $routeParams, Lost){
      $scope.lost = {};
      Lost.get(
        {id: $routeParams.lost_id},
        function success(data){
          $scope.lost = data;
        },
        function error(data){
          console.log(data);
        });
    }])
.controller('NewLostCtrl', ['$scope', '$location', 'Lost', function ($scope, $location, Lost) {
      $scope.lost = {
        animal_type: '',
  			breed: '',
  			name: '',
  			color: '',
  			age: '',
  			image: '',
  			location_lost: '',
  			date_lost: '',
  			contact_name: '',
  			contact_email: '',
  			contact_phone: ''
      };

      $scope.createLost = function() {
        console.log($scope.lost);
        Lost.save($scope.lost, function success(data) {
        $location.path('/');
      }, function error(data) {
        console.log(data);
      });
    }
}]);

foundCtrls.controller('FoundCtrl', ['$scope', '$routeParams', 'Found', function ($scope, $routeParams, Found){
  $scope.showContainer = true;
	$scope.found = [];
	$scope.search = {};
  $scope.searchBy = '$';
	Found.query(function success (data){
		$scope.found = data;
 	 		$scope.removeItem = function() {
   			$scope.found.splice($scope.found.length-1, 1);
  			};
  			$scope.toggleContainer = function() {
    		$scope.showContainer = !$scope.showContainer;
  		}
		console.log(data);
	}, function error (data){
		console.log(data)
	});
}])
.controller('FoundShowCtrl', ['$scope', '$routeParams', 'Lost', function ($scope, $routeParams, Found){
      $scope.found = {};
      Found.get(
        {id: $routeParams.id},
        function success(data){
          $scope.found = data;
        },
        function error(data){
          console.log(data);
        });
    }])
.controller('NewFoundCtrl', ['$scope', '$location', 'Found', function ($scope, $location, Found) {
      $scope.found = {
        animal_type: '',
  			breed: '',
  			name: '',
  			color: '',
  			age: '',
  			image: '',
  			location_found: '',
  			date_found: '',
  			contact_name: '',
  			contact_email: '',
  			contact_phone: ''
      };

      $scope.createFound = function() {
        Found.save($scope.found, function success(data) {
        $location.path('/');
      }, function error(data) {
        console.log(data);
      });
    }
}]);