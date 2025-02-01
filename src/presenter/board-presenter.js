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

  constructor({boardContainer, pointModel}) {
    this.#boardContainer = boardContainer;
    this.#pointModel = pointModel;
  }

  init() {
    const points = this.#pointModel.points;
    const destinations = this.#pointModel.destinations;
    const offers = this.#pointModel.offers;

    if (!points.length) {
      render (new NoPointView(), this.#boardContainer);
      return;
    }

    render(this.#sortComponent, this.#boardContainer);
    render(this.#eventsListComponent, this.#boardContainer);

    for (const point of points) {
      this.#renderPoint(point, destinations, offers);
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
}
