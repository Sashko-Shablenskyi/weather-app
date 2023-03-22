'use strict';

import { loadData } from './modules/loadData.js';

const apiKey = '3f379227027980e3ab955b5535c438a1';

export const serverWeather = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=Drohobych&appid=${apiKey}`;
export const serverForecast = `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=Drohobych&appid=${apiKey}`;

loadData(serverWeather);
loadData(serverForecast);

const dateContainer = document.querySelector('.date');
const timeContainer = document.querySelector('.time');
const monthsName = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const daysName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

getDate();

function getDate() {
  const now = new Date(),
    year = now.getFullYear(),
    month = now.getMonth(),
    day = now.getDay(),
    date = now.getDate(),
    hours = now.getHours(),
    minutes = now.getMinutes();

  renderDate({ date, month, year });
  renderTime({ day, hours, minutes });
}

function renderDate({ date, month, year }) {
  dateContainer.innerHTML = `${date} ${monthsName[month]} ${year}`;
}

function renderTime({ day, hours, minutes }) {
  timeContainer.innerHTML = `<span>${daysName[day]}</span> ${hours}:${minutes}`;
}
