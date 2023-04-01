'use strict';

import { loadData } from './modules/data/loadData.js';
import { getDate } from './modules/date/getDate.js';
import { slider } from './modules/slider/slider.js';

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

  getDate();
  slider();
});

const searchBtn = document.querySelector('.header__search'),
  popup = document.querySelector('.popup');

searchBtn.addEventListener('click', () => {
  popup.classList.remove('popup__close');
});
