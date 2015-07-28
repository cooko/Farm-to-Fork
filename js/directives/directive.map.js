app.directive("map", function(){
	var mapOptions = {
		zoom: 12,
		center: new google.maps.LatLng(43.544823, -80.246863),
		scrollwheel: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	return {
		transclude: true,
		controller: function($scope, $element){
			$scope.markers = []
			$scope.map = new google.maps.Map($element[0], mapOptions);

			this.add_marker = function(marker){
				console.log(marker)
				marker.setMap($scope.map)
				$scope.markers.push(marker);
			}
			this.remove_marker = function(marker){
				marker.setMap(null)
			}
			this.clear_all = function(){

			}
			this.get = function(){
				return($scope.map)
			}
		}
	};
});