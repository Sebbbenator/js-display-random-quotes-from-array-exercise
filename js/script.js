"use strict"

const quotes = [
    "Hvorfor være en mand når du kan være en futtemus?",
    "Martin elev er som en snemand, han smelter ved varmen.",
    "Livet er som en cykel, for at holde balancen skal du blive ved med at træde i pedalerne.",
    "Jeg er helt dælens, dog ikke mere end du er.",
    "livet er som en fisk, nogle gange er det bare en tør sild.",
    "Mathilde er som en solstråle på en regnvejrsdag.",
    "NEVER GONNA GIVE YOU UP, NEVER GONNA LET YOU DOWN!",
    "Jeg så varm det kriminelt",
    "jeg er geden, over alle geder",
    "Booster er menneskes benzin",
]

function getRandomQuote() {
  if (quotes.length === 0) {
    return "ikke flere citater";
  }

  const randomIndex = Math.floor(Math.random() * quotes.length);


  return quotes[randomIndex];
}


function displayRandomQuote() {
  const randomQuote = getRandomQuote(); // Henter et citat
  document.getElementById("quotes").textContent = randomQuote; // Viser det på siden
}


document
  .getElementById("displayQuoteBtn")
  .addEventListener("click", displayRandomQuote);