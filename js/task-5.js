const refs = {
  onInput: document.querySelector('#name-input'),
  onSpan: document.querySelector('#name-output'),
};

refs.onInput.addEventListener('input', onImputChange);
refs.onSpan.addEventListener('input', onImputChange);

function onImputChange() {
  refs.onSpan.textContent = refs.onInput.value;

  if (refs.onInput.value === '') {
    refs.onSpan.textContent = 'незнайомець';
  }
}
