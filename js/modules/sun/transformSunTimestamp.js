export function transformSunTimestamp(timeStamp) {
  const date = new Date(timeStamp * 1000),
    hours = date.getHours(),
    minutes = date.getMinutes();

  return `${hours}:${minutes}`;
}
