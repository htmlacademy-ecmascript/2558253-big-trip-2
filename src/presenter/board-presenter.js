import InfoTripView from '../view/info-trip-view.js';
import FilterView from '../view/filter-view.js';
import SortView from '../view/sort-view.js';
import EventsListView from '../view/events-list-view.js';
import FormEditView from '../view/form-edit-view.js';
import PointView from '../view/point-view.js';
import {render, RenderPosition} from '../render.js';

export default class BoardPresenter {
  sortComponent = new SortView();
  eventsListComponent = new EventsListView();

  constructor({container}) {
    this.container = container;
  }

  init() {
    render(this.sortComponent, this.container);
    render(this.eventsListComponent, this.container);
    render(new FormEditView(), this.eventsListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.eventsListComponent.getElement());
    }
    const headerContainer = document.querySelector('.trip-main');
    if (headerContainer) {
      render(new InfoTripView(), headerContainer, RenderPosition.AFTERBEGIN);
    }
    const filterContainer = document.querySelector('.trip-controls__filters');
    if (filterContainer) {
      render(new FilterView(), filterContainer);
    }
  }
}
