function peopleCount() {

    $.get(
        "http://api.open-notify.org/astros.json",

        function (data) {
            console.log(data.people);

            data['people'].forEach(function (d) {

                if (d['craft'] == "ISS") {

                    $('#out_people').append('<li>' + '<img src="images/person.svg">' + d['name'] + '</li>');
                    
                    $('#total_people').html('Total amount: ' + data.people.length + ' people on ISS');            
                }
            });
        }
    );
};
peopleCount();