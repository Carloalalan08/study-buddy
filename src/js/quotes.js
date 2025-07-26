// Fetch and display a random quote
const quoteText = document.querySelector("#quote");
const authorText = document.querySelector("#author");

async function getRandomQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    if (!response.ok) {
      throw new Error("Failed to fetch quote");
    }

    const data = await response.json();
    quoteText.textContent = `"${data.content}"`;
    authorText.textContent = `— ${data.author}`;
  } catch (error) {
    quoteText.textContent = "Oops! Could not load a quote.";
    authorText.textContent = "";
    console.error("Error fetching quote:", error);
  }
}

// Load quote when page loads
getRandomQuote();
