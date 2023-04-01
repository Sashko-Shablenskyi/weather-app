const cityNameContainer = document.querySelector('.current__location');

export function renderCurrentCity({ nameOfCity, nameOfCountry }) {
  cityNameContainer.innerHTML = `${nameOfCity}, ${nameOfCountry}`;
}
