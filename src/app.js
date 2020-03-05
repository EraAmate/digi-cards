import './app.scss';
import { createElement } from './lib/dom';
import { title } from './components/title';
import { subtitle } from './components/title';
import { appendContent } from './lib/dom';
import { filterDigimons } from './lib/digimonsS';
import { search } from './components/search';
import { createSearchResults } from './components/digimons';
import DigiLogo from './assets/Digimon_logo.png';
import Teams from './assets/team.jpg';

export function app() {
  const header = createElement('header', {
    className: 'header'
  });
  const main = createElement('main', {
    className: 'main'
  });
  const titleElement = title('Digitorium');
  const subtitleElement = subtitle('Finde dein digitales monster');

  const searchInitValue = sessionStorage.getItem('searchValue'); //
  const searchElement = search(searchInitValue); // oder search(sessionStorage.getItem("searchValue"))

  const DLogo = createElement('img', {
    className: 'logo',
    src: DigiLogo
  });

  const Team = createElement('img', {
    className: 'bgImage',
    src: Teams
  });

  let searchResults = null;

  function setSearchResults() {
    const filteredDigimons = filterDigimons(searchElement.value);
    searchResults = createSearchResults({
      items: filteredDigimons
    });
    appendContent(main, searchResults);
  }
  //   digimons = digimonsAll(filteredDigimons);
  //   appendContent(main, digimons);
  // }
  setSearchResults();

  appendContent(header, [DLogo, titleElement]);
  appendContent(main, [subtitleElement, searchElement, searchResults, Team]);

  searchElement.addEventListener('input', event => {
    main.removeChild(searchResults);
    setSearchResults();

    const searchValue = event.target.value;
    sessionStorage.setItem('searchValue', searchValue);
  });

  return [header, main];
}
