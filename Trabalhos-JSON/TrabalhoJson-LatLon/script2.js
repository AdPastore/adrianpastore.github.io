var pjson = document.getElementById("json");
function pullposition() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(viewposition);
    }
}

function viewposition(position) {
    pjson.innerHTML= " Latitude :" +position.coords.latitude+ "</br> Longitude: " +position.coords.longitude;
}
pullposition()
