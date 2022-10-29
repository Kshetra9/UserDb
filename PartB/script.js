let sec1 = 0;
let min1 = 0;
let hr1 = 0;

let displaysec1 = 0;
let displaymin1 = 0;
let displayhr1 = 0;

let interval = null;
let status = "stopped";

function stopWatch() {
  sec1++;

  if (sec1 / 60 === 1) {
    sec1 = 0;
    min1++;
    if (min1 / 60 === 1) {
      min1 = 0;
      hr1++;
    }
  }

  if (sec1 < 10) {
    displaysec1 = "0" + sec1.toString();
  } else {
    displaysec1 = sec1;
  }
  if (min1 < 10) {
    displaymin1 = "0" + min1.toString();
  } else {
    displaymin1 = min1;
  }
  if (hr1 < 10) {
    displayhr1 = "0" + hr1.toString();
  } else {
    displayhr1 = hr1;
  }

  document.getElementById("display").innerHTML =
    displayhr1 + ":" + displaymin1 + ":" + displaysec1;
}
async function delay(ms) {
  return await new Promise((resolve) => setInterval(resolve, ms));
}

async function starttimer() {
  status = "started";
  while (status !== "stopped") {
    await delay(1000);
    stopWatch();
    document.getElementById("starttimer").innerHTML = "START";
  }
}

function stoptimer() {
  window.clearInterval(interval);
  document.getElementById("stoptimer").innerHTML = "STOP";
  status = "stopped";
}

function reset() {
  window.clearInterval(interval);
  sec1 = 0;
  min1 = 0;
  hr1 = 0;
  document.getElementById("display").innerHTML = "00:00:00";
  document.getElementById("stoptimer").innerHTML = "STOP";
}
