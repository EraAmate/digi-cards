import './favoriten.scss';

import { createElement, appendContent } from '../lib/dom';

export function createFavorElem(value) {
  const favorCont = createElement('div', {
    className: 'favorElem'
  });

  value.items.forEach(item => {
    const favorite = createElement('div', {
      className: 'favorite',
      innerText: item
    });
    appendContent(favorCont, favorite);
  });
  return favorCont;
}
