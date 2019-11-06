const cards = [];
const cardsInPlay = [];

function newCard(rank, suit, cardImage) {
  cards.push({
    rank,
    suit,
    cardImage
  });
}

newCard("queen", "hearts", "images/queen-of-hearts.png");
newCard("queen", "diamonds", "images/queen-of-diamonds.png");
newCard("king", "hearts", "images/king-of-hearts.png");
newCard("king", "hearts", "images/king-of-diamonds.png");

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
  cardsInPlay.push(cards[cardId].rank);
  console.log(`User fliped ${cards[cardId].rank}`, cards[cardId]);

  if (cardsInPlay.length === 2) {
    const result = checkForMatch();
    console.log(result);
  }
}

flipCard(0);
flipCard(2);
