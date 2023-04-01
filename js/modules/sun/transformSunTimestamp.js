export function transformSunTimestamp(timeStamp) {
  const date = new Date(timeStamp * 1000),
    hours = date.getHours(),
    minutes = date.getMinutes();

  if (minutes < 10) {
    return `${hours}:0${minutes}`;
  } else {
    return `${hours}:${minutes}`;
  }
}
