import BoardPresenter from './presenter/board-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import InfoPresenter from './presenter/info-presenter.js';

const header = document.querySelector('.page-header');
const infoHeader = header.querySelector('.trip-main');
const filterHeader = header.querySelector('.trip-controls__filters');

const main = document.querySelector('.page-main');
const tripEventsContainer = main.querySelector('.trip-events');

const boardPresenter = new BoardPresenter({boardContainer: tripEventsContainer});
const filterPresenter = new FilterPresenter({filterContainer: filterHeader});
const infoPresenter = new InfoPresenter({infoContainer: infoHeader});

boardPresenter.init();
filterPresenter.init();
infoPresenter.init();
