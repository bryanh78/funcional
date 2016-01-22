angular.module('bernie', [])

angular
	.module('bernie')
		.controller('bernieStuff', 
			['$scope', function($scope){

				$scope.askFirst = function(event) {
					$scope.hide=false
					if (confirm("are you sure")) {
					console.log('click')
				} else {
					console.log('cclick')
					event.preventDefault();
					$scope.hide=!$scope.hide
				}
			}











}])