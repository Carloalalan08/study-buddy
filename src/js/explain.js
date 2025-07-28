import { fetchExplanation } from './modules/api.js';

const input = document.getElementById('explain-input');
const button = document.getElementById('explain-button');
const output = document.getElementById('explanation');

button.addEventListener('click', async () => {
  const term = input.value.trim();
  if (term) {
    output.textContent = 'Loading...';
    const explanation = await fetchExplanation(term);
    output.textContent = explanation;
  }
});
