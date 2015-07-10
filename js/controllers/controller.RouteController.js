app.controller('RouteController', function($scope, $route) {
	$scope.$route = $route;
	$scope.$efp = {"name": "test","address": "test", "email": "test", "phone": "test", "needs": []};
	var update_state = function(new_efp){
		$scope.$efp = new_efp;
	};
});
