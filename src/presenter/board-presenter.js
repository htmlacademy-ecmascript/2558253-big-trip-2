import { render } from '../framework/render.js';
import { updateItem } from '../utils.js';
import SortView from '../view/sort-view.js';
import EventsListView from '../view/events-list-view.js';
import PointPresenter from './point-presenter.js';
import NoPointView from '../view/no-point-view.js';

export default class BoardPresenter {
  #boardContainer = null;
  #pointModel = null;
  #sortComponent = new SortView();
  #eventsListComponent = new EventsListView();
  #noPointView = new NoPointView();

  #points = [];
  #destinations = [];
  #offers = [];
  #pointPresenters = new Map();

  constructor({boardContainer, pointModel}) {
    this.#boardContainer = boardContainer;
    this.#pointModel = pointModel;
  }

  init() {
    this.#points = [...this.#pointModel.points];
    this.#destinations = [...this.#pointModel.destinations];
    this.#offers = [...this.#pointModel.offers];

    if (!this.#points.length) {
      this.#renderNoPoint();
      return;
    }

    this.#renderSort();
    this.#renderEventsListComponent();

    for (const point of this.#points) {
      this.#renderPoint(point, this.#destinations, this.#offers);
    }
  }

  #renderPoint(point, destinations, offers) {
    const pointPresenter = new PointPresenter({
      eventsListComponent: this.#eventsListComponent.element,
      onClickFavoriteButton: this.#handlePointChange,
    });
    pointPresenter.init(point, destinations, offers);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #handlePointChange = (updatedPoint) => {
    this.#points = updateItem(this.#points, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint, this.#destinations, this.#offers);
  };

  #renderSort() {
    render(this.#sortComponent, this.#boardContainer);
  }

  #renderEventsListComponent() {
    render(this.#eventsListComponent, this.#boardContainer);
  }

  #renderNoPoint() {
    render (this.#noPointView, this.#boardContainer);
  }
}
