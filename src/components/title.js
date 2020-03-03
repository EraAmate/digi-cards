import './title.scss';
import { createElement } from '../lib/dom';

export function title(text) {
  const element = createElement('h1', {
    innerText: text,
    className: 'title'
  });

  return element;
}

export function subtitle(text) {
  const element = createElement('h3', {
    innerText: 'Find your personal digital monster',
    className: 'subtit'
  });

  return element;
}
