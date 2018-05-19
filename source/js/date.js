var today = new Date();

//document.getElementById("out_date").innerHTML = today;

// get weekday
var day=new Date();
var weekday=new Array(7);
weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";



// get time
var timerId;

    function update() {
      var clock = document.getElementById('out_time');
      var date = new Date();

      var hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
      clock.children[0].innerHTML = hours;

      var minutes = date.getMinutes();
      if (minutes < 10) minutes = '0' + minutes;
      clock.children[1].innerHTML = minutes;

      var seconds = date.getSeconds();
      if (seconds < 10) seconds = '0' + seconds;
      clock.children[2].innerHTML = seconds;
    }

    function clockStart() {
      setInterval(update, 1000);
      update();
    }

    clockStart();



//get date
var d = new Date();
var month=new Array("Jan","Feb","Mar","Apr","May","June",
"July","Aug","Sep","Oct","Nov","Dec");

// output
document.getElementById("out_date").innerHTML = weekday[day.getDay()] + ', ' + d.getDate()+ " " + month[d.getMonth()] + " " + d.getFullYear();