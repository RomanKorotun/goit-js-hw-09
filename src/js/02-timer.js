import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const elements = {
  inputEl: document.querySelector('[type=text]'),
  btnEl: document.querySelector('[type=button]'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
};

elements.btnEl.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const result = selectedDates[0] - options.defaultDate;
    if (selectedDates[0] <= options.defaultDate) {
      elements.btnEl.disabled = true;
      alert('Please choose a date in the future');
      return;
    }
    if (selectedDates[0] > options.defaultDate) {
      elements.btnEl.disabled = false;
    }

    elements.btnEl.addEventListener('click', handlerClick);
    function handlerClick() {
      elements.btnEl.disabled = true;
      function convertMs(ms) {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        setInterval(() => {
          ms -= 1000;
          // Remaining days
          const days = Math.floor(ms / day);
          // Remaining hours
          const hours = Math.floor((ms % day) / hour);
          // Remaining minutes
          const minutes = Math.floor(((ms % day) % hour) / minute);
          // Remaining seconds
          const seconds = Math.floor((((ms % day) % hour) % minute) / second);

          elements.daysEl.textContent = days;
          elements.hoursEl.textContent = addLeadingZero(hours);
          elements.minutesEl.textContent = addLeadingZero(minutes);
          elements.secondsEl.textContent = addLeadingZero(seconds);
        }, 1000);
      }
      convertMs(result);
    }
  },
};

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

flatpickr(elements.inputEl, options);
