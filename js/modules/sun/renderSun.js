const sunContainer = document.querySelector('.sun');

export function renderSun({ sunrise, sunset }) {
  const template = `
        <div class="sun__box">
          <div class="sun__title">Sunrise</div>
          <div class="sun__time">${sunrise}</div>
          <img src="./img/Sunrise.png" alt="Sunrise">
        </div>
        <div class="sun__box">
          <div class="sun__title">Sunset</div>
          <div class="sun__time">${sunset}</div>
          <img src="./img/Sunset.png" alt="Sunset">
        </div>
      `;

  sunContainer.innerHTML = `${template}`;
}
