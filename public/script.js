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
    var lastName = document.getElementById('lastName').value;
    var clockedIn = false;
    var date = new Date();
    var status = firstName + lastName + date;
  
  if(firstName && lastName){
    clockedIn = true;
    alert('success');
  }
  else {
    alert('hmmm?');
  }
  
  if(clockedIn == true) {
    console.log(status);
  }
  else{
    console.log("no one is here");
  }


  }
  

  function clockOut(){
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var clockedOut = false;
    var date = new Date();
    var status = firstName + lastName + date;
  
  if(firstName && lastName){
    clockedOut = true;
    alert('success');
  }
  else {
    alert('Success');
  }
  
  if(clockedOut == true) {
    console.log(status);
  }
  else{
    console.log("no one is here");
  }


  }
  