$(document).ready(function () {

    
    initMap();
    
});

function initMap() {
    alert("init map")
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 6
    });
    var infoWindow = new google.maps.InfoWindow({ map: map });
    console.log("Localizar")
    console.log(navigator.geolocation)
    // Try HTML5 geolocation.
    if (navigator.geolocation != null) {
        alert("navigation")
        navigator.geolocation.getCurrentPosition(function (position) {
            alert("OK")
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            console.log(lat)
            console.log(lng)
            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
        }, function () {
            alert("iok supp")
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        alert("not supp")
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    alert("ERROR!")
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
}