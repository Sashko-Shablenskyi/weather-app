import { renderForecast } from './renderForecast.js';

const forecastContainer = document.querySelector('.swiper-wrapper');

export function getForecastData(data) {
  const numbOfData = data.list.length;
  forecastContainer.innerHTML = '';

  console.log(data);

  for (let i = 0; i < numbOfData; i++) {
    const weatherIcon = data.list[i].weather[0].icon,
      weatherStatus = data.list[i].weather[0].description;

    const timeStamp = data.list[i].dt,
      date = new Date(timeStamp * 1000),
      month = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2),
      hours = date.getHours();

    const temp = Math.round(data.list[i].main.temp);

    renderForecast({
      day,
      month,
      hours,
      weatherIcon,
      temp,
      weatherStatus,
      forecastContainer,
    });
  }
}
