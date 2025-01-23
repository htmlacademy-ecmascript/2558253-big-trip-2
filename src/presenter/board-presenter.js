import { render } from '../render.js';
import { getDefaultPoint } from '../const.js';
import SortView from '../view/sort-view.js';
import EventsListView from '../view/events-list-view.js';
import FormEditView from '../view/form-edit-view.js';
import PointView from '../view/point-view.js';

export default class BoardPresenter {
  sortComponent = new SortView();
  eventsListComponent = new EventsListView();

  constructor({boardContainer, pointModel}) {
    this.boardContainer = boardContainer;
    this.pointModel = pointModel;
  }

  init() {
    const points = this.pointModel.getPoints();
    const destinations = this.pointModel.getDestinations();
    const offers = this.pointModel.getOffers();

    render(this.sortComponent, this.boardContainer);
    render(this.eventsListComponent, this.boardContainer);
    render(new FormEditView(getDefaultPoint(), destinations, offers), this.eventsListComponent.getElement());
    render(new FormEditView(points[1], destinations, offers), this.eventsListComponent.getElement());

    for (const point of points) {
      render(new PointView(point, destinations, offers), this.eventsListComponent.getElement());
    }
  }
}
