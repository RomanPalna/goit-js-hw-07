const refs = {
  onDecrBtn: document.querySelector('[data-action="decrement"]'),
  OnIncrBtn: document.querySelector('[data-action="increment"]'),
  onValue: document.querySelector('.value'),
  counterValue: 0,
};

refs.onDecrBtn.addEventListener('click', decrement);
refs.OnIncrBtn.addEventListener('click', increment);

function increment() {
  refs.onValue.textContent = refs.counterValue += 1;
}

function decrement() {
  refs.onValue.textContent = refs.counterValue -= 1;
}
