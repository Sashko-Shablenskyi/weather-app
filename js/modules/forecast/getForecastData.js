import { renderForecast } from './renderForecast.js';

export function getForecastData(data) {
  const numbOfData = data.list.length;

  for (let i = 0; i < numbOfData; i++) {
    const weatherIcon = data.list[i].weather[0].icon;

    const timeStamp = data.list[i].dt,
      date = new Date(timeStamp * 1000),
      month = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2),
      hours = date.getHours();

    const tempMax = Math.round(data.list[i].main.temp_max),
      tempMin = Math.round(data.list[i].main.temp_min);

    renderForecast({ day, month, hours, weatherIcon, tempMin, tempMax });
  }
}
