import dayjs from 'dayjs';

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function humanizeDate(date, format) {
  return date ? dayjs(date).format(format) : '';
}

function getDateDifference(dateFrom, dateTo) {
  // Парсим даты
  const startDate = dayjs(dateFrom);
  const endDate = dayjs(dateTo);

  // Вычисляем разницу
  const differenceInMinutes = endDate.diff(startDate, 'minute');
  const differenceInHours = endDate.diff(startDate, 'hour');
  const differenceInDays = endDate.diff(startDate, 'day');

  // Форматируем результат в зависимости от разницы
  if (differenceInMinutes < 60) {
    return `${differenceInMinutes}M`;
  } else if (differenceInDays < 1) {
    const hours = differenceInHours % 24;
    const minutes = differenceInMinutes % 60;
    return `${String(hours).padStart(2, '0')}H ${String(minutes).padStart(2, '0')}M`.trim();
  } else {
    const days = differenceInDays;
    const hours = differenceInHours % 24;
    const minutes = differenceInMinutes % 60;
    return `${String(days).padStart(2, '0')}D ${String(hours).padStart(2, '0')}H ${String(minutes).padStart(2, '0')}M`.trim();
  }
}

function capitalizeFirstLetter(string) {
  if (!string) {
    return '';
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export { getRandomArrayElement, humanizeDate, getDateDifference, capitalizeFirstLetter };
