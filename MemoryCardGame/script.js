const cardsArray = [
  'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D',
  'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'
];

let firstCard, secondCard;
let hasFlippedCard = false;
let lockBoard = false;
let score = 0;
let timeLeft = 60;
let timer;

const gameBoard = document.getElementById('game-board');
const scoreElement = document.getElementById('score');
const timeElement = document.getElementById('time');
const restartBtn = document.getElementById('restart-btn');

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createBoard() {
  const shuffledCards = shuffle([...cardsArray]);
  gameBoard.innerHTML = '';
  shuffledCards.forEach(card => {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
      cardElement.innerHTML = `
          <div class="card-inner">
              <div class="card-front"></div>
              <div class="card-back">${card}</div>
          </div>
      `;
      cardElement.addEventListener('click', flipCard);
      gameBoard.appendChild(cardElement);
  });
}

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
      return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  const isMatch = firstCard.innerText === secondCard.innerText;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  score += 10;
  scoreElement.textContent = score;

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

      resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function startGame() {
  score = 0;
  scoreElement.textContent = score;
  timeLeft = 60;
  timeElement.textContent = timeLeft;

  createBoard();

  clearInterval(timer);
  timer = setInterval(() => {
      timeLeft--;
      timeElement.textContent = timeLeft;
      if (timeLeft === 0) {
          clearInterval(timer);
          alert('Time\'s up! Game over!');
      }
  }, 1000);
}

restartBtn.addEventListener('click', startGame);

startGame();
