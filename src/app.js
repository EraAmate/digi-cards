import { createElement } from './lib/dom';
import { title } from './components/title';
import { search } from './components/search';

export function app() {
  const header = createElement('header', {
    className: 'header'
  });
  const main = createElement('main', {});
  const titleElement = title('Digimons Cards');
  const searchElement = search();
  const inputResult = createElement('div', {
    className: 'inputResult'
  });
  const inpuResultText = createElement('p', {
    innerText: '',
    className: 'inputResultText'
  });

  searchElement.addEventListener('input', event => {
    inpuResultText.innerText = searchElement.value;
    return inpuResultText.innerText;
  });

  searchElement.addEventListener('input', event => {
    console.log(event.target.value, searchElement.value);
  });

  header.appendChild(titleElement);
  main.appendChild(searchElement);

  main.appendChild(inputResult);
  inputResult.appendChild(inpuResultText);

  return [header, main];
}
