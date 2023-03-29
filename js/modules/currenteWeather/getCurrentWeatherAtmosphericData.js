import { renderCurrentWeatherAtmosphericData } from './renderCurrentWeatherAtmosphericData.js';

export function getCurrentWeatherAtmosphericData(data) {
  const wind = data.wind.speed,
    humidity = data.main.humidity,
    pressure = data.main.pressure,
    clouds = data.clouds.all;

  renderCurrentWeatherAtmosphericData({
    wind,
    humidity,
    pressure,
    clouds,
  });
}
