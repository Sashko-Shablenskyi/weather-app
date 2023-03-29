import { renderSun } from './renderSun.js';
import { transformSunTimestamp } from './transformSunTimestamp.js';

export function getSunData(data) {
  const sunriseTimestamp = data.sys.sunrise,
    sunsetTimestamp = data.sys.sunset;

  const sunrise = transformSunTimestamp(sunriseTimestamp);
  const sunset = transformSunTimestamp(sunsetTimestamp);

  renderSun({ sunrise, sunset });
}
