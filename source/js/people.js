function peopleCount() {

    $.get(
        "http://api.open-notify.org/astros.json",

        function (data) {
            //data = JSON.parse(data);
            console.log(data.people);

            data['people'].forEach(function (d) {
                $('#out_people').append('<li>' + '<img src="images/person.svg">' + d['name'] + '</li>');    
            });
            $('#total_people').append('Total amount: ' + data.people.length + ' people on ISS');
        }

    );

};
peopleCount();