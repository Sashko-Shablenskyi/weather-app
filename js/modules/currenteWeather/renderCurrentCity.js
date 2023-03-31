const cityNameContainer = document.querySelector('.current__location');

export function renderCurrentCity(data) {
  cityNameContainer.innerHTML = data;
}
