const body = document.querySelector('body');
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnStart.addEventListener('click', handlerStart);
let timerId = null;
function handlerStart(evt) {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  evt.target.disabled = true;
  btnStop.disabled = false;
}

btnStop.addEventListener('click', handlerStop);
function handlerStop(evt) {
  clearInterval(timerId);
  evt.target.disabled = true;
  btnStart.disabled = false;
}
