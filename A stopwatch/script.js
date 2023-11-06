'use strict';

let [seconds, minutes, hours] = [0, 0, 0];
const displayTime = document.getElementById('displayTime');
let timer = null;

function stopWatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  let h = hours < 10 ? '0' + hours : hours;
  let m = minutes < 10 ? '0' + minutes : minutes;
  let s = seconds < 10 ? '0' + seconds : seconds;

  displayTime.innerText = h + ':' + m + ':' + s;
}

function watchStart() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 1000);
}

function watchStop() {
  clearInterval(timer);
}

function watchReset() {
  [seconds, minutes, hours] = [0, 0, 0];
  displayTime.innerText = '00:00:00';
  clearInterval(timer);
}
