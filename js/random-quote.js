import { QUOTES } from "./QUOTES.js";

// Fisher–Yates shuffle
function shuffleQuotes(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Display one random quote
function showRandomQuote() {
  const el = document.querySelector(".quote-text");
  if (!el) return;
  const { q, a } = QUOTES[Math.floor(Math.random() * QUOTES.length)];
  el.innerHTML = `"${q}" — <strong>${a}</strong>`;
}

window.addEventListener("DOMContentLoaded", () => {
  shuffleQuotes(QUOTES);
  showRandomQuote();
});
