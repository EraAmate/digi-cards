import './digimons.scss';
import { createElement } from '../lib/dom';

export function digimons(items) {
  const container = createElement('div', {
    className: 'digimons'
  });

  items.forEach(item => {
    const element = createElement('div', {
      innerText: item,
      className: 'digimon'
    });
    container.appendChild(element);
  });
  return container;
}
