const scoreEl = document.getElementById('score');
let score = Number(localStorage.getItem('score')) || 0;
scoreEl.textContent = score;

export function updateScore(points) {
  score += points;
  localStorage.setItem('score', score);
  scoreEl.textContent = score;
}
