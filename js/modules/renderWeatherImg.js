const weatherImg = document.querySelector('.weather__img');

export function renderWeatherImg(data) {
  const weatherStatus = data.weather[0].main,
    weatherIcon = data.weather[0].icon;

  weatherImg.innerHTML = `<img src="http://openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherStatus}">`;
}
