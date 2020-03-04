import './app.scss';
import { createElement } from './lib/dom';
import { title } from './components/title';
import { subtitle } from './components/title';
import { appendContent } from './lib/dom';
import { search } from './components/search';
import { digimonsAll } from './components/digimons';
import DigiLogo from './assets/Digimon_logo.png';
import Teams from './assets/team.jpg';

const allDigimons = [
  'Angewomon',
  'Gatomon',
  'GeoGreymon',
  'Garurumon',
  'Antylamon',
  'Arkadimon'
];

function filterDigimons(searchValue) {
  const lowerCaseSearchValue = searchValue.toLowerCase();

  const filteredDigimons = allDigimons.filter(digimon => {
    return digimon.toLowerCase().startsWith(lowerCaseSearchValue);
  });
  return filteredDigimons;
}

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
    className: 'bgImgage',
    src: Teams
  });

  let digimons = null;

  function setSearchResults() {
    const filteredDigimons = filterDigimons(searchElement.value);
    digimons = digimonsAll(filteredDigimons);
    appendContent(main, digimons);
  }
  setSearchResults();
  appendContent(header, [DLogo, titleElement]);
  appendContent(main, [subtitleElement, searchElement, digimons, Team]);

  searchElement.addEventListener('input', event => {
    main.removeChild(digimons);
    setSearchResults();

    const searchValue = event.target.value;
    sessionStorage.setItem('searchValue', searchValue);
  });

  return [header, main];
}
