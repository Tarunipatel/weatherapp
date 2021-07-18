const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");
const currentweatherEl = document.getElementById("items");
const timezoneEl = document.getElementById("timezone");
const countryEl = document.getElementById("country");
const waetherforecastEl = document.getElementById("forecast");
const currenttempEl = document.getElementById("current-temp");

 const days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
 const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
const API_KEY = "e4599163129ff29d293e4919907d1117";
setInterval( () =>{
  var time= new Date();
  var month = time.getMonth();
  var date = time.getDate();
  var day= time.getDay();
  var hour= time.getHours();
  var minutes = time.getMinutes();

  var  am_pm = "AM";
  if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hour = 12;
        am_pm = "AM";
    }
  let ctime = hour + ":" + minutes+  " "+ am_pm;
      console.log(ctime)
  document.getElementById("time").innerHTML =ctime;
   document.getElementById("date").innerHTML = days[day]+ "," + date+ " "+ months[month];
}, 1000);
