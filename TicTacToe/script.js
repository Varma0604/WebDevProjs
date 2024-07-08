const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset');
let currentPlayer = 'X';
let gameActive = true;
const boardState = Array(9).fill(null);

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);

function handleCellClick(e) {
    const cell = e.target;
    const index = cell.getAttribute('data-index');

    if (boardState[index] !== null || !gameActive) return;

    boardState[index] = currentPlayer;
    cell.textContent = currentPlayer;
    if (checkWinner()) {
        message.textContent = `Player ${currentPlayer} wins!`;
        gameActive = false;
    } else if (boardState.every(cell => cell !== null)) {
        message.textContent = "It's a draw!";
        gameActive = false;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        message.textContent = `Player ${currentPlayer}'s turn`;
    }
}

function checkWinner() {
    return winningConditions.some(condition => {
        return condition.every(index => {
            return boardState[index] === currentPlayer;
        });
    });
}

function resetGame() {
    currentPlayer = 'X';
    gameActive = true;
    boardState.fill(null);
    cells.forEach(cell => cell.textContent = '');
    message.textContent = `Player ${currentPlayer}'s turn`;
}
