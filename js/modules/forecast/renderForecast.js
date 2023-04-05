export function renderForecast({
  day,
  month,
  hours,
  weatherIcon,
  temp,
  weatherStatus,
  forecastContainer,
}) {
  const template = `
        <div class="swiper-slide">
          <div class="forecast__box">
            <div class="forecast__day">${day}/${month}</div>
            <div class="forecast__time">${hours}:00</div>
            <div class="forecast__img">
              <img src="http://openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherStatus}">
            </div>
            <div class="forecast__temp">
              <div>${temp}<span>°C</span></div>
            </div>
          </div>
        </div>
      `;

  forecastContainer.innerHTML += `${template}`;
}
