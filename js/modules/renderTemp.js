const tempContainer = document.querySelector('.temp');

export function renderTemp(data) {
  const temp = Math.round(data.main.temp),
    feelsLike = Math.round(data.main.feels_like);

  const template = `
      <div class="temp__value">${temp}<span>°C</span></div>
      <div class="temp__fils-like">${feelsLike}<span>°C</span></div>
    `;

  tempContainer.innerHTML = `${template}`;
}
