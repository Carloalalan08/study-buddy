// explain.js
import { explainTopic } from "./modules/api.js";

document.getElementById("explain-btn").addEventListener("click", async () => {
  const input = document.getElementById("explain-input").value;
  const explanationElem = document.getElementById("explanation");
  if (input.trim() === "") return;

  explanationElem.textContent = "Loading...";
  const result = await explainTopic(input);
  explanationElem.textContent = result;
});
