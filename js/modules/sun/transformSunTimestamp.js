export function transformSunTimestamp(timeStamp, timezone) {
  const date = new Date((timeStamp + timezone) * 1000),
    hours = date.getUTCHours(),
    minutes = date.getMinutes();

  if (minutes < 10) {
    return `${hours}:0${minutes}`;
  } else {
    return `${hours}:${minutes}`;
  }
}
