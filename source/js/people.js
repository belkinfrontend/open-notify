peopleCount();

function peopleCount() {

    $.get(
        "http://api.open-notify.org/astros.json",

        function (data) {
            //data = JSON.parse(data);
            console.log(data.people);

            data['people'].forEach(function (d) {
                $('#people').append('<li>' + d['name'] + '</li>');
            });


            //document.getElementById("out_location").innerHTML = "longitude: " + longitude  + ", " + "latitude: " + latitude;


        }

    );

};