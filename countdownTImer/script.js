let timer;
let totalTime;
let timeRemaining;
let isPaused = false;

function setTimer() {
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;

    totalTime = hours * 3600 + minutes * 60 + seconds;
    timeRemaining = totalTime;

    updateDisplay(timeRemaining);
}

function startTimer() {
    if (timer) clearInterval(timer);
    if (isPaused) {
        isPaused = false;
    } else {
        setTimer();
    }

    timer = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            updateDisplay(timeRemaining);
        } else {
            clearInterval(timer);
            alert("Time's up!");
        }
    }, 1000);
}

function pauseTimer() {
    if (timer) {
        clearInterval(timer);
        isPaused = true;
    }
}

function resetTimer() {
    if (timer) clearInterval(timer);
    totalTime = 0;
    timeRemaining = 0;
    updateDisplay(timeRemaining);
    isPaused = false;
}

function updateDisplay(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    document.getElementById('time-display').textContent =
        `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}
