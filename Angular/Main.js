angular.module('button', [])

angular.module('button')
	.controller('buttonBob', ['$scope', function($scope){

		$scope.addStuff = function(){
			console.log("this is stuff");
			$scope.hideMe = !$scope.hideMe

		}
		$scope.hideMe = true
		$scope.list = [
			{
				name : 'this is number 1.'
			},
			{
				name : 'this is number 2.'
			},
			{
				name : 'this is number 4.'
			},
			
		]
}])