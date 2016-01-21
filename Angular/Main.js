angular.module('button', [])

angular.module('button')
	.controller('buttonBob', ['$scope', function($scope){

		$scope.addStuff = function(){
			console.log("this is stuff");
			$scope.hideMe = !$scope.hideMe
			
		}
		$scope.hideMe = true
		
		
		$scope.addStuff1 = function(){
			$scope.hideMe1 = !$scope.hideMe1
		}
		$scope.hideMe1 = true
}])