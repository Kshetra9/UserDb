

let displaysecs = 0;
let dispmins = 0;
let disphrs = 0;

// Declaring variables for tracking minutes, milli_secs and hours
let milli_secs = 0;
let minutes1 = 0;
let hours1 = 0;

let interval = null;
let curr_stats = "timer_stop";

function timeStop() {
  milli_secs++;

  if (milli_secs / 60 === 1) {
    milli_secs = 0;
    minutes1++;

    //To track the minutes,milli_secs and hours when timer is paused and resumed


    if (minutes1 / 60 === 1) {
      minutes1 = 0;
      hours1++;
    }
  }

  if (milli_secs < 10) {
    displaysecs = "0" + milli_secs.toString();
  } else {
    displaysecs = milli_secs;
  }
  if (minutes1 < 10) {
    dispmins = "0" + minutes1.toString();
  } 
  
  else {
    
    
    dispmins = minutes1;
  }
  if (hours1 < 10) {
    disphrs = "0" + hours1.toString();
  } else {
    disphrs = hours1;
  }

  document.getElementById("timeDisplay").innerHTML =
    disphrs + ":" + dispmins + ":" + displaysecs;
}
// Time delay function using setInterval method
async function timeDelay(ms) {
  return await new Promise((resolve) => setInterval(resolve, ms));
}


// Function to restart the timer
function restart() {
  window.clearInterval(interval);


  milli_secs = 0;
  minutes1 = 0;
  hours1 = 0;
  document.getElementById("timeDisplay").innerHTML = "00:00:00";
  document.getElementById("restart").innerHTML = "RESET";
}

// Function to pause the time on a click of button

function pausetime() {
  window.clearInterval(interval);



  document.getElementById("pausetime").innerHTML = "paused";
  curr_stats = "timer_stop";
}

// Function where it starts the timer on a click 
async function timeRunning() {
  curr_stats = "started";



  
  while (curr_stats !== "timer_stop") {
    await timeDelay(1000);
    timeStop();
    document.getElementById("timeRunning").innerHTML = "START";
  }
}