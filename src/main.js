import BoardPresenter from './presenter/board-presenter.js';
// import InfoTripView from './view/info-trip-view.js';
// import FilterView from './view/filter-view.js';
// import {render, RenderPosition} from './render.js';

// // const siteMainElement = document.querySelector('.main');
// const siteHeaderElement = document.querySelector('.trip-main');
// const filtersContainer = document.querySelector('.trip-controls__filters');
const tripEventsContainer = document.querySelector('.trip-events');
const boardPresenter = new BoardPresenter({container: tripEventsContainer});

// render(new InfoTripView(), siteHeaderElement, RenderPosition.BEFOREBEGIN);
// render(new FilterView(), filtersContainer);
boardPresenter.init();
