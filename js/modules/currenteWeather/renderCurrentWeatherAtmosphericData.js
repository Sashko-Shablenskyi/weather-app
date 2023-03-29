const atmosphericDataContainer = document.querySelector('.atmospheric-data');

export function renderCurrentWeatherAtmosphericData({
  wind,
  humidity,
  pressure,
  clouds,
}) {
  const template = `
        <div class="atmospheric-data__box">
            <div class="atmospheric-data__name">Wind</div>
            <span>${wind} m/s</span>
        </div>
    
        <div class="atmospheric-data__box">
            <div class="atmospheric-data__name">Humidity</div>
            <span>${humidity}%</span>
        </div>
    
        <div class="atmospheric-data__box">
            <div class="atmospheric-data__name">Pressure</div>
            <span>${pressure} hPa</span>
        </div>
    
        <div class="atmospheric-data__box">
            <div class="atmospheric-data__name">Cloudiness</div>
            <span>${clouds}%</span>
        </div>
      `;

  atmosphericDataContainer.innerHTML = `${template}`;
}
