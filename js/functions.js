// loop over cards array
// and create new image element
// attach click listener on each image
// appened each image to game-board
// push image element to items array
function createBoard() {
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const newItem = document.createElement("img");
    newItem.setAttribute("src", "images/back.png");
    newItem.setAttribute("data-id", i);

    newItem.addEventListener("click", flipCard);

    document.getElementById("game-board").appendChild(newItem);
    items.push(newItem);
  }
}

// create new card object
function addCard(rank, suit, cardImage) {
  cards.push({
    rank,
    suit,
    cardImage
  });
}

function checkForMatch() {
  let result = ["", false];
  if (cardsInPlay[0] === cardsInPlay[1]) {
    result[0] = "You found a match!";
    result[1] = true;
  } else {
    result[0] = "Sorry, try again!";
    result[1] = false;
  }

  return result;
}

// reset the game
function reset() {
  // clear selected cards
  cardsInPlay = [];
  // remove elements
  items.forEach(i => i.remove());
  // clear items
  items = [];

  // Bouns: randomize cards, add more cards

  // clear text
  document.getElementById("result").innerText = "";

  // set game status to start
  gameStatus = true;

  createBoard();
}

function flipCard() {
  if (!gameStatus) return false; // check if game finisihed
  // note: you may need to remove all the listeners after the game finished for code efficiency

  const cardId = this.getAttribute("data-id");

  this.setAttribute("src", cards[cardId].cardImage);
  cardsInPlay.push(cards[cardId].rank);

  if (cardsInPlay.length === 2) {
    const [message, updateScore] = checkForMatch();

    document.getElementById("result").innerText = message;

    gameStatus = false;

    if (updateScore) trackScore();
  }
}

function trackScore() {
  // get current score
  const currentScore = parseInt(scoreElement.textContent);

  // add exp to the current score
  const newScore = currentScore + EXP[getExp()];

  // update score element
  scoreElement.innerText = newScore;
}

function getExp() {
  return Math.floor(Math.random() * (EXP.length - 1)); // select random number from the EXP array
}
