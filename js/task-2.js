const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const ingridientsContainerEl = document.querySelector('#ingredients');

const makeIngridientsCard = ingredients => {
  const ingridientEl = document.createElement('li');
  ingridientEl.textContent = ingredients;
  ingridientEl.classList.add('.ingridient-item');

  return ingridientEl;
};

const elements = ingredients.map(makeIngridientsCard);

ingridientsContainerEl.append(...elements);
