'use strict';

import { loadData } from './modules/data/loadData.js';
import { getDate } from './modules/date/getDate.js';
import { slider } from './modules/slider/slider.js';

// -----ServerLinks-----

const apiKey = '3f379227027980e3ab955b5535c438a1';

export function serverForecast(cityName) {
  return `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${cityName}&appid=${apiKey}`;
}

export function serverWeather(cityName) {
  return `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${apiKey}`;
}

function updateServers(cityName) {
  loadData(serverWeather(cityName));
  loadData(serverForecast(cityName));
}

const formBtn = document.querySelector('.form-btn'),
  formInput = document.querySelector('.form-input'),
  popup = document.querySelector('.popup');

formBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const cityName = formInput.value;

  updateServers(cityName);

  getDate();
  slider();

  popup.classList.add('popup__close');
});
