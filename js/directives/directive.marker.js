app.directive("marker", function(){
	return {
		restrict: 'E',
		require: '^map',
		transclude: true,
		scope: {
			lat: '@lat',
			lng: '@lng',
		},
		controller: function($scope, $attrs, $log){
			$log($attrs)
			$scope.marker = new google.maps.Marker({
				position: new google.maps.LatLng($attrs.lat, $attrs.lng)
			});
			$scope.show_info = function(){}
			$scope.hide_info = function(){}
		},
		link: function($scope, element, attrs, mapctrl) {
			console.log(attrs)
			mapctrl.add_marker($scope.marker)
			$scope.marker.setMap(mapctrl.get())
		}
	};
});