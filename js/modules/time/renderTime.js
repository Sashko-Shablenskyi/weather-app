const timeContainer = document.querySelector('.time'),
  daysName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function renderTime({ day, hours, minutes }) {
  if (minutes < 10) {
    timeContainer.innerHTML = `<span>${daysName[day]}</span> ${hours}:0${minutes}`;
  } else {
    timeContainer.innerHTML = `<span>${daysName[day]}</span> ${hours}:${minutes}`;
  }
}
