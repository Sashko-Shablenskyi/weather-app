import { renderCurrentWeatherDescr } from './renderCurrentWeatherDescr.js';

export function getCurrentWeatherDescr(data) {
  const weatherDescr = data.weather[0].description;

  renderCurrentWeatherDescr(weatherDescr);
}
