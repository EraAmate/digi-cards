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
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      favorites.push(item);
      const favoritesJSON = JSON.stringify(favorites);
      localStorage.setItem('favorites', favoritesJSON);
    });
    appendContent(container, element);
  });
  return container;
}
