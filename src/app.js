import './app.scss';
import { createElement } from './lib/dom';
import { title } from './components/title';
import { subtitle } from './components/title';

import { search } from './components/search';
import { digimons } from './components/digimons';
// import Logo from './assets/pokemon.png';

const allDigimons = ['Lalal', 'Yoyoyi', 'Mimimi', 'Ufufufu', 'Yayaya'];

export function app() {
  const header = createElement('header', {
    className: 'header'
  });

  const main = createElement('main', {
    className: 'main'
  });
  const titleElement = title('Digimons Cards');
  const subtitleElement = subtitle('Finde dein digitales monster');
  const searchElement = search();
  // const logo = createElement('img', {
  //   className: 'logo',
  //   src: Logo
  // });

  // header.appendChild(logo);
  header.appendChild(titleElement);
  main.appendChild(searchElement);
  main.appendChild(subtitleElement);

  const searchResults = createElement('div', {});
  main.appendChild(searchResults);

  // searchElement.addEventListener('input', event => {
  //   main.removeChild(searchResults);

  //   searchResults = digimons(filteredDigimons);
  //   main.appendChild(searchResults);
  // });

  searchElement.addEventListener('input', event => {
    searchResults.innerHTML = ''; // clear search results

    const searchValue = event.target.value;
    const filteredDigimons = allDigimons.filter(digimon => {
      return digimon.startsWith(searchValue);
    });

    const digimonsElement = digimons(filteredDigimons);
    searchResults.appendChild(digimonsElement);
  });

  return [header, main];
}
