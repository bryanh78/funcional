angular.module("part3", [])

angular.module("part3")
	.controller("part3stuff",
		 ['$scope', function($scope){
		 	$scope.hidden = true
		 	$scope.stuff = function() {
		 		$scope.hidden = !$scope.hidden
		 	}




} ])