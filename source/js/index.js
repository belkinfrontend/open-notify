//var config = {
//    iss_api: 'http://api.open-notify.org/iss-now.json',
//    google: google
//
//};
//
//var MKS = {
//
//    init: function (options) {
//        this.map(options.google);
//        this.space(options.iss_api);
//        this.date();
//        this.people()
//    },
//
//    map: function (google) {
//        var myLatLng = {
//            lat: 2,
//            lng: 1.044
//        };
//        console.log(myLatLng);
//
//        debugger;
//        var map = new google.maps.Map(document.getElementById('map'), {
//            zoom: 4,
//            center: myLatLng
//        });
//
//        var marker = new google.maps.Marker({
//            position: myLatLng,
//            map: map,
//            title: 'Hello World!'
//        });
//    },
//
//    space: function (url) {
//        $.get(url,
//            function (data) {
//                //data = JSON.parse(data);
//                console.log(data);
//
//                var latitude = parseFloat(data.iss_position.latitude);
//                var longitude = parseFloat(data.iss_position.longitude);
//
//                console.log("latitude = " + latitude);
//                console.log("longitude = " + longitude);
//
//            this.date()
//                document.getElementById("out_location").innerHTML = "longitude: " + longitude + ", " + "latitude: " + latitude;
//
//            }
//
//        );
//    },
//
//    date: function () {
//        var today = new Date();
//        document.getElementById("out_date").innerHTML = today;
//    },
//
//    people: function () {
//        $.get(
//            "http://api.open-notify.org/astros.json",
//
//            function (data) {
//                //data = JSON.parse(data);
//                console.log(data.people);
//
//                data['people'].forEach(function (d) {
//                    $('#people').append('<li>' + d['name'] + '</li>');
//                });
//
//                //document.getElementById("out_location").innerHTML = "longitude: " + longitude  + ", " + "latitude: " + latitude;
//            }
//        );
//    }
//};
//
//MKS.init()