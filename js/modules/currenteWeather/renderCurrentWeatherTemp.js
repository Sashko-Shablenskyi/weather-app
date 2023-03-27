const tempContainer = document.querySelector('.temp');

export function renderCurrentWeatherTemp({ temp }) {
  const template = `
        <div class="temp__value">${temp}<span>°C</span></div>
      `;

  tempContainer.innerHTML = `${template}`;
}
