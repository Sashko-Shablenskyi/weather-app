export function renderAtmosphericData(data) {
  const atmosphericDdatacontainer = document.querySelector('.atmospheric-data');
  const wind = data.wind.speed,
    humidity = data.main.humidity;

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

  atmosphericDdatacontainer.innerHTML = `${template}`;
}
