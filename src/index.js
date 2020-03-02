function component() {
  const element = document.createElement('div');
  element.innerHTML = 'Digi';

  return element;
}

const div = component();
document.body.appendChild(div);
