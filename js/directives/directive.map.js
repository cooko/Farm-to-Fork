app.directive("map", function(){
	var mapOptions = {
		zoom: 12,
		center: {lat:  43.544823, lng: -80.246863},
		scrollwheel: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	return {
		scope: true,
		transclude: true,
		template: "<div id=map-canvas></div><div ng-transclude></div>",
		controller: function($scope){
			$scope.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

			this.addMarker = function(name, coords, html){
				var infowindow = new google.maps.InfoWindow({
					content: ""
				});
				var marker = new google.maps.Marker({
					map: $scope.map,
					position: new google.maps.LatLng(coords.lat,coords.lng),
					title: name,
					infowindow: html
				});
				google.maps.event.addListener(marker, 'click', function() {
						infowindow.setContent(this.infowindow);
						infowindow.open($scope.map, this);
						$scope.map.setCenter(this.getPosition());
				});
			};
		}
	};
});