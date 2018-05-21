function initMap() {

    $.get('http://api.open-notify.org/iss-now.json', function (data) {
        var initialLongtitude = parseFloat(data.iss_position.longitude);
        var initialLatitude = parseFloat(data.iss_position.latitude);
        var image = 'images/iss-marker.png';

        var latLng = {
            lat: initialLatitude,
            lng: initialLongtitude
        };

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 3,
            center: latLng
        });

        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            title: 'International Space Station',
            icon: image
        });

        function updateMarker() {
            $.get('http://api.open-notify.org/iss-now.json',
                function(data) {
                    var newLatitude = parseFloat(data.iss_position.latitude);
                    var newLongitude = parseFloat(data.iss_position.longitude);
                    var latLng = new google.maps.LatLng(newLatitude, newLongitude);

                    document.getElementById("out_location").innerHTML = "longitude: " + newLatitude + ", " + "latitude: " + newLongitude;
                    marker.setPosition(latLng);
                }
            );
        };
        
        updateMarker();
        setInterval(updateMarker, 5000);
    });




};