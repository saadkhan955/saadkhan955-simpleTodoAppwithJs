const form = document.querySelector('form');
const input = document.getElementById('item');
const list = document.getElementById('list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addItem();
});

function addItem() {
  const item = input.value.trim();

  if (item !== '') {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');

    span.textContent = item;
    button.textContent = 'Delete';

    li.appendChild(span);
    li.appendChild(button);
    list.appendChild(li);

    input.value = '';

    button.addEventListener('click', () => {
      list.removeChild(li);
    });
  }
}
