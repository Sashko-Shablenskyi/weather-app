import { getDataWeather } from './getDataWeather.js';

export async function loadData(server) {
  const response = await fetch(server, {
    method: 'GET',
  });
  const responseResult = await response.json();

  if (response.ok) {
    getDataWeather({ responseResult, server });
  } else {
    weatherBlock.innerHTML = responseResult.message;
  }
}
