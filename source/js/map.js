function initMap() {

    function getCoordinates() {

        $.get(
            "http://api.open-notify.org/iss-now.json",

            function (data) {
                //data = JSON.parse(data);
                //console.log(data);

                var latitude = parseFloat(data.iss_position.latitude);
                var longitude = parseFloat(data.iss_position.longitude);

                //console.log("latitude = " + latitude);
                //console.log("longitude = " + longitude);

                var myLatLng = {
                    lat: latitude,
                    lng: longitude
                };
                //console.log(myLatLng);

                var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 4,
                    center: myLatLng
                });
                
                var image = 'images/iss-marker.png';
                var marker = new google.maps.Marker({
                    position: myLatLng,
                    map: map,
                    title: 'Hello World!',
                    icon: image
                });
                

                document.getElementById("out_location").innerHTML = "longitude: " + longitude + ", " + "latitude: " + latitude;
            }
        );

    };
    getCoordinates();
    setInterval(getCoordinates, 5000);

};