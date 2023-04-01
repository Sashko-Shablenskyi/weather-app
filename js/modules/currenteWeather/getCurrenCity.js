import { renderCurrentCity } from './renderCurrentCity.js';

export function getCurrenCity(data) {
  const nameOfCity = data.name;
  const nameOfCountry = data.sys.country;

  renderCurrentCity({ nameOfCity, nameOfCountry });
}
