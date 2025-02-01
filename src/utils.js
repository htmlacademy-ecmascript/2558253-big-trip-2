import dayjs from 'dayjs';
import { FilterType } from './const';

const now = dayjs();

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
  const hours = differenceInHours % 24;
  const minutes = differenceInMinutes % 60;
  // Форматируем результат в зависимости от разницы
  if (differenceInMinutes < 60) {
    return `${differenceInMinutes}M`;
  } else if (differenceInDays < 1) {
    return `${String(hours).padStart(2, '0')}H ${String(minutes).padStart(2, '0')}M`;
  } else {
    return `${String(differenceInDays).padStart(2, '0')}D ${String(hours).padStart(2, '0')}H ${String(minutes).padStart(2, '0')}M`;
  }
}

function capitalizeFirstLetter(string) {
  if (!string) {
    return '';
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function isPointFuture(dateFrom) {
  const startDate = dayjs(dateFrom);
  return startDate.isAfter(now);
}

function isPointPresent (dateFrom, dateTo) {
  const startDate = dayjs(dateFrom);
  const endDate = dayjs(dateTo);
  return startDate.isBefore(now) && endDate.isAfter(now);
}

function isPointPast(dateTo) {
  const endDate = dayjs(dateTo);
  return endDate.isBefore(now);
}

const filter = {
  [FilterType.EVERYTHING]: (points) => [...points],
  [FilterType.FUTURE]: (points) => points.filter((point) => isPointFuture(point.dateFrom)),
  [FilterType.PRESENT]: (points) => points.filter((point) => isPointPresent(point.dateFrom, point.dateTo)),
  [FilterType.PAST]: (points) => points.filter((point) => isPointPast(point.dateTo)),
};

function generateFilters(points) {
  return Object.entries(filter).map(
    ([filterType, filterPoints]) => ({
      type: filterType,
      count: filterPoints(points).length,
    }),
  );
}

export { getRandomArrayElement, humanizeDate, getDateDifference, capitalizeFirstLetter, generateFilters };
