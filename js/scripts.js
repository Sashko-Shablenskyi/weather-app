'use strict';

import { loadData } from './modules/data/loadData.js';
import { getDate } from './modules/date/getDate.js';
import { slider } from './modules/slider/slider.js';

// -----ServerLinks-----

const apiKey = '3f379227027980e3ab955b5535c438a1';
export const serverWeather = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=Drohobych&appid=${apiKey}`;
export const serverForecast = `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=Drohobych&appid=${apiKey}`;

loadData(serverWeather);
loadData(serverForecast);

// -----DataFormating-----

getDate();

// -----Slider-----

slider();
