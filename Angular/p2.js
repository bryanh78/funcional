angular.module('bernie', [])

angular
	.module('bernie')
		.controller('bernieStuff', 
			['$scope', function($scope){

				$scope.askFirst = function(event) {
					// confirm("are you sure")
					if (confirm("are you sure")) {
					console.log('click')
				} else {
					console.log('cclick')
					event.preventDefault();
					
				}
			}











}])