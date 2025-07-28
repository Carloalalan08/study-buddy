export async function fetchQuote() {
  try {
    const res = await fetch(
      'https://api.allorigins.win/get?disableCache=true&url=' + encodeURIComponent('https://zenquotes.io/api/random')
    );
    const data = await res.json();
    const parsed = JSON.parse(data.contents);
    return `${parsed[0].q} — ${parsed[0].a}`;
  } catch (error) {
    console.error('Quote fetch failed:', error);
    return "Stay motivated. You've got this! — Study Buddy";
  }
}

export async function fetchExplanation(word) {
  try {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await res.json();

    if (data.title === "No Definitions Found") {
      return "No definition found.";
    }

    const definitions = data[0].meanings[0].definitions;
    return definitions[0].definition;
  } catch (e) {
    console.error('Explain fetch failed:', e);
    return 'Something went wrong while explaining.';
  }
}
