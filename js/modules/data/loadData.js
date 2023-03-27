import { getData } from './getData.js';

export async function loadData(server) {
  const response = await fetch(server, {
    method: 'GET',
  });
  const responseResult = await response.json();

  if (response.ok) {
    getData({ responseResult, server });
  } else {
    weatherBlock.innerHTML = responseResult.message;
  }
}
