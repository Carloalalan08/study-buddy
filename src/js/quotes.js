import { fetchQuote } from './modules/api.js';

const quoteEl = document.getElementById('quote');
const button = document.getElementById('new-quote');

async function loadQuote() {
  quoteEl.textContent = 'Loading...';
  if (button) button.disabled = true;

  const quote = await fetchQuote();
  quoteEl.textContent = quote;

  if (button) button.disabled = false;
}

// Make sure button is wired and quote is loaded once on load
if (button) {
  button.addEventListener('click', loadQuote);
}

loadQuote();
