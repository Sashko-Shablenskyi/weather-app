import { renderTime } from '../time/renderTime.js';
import { renderDate } from './renderDate.js';

export function getDate() {
  const now = new Date(),
    year = now.getFullYear(),
    month = now.getMonth(),
    day = now.getDay(),
    date = now.getDate(),
    hours = now.getHours(),
    minutes = now.getMinutes();

  renderDate({ date, month, year });
  renderTime({ day, hours, minutes });

  setInterval(() => {
    getDate();
  }, 150000);
}
