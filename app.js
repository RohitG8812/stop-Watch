let heading = document.querySelector(".timer_text");
let hours = document.querySelector(".hour");
let minutes = document.querySelector(".minute");
let seconds = document.querySelector(".second");
let stopBtn = document.querySelector(".stop");
let pauseBtn = document.querySelector(".pause");
let startBtn = document.querySelector(".start");
let notification = document.querySelector(".notification");
notification.innerText = "";
let sec = 0;
let min = 0;
let hou = 0;
let intervalID;

function main() {
  startBtn.addEventListener("click", () => {
    if (!intervalID) {
      start();
      showNotification("Timer Started 💯", "timer-start noti");
    }
  });
  pauseBtn.addEventListener("click", () => {
    if (intervalID) {
      pause();
      showNotification("Timer Paused ⏸️", "timer-paused noti");
    }
  });
  stopBtn.addEventListener("click", () => {
    stop();
    if (!intervalID) {
      showNotification("Timer Stopped 🚫", "timer-stop noti");
    }
  });
}

function showNotification(message, className) {
  notification.innerText = message;
  notification.className = `notification ${className}`;
  setTimeout(() => {
    notification.innerText = "";
    notification.className = "notification";
  }, 1000);
}

// ! By using SetInterval()
function start() {
  if (!intervalID) {
    intervalID = setInterval(() => {
      sec++;
      if (sec >= 60) {
        sec = 0;
        min = min + 1;
      }
      if (min >= 60) {
        min = 0;
        hou = hou + 1;
      }
      seconds.innerHTML = String(sec).padStart(2, "0");
      minutes.innerHTML = String(min).padStart(2, "0");
      hours.innerHTML = String(hou).padStart(2, "0");
    }, 1000);
  }
}
function pause() {
  clearInterval(intervalID);
  intervalID = null;
}
function stop() {
  pause();
  sec = 0;
  min = 0;
  hou = 0;
  seconds.innerHTML = String(sec).padStart(2, "0");
  minutes.innerHTML = String(min).padStart(2, "0");
  hours.innerHTML = String(hou).padStart(2, "0");
}

main();

//! By using SetTimeout()
// function incrementCount() {
//   if (intervalID) {
//     heading.innerHTML = ++count;
//     setTimeout(incrementCount, 100);
//   }
// }
// function start() {
//   if (!intervalID) {
//     intervalID = setTimeout(incrementCount, 100);
//   }
// }
// function pause() {
//   if (intervalID) {
//     intervalID = "";
//   }
// }
// function stop() {
//   pause();
//   count = 0;
//   heading.innerHTML = count;
// }
