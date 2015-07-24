app.directive("map", function(){
	var mapOptions = {
		zoom: 12,
		center: {lat:  43.544823, lng: -80.246863},
		scrollwheel: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	return {
		transclude: true,
		controller: function($scope){
			$scope.markers = []
			$scope.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

			this.add_marker = function(marker){
				marker.setMap($scope.map)
				$scope.markers.push(marker);
			}
			this.clear_all = function(){

			}
			this.get = function(){
				return($scope.map)
			}
		}
	};
});