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
  dateContainer.innerHTML = `${date} ${monthsName[month]} ${year}`;
}
