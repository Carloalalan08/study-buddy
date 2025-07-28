export async function fetchJoke() {
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    return data.value;
  } catch (error) {
    console.error('Joke fetch failed:', error);
    return 'Oops! Chuck Norris roundhouse-kicked the internet. Try again!';
  }
}

export async function fetchExplanation(word) {
  try {
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await res.json();

    if (data.title === 'No Definitions Found') {
      return 'No definition found.';
    }

    const definitions = data[0].meanings[0].definitions;
    return definitions[0].definition;
  } catch (e) {
    console.error('Explain fetch failed:', e);
    return 'Something went wrong while explaining.';
  }
}
