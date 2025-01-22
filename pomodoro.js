let timer;
let isRunning = false;
let minutes = 25;
let seconds = 0;

function setTimer(mins, secs) {
  clearInterval(timer);
  isRunning = false;
  minutes = mins;
  seconds = secs;
  updateTimerDisplay();
  document.getElementById('start-pause-btn').textContent = "INICIAR";
  document.getElementById('custom-input').classList.add('hidden');
}

function customTime() {
  document.getElementById('custom-input').classList.remove('hidden');
}

function setCustomTimer() {
  const customMinutes = parseInt(document.getElementById('custom-minutes').value) || 0;
  const customSeconds = parseInt(document.getElementById('custom-seconds').value) || 0;
  if (customMinutes >= 0 && customSeconds >= 0 && customSeconds < 60) {
    setTimer(customMinutes, customSeconds);
  } else {
    alert("Por favor, ingresa valores válidos (segundos entre 0 y 59).");
  }
}

function updateTimerDisplay() {
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

function toggleTimer() {
  if (isRunning) {
    pauseTimer();
  } else {
    startTimer();
  }
}

function startTimer() {
  isRunning = true;
  document.getElementById('start-pause-btn').textContent = "PAUSAR";
  timer = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(timer);
        isRunning = false;
        alert("¡Tiempo terminado!");
      } else {
        minutes--;
        seconds = 59;
      }
    } else {
      seconds--;
    }
    updateTimerDisplay();
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
  document.getElementById('start-pause-btn').textContent = "REANUDAR";
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  updateTimerDisplay();
  document.getElementById('start-pause-btn').textContent = "INICIAR";
}
