import './search.scss';
import { createElement } from '../lib/dom';

export function search(text) {
  const element = createElement('input', {
    innerText: text,
    className: 'search',
    placeholder: 'looking for...'
  });

  return element;
}
