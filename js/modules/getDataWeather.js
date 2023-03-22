import { renderWeatherImg } from './renderWeatherImg.js';
import { renderTemp } from './renderTemp.js';
import { renderAtmosphericData } from './renderAtmosphericData.js';
import { serverWeather, serverForecast } from '../scripts.js';

export function getDataWeather({ responseResult, server }) {
  if (server == serverWeather) {
    renderWeatherImg(responseResult);
    renderTemp(responseResult);
    renderAtmosphericData(responseResult);
  }
  if (server == serverForecast) {
    console.log(responseResult);
  }
}
