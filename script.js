const quoteContainer = document.querySelector("#quote-container");
const quoteText = document.querySelector(".quote");
const quoteAuthor = document.querySelector(".author");
const twitterButton = document.querySelector("#twitter");
const newQuoteButton = document.querySelector("#new-quote");
const loader = document.querySelector(".loader");

function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function removeLoadingSpinner() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

// Show new quote

// Using API

let apiQuotes = [];

function newQuote() {
  showLoadingSpinner();
  // Pick a random quote from api quotes array
  // From API
  //const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // Local
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  // Check if Author field is blank and replace it with 'Unknown'
  if (!quote.author) {
    quoteAuthor.textContent = "Unknown";
  } else {
    quoteAuthor.textContent = quote.author;
  }
  // Check quote length to determine styling
  if (quote.text.length > 50) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;
  removeLoadingSpinner();
}

/*
async function getQuotesFromAPI() {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    alert(error);
    // Catch Error Here
  }
}
*/

// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
  window.open(twitterUrl, "_blank");
}

// Event Listeners
newQuoteButton.addEventListener("click", newQuote);
twitterButton.addEventListener("click", tweetQuote);

// On load
// If Utilizing API
//getQuotesFromAPI();

newQuote();
