import { fetchJoke } from './modules/api.js';

const jokeEl = document.getElementById('joke');
const button = document.getElementById('new-joke');

async function loadJoke() {
  jokeEl.textContent = 'Loading...';
  const joke = await fetchJoke();
  jokeEl.textContent = joke;
}

loadJoke(); // Show one on page load
button.addEventListener('click', loadJoke);
