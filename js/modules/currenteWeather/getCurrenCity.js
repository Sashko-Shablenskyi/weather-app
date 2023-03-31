import { renderCurrentCity } from './renderCurrentCity.js';

export function getCurrenCity(data) {
  const nameOfCity = data.name;

  renderCurrentCity(nameOfCity);
}
