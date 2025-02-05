import FormEditView from '../view/form-edit-view';
import PointView from '../view/point-view';
import { render, replace, remove } from '../framework/render';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export default class PointPresenter {
  #eventsListComponent = null;

  #pointComponent = null;
  #formEditComponent = null;

  #point = null;
  #destinations = [];
  #offers = [];
  #mode = Mode.DEFAULT;

  #onClickFavoriteButton = null;
  #onOpenEditForm = null;
  #handleModeChange = null;

  constructor({eventsListComponent, onClickFavoriteButton, onOpenEditForm, onModeChange}) {
    this.#eventsListComponent = eventsListComponent;
    this.#onClickFavoriteButton = onClickFavoriteButton;
    this.#onOpenEditForm = onOpenEditForm;
    this.#handleModeChange = onModeChange;
  }

  init(point, destinations, offers) {
    this.#point = point;
    this.#destinations = destinations;
    this.#offers = offers;

    const prevPointComponent = this.#pointComponent;
    const prevFormEditComponent = this.#formEditComponent;

    this.#pointComponent = new PointView({
      point: this.#point,
      destinations: this.#destinations,
      offers: this.#offers,
      onOpenEditForm: this.#openEditForm,
      onClickFavoriteButton: this.#toggleFavoriteState,
    });

    this.#formEditComponent = new FormEditView({
      point: this.#point,
      destinations: this.#destinations,
      offers: this.#offers,
      onFormSubmit: this.#handleFormSubmit,
      onFormClose: this.#handleFormClose,
    });

    if (prevPointComponent === null || prevFormEditComponent === null) {
      render(this.#pointComponent, this.#eventsListComponent);
      return;
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#formEditComponent, prevFormEditComponent);
    }

    remove(prevPointComponent);
    remove(prevFormEditComponent);
  }

  destroy() {
    remove(this.#pointComponent);
    remove(this.#formEditComponent);
  }

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#replaceFormToPoint();
    }
  }

  #toggleFavoriteState = () => {
    this.#onClickFavoriteButton({...this.#point, isFavorite: !this.#point.isFavorite});
  };

  #replacePointToForm() {
    this.#handleModeChange();
    replace(this.#formEditComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = Mode.EDITING;
  }

  #replaceFormToPoint() {
    replace(this.#pointComponent, this.#formEditComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = Mode.DEFAULT;
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.#replaceFormToPoint();
    }
  };

  #openEditForm = () => {
    this.#replacePointToForm();
  };

  #handleFormSubmit = () => {
    this.#replaceFormToPoint();
  };

  #handleFormClose = () => {
    this.#replaceFormToPoint();
  };
}
