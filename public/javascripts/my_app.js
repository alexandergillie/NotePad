angular.module('myApp', []).
  controller('todoCtrl', ['$scope', '$http',
                              function($scope, $http) {

    $scope.todoInput;
    $scope.confessions = [];

    $scope.add = function(){
	console.log("Poop in my pants");
	$scope.confessions.push($scope.todoInput);
	$scope.todoInput = "";
    };

    $http.get('/user/profile')
        .success(function(data, status, headers, config) {
      $scope.user = data;
      $scope.error = "";
    }).
    error(function(data, status, headers, config) {
      $scope.user = {};
      $scope.error = data;
    });
  }]);
