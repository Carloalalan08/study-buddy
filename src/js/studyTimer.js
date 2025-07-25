// studyTimer.js
let timer;
let timeLeft = 25 * 60;

function formatTime(seconds) {
  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}

function updateDisplay() {
  document.getElementById("timer").textContent = formatTime(timeLeft);
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    updateDisplay();
    if (timeLeft <= 0) {
      clearInterval(timer);
      alert("Time's up! Take a break!");
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 25 * 60;
  updateDisplay();
}

document.getElementById("start-timer").addEventListener("click", startTimer);
document.getElementById("reset-timer").addEventListener("click", resetTimer);

updateDisplay();
