export async function fetchQuote() {
  const res = await fetch('https://api.quotable.io/random');
  const data = await res.json();
  return `${data.content} — ${data.author}`;
}

export async function fetchExplanation(word) {
  try {
    const res = await fetch(`https://api.twinword.com/api/v6/meaning/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Twaip-Key': 'YOUR_API_KEY_HERE'
      },
      body: JSON.stringify({ entry: word })
    });
    const data = await res.json();
    return data.meaning || 'No definition found.';
  } catch (e) {
    return 'Error retrieving definition.';
  }
}
