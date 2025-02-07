import { getRandomArrayElement } from '../utils';

const points = [
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808a',
    basePrice: 1500,
    dateFrom: '2025-01-10T22:55:56.845Z',
    dateTo: '2025-01-21T11:22:13.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edca1',
    isFavorite: false,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa37',
      'b4c3e4e6-9053-42ce-b747-e281314baa38',
      'b4c3e4e6-9053-42ce-b747-e281314baa39',
      'b4c3e4e6-9053-42ce-b747-e281314baa40'
    ],
    type: 'flight'
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808b',
    basePrice: 1000,
    dateFrom: '2025-02-01T22:55:56.845Z',
    dateTo: '2025-02-12T11:22:13.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edca2',
    isFavorite: false,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa35',
      'b4c3e4e6-9053-42ce-b747-e281314baa36'
    ],
    type: 'train'
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808c',
    basePrice: 3400,
    dateFrom: '2025-04-26T22:55:56.845Z',
    dateTo: '2025-04-30T11:22:13.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edca3',
    isFavorite: false,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa31',
      'b4c3e4e6-9053-42ce-b747-e281314baa32',
      'b4c3e4e6-9053-42ce-b747-e281314baa33'
    ],
    type: 'taxi'
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808d',
    basePrice: 900,
    dateFrom: '2025-05-09T22:55:56.845Z',
    dateTo: '2025-05-19T11:22:13.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edca4',
    isFavorite: false,
    offers: [],
    type: 'sightseeing'
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808e',
    basePrice: 5800,
    dateFrom: '2025-06-01T22:55:56.845Z',
    dateTo: '2025-06-02T11:22:13.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edca5',
    isFavorite: true,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa41',
      'b4c3e4e6-9053-42ce-b747-e281314baa42'
    ],
    type: 'restaurant'
  },
  {
    id: 'f4b62099-333f-4c3d-a702-94eec4a2808d',
    basePrice: 1520,
    dateFrom: '2025-07-09T22:55:56.845Z',
    dateTo: '2025-07-13T11:22:13.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edca2',
    isFavorite: false,
    offers: [],
    type: 'sightseeing'
  },
  {
    id: 'f4b624549-293f-4c3d-a702-94eec4a2808b',
    basePrice: 880,
    dateFrom: '2025-08-30T22:55:56.845Z',
    dateTo: '2025-09-02T11:22:13.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edca5',
    isFavorite: false,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa36'
    ],
    type: 'train'
  },
];

const getRandomPoint = (() => {
  const usedIds = new Set();

  return () => {
    const availablePoints = points.filter((point) => !usedIds.has(point.id));

    if (availablePoints.length === 0) {
      usedIds.clear(); // Сброс при исчерпании всех точек
      return getRandomArrayElement(points);
    }

    const randomPoint = getRandomArrayElement(availablePoints);
    usedIds.add(randomPoint.id);
    return randomPoint;
  };
})();

export { getRandomPoint };
