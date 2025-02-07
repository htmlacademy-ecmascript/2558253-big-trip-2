import { render, replace } from '../framework/render.js';
import { updateItem } from '../utils.js';
import { SortType } from '../const.js';
import { sortByDefault, sortByTime, sortByPrice } from '../utils.js';
import SortView from '../view/sort-view.js';
import EventsListView from '../view/events-list-view.js';
import PointPresenter from './point-presenter.js';
import NoPointView from '../view/no-point-view.js';

export default class BoardPresenter {
  #boardContainer = null;
  #pointModel = null;
  #sortComponent = null;
  #eventsListComponent = new EventsListView();
  #noPointView = new NoPointView();

  #points = [];
  #destinations = [];
  #offers = [];
  #pointPresenters = new Map();

  #currentSortType = SortType.DEFAULT;
  #defaultSortedPoints = [];

  constructor({boardContainer, pointModel}) {
    this.#boardContainer = boardContainer;
    this.#pointModel = pointModel;
  }

  init() {
    this.#points = [...this.#pointModel.points];
    this.#destinations = [...this.#pointModel.destinations];
    this.#offers = [...this.#pointModel.offers];
    this.#sortPoints(SortType.DEFAULT);
    this.#defaultSortedPoints = [...this.#points];

    if (!this.#points.length) {
      this.#renderNoPoint();
      return;
    }

    this.#renderSort();
    this.#renderEventsList();
  }

  #sortPoints(sortType) {
    switch(sortType) {
      case SortType.DEFAULT:
        this.#points.sort(sortByDefault);
        break;
      case SortType.SORT_TIME:
        this.#points.sort(sortByTime);
        break;
      case SortType.SORT_PRICE:
        this.#points.sort(sortByPrice);
        break;
    }

    this.#currentSortType = sortType;
  }

  #renderSort() {
    const prevSortComponent = this.#sortComponent;

    this.#sortComponent = new SortView ({
      onSortTypeChange: this.#handleSortTypeChange,
      currentSortType: this.#currentSortType,
    });

    if (prevSortComponent === null) {
      render(this.#sortComponent, this.#boardContainer);
    } else {
      replace(this.#sortComponent, prevSortComponent);
    }
  }

  #renderEventsListComponent() {
    render(this.#eventsListComponent, this.#boardContainer);
  }

  #renderNoPoint() {
    render (this.#noPointView, this.#boardContainer);
  }

  #renderPoint(point, destinations, offers) {
    const pointPresenter = new PointPresenter({
      eventsListComponent: this.#eventsListComponent.element,
      onClickFavoriteButton: this.#handlePointChange,
      onModeChange: this.#handleModeChange,
    });
    pointPresenter.init(point, destinations, offers);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #renderEventsList() {
    this.#renderEventsListComponent();

    for (const point of this.#points) {
      this.#renderPoint(point, this.#destinations, this.#offers);
    }
  }

  #clearEventsList() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
  }

  #handlePointChange = (updatedPoint) => {
    this.#points = updateItem(this.#points, updatedPoint);
    this.#defaultSortedPoints = updateItem(this.#defaultSortedPoints, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint, this.#destinations, this.#offers);
  };

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#sortPoints(sortType);
    this.#clearEventsList();
    this.#renderEventsList();
    this.#renderSort();
  };
}
