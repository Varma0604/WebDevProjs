// script.js
let timer;
let isRunning = false;
let isSession = true;
let sessionLength = 25;
let breakLength = 5;
let timeRemaining = sessionLength * 60;

document.getElementById('session-length').innerText = sessionLength;
document.getElementById('break-length').innerText = breakLength;

document.getElementById('start-stop').addEventListener('click', () => {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        document.getElementById('start-stop').innerText = 'Start';
    } else {
        timer = setInterval(countDown, 1000);
        isRunning = true;
        document.getElementById('start-stop').innerText = 'Stop';
    }
});

document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('session-increment').addEventListener('click', () => {
    if (sessionLength < 60) {
        sessionLength++;
        document.getElementById('session-length').innerText = sessionLength;
        if (isSession) {
            resetTimer();
        }
    }
});
document.getElementById('session-decrement').addEventListener('click', () => {
    if (sessionLength > 1) {
        sessionLength--;
        document.getElementById('session-length').innerText = sessionLength;
        if (isSession) {
            resetTimer();
        }
    }
});
document.getElementById('break-increment').addEventListener('click', () => {
    if (breakLength < 60) {
        breakLength++;
        document.getElementById('break-length').innerText = breakLength;
        if (!isSession) {
            resetTimer();
        }
    }
});
document.getElementById('break-decrement').addEventListener('click', () => {
    if (breakLength > 1) {
        breakLength--;
        document.getElementById('break-length').innerText = breakLength;
        if (!isSession) {
            resetTimer();
        }
    }
});

function countDown() {
    if (timeRemaining > 0) {
        timeRemaining--;
    } else {
        isSession = !isSession;
        timeRemaining = (isSession ? sessionLength : breakLength) * 60;
        document.getElementById('timer-label').innerText = isSession ? 'Session' : 'Break';
    }
    updateDisplay();
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    isSession = true;
    timeRemaining = sessionLength * 60;
    document.getElementById('timer-label').innerText = 'Session';
    updateDisplay();
    document.getElementById('start-stop').innerText = 'Start';
}

function updateDisplay() {
    const minutes = String(Math.floor(timeRemaining / 60)).padStart(2, '0');
    const seconds = String(timeRemaining % 60).padStart(2, '0');
    document.getElementById('timer').innerText = `${minutes}:${seconds}`;
}

// Initialize the display
updateDisplay();
