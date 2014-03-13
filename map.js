//src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=TRUE";
var xhr;
function initialize(){
	var mapOptions = {
		zoom: 8
	};
	map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
	xhr = new XMLHttpRequest();
	//xhr.open("method", "url", asynchronous? true or false);
	xhr.open("GET", "http://mbta.herokuapp.com/mapper/rodeo.json", true);
	//onreadystatechange has to be set to a function when request is completed to handle the response
	xhr.onreadystatechange = dataReady;
	xhr.send(null); //Go! Execute!
}


function dataReady(){
	if (xhr.readystate == 4 && xhr.status == 200){
	console.log("DONE!")
	scheduleData = JSON.parse(xhr.responseText);
	console.log(schedule);
	scheduleDom = document.getElementbyId("map-canvas");
	scheduleDom.innerHTML = scheduleData["line"];}
	//for the assigment can get away with 500 status code else do an "else statement" to catch this error}
}