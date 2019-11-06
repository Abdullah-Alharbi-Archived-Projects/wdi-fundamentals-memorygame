const cards = [];
const EXP = [10, 20, 15, 13, 17];
const scoreElement = document.getElementById("score");

let cardsInPlay = [];
let items = [];
let score = 0;

let gameStatus = true; // game is started once the user visited the site

addCard("queen", "hearts", "images/queen-of-hearts.png");
addCard("queen", "diamonds", "images/queen-of-diamonds.png");
addCard("king", "hearts", "images/king-of-hearts.png");
addCard("king", "hearts", "images/king-of-diamonds.png");

createBoard();

document.getElementById("reset").addEventListener("click", reset);
