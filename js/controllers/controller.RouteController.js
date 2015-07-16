app.controller('RouteController', function($scope, $route) {
	$scope.$route = $route;
	$scope.$efp = {"name": null,"address": null, "email": null, "phone": null, "needs": []};
	var update_state = function(new_efp){
		$scope.$efp = new_efp;
	};
});
