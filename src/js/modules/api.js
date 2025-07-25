// js/modules/api.js

export async function getRandomQuote() {
  const response = await fetch('https://api.quotable.io/random');
  
  if (!response.ok) {
    throw new Error('Failed to fetch quote');
  }

  const data = await response.json(); // convert response to JS object
  return {
    content: data.content,
    author: data.author
  };
}


export async function explainTopic(topic) {
  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${topic}`);
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  const data = await response.json();
  return data[0]?.meanings[0]?.definitions[0]?.definition || "Definition not found.";
}
