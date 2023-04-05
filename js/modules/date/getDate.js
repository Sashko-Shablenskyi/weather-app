import { renderTime } from '../time/renderTime.js';
import { renderDate } from './renderDate.js';

export function getDate(data) {
  const timezone = data.timezone;
  const now = new Date();

  const utcYear = now.getUTCFullYear(),
    utcMonth = now.getUTCMonth(),
    utcDay = now.getUTCDay(),
    utcDate = now.getUTCDate(),
    utcHours = now.getUTCHours(),
    utcMinutes = now.getUTCMinutes();

  const localHours = utcHours + timezone / 3600;
  const localMinutes = utcMinutes + (timezone % 3600) / 60;

  renderDate({ date: utcDate, month: utcMonth, year: utcYear });
  renderTime({ day: utcDay, hours: localHours, minutes: localMinutes });

  const reload = setInterval(() => {
    getDate(data);
    clearInterval(reload);
  }, 10000);
}
