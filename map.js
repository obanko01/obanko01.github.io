src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=TRUE";

function initialize(){
	var mapOptions = {
		center: new google.maps.LatLng(-34.397, 150.644), zoom: 8
	};
		var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
	}
	google.maps.event.addDomListener(window,'load',initialize);
