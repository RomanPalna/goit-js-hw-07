const refs = {
  input: document.querySelector('#font-size-control'),
  span: document.querySelector('#text'),
};

refs.input.addEventListener('input', onInputEvent);

function onInputEvent() {
  console.log('клик');

  refs.span.style.fontSize = '10px';
  refs.span.style.fontSize = refs.input.value + '1px';
}
