import { fetchQuote } from './modules/api.js';
const quoteEl = document.getElementById('quote');
fetchQuote().then(quote => {
  quoteEl.textContent = quote;
});
