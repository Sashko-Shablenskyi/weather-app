const weatherImg = document.querySelector('.weather__img');

export function renderCurrentWeatherImg({ weatherIcon, weatherStatus }) {
  weatherImg.innerHTML = `<img src="http://openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherStatus}">`;
}
