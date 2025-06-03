import moment from 'moment';

/* const minutesInput = document.getElementById('minutesInput');
const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');
const startButton = document.getElementById('startButton');
const timeDisplay = document.getElementById('timeDisplay');
const inputSection = document.getElementById('inputSection');

let totalSeconds = 0;
let timerInterval = null;

// Встановлення початкового значення для input
minutesInput.value = 5;

decrementButton.addEventListener('click', () => {
  let value = parseInt(minutesInput.value) || 1;
  if (value > 1) {
    minutesInput.value = value - 1;
  }
});

incrementButton.addEventListener('click', () => {
  let value = parseInt(minutesInput.value) || 1;
  minutesInput.value = value + 1;
});

startButton.addEventListener('click', () => {
  let minutes = parseInt(minutesInput.value) || 1;
  if (minutes < 1) {
    alert('Будь ласка, введіть значення більше 0');
    return;
  }
  totalSeconds = minutes * 60;
  inputSection.style.display = 'none';
  startButton.style.display = 'none';
  timeDisplay.style.display = 'block';
  updateDisplay();
  timerInterval = setInterval(updateTimer, 1000);
});

function updateTimer() {
  if (totalSeconds <= 0) {
    clearInterval(timerInterval);
    timeDisplay.textContent = '0:00';
    inputSection.style.display = 'flex';
    startButton.style.display = 'block';
    timeDisplay.style.display = 'none';
    minutesInput.value = 5;
    return;
  }
  totalSeconds--;
  updateDisplay();
}

function updateDisplay() {
  const duration = moment.duration(totalSeconds, 'seconds');
  const formattedTime = moment.utc(duration.asMilliseconds()).format('m:ss');
  timeDisplay.textContent = formattedTime;
} */
console.log(moment().format()); // Тестування moment
console.log('hello world';