app.controller('MapController', function($scope) {
	$scope.$watch('$viewContentLoaded', function(){
		var mapOptions = {
			zoom: 12,
			center: { lat:  43.55, lng: -80.115},
			scrollwheel: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}

		map = new google.maps.Map(document.getElementById('locations-map'), mapOptions);
		console.log("Map Initialized");
	});
});
