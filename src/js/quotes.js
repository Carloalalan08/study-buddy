import { getRandomQuote } from './modules/api.js';

async function displayQuote() {
  const quoteElement = document.getElementById('quote');
  const authorElement = document.getElementById('author'); // Add this in HTML
  try {
    const quote = await getRandomQuote();
    quoteElement.textContent = `"${quote.content}"`;
    authorElement.textContent = `— ${quote.author}`;
  } catch (error) {
    quoteElement.textContent = 'Failed to load quote.';
    authorElement.textContent = '';
  }
}

displayQuote();
