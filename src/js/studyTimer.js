import { updateScore } from './productivity.js';

const timerEl = document.getElementById('timer');
const startBtn = document.getElementById('start-timer');
const resetBtn = document.getElementById('reset-timer');

let countdown;
let time = 25 * 60;

function displayTime() {
  const mins = Math.floor(time / 60)
    .toString()
    .padStart(2, '0');
  const secs = (time % 60).toString().padStart(2, '0');
  timerEl.textContent = `${mins}:${secs}`;
}

displayTime();

startBtn.addEventListener('click', () => {
  countdown = setInterval(() => {
    time--;
    displayTime();
    if (time <= 0) {
      clearInterval(countdown);
      updateScore(5);
    }
  }, 1000);
});

resetBtn.addEventListener('click', () => {
  clearInterval(countdown);
  time = 25 * 60;
  displayTime();
});
