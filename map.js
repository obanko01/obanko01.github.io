
	var xhr; 

	function init() {

	var location = new google.maps.LatLng(42.3599611, -71.0567528);
	var mapOptions = {
		zoom: 8, center: location, mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
//create a marker

var marker = new google.maps.Marker({
		position:location,
		title: "Faneuil Hall, Boston, MA"
})
	xhr = new XMLHttpRequest();
	xhr.open("get", "http://mbtamap.herokuapp.com/mapper/rodeo.json", true); // this is possible because of cross-origin resource sharing (CORS) enabled for web application

		// onreadystatechange has to be set to a...
		// ...function when request is completed, to...
		// ...handle the response
	xhr.onreadystatechange = dataReady;
	xhr.send(null); // Go! Execute!
	}

	function dataReady() {
		// The readyState numbers:
		// 0 = not initialized
		// 1 = Set up
		// 2 = Sent
		// 3 = In progress
		// 4 = Complete
		if (xhr.readyState == 4 && xhr.status == 200) {
			scheduleData = JSON.parse(xhr.responseText);
			scheduleDom = document.getElementById("schedule");
			scheduleDom.innerHTML = scheduleData["line"];
		}
		else if (xhr.readyState == 4 && xhr.status == 500) {
			scheduleDom = document.getElementById("schedule");
			scheduleDom.innerHTML = '<p><img src="http://www.yiyinglu.com/failwhale/images/Homer_the_New_Fail_Whale_by_edwheeler.jpg" alt="fail" /></p>';
			
		}
	}