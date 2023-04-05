'use strict';

import { loadData } from './modules/data/loadData.js';

// -----ServerLinks-----

const apiKey = '3f379227027980e3ab955b5535c438a1',
  weather = 'weather',
  forecast = 'forecast';

function detectServer(type, cityName) {
  return `https://api.openweathermap.org/data/2.5/${type}?units=metric&q=${cityName}&appid=${apiKey}`;
}

function updateServers({ weather, forecast, cityName }) {
  loadData(detectServer(weather, cityName));
  loadData(detectServer(forecast, cityName));
}

const formBtn = document.querySelector('.form-btn'),
  formInput = document.querySelector('.form-input');

formBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const cityName = formInput.value;

  updateServers({ weather, forecast, cityName });
});

// ________

const searchBtn = document.querySelector('.header__search'),
  popup = document.querySelector('.popup'),
  popupInput = document.querySelector('.form-input');

popupInput.focus();

searchBtn.addEventListener('click', () => {
  popup.classList.remove('popup__close');
});

// ________

const input = document.querySelector('.form-input'),
  errorContainer = document.querySelector('.error__message');

input.addEventListener('input', () => {
  errorContainer.innerHTML = '';
});
