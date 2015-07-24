app.directive("marker", function(){
	return {
		restrict: 'E',
		require: '^map',
		transclude: true,
		scope: {
			lat: '@lat',
			lng: '@lng',
		},
		controller: function($scope, $attrs){
			$scope.init = function(){
				$scope.marker = new google.maps.Marker({
					position: new google.maps.LatLng($attrs.lat, $attrs.lng)
				});
			}
			$scope.destroy = function(){
				$scope.marker.setMap(null);
				$scope.marker = null;
			}
			$scope.show_info = function(){}
			$scope.hide_info = function(){}
		},
		link: function($scope, element, attr, mapctrl) {
			$scope.init()
			mapctrl.add_marker($scope.marker)
			console.log(element.html())
		}
	};
});