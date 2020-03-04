import './search.scss';
import { createElement } from '../lib/dom';

export function search(value) {
  const element = createElement('input', {
    type: 'search',
    className: 'search',
    placeholder: 'looking for...',
    value: value
  });

  return element;
}
