import { render, replace } from '../framework/render.js';
import SortView from '../view/sort-view.js';
import EventsListView from '../view/events-list-view.js';
import FormEditView from '../view/form-edit-view.js';
import PointView from '../view/point-view.js';
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
    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const pointComponent = new PointView(point, destinations, offers, () => {
      replacePointToForm();
      document.addEventListener('keydown', escKeyDownHandler);
    });

    const formEditComponent = new FormEditView(point, destinations, offers, () => {
      replaceFormToPoint();
      document.removeEventListener('keydown', escKeyDownHandler);
    });

    function replacePointToForm() {
      replace(formEditComponent, pointComponent);
    }

    function replaceFormToPoint() {
      replace(pointComponent, formEditComponent);
    }

    render(pointComponent, this.#eventsListComponent.element);
  }

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
