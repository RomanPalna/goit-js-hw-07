const input = document.querySelector('#validation-input');
const value = input.getAttribute('data-length');
console.dir(input.value.length);

input.addEventListener('blur', onInputValidEvent);

function onInputValidEvent() {
  if (input.value.length === Number(value)) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}
