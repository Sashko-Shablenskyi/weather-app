import { renderCurrentWeatherImg } from './renderCurrentWeatherImg.js';

export function getCurrentWeatherImg(data) {
  const weatherStatus = data.weather[0].main,
    weatherIcon = data.weather[0].icon;

  renderCurrentWeatherImg({ weatherIcon, weatherStatus });
}
