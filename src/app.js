import './app.scss';
import { createElement } from './lib/dom';
import { title } from './components/title';
import { subtitle } from './components/title';

import { search } from './components/search';
import { digimons } from './components/digimons';
import DigiLogo from './assets/Digimon_logo.png';

const allDigimons = [
  'Angewomon',
  'Gatomon',
  'GeoGreymon',
  'Garurumon',
  'Antylamon',
  'Arkadimon'
];
export function app() {
  const header = createElement('header', {
    className: 'header'
  });

  const main = createElement('main', {
    className: 'main'
  });
  const titleElement = title('Digitorium');
  const subtitleElement = subtitle('Finde dein digitales monster');
  const searchElement = search();

  const DLogo = createElement('img', {
    className: 'logo',
    src: DigiLogo
  });

  header.appendChild(DLogo);
  header.appendChild(titleElement);
  main.appendChild(subtitleElement);
  main.appendChild(searchElement);

  const searchResults = createElement('div', {});

  main.appendChild(searchResults);

  searchElement.addEventListener('input', event => {
    searchResults.innerHTML = ''; // clear results

    const searchValue = event.target.value; //  oder sschon hier angeben: event.target.value.toLowerCase
    const filteredDigimons = allDigimons.filter(digimon => {
      return digimon.toLowerCase().startsWith(searchValue.toLowerCase());
    });

    let digimonsElement = digimons(filteredDigimons);
    searchResults.appendChild(digimonsElement);
  });

  return [header, main];
}

// let pokemons = createPokemons(allPokemons);

// appendContent(header, [logo, title]);
// appendContent(main, [searchInput, pokemons]);

// searchInput.addEventListener('input', event => {
//   main.removeChild(pokemons);

//   const searchValue = event.target.value;
//   const filteredPokemons = allPokemons.filter(pokemon => {
//     return pokemon.startsWith(searchValue);
//   });
//   pokemons = createPokemons(filteredPokemons);
//   appendContent(main, pokemons);
// });
