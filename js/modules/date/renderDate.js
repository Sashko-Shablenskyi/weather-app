const dateContainer = document.querySelector('.date'),
  monthsName = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

export function renderDate({ date, month, year }) {
  dateContainer.innerHTML = `
  <div class="date__title">Local date: </div>
  ${date} ${monthsName[month]} ${year}`;
}
