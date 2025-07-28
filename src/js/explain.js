import { fetchExplanation } from './modules/api.js';

const form = document.getElementById('explain-form');
const input = document.getElementById('explain-input');
const output = document.getElementById('explanation');

if (form && input && output) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const term = input.value.trim();
    if (!term) return;

    output.textContent = 'Loading...';
    const explanation = await fetchExplanation(term);
    output.textContent = explanation;
  });
} else {
  console.error('Explain form or elements not found in the DOM');
}
