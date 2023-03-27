import { serverWeather, serverForecast } from '../../scripts.js';
import { getCurrentWeatherImg } from '../currenteWeather/getCurrentWeatherImg.js';
import { getCurrentWeatherTemp } from '../currenteWeather/getCurrentWeatherTemp.js';
import { getCurrentWeatherAtmosphericData } from '../currenteWeather/getCurrentWeatherAtmosphericData.js';
import { getForecastData } from '../forecast/getForecastData.js';

export function getData({ responseResult, server }) {
  if (server == serverWeather) {
    getCurrentWeatherImg(responseResult);
    getCurrentWeatherTemp(responseResult);
    getCurrentWeatherAtmosphericData(responseResult);
  }
  if (server == serverForecast) {
    getForecastData(responseResult);
  }
}
