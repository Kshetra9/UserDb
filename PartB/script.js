let seconds = 0;
let minutes1 = 0;
let hours1 = 0;

let displaysecs = 0;
let dispmins = 0;
let disphrs = 0;

let interval = null;
let status = "stopped";

function timeStop() {
  seconds++;

  if (seconds / 60 === 1) {
    seconds = 0;
    minutes1++;
    
    
    if (minutes1 / 60 === 1) {
      minutes1 = 0;
      hours1++;
    }
  }

  if (seconds < 10) {
    displaysecs = "0" + seconds.toString();
  } else {
    displaysecs = seconds;
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
async function timeDelay(ms) {
  return await new Promise((resolve) => setInterval(resolve, ms));
}

async function timeRunning() {
  status = "started";
  while (status !== "stopped") {
    await timeDelay(1000);
    timeStop();
    document.getElementById("timeRunning").innerHTML = "START";
  }
}

function pausetime() {
  window.clearInterval(interval);
  document.getElementById("pausetime").innerHTML = "paused";
  status = "stopped";
}

function restart() {
  window.clearInterval(interval);
  seconds = 0;
  minutes1 = 0;
  hours1 = 0;
  document.getElementById("timeDisplay").innerHTML = "00:00:00";
  document.getElementById("restart").innerHTML = "RESET";
}
