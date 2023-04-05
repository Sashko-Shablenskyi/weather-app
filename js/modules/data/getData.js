import { getCurrentWeatherImg } from '../currenteWeather/getCurrentWeatherImg.js';
import { getCurrentWeatherTemp } from '../currenteWeather/getCurrentWeatherTemp.js';
import { getCurrentWeatherAtmosphericData } from '../currenteWeather/getCurrentWeatherAtmosphericData.js';
import { getForecastData } from '../forecast/getForecastData.js';
import { getSunData } from '../sun/getSunData.js';
import { getCurrenCity } from '../currenteWeather/getCurrenCity.js';
import { getCurrentWeatherDescr } from '../currenteWeather/getCurrentWeatherDescr.js';
import { getDate } from '../date/getDate.js';
import { slider } from '../slider/slider.js';

export function getData({ responseResult, server }) {
  if (server.indexOf('/weather') !== -1) {
    getCurrentWeatherImg(responseResult);
    getCurrentWeatherTemp(responseResult);
    getCurrentWeatherAtmosphericData(responseResult);
    getSunData(responseResult);
    getCurrenCity(responseResult);
    getCurrentWeatherDescr(responseResult);
    getDate(responseResult);
    slider();
  }

  if (server.indexOf('/forecast') !== -1) {
    getForecastData(responseResult);
  }
}
