const categoryEL = document.querySelector('#categories');
console.log(`У списку ${categoryEL.children.length} категорії.`);

const titleEl = document
  .querySelectorAll('h2')
  .forEach(title => console.log(`Категорія: ${title.textContent}`));

const titleElLenght = document
  .querySelectorAll('.item ul')
  .forEach(li => console.log(`Кількість елементів: ${li.children.length}`));
