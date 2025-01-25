import PointModel from './model/points-model.js';
import BoardPresenter from './presenter/board-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import InfoPresenter from './presenter/info-presenter.js';

const header = document.querySelector('.page-header');
const infoHeader = header.querySelector('.trip-main');
const filterHeader = header.querySelector('.trip-controls__filters');

const main = document.querySelector('.page-main');
const tripEventsContainer = main.querySelector('.trip-events');

const filterPresenter = new FilterPresenter({filterContainer: filterHeader});
const infoPresenter = new InfoPresenter({infoContainer: infoHeader});
const pointModel = new PointModel();
pointModel.init();

const boardPresenter = new BoardPresenter({boardContainer: tripEventsContainer, pointModel: pointModel});
boardPresenter.init();

filterPresenter.init();
infoPresenter.init();
