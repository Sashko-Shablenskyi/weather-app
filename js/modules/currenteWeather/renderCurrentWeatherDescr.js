const cityNameContainer = document.querySelector('.current__description');

export function renderCurrentWeatherDescr(data) {
  cityNameContainer.innerHTML = data;
}
