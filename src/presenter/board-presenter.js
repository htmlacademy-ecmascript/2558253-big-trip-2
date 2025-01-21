import { render } from '../render.js';

import SortView from '../view/sort-view.js';
import EventsListView from '../view/events-list-view.js';
import FormEditView from '../view/form-edit-view.js';
import PointView from '../view/point-view.js';

export default class BoardPresenter {
  sortComponent = new SortView();
  eventsListComponent = new EventsListView();

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(this.sortComponent, this.boardContainer);
    render(this.eventsListComponent, this.boardContainer);
    render(new FormEditView(), this.eventsListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.eventsListComponent.getElement());
    }
  }
}
