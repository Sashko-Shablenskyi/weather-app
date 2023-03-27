import { renderCurrentWeatherTemp } from './renderCurrentWeatherTemp.js';

export function getCurrentWeatherTemp(data) {
  const temp = Math.round(data.main.temp);

  renderCurrentWeatherTemp({ temp });
}
