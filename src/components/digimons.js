import './digimons.scss';
import { createElement, appendContent } from '../lib/dom';

export function createSearchResults(value) {
  const container = createElement('div', {
    className: 'digimons'
  });

  value.items.forEach(item => {
    const element = createElement('div', {
      innerText: item,
      className: 'digimon'
    });
    element.addEventListener('click', () => {
      // const favorites = [item];

      let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

      if (!favorites.includes(item)) {
        favorites.push(item);
      } else {
        const itemIndex = favorites.indexOf(item);
        favorites.splice(itemIndex, 1);
      }

      if (favorites.length > 4) {
        favorites = favorites.slice(1);
      }

      const favoritesJSON = JSON.stringify(favorites);
      localStorage.setItem('favorites', favoritesJSON);
    });
    appendContent(container, element);
  });
  return container;
}
