const errorContainer = document.querySelector('.error__message'),
  popup = document.querySelector('.popup');

import { getData } from './getData.js';

export async function loadData(server) {
  const response = await fetch(server, {
    method: 'GET',
  });

  const responseResult = await response.json();

  if (response.ok) {
    getData({ responseResult, server });
    popup.classList.add('popup__close');
  } else {
    errorContainer.innerHTML = responseResult.message;
  }
}
