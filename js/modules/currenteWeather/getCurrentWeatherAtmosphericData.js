import { renderCurrentWeatherAtmosphericData } from './renderCurrentWeatherAtmosphericData.js';

export function getCurrentWeatherAtmosphericData(data) {
  const wind = data.wind.speed,
    humidity = data.main.humidity;

  renderCurrentWeatherAtmosphericData({
    wind,
    humidity,
  });
}
