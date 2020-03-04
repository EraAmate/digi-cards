import './title.scss';
import { createElement } from '../lib/dom';

export function title(text) {
  const element = createElement('h1', {
    innerText: text,
    className: 'title'
  });

  return element;
}

export function subtitle() {
  const element = createElement('h2', {
    innerText: 'Find your personal digital monster',
    className: 'subtit'
  });

  return element;
}
