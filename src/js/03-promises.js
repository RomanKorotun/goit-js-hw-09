import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', handlersubmit);

function handlersubmit(evt) {
  evt.preventDefault();
  const { delay, step, amount } = evt.currentTarget.elements;

  let delayVal = Number(delay.value);
  let stepVal = Number(step.value);
  let amoutVal = Number(amount.value);

  for (let i = 1; i <= amoutVal; i += 1) {
    createPromise(i, delayVal)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delayVal += stepVal;
  }

  function createPromise(position, delay) {
    return new Promise((res, rej) => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill
        setTimeout(() => res({ position, delay }), delay);
      } else {
        // Reject
        setTimeout(() => rej({ position, delay }), delay);
      }
    });
  }
}
