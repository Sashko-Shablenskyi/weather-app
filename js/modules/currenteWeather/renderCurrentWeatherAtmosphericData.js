const atmosphericDataContainer = document.querySelector('.atmospheric-data');

export function renderCurrentWeatherAtmosphericData({ wind, humidity }) {
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
            <span>3/10</span>
        </div>
    
        <div class="atmospheric-data__box">
            <div class="atmospheric-data__name">Rain</div>
            <span>0.2%</span>
        </div>
      `;

  atmosphericDataContainer.innerHTML = `${template}`;
}
