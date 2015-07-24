app.directive("marker", function(){
	return {
		restrict: 'E',
		transclude: true,
		require: '^map',
		scope: {
			name: '@name',
			lat: '@lat',
			lng: '@lng',
		},
		link: function(scope, element, attr, mapctrl) {
			console.log(element.html())
			mapctrl.addMarker(attr.name, {lat: attr.lat, lng:attr.lng}, element.html())
		}
	};
});