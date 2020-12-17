function currentTime() {
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var midday = "AM";
    midday = (hour >= 12) ? "PM" : "AM"; /* assigning AM/PM */
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour); /* assigning hour in 12-hour format */
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + " " + midday; /* adding time to the div */
      var t = setTimeout(currentTime, 1000); /* setting timer */
  }
  
  function updateTime(k) { /* appending 0 before time elements if less than 10 */
    if (k < 10) {;
      return "0" + k;
    }
    else { 
      return k;
    }
  }
  
currentTime();



function clockIn(){
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName'),value;
  var clockedIn = true;
  var date = new Date();
  var data = firstName + lastName + date;
  
  if(clockedIn == true) {
    console.log(data);
  }
  else {
    alert('Nobody is clocked in!');
  }
  }
  
  
  function clockIn(){
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var clockedIn = false;
    var date = new Date();
    var status = firstName + lastName + date;
  
  if(firstName && lastName){
    clockedIn = true;
  }
  else {
    alert('naw')
  }
  
  if(clockedIn == true) {
    console.log(status);
  }
  else{
    console.log('no one is here')
  }
  
  }
  

