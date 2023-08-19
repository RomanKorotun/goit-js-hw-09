import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      // Fulfill
      res({ position, delay });
    } else {
      // Reject
      rej({ position, delay });
    }
  });
}

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', handlersubmit);

function handlersubmit(evt) {
  evt.preventDefault();
  const { delay, step, amount } = evt.currentTarget.elements;

  let delayVal = Number(delay.value);
  let stepVal = Number(step.value);
  let amoutVal = Number(amount.value);

  for (let i = 1; i <= amoutVal; i += 1) {
    setTimeout(() => {
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
    }, delayVal);
  }
}
