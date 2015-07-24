app.controller('dataController',['$scope', '$http', function($scope, $http){
	$http.get('/test.json')
	.success(function(data, status, headers, config){
		$scope.locations = data.locations
		console.log("success")
	})
	.error(function(data, status, headers, config){
		console.log("fail")
	});
}]);