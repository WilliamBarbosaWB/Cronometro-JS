const minutesE1 = document.querySelector("#minutes");
const secondsE1 = document.querySelector("#seconds");
const milesimosE1 = document.querySelector("#milesimos");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const resetBtn = document.querySelector("#resetBtn");

let minutes = 0;
let seconds = 0;
let milesimos = 0;
let isPaused = false;

startBtn.addEventListener("click", startTime);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);

function startTime() {
  interval = setInterval(() => {
    if (!isPaused) {
      milesimos += 10;

      if (milesimos === 1000) {
        seconds++;
        milesimos = 0;
      }

      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }

      minutesE1.textContent = formatTime(minutes);
      secondsE1.textContent = formatTime(seconds);
      milesimosE1.textContent = formatMilisegundos(milesimos);
    }
  }, 10);

  startBtn.style.display = "none";
  pauseBtn.style.display = "block";
}

function pauseTimer() {
  isPaused = true;
  pauseBtn.style.display = "none";
  resumeBtn.style.display = "block";
}

function resumeTimer() {
  isPaused = false;
  pauseBtn.style.display = "block";
  resumeBtn.style.display = "none";
}

function resetTimer() {
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  milesimos = 0;

  minutesE1.textContent = "00";
  secondsE1.textContent = "00";
  milesimosE1.textContent = "000";

  startBtn.style.display = "block";
  pauseBtn.style.display = "none";
  resumeBtn.style.display = "none";
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function formatMilisegundos(time) {
  return time < 100 ? `${time}`.padStart(3, "0") : time;
}
