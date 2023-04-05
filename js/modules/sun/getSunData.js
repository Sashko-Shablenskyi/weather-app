import { renderSun } from './renderSun.js';
import { transformSunTimestamp } from './transformSunTimestamp.js';

export function getSunData(data) {
  const sunriseTimestamp = data.sys.sunrise,
    sunsetTimestamp = data.sys.sunset,
    timezone = data.timezone;

  const sunrise = transformSunTimestamp(sunriseTimestamp, timezone);
  const sunset = transformSunTimestamp(sunsetTimestamp, timezone);

  renderSun({ sunrise, sunset });
}
