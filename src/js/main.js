// src/js/main.js
import "../css/style.css";
import { getQuote } from "./quotes.js";
import "./todos.js";
import "./studyTimer.js";
import "./explain.js";


document.querySelector("#app").innerHTML = `
  <h1>🎓 Welcome to Study Buddy</h1>
  <p class="quote">Fetching quote...</p>
`;

getQuote().then((quote) => {
  document.querySelector(".quote").textContent = `"${quote}"`;
});
