const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

function checkForMatch() {
  let result = "";
  if (cardsInPlay[0] === cardsInPlay[1]) {
    result = "You found a match!";
  } else {
    result = "Sorry, try again!";
  }

  return result;
}

function reset() {
  cardsInPlay = [];
}

function flipCard(cardId) {
  cardsInPlay.push(cards[cardId]);

  if (cardsInPlay.length === 2) {
    checkForMatch();
  }

  console.log(`User fliped ${cards[cardId]}`);
}

flipCard(0);
flipCard(2);
