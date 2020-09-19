const categoryEL = document.querySelector('#categories');
console.log(`У списку ${categoryEL.children.length} категорії.`);

const categoryItems = document.querySelectorAll('.item');
categoryItems.forEach(item => {
  console.log(`Категорія: ${item.querySelector('h2').textContent}`);
  console.log(`Кількість елементів: ${item.querySelectorAll('li').length}`);
});
